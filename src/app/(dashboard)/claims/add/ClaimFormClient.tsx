"use client";

import React, { useState } from "react";
import { addClaim } from "@/actions/claimActions";

export default function ClaimFormClient({ dealers, companies }: { dealers: any[], companies: any[] }) {
  const [isDirectCustomer, setIsDirectCustomer] = useState(false);

  return (
    <form action={addClaim} className="form-grid">
      
      <div className="form-group col-span-2" style={{ marginBottom: "-1rem" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontWeight: 500 }}>
          <input 
            type="checkbox" 
            checked={isDirectCustomer} 
            onChange={(e) => setIsDirectCustomer(e.target.checked)} 
            style={{ width: "auto" }}
          />
          This is a Direct Customer Claim (No Dealer)
        </label>
      </div>

      {!isDirectCustomer && (
        <div className="form-group col-span-2">
          <label htmlFor="dealerId">Dealer *</label>
          <select id="dealerId" name="dealerId" className="form-control" required={!isDirectCustomer}>
            <option value="">Select Dealer</option>
            {dealers.map(d => (
              <option key={d.id} value={d.id}>{d.name} ({d.shopName})</option>
            ))}
          </select>
        </div>
      )}

      <div className={`form-group ${isDirectCustomer ? "col-span-2" : ""}`}>
        <label htmlFor="companyId">Battery Company / Brand *</label>
        <select id="companyId" name="companyId" className="form-control" required>
          <option value="">Select Company</option>
          {companies.map(c => (
            <option key={c.id} value={c.id}>{c.name} - {c.brandName}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="customerName">Customer Name {isDirectCustomer && "*"}</label>
        <input type="text" id="customerName" name="customerName" className="form-control" required={isDirectCustomer} />
      </div>

      <div className="form-group">
        <label htmlFor="customerMobile">Customer Mobile {isDirectCustomer && "*"}</label>
        <input type="tel" id="customerMobile" name="customerMobile" className="form-control" required={isDirectCustomer} />
      </div>

      <div className="form-group">
        <label htmlFor="batteryModel">Battery Model *</label>
        <input type="text" id="batteryModel" name="batteryModel" className="form-control" required />
      </div>

      <div className="form-group">
        <label htmlFor="oldSerialNumber">Old Serial Number *</label>
        <input type="text" id="oldSerialNumber" name="oldSerialNumber" className="form-control" required />
      </div>

      <div className="form-group">
        <label htmlFor="batteryType">Battery Type *</label>
        <select id="batteryType" name="batteryType" className="form-control" required>
          <option value="Two Wheeler">Two Wheeler</option>
          <option value="Four Wheeler">Four Wheeler</option>
          <option value="Inverter">Inverter</option>
          <option value="Solar">Solar</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="warrantyCard">Warranty Card Details</label>
        <input type="text" id="warrantyCard" name="warrantyCard" className="form-control" placeholder="Physical card, Bill, etc." />
      </div>

      <div className="form-group">
        <label htmlFor="saleDate">Date of Sale</label>
        <input type="date" id="saleDate" name="saleDate" className="form-control" />
      </div>

      <div className="form-group col-span-2">
        <label htmlFor="problem">Reported Problem *</label>
        <input type="text" id="problem" name="problem" className="form-control" required placeholder="e.g. Dead Cell, Backup Issue" />
      </div>

      <div className="form-group col-span-2">
        <label htmlFor="remarks">Internal Remarks</label>
        <textarea id="remarks" name="remarks" className="form-control" rows={3}></textarea>
      </div>

      <div className="col-span-2" style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <button type="reset" className="btn btn-outline">Reset</button>
        <button type="submit" className="btn btn-primary">Submit Claim</button>
      </div>
    </form>
  );
}
