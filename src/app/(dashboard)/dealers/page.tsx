import React from "react";
import prisma from "@/lib/prisma";
import DealersClient from "./DealersClient";

export default async function Page() {
  const [dealers, pendingClaims] = await Promise.all([
    prisma.dealer.findMany({
      orderBy: { name: "asc" }
    }),
    prisma.claim.groupBy({
      by: ['dealerId'],
      where: {
        dealerId: { not: null },
        isShopSettled: false,
        status: { notIn: ["Delivered to Dealer", "Closed", "Closed (Moved to Shop Stock)", "Delivered to Customer"] },
        NOT: { claimNumber: { startsWith: 'LEGACY-' } }
      },
      _count: { id: true }
    })
  ]);

  const dealersWithTotalPending = dealers.map(dealer => {
    const activePending = pendingClaims.find(p => p.dealerId === dealer.id)?._count.id || 0;
    return {
      ...dealer,
      totalPending: dealer.openingPendingBalance + activePending
    };
  });

  return <DealersClient initialData={dealersWithTotalPending} />;
}
