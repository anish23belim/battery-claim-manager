import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import prisma from "@/lib/prisma";
import ClaimFormClient from "./ClaimFormClient";

export default async function AddClaimPage() {
  const dealers = await prisma.dealer.findMany({ orderBy: { name: "asc" } });
  const companies = await prisma.company.findMany({ orderBy: { name: "asc" } });

  return (
    <div style={{ maxWidth: "850px", margin: "0 auto", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Link href="/claims" className="btn btn-outline" style={{ padding: "0.5rem", borderRadius: "8px" }}>
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", margin: 0, color: "var(--foreground)" }}>New Replacement Claim</h1>
          <p style={{ margin: 0, color: "var(--secondary-foreground)", fontSize: "0.9rem" }}>Register a defective battery for replacement.</p>
        </div>
      </div>

      <div className="card" style={{ padding: "2.5rem", boxShadow: "0 8px 30px rgba(0,0,0,0.08)", border: "1px solid var(--border)", borderRadius: "16px", backgroundColor: "var(--card)" }}>
        <ClaimFormClient dealers={dealers} companies={companies} />
      </div>
    </div>
  );
}
