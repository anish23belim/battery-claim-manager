import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import prisma from "@/lib/prisma";
import ClaimFormClient from "./ClaimFormClient";

export default async function AddClaimPage() {
  const dealers = await prisma.dealer.findMany({ orderBy: { name: "asc" } });
  const companies = await prisma.company.findMany({ orderBy: { name: "asc" } });

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Link href="/claims" className="btn btn-outline" style={{ padding: "0.5rem" }}>
          <ArrowLeft size={18} />
        </Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>New Replacement Claim</h1>
      </div>

      <div className="card" style={{ maxWidth: "800px" }}>
        <ClaimFormClient dealers={dealers} companies={companies} />
      </div>
    </div>
  );
}
