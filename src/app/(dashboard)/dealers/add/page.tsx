import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { addDealer } from "@/actions/dealerActions";

export default function AddDealerPage() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Link href="/dealers" className="btn btn-outline" style={{ padding: "0.5rem" }}>
          <ArrowLeft size={18} />
        </Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Add New Dealer</h1>
      </div>

      <div className="card" style={{ maxWidth: "800px" }}>
        <form action={addDealer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          
          <div className="form-group" style={{ gridColumn: "span 2" }}>
            <label htmlFor="name">Dealer Contact Name *</label>
            <input type="text" id="name" name="name" className="form-control" required />
          </div>

          <div className="form-group" style={{ gridColumn: "span 2" }}>
            <label htmlFor="shopName">Shop / Business Name *</label>
            <input type="text" id="shopName" name="shopName" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number *</label>
            <input type="tel" id="mobile" name="mobile" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp Number</label>
            <input type="tel" id="whatsapp" name="whatsapp" className="form-control" />
          </div>

          <div className="form-group" style={{ gridColumn: "span 2" }}>
            <label htmlFor="address">Address *</label>
            <input type="text" id="address" name="address" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input type="text" id="city" name="city" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="gstNumber">GST Number</label>
            <input type="text" id="gstNumber" name="gstNumber" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="openingPendingBalance">Opening Pending Replacement Balance</label>
            <input type="number" id="openingPendingBalance" name="openingPendingBalance" className="form-control" defaultValue="0" min="0" />
          </div>

          <div style={{ gridColumn: "span 2", display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/dealers" className="btn btn-outline">Cancel</Link>
            <button type="submit" className="btn btn-primary">Save Dealer</button>
          </div>

        </form>
      </div>
    </div>
  );
}
