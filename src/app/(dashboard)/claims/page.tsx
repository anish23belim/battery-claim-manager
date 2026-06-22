import React from "react";
import prisma from "@/lib/prisma";
import ClaimsClient from "./ClaimsClient";

export default async function Page() {
  const claims = await prisma.claim.findMany({
    where: { NOT: { claimNumber: { startsWith: 'LEGACY-' } } },
    include: {
      dealer: true,
      company: true,
      batch: true
    },
    orderBy: { createdAt: "desc" }
  });

  return <ClaimsClient initialData={claims} />;
}
