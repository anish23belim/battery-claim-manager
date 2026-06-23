import React from "react";
import prisma from "@/lib/prisma";
import ReportTable from "@/components/reports/ReportTable";



export default async function ReportsPage() {
  const dealers = await prisma.dealer.findMany();
  
  // Get all active pending claims for dealers
  const pendingClaims = await prisma.claim.groupBy({
    by: ['dealerId'],
    where: {
      dealerId: { not: null },
      status: { notIn: ["Delivered to Dealer", "Closed", "Closed (Moved to Shop Stock)"] },
      NOT: { claimNumber: { startsWith: 'LEGACY-' } }
    },
    _count: { id: true }
  });

  const dealerReportData = dealers.map(d => {
    const activePending = pendingClaims.find(p => p.dealerId === d.id)?._count.id || 0;
    const totalPending = d.openingPendingBalance + activePending;
    
    return {
      "Dealer Name": d.name,
      "Shop Name": d.shopName,
      "Mobile": d.mobile,
      "City": d.city,
      "Pending Replacements": totalPending
    };
  }).filter(row => row["Pending Replacements"] > 0)
    .sort((a, b) => b["Pending Replacements"] - a["Pending Replacements"]);

  // 2. Company-wise Pending Claims Report
  // Status: "Sent to Company"
  const pendingAtCompany = await prisma.claim.groupBy({
    by: ['companyId'],
    where: { 
      status: "Sent to Company",
      NOT: { claimNumber: { startsWith: 'LEGACY-' } }
    },
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
