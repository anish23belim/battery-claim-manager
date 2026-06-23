import React from "react";
import prisma from "@/lib/prisma";
import MarketingClient from "./MarketingClient";

export default async function MarketingPage() {
  const allClaims = await prisma.claim.findMany({
    include: {
      dealer: true,
      company: true
    },
    orderBy: { date: 'desc' }
  });

  const contactsMap = new Map();

  for (const claim of allClaims) {
    let mobile = "";
    let name = "";
    let type = "";

    if (claim.dealer) {
      mobile = claim.dealer.whatsapp || claim.dealer.mobile;
      name = claim.dealer.name;
      type = claim.dealer.type || "Dealer";
    } else if (claim.customerMobile) {
      mobile = claim.customerMobile;
      name = claim.customerName || "Customer";
      type = "Direct Customer";
    }

    if (mobile && mobile !== "0000000000" && !contactsMap.has(mobile)) {
      const ageInMs = Date.now() - new Date(claim.date).getTime();
      const ageInYears = (ageInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
      
      contactsMap.set(mobile, {
        id: claim.id,
        name,
        mobile,
        type,
        lastClaimDate: claim.date,
        batteryModel: `${claim.company?.name || ''} ${claim.company?.brandName ? `(${claim.company.brandName})` : ''} - ${claim.batteryModel}`,
        ageInYears: parseFloat(ageInYears)
      });
    }
  }

  const contacts = Array.from(contactsMap.values());

  return <MarketingClient initialData={contacts} />;
}
