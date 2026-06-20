import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Plus, Search } from "lucide-react";
import { format } from "date-fns";



export default async function BatchesPage() {
  const batches = await prisma.batch.findMany({
    include: {
      company: true,
      _count: {
        select: { claims: true }
      }
    },
    orderBy: { sentDate: "desc" }
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Company Batches</h1>
        <Link href="/batches/add" className="btn btn-primary">
          <Plus size={18} />
          Create Batch
        </Link>
      </div>

      <div className="card">
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <div className="form-control" style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "300px" }}>
            <Search size={18} color="var(--secondary-foreground)" />
            <input 
              type="text" 
              placeholder="Search batches..." 
              style={{ border: "none", outline: "none", width: "100%", background: "transparent" }}
            />
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Batch No</th>
                <th>Date</th>
                <th>Company/Brand</th>
                <th>Total Claims</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {batches.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No batches found</td>
                </tr>
              ) : (
                batches.map((batch) => (
                  <tr key={batch.id}>
                    <td style={{ fontWeight: 500 }}>{batch.batchNumber}</td>
                    <td>{format(new Date(batch.sentDate), 'dd MMM yyyy')}</td>
                    <td>{batch.company.name}</td>
                    <td>{batch._count.claims}</td>
                    <td>
                      <span className="badge badge-default">
                        {batch.status}
                      </span>
                    </td>
                    <td>
                      <Link href={`/batches/${batch.id}`} className="btn btn-outline" style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>
                        View
                      </Link>
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
