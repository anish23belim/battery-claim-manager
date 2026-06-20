import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";
import ClaimActions from "@/components/claims/ClaimActions";
import { format } from "date-fns";



export default async function ClaimDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const claim = await prisma.claim.findUnique({
    where: { id },
    include: {
      dealer: true,
      company: true,
    }
  });

  if (!claim) return <div>Claim not found</div>;

  return (
    <div>
      <div className="no-print" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/claims" className="btn btn-outline" style={{ padding: "0.5rem" }}>
            <ArrowLeft size={18} />
          </Link>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Claim Details</h1>
        </div>
        <ClaimActions claim={claim} dealer={claim.dealer} />
      </div>

      <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Printable Slip Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem", borderBottom: "2px solid var(--card-border)", paddingBottom: "1rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Battery Replacement Claim Slip</h2>
          <p style={{ margin: "0.5rem 0 0 0", color: "var(--secondary-foreground)" }}>
            Claim No: <strong style={{ color: "var(--foreground)" }}>{claim.claimNumber}</strong> | 
            Date: <strong>{format(new Date(claim.date), 'dd MMM yyyy')}</strong>
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem", color: "var(--secondary-foreground)" }}>Dealer Info</h3>
            <p style={{ margin: "0 0 0.25rem 0", fontWeight: 500 }}>{claim.dealer.name}</p>
            <p style={{ margin: "0 0 0.25rem 0" }}>{claim.dealer.shopName}</p>
            <p style={{ margin: "0 0 0.25rem 0" }}>{claim.dealer.mobile}</p>
            <p style={{ margin: "0" }}>{claim.dealer.city}</p>
          </div>
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem", color: "var(--secondary-foreground)" }}>Battery Info</h3>
            <p style={{ margin: "0 0 0.25rem 0" }}><strong>Brand:</strong> {claim.company.name} - {claim.company.brandName}</p>
            <p style={{ margin: "0 0 0.25rem 0" }}><strong>Model:</strong> {claim.batteryModel}</p>
            <p style={{ margin: "0 0 0.25rem 0" }}><strong>Type:</strong> {claim.batteryType}</p>
            <p style={{ margin: "0" }}><strong>Serial No:</strong> {claim.oldSerialNumber}</p>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem", color: "var(--secondary-foreground)" }}>Claim Details</h3>
          <p style={{ margin: "0 0 0.25rem 0" }}><strong>Problem:</strong> {claim.problem}</p>
          <p style={{ margin: "0 0 0.25rem 0" }}><strong>Customer:</strong> {claim.customerName || "N/A"} {claim.customerMobile ? `(${claim.customerMobile})` : ""}</p>
          <p style={{ margin: "0 0 0.25rem 0" }}><strong>Warranty Card:</strong> {claim.warrantyCard || "N/A"}</p>
          <p style={{ margin: "0 0 0.25rem 0" }}><strong>Status:</strong> {claim.status}</p>
          {claim.remarks && <p style={{ margin: "0" }}><strong>Remarks:</strong> {claim.remarks}</p>}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4rem" }}>
          <div style={{ textAlign: "center", width: "200px" }}>
            <div style={{ borderBottom: "1px solid var(--foreground)", marginBottom: "0.5rem" }}></div>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--secondary-foreground)" }}>Dealer Signature</p>
          </div>
          <div style={{ textAlign: "center", width: "200px" }}>
            <div style={{ borderBottom: "1px solid var(--foreground)", marginBottom: "0.5rem" }}></div>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--secondary-foreground)" }}>Authorized Signatory</p>
          </div>
        </div>
      </div>
    </div>
  );
}
