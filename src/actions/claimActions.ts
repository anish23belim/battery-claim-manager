"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";



export async function addClaim(formData: FormData) {
  const dealerId = formData.get("dealerId") as string;
  const companyId = formData.get("companyId") as string;
  const customerName = formData.get("customerName") as string;
  const customerMobile = formData.get("customerMobile") as string;
  const batteryModel = formData.get("batteryModel") as string;
  const oldSerialNumber = formData.get("oldSerialNumber") as string;
  const batteryType = formData.get("batteryType") as string;
  const warrantyCard = formData.get("warrantyCard") as string;
  const saleDateStr = formData.get("saleDate") as string;
  const problem = formData.get("problem") as string;
  const remarks = formData.get("remarks") as string;
  
  const saleDate = saleDateStr ? new Date(saleDateStr) : null;

  await prisma.$transaction(async (tx) => {
    // Generate Claim Number
    const count = await tx.claim.count();
    const claimNumber = `CLM-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;

    const parsedDealerId = dealerId && dealerId.trim() !== "" ? dealerId : null;

    // Create Claim
    await tx.claim.create({
      data: {
        claimNumber,
        dealerId: parsedDealerId,
        companyId,
        customerName,
        customerMobile,
        batteryModel,
        oldSerialNumber,
        batteryType,
        warrantyCard,
        saleDate,
        problem,
        remarks,
        status: parsedDealerId ? "Received from Dealer" : "Received from Customer"
      }
    });

    // Increase dealer's pending balance ONLY if it's a dealer claim
    if (parsedDealerId) {
      await tx.dealer.update({
        where: { id: parsedDealerId },
        data: { openingPendingBalance: { increment: 1 } }
      });
    }
  });

  revalidatePath("/");
  revalidatePath("/claims");
  redirect("/claims");
}


export async function deleteClaim(id: string) {
  try {
    const claim = await prisma.claim.findUnique({ where: { id }, include: { deliveryItems: true } });
    if (!claim) return { error: "Claim not found" };

    await prisma.$transaction(async (tx) => {
      let shouldDecrementBalance = true;

      // Always try to delete delivery items first to prevent foreign key errors
      const deletedItems = await tx.deliveryItem.deleteMany({ where: { claimId: id } });
      
      if (deletedItems.count > 0 || claim.deliveryItems.length > 0) {
        shouldDecrementBalance = false;
      }
      
      if (shouldDecrementBalance && claim.dealerId) {
        const dealer = await tx.dealer.findUnique({ where: { id: claim.dealerId } });
        if (dealer && dealer.openingPendingBalance > 0) {
          await tx.dealer.update({
            where: { id: claim.dealerId },
            data: { openingPendingBalance: { decrement: 1 } }
          });
        }
      }

      await tx.claim.delete({ where: { id } });
    });

    // Targeted revalidation for better performance
    revalidatePath('/claims');
    revalidatePath('/');
    
    return { success: true };
  } catch (error: any) {
    console.error("Delete Claim Error:", error);
    return { error: "Failed to delete claim: It may be linked to other records." };
  }
}

export async function markDeliveredToCustomer(id: string) {
  await prisma.claim.update({
    where: { id },
    data: { status: "Delivered to Customer" }
  });
  revalidatePath("/");
  revalidatePath("/claims");
}

export async function checkDuplicateSerialNumber(serialNumber: string) {
  if (!serialNumber || serialNumber.trim() === "") return null;
  
  const existingClaim = await prisma.claim.findFirst({
    where: { oldSerialNumber: serialNumber.trim() },
    select: { claimNumber: true, date: true }
  });

  if (existingClaim) {
    return {
      claimNumber: existingClaim.claimNumber,
      date: existingClaim.date
    };
  }

  return null;
}
