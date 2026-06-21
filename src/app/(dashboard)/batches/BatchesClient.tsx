"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Eye } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteBatch } from "@/actions/batchActions";
import { format } from "date-fns";

export default function BatchesClient({ initialData }: { initialData: any[] }) {
  const [q, setQ] = useState("");

  const filteredData = initialData.filter((batch) => {
    if (!q) return true;
    const lowerQ = q.toLowerCase();
    return (
      (batch.batchNumber && batch.batchNumber.toLowerCase().includes(lowerQ)) ||
      (batch.company?.name && batch.company.name.toLowerCase().includes(lowerQ))
    );
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
          <SearchBar 
            placeholder="Search by batch number, company..." 
            value={q} 
            onChange={setQ} 
          />
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
                <th style={{ width: "80px", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No batches found</td>
                </tr>
              ) : (
                filteredData.map((batch) => (
                  <tr key={batch.id}>
                    <td style={{ fontWeight: 500 }}>{batch.batchNumber}</td>
                    <td>{format(new Date(batch.sentDate), 'dd MMM yyyy')}</td>
                    <td>{batch.company.name}</td>
                    <td>{batch._count?.claims || 0}</td>
                    <td>
                      <span className="badge badge-default">
                        {batch.status}
                      </span>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                        <Link href={`/batches/${batch.id}`} prefetch={true} className="btn btn-outline" style={{ padding: "0.4rem", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "0.375rem" }} title="View Details">
                          <Eye size={16} />
                        </Link>
                        <DeleteButton id={batch.id} action={deleteBatch} entityName="batch" />
                      </div>
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
