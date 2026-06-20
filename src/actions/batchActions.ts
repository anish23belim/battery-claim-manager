"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";



export async function createBatch(formData: FormData) {
  const companyId = formData.get("companyId") as string;
  const status = formData.get("status") as string;
  const remarks = formData.get("remarks") as string;
  const claimIds = formData.getAll("claimIds") as string[];

  if (!companyId || !status || claimIds.length === 0) {
    throw new Error("Missing required fields");
  }

  await prisma.$transaction(async (tx) => {
    const count = await tx.batch.count();
    const batchNumber = `BCH-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;

    const batch = await tx.batch.create({
      data: {
        batchNumber,
        companyId,
        status,
        remarks,
      }
    });

    // Update all selected claims with the new status and associate with batch
    let claimStatus = status;
    if (status === "Sent") claimStatus = "Sent to Company";
    if (status === "Received") claimStatus = "Replacement Received from Company";
    // If Approved/Rejected, claimStatus matches

    await tx.claim.updateMany({
      where: { id: { in: claimIds } },
      data: {
        batchId: batch.id,
        status: claimStatus
      }
    });
  });

  revalidatePath("/", "layout");
  redirect("/batches");
}
