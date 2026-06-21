"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Eye } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteClaim } from "@/actions/claimActions";
import { format } from "date-fns";

export default function ClaimsClient({ initialData }: { initialData: any[] }) {
  const [q, setQ] = useState("");

  const filteredData = initialData.filter((claim) => {
    if (!q) return true;
    const lowerQ = q.toLowerCase();
    return (
      (claim.claimNumber && claim.claimNumber.toLowerCase().includes(lowerQ)) ||
      (claim.customerName && claim.customerName.toLowerCase().includes(lowerQ)) ||
      (claim.customerMobile && claim.customerMobile.toLowerCase().includes(lowerQ)) ||
      (claim.batteryModel && claim.batteryModel.toLowerCase().includes(lowerQ)) ||
      (claim.oldSerialNumber && claim.oldSerialNumber.toLowerCase().includes(lowerQ)) ||
      (claim.dealer?.name && claim.dealer.name.toLowerCase().includes(lowerQ)) ||
      (claim.company?.name && claim.company.name.toLowerCase().includes(lowerQ))
    );
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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Claims</h1>
        <Link href="/claims/add" className="btn btn-primary">
          <Plus size={18} />
          New Claim
        </Link>
      </div>

      <div className="card">
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <SearchBar 
            placeholder="Search claims, name, serial, number..." 
            value={q} 
            onChange={setQ} 
          />
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Claim No</th>
                <th>Date</th>
                <th>Dealer</th>
                <th>Company/Brand</th>
                <th>Battery Model</th>
                <th>Status</th>
                <th style={{ width: "80px", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No claims found</td>
                </tr>
              ) : (
                filteredData.map((claim) => (
                  <tr key={claim.id}>
                    <td>
                      <div style={{ fontWeight: 500 }}>{claim.claimNumber}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--secondary-foreground)" }}>SN: {claim.oldSerialNumber || "N/A"}</div>
                    </td>
                    <td>{format(new Date(claim.date), 'dd MMM yyyy')}</td>
                    <td>{claim.dealer.name}</td>
                    <td>{claim.company.name}</td>
                    <td>{claim.batteryModel}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(claim.status)}`}>
                        {claim.status}
                      </span>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                        <Link href={`/claims/${claim.id}`} prefetch={true} className="btn btn-outline" style={{ padding: "0.4rem", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "0.375rem" }} title="View Details">
                          <Eye size={16} />
                        </Link>
                        <DeleteButton id={claim.id} action={deleteClaim} entityName="claim" />
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
