"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

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

    // Create Claim
    await tx.claim.create({
      data: {
        claimNumber,
        dealerId,
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
        status: "Received from Dealer"
      }
    });

    // Increase dealer's pending balance
    await tx.dealer.update({
      where: { id: dealerId },
      data: { openingPendingBalance: { increment: 1 } }
    });
  });

  redirect("/claims");
}
