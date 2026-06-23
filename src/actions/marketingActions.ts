"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addMarketingContact(formData: FormData) {
  const name = formData.get("name") as string;
  const mobile = formData.get("mobile") as string;
  const batteryModel = formData.get("batteryModel") as string;
  const purchaseDate = formData.get("purchaseDate") as string;

  if (!name || !mobile) {
    throw new Error("Name and Mobile are required");
  }

  // We save this contact as a "Dealer" with type "Marketing" 
  // to avoid schema migrations, and we store battery model in shopName.
  await prisma.dealer.create({
    data: {
      type: "Marketing",
      name: name,
      mobile: mobile,
      whatsapp: mobile,
      shopName: batteryModel || "No Model Specified",
      city: "-",
      address: "-",
      createdAt: purchaseDate ? new Date(purchaseDate) : new Date(),
    }
  });

  revalidatePath("/marketing");
}
