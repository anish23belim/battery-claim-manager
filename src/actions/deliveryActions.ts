"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";



export async function createDelivery(formData: FormData) {
  const dealerId = formData.get("dealerId") as string;
  const remarks = formData.get("remarks") as string;
  const claimIds = formData.getAll("claimIds") as string[];
  
  if (!dealerId || claimIds.length === 0) {
    throw new Error("Missing required fields");
  }

  await prisma.$transaction(async (tx) => {
    const count = await tx.delivery.count();
    const deliveryNumber = `DEL-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;

    const delivery = await tx.delivery.create({
      data: {
        deliveryNumber,
        dealerId,
        quantity: claimIds.length,
        remarks,
      }
    });

    // Create delivery items
    for (const claimId of claimIds) {
      // In a real app we might grab newSerialNumber from formData
      await tx.deliveryItem.create({
        data: {
          deliveryId: delivery.id,
          claimId,
          newSerialNumber: formData.get(`newSerial_${claimId}`) as string || null,
        }
      });
    }

    // Update claim status to Delivered
    await tx.claim.updateMany({
      where: { id: { in: claimIds } },
      data: {
        status: "Delivered to Dealer"
      }
    });

    // Decrease dealer pending replacement balance
    await tx.dealer.update({
      where: { id: dealerId },
      data: {
        openingPendingBalance: { decrement: claimIds.length }
      }
    });
  });

  revalidatePath("/");
  revalidatePath("/deliveries");
  redirect("/deliveries");
}


export async function deleteDelivery(id: string) {
  await prisma.$transaction(async (tx) => {
    const items = await tx.deliveryItem.findMany({ where: { deliveryId: id } });
    const claimIds = items.map(i => i.claimId);
    if (claimIds.length > 0) {
      await tx.claim.updateMany({ where: { id: { in: claimIds } }, data: { status: 'Replacement Received from Company' } });
      const delivery = await tx.delivery.findUnique({ where: { id } });
      if (delivery) {
        await tx.dealer.update({
          where: { id: delivery.dealerId },
          data: { openingPendingBalance: { increment: claimIds.length } }
        });
      }
    }
    await tx.deliveryItem.deleteMany({ where: { deliveryId: id } });
    await tx.delivery.delete({ where: { id } });
  });
  revalidatePath("/");
  revalidatePath("/deliveries");
}
