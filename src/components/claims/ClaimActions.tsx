"use client";

import React from "react";
import { Printer, MessageCircle } from "lucide-react";

export default function ClaimActions({ claim, dealer }: any) {
  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = `Dear ${dealer.name}, your battery replacement claim no. ${claim.claimNumber} (SN: ${claim.oldSerialNumber || "N/A"}) is currently ${claim.status}.`;
  const whatsappUrl = `https://wa.me/${dealer.whatsapp || dealer.mobile}?text=${encodeURIComponent(whatsappMessage)}`;

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
    </div>
  );
}
