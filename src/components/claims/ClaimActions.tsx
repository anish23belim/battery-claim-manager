"use client";

import React, { useState } from "react";
import { Printer, MessageCircle, CheckCircle, Store } from "lucide-react";
import { markDeliveredToCustomer, settleDealerAdvance, closeShopSettledClaim } from "@/actions/claimActions";
import SubmitButton from "@/components/common/SubmitButton";

export default function ClaimActions({ claim, dealer }: any) {
  const [showSettleModal, setShowSettleModal] = useState(false);
  const [shopSerial, setShopSerial] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const contactName = dealer ? dealer.name : (claim.customerName || "Customer");
  const contactMobile = dealer ? (dealer.whatsapp || dealer.mobile) : claim.customerMobile;

  const hindiStatusMap: Record<string, string> = {
    "Received from Dealer": "डीलर से प्राप्त हो गया है",
    "Received from Customer": "कस्टमर से प्राप्त हो गया है",
    "Sent to Company": "कंपनी को भेज दिया गया है",
    "Replacement Received from Company": "कंपनी से नई बैटरी आ गई है",
    "Delivered to Dealer": "डीलर को दे दिया गया है",
    "Delivered to Customer": "कस्टमर को दे दिया गया है",
    "Closed": "पूरा हो गया है",
    "Closed (Moved to Shop Stock)": "पूरा (शॉप स्टॉक में जमा) हो गया है",
    "Rejected by Company": "कंपनी द्वारा रिजेक्ट कर दिया गया है",
  };

  const hindiStatus = hindiStatusMap[claim.status] || claim.status;

  const whatsappMessage = `Dear ${contactName},
Your battery replacement claim for model *${claim.batteryModel}* (Claim No: ${claim.claimNumber}, SN: ${claim.oldSerialNumber || "N/A"}) is currently: *${claim.status}*.

नमस्ते ${contactName},
आपके *${claim.batteryModel}* मॉडल की बैटरी का क्लेम (Claim No: ${claim.claimNumber}, SN: ${claim.oldSerialNumber || "N/A"}) अभी *${hindiStatus}*।

Regards,
*Bharat Auto Agency Tinwari*
Contact: 7240171727, 9799457164`;
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
          <SubmitButton>
            <CheckCircle size={18} style={{ display: "inline" }} />
            Mark Delivered to Customer
          </SubmitButton>
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
          <SubmitButton className="btn btn-primary" style={{ background: "var(--success)" }}>
            <CheckCircle size={18} style={{ display: "inline" }} />
            Close Claim & Move to Shop Stock
          </SubmitButton>
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
                <SubmitButton disabled={!shopSerial}>Confirm Delivery</SubmitButton>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
