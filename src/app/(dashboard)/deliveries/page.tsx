import React from "react";
import prisma from "@/lib/prisma";
import DeliveriesClient from "./DeliveriesClient";

export default async function Page() {
  const deliveries = await prisma.delivery.findMany({
    include: {
      dealer: true,
      _count: {
        select: { items: true }
      }
    },
    orderBy: { date: "desc" }
  });

  return <DeliveriesClient initialData={deliveries} />;
}
