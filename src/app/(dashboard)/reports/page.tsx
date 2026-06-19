import React from "react";
import { PrismaClient } from "@prisma/client";
import ReportTable from "@/components/reports/ReportTable";

const prisma = new PrismaClient();

export default async function ReportsPage() {
  // 1. Dealer-wise Pending Replacement Report
  const dealers = await prisma.dealer.findMany({
    orderBy: { openingPendingBalance: "desc" },
    where: { openingPendingBalance: { gt: 0 } }
  });

  const dealerReportData = dealers.map(d => ({
    "Dealer Name": d.name,
    "Shop Name": d.shopName,
    "Mobile": d.mobile,
    "City": d.city,
    "Pending Replacements": d.openingPendingBalance
  }));

  // 2. Company-wise Pending Claims Report
  // Status: "Sent to Company"
  const pendingAtCompany = await prisma.claim.groupBy({
    by: ['companyId'],
    where: { status: "Sent to Company" },
    _count: { id: true }
  });
  
  const companies = await prisma.company.findMany();
  const companyReportData = pendingAtCompany.map(p => {
    const company = companies.find(c => c.id === p.companyId);
    return {
      "Company": company?.name || "Unknown",
      "Brand": company?.brandName || "-",
      "Pending Claims": p._count.id
    };
  });

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Reports</h1>
      
      <ReportTable 
        title="Dealer-wise Pending Replacements" 
        columns={["Dealer Name", "Shop Name", "Mobile", "City", "Pending Replacements"]}
        data={dealerReportData}
      />

      <ReportTable 
        title="Company-wise Pending Claims" 
        columns={["Company", "Brand", "Pending Claims"]}
        data={companyReportData}
      />
    </div>
  );
}
