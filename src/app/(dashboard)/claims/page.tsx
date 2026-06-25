import React from "react";
import prisma from "@/lib/prisma";
import ClaimsClient from "./ClaimsClient";

import { Suspense } from "react";

export default async function Page() {
  const [claims, companies, dealers] = await Promise.all([
    prisma.claim.findMany({
      where: { NOT: { claimNumber: { startsWith: 'LEGACY-' } } },
      include: {
        dealer: true,
        company: true,
        batch: true
      },
      orderBy: { createdAt: "desc" }
    }),
    prisma.company.findMany({ orderBy: { name: "asc" } }),
    prisma.dealer.findMany({ orderBy: { name: "asc" } })
  ]);

  return (
    <Suspense fallback={<div>Loading claims...</div>}>
      <ClaimsClient initialData={claims} companies={companies} dealers={dealers} />
    </Suspense>
  );
}
