"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { createDelivery } from "@/actions/deliveryActions";
import { format } from "date-fns";

type Claim = {
  id: string;
  claimNumber: string;
  date: Date;
  dealerId: string;
  batteryModel: string;
  status: string;
  company: { name: string };
  oldSerialNumber?: string | null;
};

type Dealer = {
  id: string;
  name: string;
  shopName: string;
};

export default function DeliveryForm({ dealers, claims }: { dealers: Dealer[], claims: Claim[] }) {
  const [selectedDealerId, setSelectedDealerId] = useState("");
  const [selectedClaims, setSelectedClaims] = useState<Set<string>>(new Set());

  const filteredClaims = useMemo(() => {
    if (!selectedDealerId) return [];
    return claims.filter(c => c.dealerId === selectedDealerId);
  }, [selectedDealerId, claims]);

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
    <form action={createDelivery} className="card" style={{ maxWidth: "1000px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
        
        <div className="form-group">
          <label htmlFor="dealerId">Select Dealer *</label>
          <select 
            id="dealerId" 
            name="dealerId" 
            className="form-control" 
            required
            value={selectedDealerId}
            onChange={(e) => {
              setSelectedDealerId(e.target.value);
              setSelectedClaims(new Set());
            }}
          >
            <option value="">-- Select Dealer --</option>
            {dealers.map(d => (
              <option key={d.id} value={d.id}>{d.name} ({d.shopName})</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="remarks">Delivery Remarks</label>
          <textarea id="remarks" name="remarks" className="form-control" rows={2}></textarea>
        </div>
      </div>

      <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Select Replacement Claims to Deliver ({selectedClaims.size} selected)
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
              <th>Company</th>
              <th>Battery Model</th>
              <th>Current Status</th>
              <th>New Serial No. (Optional)</th>
            </tr>
          </thead>
          <tbody>
            {filteredClaims.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>
                  {selectedDealerId ? "No pending replacements for this dealer" : "Select a dealer first"}
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
                  <td>
                    <div style={{ fontWeight: 500 }}>{claim.claimNumber}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--secondary-foreground)" }}>SN: {claim.oldSerialNumber || "N/A"}</div>
                  </td>
                  <td>{claim.company.name}</td>
                  <td>{claim.batteryModel}</td>
                  <td>{claim.status}</td>
                  <td>
                    <input 
                      type="text" 
                      name={`newSerial_${claim.id}`} 
                      className="form-control" 
                      style={{ padding: "0.25rem", fontSize: "0.875rem" }} 
                      disabled={!selectedClaims.has(claim.id)}
                      placeholder="Enter Serial"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Link href="/deliveries" className="btn btn-outline">Cancel</Link>
        <button type="submit" className="btn btn-primary" disabled={selectedClaims.size === 0}>
          Process Delivery
        </button>
      </div>
    </form>
  );
}
