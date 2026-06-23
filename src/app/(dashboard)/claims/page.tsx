import React from "react";
import prisma from "@/lib/prisma";
import ClaimsClient from "./ClaimsClient";

import { Suspense } from "react";

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

  return (
    <Suspense fallback={<div>Loading claims...</div>}>
      <ClaimsClient initialData={claims} />
    </Suspense>
  );
}
