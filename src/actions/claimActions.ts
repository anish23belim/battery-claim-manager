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
  const isDealerAdvance = formData.get("isDealerAdvance") === "true";
  const dealerReplacementSerialNumber = formData.get("dealerReplacementSerialNumber") as string;
  
  const saleDate = saleDateStr ? new Date(saleDateStr) : null;

  await prisma.$transaction(async (tx) => {
    // Generate Claim Number robustly
    const currentYear = new Date().getFullYear().toString();
    const lastClaim = await tx.claim.findFirst({
      where: { claimNumber: { startsWith: `CLM-${currentYear}-` } },
      orderBy: { claimNumber: 'desc' }
    });

    let newNumber = 1;
    if (lastClaim && lastClaim.claimNumber) {
      const parts = lastClaim.claimNumber.split('-');
      if (parts.length === 3) {
        newNumber = parseInt(parts[2], 10) + 1;
      }
    }
    const claimNumber = `CLM-${currentYear}-${String(newNumber).padStart(4, '0')}`;

    const parsedDealerId = dealerId && dealerId.trim() !== "" ? dealerId : null;

    // Remove leading apostrophe if user pastes it directly from Excel
    const cleanOldSerial = oldSerialNumber ? oldSerialNumber.trim().replace(/^'+/, '') : "";
    const cleanDealerReplacement = dealerReplacementSerialNumber ? dealerReplacementSerialNumber.trim().replace(/^'+/, '') : null;

    // Insert new claim
    const newClaim = await tx.claim.create({
      data: {
        claimNumber,
        date: new Date(),
        dealerId: parsedDealerId,
        customerName: customerName ? customerName.trim() : null,
        customerMobile: customerMobile ? customerMobile.trim() : null,
        companyId,
        batteryModel: batteryModel.trim(),
        oldSerialNumber: cleanOldSerial,
        batteryType,
        warrantyCard: warrantyCard ? warrantyCard.trim() : null,
        saleDate,
        problem: problem ? problem.trim() : "",
        remarks: remarks ? remarks.trim() : null,
        status: parsedDealerId ? "Received from Dealer" : "Received from Customer",
        isDealerAdvance,
        dealerReplacementSerialNumber: cleanDealerReplacement,
      }
    });

    // We no longer mutate openingPendingBalance automatically.
    // It remains a static field for legacy balances.
    // Total pending is now calculated dynamically (opening balance + active claims).
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
      
      // We no longer decrement openingPendingBalance on delete.
      // Dynamic pending claims will automatically decrease because the claim is deleted.

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
  
  const sn = serialNumber.trim().replace(/^'+/, '');

  // Check if it was already claimed as a DEAD battery (True Duplicate)
  const existingDead = await prisma.claim.findFirst({
    where: { 
      oldSerialNumber: { equals: sn, mode: 'insensitive' } 
    },
    select: { id: true, claimNumber: true, date: true }
  });

  if (existingDead) {
    return {
      type: 'DEAD_DUPLICATE',
      id: existingDead.id,
      claimNumber: existingDead.claimNumber,
      date: existingDead.date
    };
  }

  // Check if it was given as a REPLACEMENT battery in the past
  const existingReplacement = await prisma.claim.findFirst({
    where: {
      OR: [
        { dealerReplacementSerialNumber: { equals: sn, mode: 'insensitive' } },
        { shopReplacementSerialNumber: { equals: sn, mode: 'insensitive' } }
      ]
    },
    select: { id: true, claimNumber: true, date: true }
  });

  if (existingReplacement) {
    return {
      type: 'REPLACEMENT_HISTORY',
      id: existingReplacement.id,
      claimNumber: existingReplacement.claimNumber,
      date: existingReplacement.date
    };
  }

  return null;
}

export async function settleDealerAdvance(id: string, shopReplacementSerialNumber: string) {
  const cleanShopReplacement = shopReplacementSerialNumber ? shopReplacementSerialNumber.trim().replace(/^'+/, '') : "";
  await prisma.$transaction(async (tx) => {
    const claim = await tx.claim.findUnique({ where: { id } });
    if (!claim || !claim.isDealerAdvance || claim.isShopSettled) return;

    await tx.claim.update({
      where: { id },
      data: { 
        isShopSettled: true,
        shopReplacementSerialNumber: cleanShopReplacement 
      }
    });
  });

  revalidatePath("/");
  revalidatePath("/claims");
}

export async function closeShopSettledClaim(id: string) {
  await prisma.claim.update({
    where: { id },
    data: { status: "Closed (Moved to Shop Stock)" }
  });
  
  revalidatePath("/");
  revalidatePath("/claims");
}
