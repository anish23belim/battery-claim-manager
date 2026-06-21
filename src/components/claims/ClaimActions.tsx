"use client";

import React, { useState } from "react";
import { Printer, MessageCircle, CheckCircle, Store } from "lucide-react";
import { markDeliveredToCustomer, settleDealerAdvance, closeShopSettledClaim } from "@/actions/claimActions";

export default function ClaimActions({ claim, dealer }: any) {
  const [showSettleModal, setShowSettleModal] = useState(false);
  const [shopSerial, setShopSerial] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const contactName = dealer ? dealer.name : (claim.customerName || "Customer");
  const contactMobile = dealer ? (dealer.whatsapp || dealer.mobile) : claim.customerMobile;

  const whatsappMessage = `Dear ${contactName}, your battery replacement claim no. ${claim.claimNumber} (SN: ${claim.oldSerialNumber || "N/A"}) is currently ${claim.status}.`;
  const whatsappUrl = `https://wa.me/${contactMobile}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }} className="no-print">
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn" style={{ background: "#25D366", color: "white" }}>
        <MessageCircle size={18} />
        WhatsApp Update
      </a>
      <button onClick={handlePrint} className="btn btn-outline">
        <Printer size={18} />
        Print Slip
      </button>

      {!dealer && claim.status !== "Delivered to Customer" && claim.status !== "Closed" && (
        <form action={() => markDeliveredToCustomer(claim.id)} style={{ display: "inline-block" }}>
          <button type="submit" className="btn btn-primary">
            <CheckCircle size={18} />
            Mark Delivered to Customer
          </button>
        </form>
      )}

      {dealer && claim.isDealerAdvance && !claim.isShopSettled && claim.status !== "Closed" && (
        <div style={{ display: "inline-block" }}>
          <button onClick={() => setShowSettleModal(true)} className="btn btn-outline" style={{ borderColor: "var(--warning)", color: "var(--warning)" }}>
            <Store size={18} />
            Settle Dealer (Give from Shop Stock)
          </button>
        </div>
      )}

      {dealer && claim.isDealerAdvance && claim.isShopSettled && claim.status === "Replacement Received from Company" && (
        <form action={() => closeShopSettledClaim(claim.id)} style={{ display: "inline-block" }}>
          <button type="submit" className="btn btn-primary" style={{ background: "var(--success)" }}>
            <CheckCircle size={18} />
            Close Claim & Move to Shop Stock
          </button>
        </form>
      )}

      {showSettleModal && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div className="card" style={{ width: "100%", maxWidth: "400px" }}>
            <h3 style={{ marginTop: 0, marginBottom: "1rem", fontWeight: "bold" }}>Settle Dealer</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--secondary-foreground)", marginBottom: "1rem" }}>
              Enter the serial number of the new battery you are giving to the dealer from your shop stock.
            </p>
            <div className="form-group">
              <label>Shop's Replacement Serial Number *</label>
              <input 
                type="text" 
                className="form-control" 
                value={shopSerial}
                onChange={(e) => setShopSerial(e.target.value)}
                placeholder="Serial No."
                autoFocus
              />
            </div>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1rem" }}>
              <button onClick={() => setShowSettleModal(false)} className="btn btn-outline">Cancel</button>
              <form action={() => {
                settleDealerAdvance(claim.id, shopSerial);
                setShowSettleModal(false);
              }}>
                <button type="submit" className="btn btn-primary" disabled={!shopSerial}>Confirm Delivery</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
