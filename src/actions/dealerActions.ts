"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

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

  redirect("/dealers");
}
