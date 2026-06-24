"use client";

import React, { useState } from "react";
import { updateDealer } from "@/actions/dealerActions";
import SubmitButton from "@/components/common/SubmitButton";
import Link from "next/link";

export default function EditDealerClient({ dealer }: { dealer: any }) {
  const [type, setType] = useState(dealer.type || "Dealer");

  // We need to bind the ID to the action.
  const updateDealerWithId = updateDealer.bind(null, dealer.id);

  return (
    <form action={updateDealerWithId} className="form-grid">
      <div className="form-group col-span-2">
        <label>Contact Type *</label>
        <div style={{ display: "flex", gap: "2rem", marginTop: "0.5rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontWeight: 500 }}>
            <input 
              type="radio" 
              name="type" 
              value="Dealer" 
              checked={type === "Dealer"} 
              onChange={() => setType("Dealer")}
              style={{ width: "auto" }}
            />
            Shop / Dealer
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontWeight: 500 }}>
            <input 
              type="radio" 
              name="type" 
              value="Customer" 
              checked={type === "Customer"} 
              onChange={() => setType("Customer")}
              style={{ width: "auto" }}
            />
            Direct Customer
          </label>
        </div>
      </div>

      <div className="form-group col-span-2">
        <label htmlFor="name">{type === "Dealer" ? "Dealer Contact Name *" : "Customer Name *"}</label>
        <input type="text" id="name" name="name" className="form-control" defaultValue={dealer.name} required />
      </div>

      {type === "Dealer" && (
        <div className="form-group col-span-2">
          <label htmlFor="shopName">Shop / Business Name *</label>
          <input type="text" id="shopName" name="shopName" className="form-control" defaultValue={dealer.shopName} required />
        </div>
      )}

      {type === "Customer" && (
        <input type="hidden" name="shopName" value={dealer.shopName || "N/A"} />
      )}

      <div className="form-group">
        <label htmlFor="mobile">Mobile Number *</label>
        <input type="tel" id="mobile" name="mobile" className="form-control" defaultValue={dealer.mobile} required />
      </div>

      <div className="form-group">
        <label htmlFor="whatsapp">WhatsApp Number</label>
        <input type="tel" id="whatsapp" name="whatsapp" className="form-control" defaultValue={dealer.whatsapp || ""} />
      </div>

      <div className="form-group col-span-2">
        <label htmlFor="address">Address {type === "Dealer" ? "*" : ""}</label>
        <input type="text" id="address" name="address" className="form-control" defaultValue={dealer.address} required={type === "Dealer"} />
      </div>

      <div className="form-group">
        <label htmlFor="city">City {type === "Dealer" ? "*" : ""}</label>
        <input type="text" id="city" name="city" className="form-control" defaultValue={dealer.city} required={type === "Dealer"} />
      </div>

      {type === "Dealer" && (
        <div className="form-group">
          <label htmlFor="gstNumber">GST Number</label>
          <input type="text" id="gstNumber" name="gstNumber" className="form-control" defaultValue={dealer.gstNumber || ""} />
        </div>
      )}

      {type === "Dealer" && (
        <div className="form-group">
          <label htmlFor="openingPendingBalance">Opening Pending Replacement Balance</label>
          <input type="number" id="openingPendingBalance" name="openingPendingBalance" className="form-control" defaultValue={dealer.openingPendingBalance} min="0" />
        </div>
      )}

      <div className="col-span-2" style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
        <Link href={`/dealers/${dealer.id}`} className="btn btn-outline">Cancel</Link>
        <SubmitButton>Update {type}</SubmitButton>
      </div>
    </form>
  );
}
