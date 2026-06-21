"use client";

import React from "react";
import { Printer, MessageCircle, CheckCircle } from "lucide-react";
import { markDeliveredToCustomer } from "@/actions/claimActions";

export default function ClaimActions({ claim, dealer }: any) {
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
    </div>
  );
}
