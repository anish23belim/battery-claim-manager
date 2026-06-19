import React from "react";
import Link from "next/link";
import { Users, FileBox, Truck, BatteryWarning } from "lucide-react";
import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";

const prisma = new PrismaClient();

export default async function Dashboard() {
  const totalClaims = await prisma.claim.count();
  
  const pendingAtCompany = await prisma.claim.count({
    where: { status: "Sent to Company" }
  });

  const replacementDelivered = await prisma.claim.count({
    where: { status: "Delivered to Dealer" }
  });

  const pendingToDealers = await prisma.claim.count({
    where: { status: "Replacement Received from Company" }
  });

  const recentClaims = await prisma.claim.findMany({
    take: 5,
    orderBy: { date: "desc" },
    include: { dealer: true }
  });

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case "Approved": return "badge-success";
      case "Rejected": return "badge-danger";
      case "Sent to Company": return "badge-warning";
      case "Replacement Received from Company": return "badge-warning";
      case "Delivered to Dealer": return "badge-success";
      case "Closed": return "badge-default";
      default: return "badge-default";
    }
  };

  const fifteenDaysAgo = new Date();
  fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);
  
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const ageingClaims15 = await prisma.claim.count({
    where: { 
      status: { notIn: ["Closed", "Delivered to Dealer"] },
      date: { lte: fifteenDaysAgo, gt: thirtyDaysAgo }
    }
  });

  const ageingClaims30 = await prisma.claim.count({
    where: { 
      status: { notIn: ["Closed", "Delivered to Dealer"] },
      date: { lte: thirtyDaysAgo }
    }
  });

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Dashboard</h1>
      
      {(ageingClaims15 > 0 || ageingClaims30 > 0) && (
        <div style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {ageingClaims30 > 0 && (
            <div style={{ background: "var(--danger-bg)", color: "var(--danger-text)", padding: "1rem", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
              <BatteryWarning size={20} />
              Alert: {ageingClaims30} claim(s) pending for more than 30 days!
            </div>
          )}
          {ageingClaims15 > 0 && (
            <div style={{ background: "var(--warning-bg)", color: "var(--warning-text)", padding: "1rem", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
              <BatteryWarning size={20} />
              Alert: {ageingClaims15} claim(s) pending for more than 15 days!
            </div>
          )}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
        
        <Link href="/claims" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", height: "100%" }}>
            <div style={{ padding: "1rem", background: "var(--warning-bg)", color: "var(--warning-text)", borderRadius: "var(--radius)" }}>
              <BatteryWarning size={24} />
            </div>
            <div>
              <p style={{ margin: 0, color: "var(--secondary-foreground)", fontSize: "0.875rem", fontWeight: 500 }}>Total Claims</p>
              <h3 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>{totalClaims}</h3>
            </div>
          </div>
        </Link>

        <Link href="/claims" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", height: "100%" }}>
            <div>
              <p style={{ margin: 0, color: "var(--secondary-foreground)", fontSize: "0.875rem", fontWeight: 500 }}>Pending at Company</p>
              <h3 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>{pendingAtCompany}</h3>
            </div>
          </div>
        </Link>

        <Link href="/claims" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", height: "100%" }}>
            <div style={{ padding: "1rem", background: "var(--success-bg)", color: "var(--success-text)", borderRadius: "var(--radius)" }}>
              <Truck size={24} />
            </div>
            <div>
              <p style={{ margin: 0, color: "var(--secondary-foreground)", fontSize: "0.875rem", fontWeight: 500 }}>Replacement Delivered</p>
              <h3 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>{replacementDelivered}</h3>
            </div>
          </div>
        </Link>

        <Link href="/claims" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card" style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", height: "100%" }}>
            <div style={{ padding: "1rem", background: "var(--danger-bg)", color: "var(--danger-text)", borderRadius: "var(--radius)" }}>
              <Users size={24} />
            </div>
            <div>
              <p style={{ margin: 0, color: "var(--secondary-foreground)", fontSize: "0.875rem", fontWeight: 500 }}>Pending to Dealers</p>
              <h3 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>{pendingToDealers}</h3>
            </div>
          </div>
        </Link>
        
      </div>
      
      <div className="card">
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>Recent Claims</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Claim No</th>
                <th>Date</th>
                <th>Dealer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentClaims.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No recent claims</td>
                </tr>
              ) : (
                recentClaims.map((claim) => (
                  <tr key={claim.id}>
                    <td style={{ fontWeight: 500 }}>{claim.claimNumber}</td>
                    <td>{format(new Date(claim.date), 'dd MMM yyyy')}</td>
                    <td>{claim.dealer.name}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(claim.status)}`}>
                        {claim.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
