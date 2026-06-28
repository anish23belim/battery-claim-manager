import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import prisma from "@/lib/prisma";
import BatchForm from "@/components/batches/BatchForm";



export default async function AddBatchPage() {
  const [companies, claims] = await Promise.all([
    prisma.company.findMany({ orderBy: { name: "asc" } }),
    prisma.claim.findMany({
      where: {
        status: {
          notIn: ["Closed", "Delivered to Dealer"]
        }
      },
      include: {
        dealer: { select: { name: true } }
      },
      orderBy: { date: "desc" }
    })
  ]);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Link href="/batches" className="btn btn-outline" style={{ padding: "0.5rem" }}>
          <ArrowLeft size={18} />
        </Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Create Company Batch</h1>
      </div>

      <BatchForm companies={companies} claims={claims as any} />
    </div>
  );
}
