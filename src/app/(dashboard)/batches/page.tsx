import React from "react";
import prisma from "@/lib/prisma";
import BatchesClient from "./BatchesClient";

export default async function Page() {
  const batches = await prisma.batch.findMany({
    include: {
      company: true,
      _count: {
        select: { claims: true }
      }
    },
    orderBy: { sentDate: "desc" }
  });

  return <BatchesClient initialData={batches} />;
}
