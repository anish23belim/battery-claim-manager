"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function addCompany(formData: FormData) {
  const name = formData.get("name") as string;
  const brandName = formData.get("brandName") as string;
  const contactPerson = formData.get("contactPerson") as string;
  const mobile = formData.get("mobile") as string;
  const address = formData.get("address") as string;

  await prisma.company.create({
    data: {
      name,
      brandName,
      contactPerson,
      mobile,
      address
    }
  });

  redirect("/companies");
}
