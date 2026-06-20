import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import prisma from "@/lib/prisma";
import { addClaim } from "@/actions/claimActions";



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
        <form action={addClaim} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          
          <div className="form-group">
            <label htmlFor="dealerId">Dealer *</label>
            <select id="dealerId" name="dealerId" className="form-control" required>
              <option value="">Select Dealer</option>
              {dealers.map(d => (
                <option key={d.id} value={d.id}>{d.name} ({d.shopName})</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="companyId">Battery Company / Brand *</label>
            <select id="companyId" name="companyId" className="form-control" required>
              <option value="">Select Company</option>
              {companies.map(c => (
                <option key={c.id} value={c.id}>{c.name} - {c.brandName}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input type="text" id="customerName" name="customerName" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="customerMobile">Customer Mobile</label>
            <input type="tel" id="customerMobile" name="customerMobile" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="batteryModel">Battery Model *</label>
            <input type="text" id="batteryModel" name="batteryModel" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="oldSerialNumber">Old Battery Serial No. *</label>
            <input type="text" id="oldSerialNumber" name="oldSerialNumber" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="batteryType">Battery Type *</label>
            <select id="batteryType" name="batteryType" className="form-control" required>
              <option value="">Select Type</option>
              <option value="Automotive">Automotive</option>
              <option value="Inverter">Inverter</option>
              <option value="Solar">Solar</option>
              <option value="Two-Wheeler">Two-Wheeler</option>
              <option value="E-Rickshaw">E-Rickshaw</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="warrantyCard">Warranty Card No.</label>
            <input type="text" id="warrantyCard" name="warrantyCard" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="saleDate">Date of Sale</label>
            <input type="date" id="saleDate" name="saleDate" className="form-control" />
          </div>

          <div className="form-group" style={{ gridColumn: "span 2" }}>
            <label htmlFor="problem">Problem / Reason for Claim *</label>
            <textarea id="problem" name="problem" className="form-control" rows={3} required></textarea>
          </div>

          <div className="form-group" style={{ gridColumn: "span 2" }}>
            <label htmlFor="remarks">Remarks (Optional)</label>
            <textarea id="remarks" name="remarks" className="form-control" rows={2}></textarea>
          </div>

          <div style={{ gridColumn: "span 2", display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/claims" className="btn btn-outline">Cancel</Link>
            <button type="submit" className="btn btn-primary">Save Claim</button>
          </div>

        </form>
      </div>
    </div>
  );
}
