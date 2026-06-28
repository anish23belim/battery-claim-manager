import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { ArrowLeft, Edit, MapPin, Phone, Building2 } from "lucide-react";
import { notFound } from "next/navigation";
import { format } from "date-fns";

export default async function DealerDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const [dealer, activeClaims] = await Promise.all([
    prisma.dealer.findUnique({
      where: { id },
      include: {
        claims: {
          orderBy: { createdAt: 'desc' },
          take: 50,
          include: { company: true }
        },
        deliveries: {
          orderBy: { date: 'desc' },
          take: 50
        }
      }
    }),
    prisma.claim.count({
      where: {
        dealerId: id,
        claimNumber: { not: { startsWith: 'LEGACY-' } },
        isShopSettled: false,
        status: {
          notIn: ["Delivered to Dealer", "Closed", "Closed (Moved to Shop Stock)", "Delivered to Customer"]
        }
      }
    })
  ]);
  
  if (!dealer) {
    notFound();
  }
  
  const totalPending = dealer.openingPendingBalance + activeClaims;

  return (
    <div>
      <div className="no-print claim-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/dealers" className="btn btn-outline" style={{ padding: "0.5rem" }}>
            <ArrowLeft size={18} />
          </Link>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
            {dealer.type === "Dealer" ? "Dealer Details" : "Customer Details"}
          </h1>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link href={`/dealers/${id}/edit`} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Edit size={16} /> Edit
          </Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
        {/* Info Card */}
        <div className="card">
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
            {dealer.name}
            {dealer.type === "Dealer" && <span className="badge badge-primary" style={{ marginLeft: "0.5rem" }}>Dealer</span>}
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {dealer.type === "Dealer" && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Building2 size={16} style={{ color: "var(--secondary-foreground)" }} />
                <span><strong>Shop:</strong> {dealer.shopName}</span>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={16} style={{ color: "var(--secondary-foreground)" }} />
              <span><strong>Mobile:</strong> {dealer.mobile}</span>
            </div>
            {dealer.whatsapp && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} style={{ color: "var(--success)" }} />
                <span><strong>WhatsApp:</strong> {dealer.whatsapp}</span>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
              <MapPin size={16} style={{ color: "var(--secondary-foreground)", marginTop: "0.25rem" }} />
              <span><strong>Address:</strong> {dealer.address}, {dealer.city}</span>
            </div>
            {dealer.gstNumber && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontWeight: "bold", color: "var(--secondary-foreground)", width: "16px", textAlign: "center" }}>#</span>
                <span><strong>GST:</strong> {dealer.gstNumber}</span>
              </div>
            )}
          </div>
        </div>

        {/* Stats Card */}
        <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.1rem", color: "var(--secondary-foreground)", marginBottom: "0.5rem" }}>Current Pending Balance</h3>
          <div style={{ fontSize: "4rem", fontWeight: "bold", color: totalPending > 0 ? "var(--warning)" : "var(--success)", lineHeight: 1 }}>
            {totalPending}
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--secondary-foreground)" }}>
            Opening Balance: {dealer.openingPendingBalance} <br />
            Active Claims: {activeClaims}
          </p>
        </div>
      </div>

      {/* Claims List */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>Recent Claims</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Claim No</th>
                <th>Date</th>
                <th>Brand & Model</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dealer.claims.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No claims found</td>
                </tr>
              ) : (
                dealer.claims.map(claim => (
                  <tr key={claim.id}>
                    <td>
                      <Link href={`/claims/${claim.id}`} style={{ color: "var(--primary)", fontWeight: 500, textDecoration: "none" }}>
                        {claim.claimNumber}
                      </Link>
                    </td>
                    <td>{format(new Date(claim.date), 'dd MMM yyyy')}</td>
                    <td>{claim.company.name} - {claim.batteryModel}</td>
                    <td>
                      <span className={`badge ${
                        claim.status === "Delivered to Customer" || claim.status === "Shop Stock" ? "badge-success" : 
                        claim.status === "Sent to Company" ? "badge-warning" : "badge-default"
                      }`}>
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
