"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { createBatch } from "@/actions/batchActions";
import { format } from "date-fns";

type Claim = {
  id: string;
  claimNumber: string;
  date: Date;
  companyId: string;
  batteryModel: string;
  status: string;
  dealer: { name: string };
};

type Company = {
  id: string;
  name: string;
  brandName: string;
};

export default function BatchForm({ companies, claims }: { companies: Company[], claims: Claim[] }) {
  const [selectedCompanyId, setSelectedCompanyId] = useState("");
  const [selectedClaims, setSelectedClaims] = useState<Set<string>>(new Set());

  const filteredClaims = useMemo(() => {
    if (!selectedCompanyId) return [];
    return claims.filter(c => c.companyId === selectedCompanyId);
  }, [selectedCompanyId, claims]);

  const toggleClaim = (id: string) => {
    const newSet = new Set(selectedClaims);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedClaims(newSet);
  };

  const toggleAll = () => {
    if (selectedClaims.size === filteredClaims.length) {
      setSelectedClaims(new Set());
    } else {
      setSelectedClaims(new Set(filteredClaims.map(c => c.id)));
    }
  };

  return (
    <form action={createBatch} className="card" style={{ maxWidth: "1000px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
        
        <div className="form-group">
          <label htmlFor="companyId">Select Company / Brand *</label>
          <select 
            id="companyId" 
            name="companyId" 
            className="form-control" 
            required
            value={selectedCompanyId}
            onChange={(e) => {
              setSelectedCompanyId(e.target.value);
              setSelectedClaims(new Set());
            }}
          >
            <option value="">-- Select Company --</option>
            {companies.map(c => (
              <option key={c.id} value={c.id}>{c.name} - {c.brandName}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Batch Action / Status *</label>
          <select id="status" name="status" className="form-control" required>
            <option value="Sent">Sent to Company</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Received">Replacement Received</option>
          </select>
        </div>

        <div className="form-group" style={{ gridColumn: "span 2" }}>
          <label htmlFor="remarks">Batch Remarks</label>
          <textarea id="remarks" name="remarks" className="form-control" rows={2}></textarea>
        </div>
      </div>

      <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Select Claims to Include ({selectedClaims.size} selected)
      </h3>
      
      <div className="table-container" style={{ maxHeight: "400px", overflowY: "auto", marginBottom: "1.5rem" }}>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "40px" }}>
                <input 
                  type="checkbox" 
                  checked={filteredClaims.length > 0 && selectedClaims.size === filteredClaims.length}
                  onChange={toggleAll}
                  disabled={filteredClaims.length === 0}
                />
              </th>
              <th>Claim No</th>
              <th>Date</th>
              <th>Dealer</th>
              <th>Battery Model</th>
              <th>Current Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredClaims.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>
                  {selectedCompanyId ? "No pending unbatched claims for this company" : "Select a company first"}
                </td>
              </tr>
            ) : (
              filteredClaims.map((claim) => (
                <tr key={claim.id}>
                  <td>
                    <input 
                      type="checkbox" 
                      name="claimIds" 
                      value={claim.id} 
                      checked={selectedClaims.has(claim.id)}
                      onChange={() => toggleClaim(claim.id)}
                    />
                  </td>
                  <td style={{ fontWeight: 500 }}>{claim.claimNumber}</td>
                  <td>{format(new Date(claim.date), 'dd MMM yyyy')}</td>
                  <td>{claim.dealer.name}</td>
                  <td>{claim.batteryModel}</td>
                  <td>{claim.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Link href="/batches" className="btn btn-outline">Cancel</Link>
        <button type="submit" className="btn btn-primary" disabled={selectedClaims.size === 0}>
          Process Batch
        </button>
      </div>
    </form>
  );
}
