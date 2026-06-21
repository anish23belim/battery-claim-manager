"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";



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

  revalidatePath("/");
  revalidatePath("/companies");
  redirect("/companies");
}


export async function deleteCompany(id: string) {
  try {
    await prisma.$transaction(async (tx) => {
      const claims = await tx.claim.findMany({ where: { companyId: id } });
      const claimIds = claims.map(c => c.id);

      const batches = await tx.batch.findMany({ where: { companyId: id } });
      const batchIds = batches.map(b => b.id);

      if (claimIds.length > 0) {
        await tx.deliveryItem.deleteMany({
          where: { claimId: { in: claimIds } }
        });
        await tx.claim.deleteMany({ where: { companyId: id } });
      }

      if (batchIds.length > 0) {
        await tx.batch.deleteMany({ where: { companyId: id } });
      }

      await tx.company.delete({ where: { id } });
    });

    revalidatePath("/");
    revalidatePath("/companies");
  } catch (error) {
    console.error("Company deletion error:", error);
    return { error: 'An error occurred while deleting the company.' };
  }
}
