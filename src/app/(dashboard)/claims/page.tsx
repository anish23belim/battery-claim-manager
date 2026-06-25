import React, { Suspense } from "react";
import prisma from "@/lib/prisma";
import ClaimsClient from "./ClaimsClient";
import { Prisma } from "@prisma/client";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;

  const page = parseInt(sp.page as string, 10) || 1;
  const pageSize = 50;
  
  const q = sp.q as string;
  const statusFilter = sp.statusFilter as string;
  const startDate = sp.startDate as string;
  const endDate = sp.endDate as string;
  const companyFilter = sp.companyFilter as string;
  const dealerFilter = sp.dealerFilter as string;
  const advanceFilter = sp.advanceFilter as string;
  const settledFilter = sp.settledFilter as string;

  const where: Prisma.ClaimWhereInput = {
    NOT: { claimNumber: { startsWith: 'LEGACY-' } }
  };

  if (q) {
    where.OR = [
      { claimNumber: { contains: q, mode: 'insensitive' } },
      { customerName: { contains: q, mode: 'insensitive' } },
      { customerMobile: { contains: q, mode: 'insensitive' } },
      { batteryModel: { contains: q, mode: 'insensitive' } },
      { oldSerialNumber: { contains: q, mode: 'insensitive' } },
      { dealer: { name: { contains: q, mode: 'insensitive' } } },
      { company: { name: { contains: q, mode: 'insensitive' } } },
    ];
  }

  if (statusFilter && statusFilter !== "All") {
    if (statusFilter === "pending-dealer") {
      where.dealerId = { not: null };
      where.status = { notIn: ["Delivered to Dealer", "Closed", "Closed (Moved to Shop Stock)"] };
    } else {
      where.status = statusFilter;
    }
  }

  if (startDate || endDate) {
    where.date = {};
    if (startDate) {
      where.date.gte = new Date(startDate);
    }
    if (endDate) {
      const eDate = new Date(endDate);
      eDate.setHours(23, 59, 59, 999);
      where.date.lte = eDate;
    }
  }

  if (companyFilter && companyFilter !== "All") {
    where.companyId = companyFilter;
  }

  if (dealerFilter && dealerFilter !== "All") {
    if (dealerFilter === "Direct Customer") {
      where.dealerId = null;
    } else {
      where.dealerId = dealerFilter;
    }
  }

  if (advanceFilter && advanceFilter !== "All") {
    where.isDealerAdvance = advanceFilter === "Yes";
  }

  if (settledFilter && settledFilter !== "All") {
    where.isShopSettled = settledFilter === "Yes";
  }

  const [claims, totalClaims, companies, dealers] = await Promise.all([
    prisma.claim.findMany({
      where,
      include: {
        dealer: true,
        company: true,
        batch: true
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize
    }),
    prisma.claim.count({ where }),
    prisma.company.findMany({ orderBy: { name: "asc" } }),
    prisma.dealer.findMany({ orderBy: { name: "asc" } })
  ]);

  return (
    <Suspense fallback={<div>Loading claims...</div>}>
      <ClaimsClient 
        initialData={claims} 
        companies={companies} 
        dealers={dealers} 
        totalClaims={totalClaims}
        currentPage={page}
        pageSize={pageSize}
      />
    </Suspense>
  );
}
