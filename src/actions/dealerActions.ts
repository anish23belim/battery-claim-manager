"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";



export async function addDealer(formData: FormData) {
  const name = formData.get("name") as string;
  const mobile = formData.get("mobile") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const shopName = formData.get("shopName") as string;
  const city = formData.get("city") as string;
  const address = formData.get("address") as string;
  const gstNumber = formData.get("gstNumber") as string;
  const openingPendingBalance = parseInt(formData.get("openingPendingBalance") as string || "0");

  await prisma.dealer.create({
    data: {
      name,
      mobile,
      whatsapp,
      shopName,
      city,
      address,
      gstNumber,
      openingPendingBalance
    }
  });

  revalidatePath("/");
  revalidatePath("/dealers");
  redirect("/dealers");
}


export async function deleteDealer(id: string) {
  try {
    await prisma.$transaction(async (tx) => {
      const claims = await tx.claim.findMany({ where: { dealerId: id } });
      const claimIds = claims.map(c => c.id);

      const deliveries = await tx.delivery.findMany({ where: { dealerId: id } });
      const deliveryIds = deliveries.map(d => d.id);

      if (claimIds.length > 0 || deliveryIds.length > 0) {
        await tx.deliveryItem.deleteMany({
          where: {
            OR: [
              { claimId: { in: claimIds.length > 0 ? claimIds : ["___DUMMY___"] } },
              { deliveryId: { in: deliveryIds.length > 0 ? deliveryIds : ["___DUMMY___"] } }
            ]
          }
        });
      }

      if (deliveryIds.length > 0) {
        await tx.delivery.deleteMany({ where: { dealerId: id } });
      }

      if (claimIds.length > 0) {
        await tx.claim.deleteMany({ where: { dealerId: id } });
      }

      await tx.dealer.delete({ where: { id } });
    });

    revalidatePath("/");
    revalidatePath("/dealers");
  } catch (error) {
    console.error("Dealer deletion error:", error);
    return { error: 'An error occurred while deleting the dealer.' };
  }
}
