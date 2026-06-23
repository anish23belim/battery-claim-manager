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

  const manualContacts = await prisma.dealer.findMany({
    where: { type: "Marketing" },
    orderBy: { createdAt: 'desc' }
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

  // Add manual contacts
  for (const contact of manualContacts) {
    if (contact.mobile && !contactsMap.has(contact.mobile)) {
      const ageInMs = Date.now() - new Date(contact.createdAt).getTime();
      const ageInYears = (ageInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

      contactsMap.set(contact.mobile, {
        id: contact.id,
        name: contact.name,
        mobile: contact.mobile,
        type: "Direct Customer",
        lastClaimDate: contact.createdAt,
        batteryModel: contact.shopName, // We stored model in shopName
        ageInYears: parseFloat(ageInYears)
      });
    }
  }

  const contacts = Array.from(contactsMap.values());

  return <MarketingClient initialData={contacts} />;
}
