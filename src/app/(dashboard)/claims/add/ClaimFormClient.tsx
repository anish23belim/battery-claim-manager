"use client";

import React, { useState } from "react";
import { addClaim, checkDuplicateSerialNumber } from "@/actions/claimActions";
import { format } from "date-fns";
import SubmitButton from "@/components/common/SubmitButton";

export default function ClaimFormClient({ dealers, companies }: { dealers: any[], companies: any[] }) {
  const [isDirectCustomer, setIsDirectCustomer] = useState(false);
  const [isDealerAdvance, setIsDealerAdvance] = useState(false);
  const [duplicateWarning, setDuplicateWarning] = useState<{message: string, type: 'error' | 'info'} | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  React.useEffect(() => {
    const checkSerial = async () => {
      const serial = document.getElementById('oldSerialNumber') as HTMLInputElement;
      if (!serial || !serial.value || serial.value.trim() === "") {
        setDuplicateWarning(null);
        return;
      }

      setIsChecking(true);
      try {
        const duplicate = await checkDuplicateSerialNumber(serial.value);
        if (duplicate) {
          const dateStr = duplicate.date ? format(new Date(duplicate.date), "dd MMM yyyy") : "Unknown Date";
          if (duplicate.type === 'DEAD_DUPLICATE') {
            setDuplicateWarning({
              message: `⚠️ Alert: This battery was ALREADY CLAIMED as dead on ${dateStr} in Claim #${duplicate.claimNumber}!`,
              type: 'error'
            });
          } else if (duplicate.type === 'REPLACEMENT_HISTORY') {
            setDuplicateWarning({
              message: `ℹ️ Info: This battery was given to a customer as a REPLACEMENT on ${dateStr} in Claim #${duplicate.claimNumber}.`,
              type: 'info'
            });
          }
        } else {
          setDuplicateWarning(null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsChecking(false);
      }
    };

    const input = document.getElementById('oldSerialNumber');
    let timeoutId: NodeJS.Timeout;

    const handleInput = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkSerial, 500);
    };

    if (input) {
      input.addEventListener('input', handleInput);
      return () => {
        input.removeEventListener('input', handleInput);
        clearTimeout(timeoutId);
      };
    }
  }, []);

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
        <>
          <div className="form-group col-span-2">
            <label htmlFor="dealerId">Dealer *</label>
            <select id="dealerId" name="dealerId" className="form-control" required={!isDirectCustomer}>
              <option value="">Select Dealer</option>
              {dealers.map(d => (
                <option key={d.id} value={d.id}>{d.name} ({d.shopName})</option>
              ))}
            </select>
          </div>
          
          <div className="form-group col-span-2" style={{ marginTop: "0.5rem" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontWeight: 500 }}>
              <input 
                type="checkbox" 
                name="isDealerAdvance"
                value="true"
                checked={isDealerAdvance} 
                onChange={(e) => setIsDealerAdvance(e.target.checked)} 
                style={{ width: "auto" }}
              />
              Dealer has given replacement to customer (Advance Replacement)
            </label>
          </div>
        </>
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
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <input 
            type="text" 
            id="oldSerialNumber" 
            name="oldSerialNumber" 
            className="form-control" 
            required 
          />
          {isChecking && <span style={{ position: "absolute", right: "10px", fontSize: "0.8rem", color: "var(--secondary-foreground)" }}>Checking...</span>}
        </div>
          {duplicateWarning && (
            <div style={{
              marginTop: "0.5rem",
              padding: "0.75rem",
              backgroundColor: duplicateWarning.type === 'error' ? "rgba(255, 60, 60, 0.1)" : "rgba(60, 130, 255, 0.1)",
              color: duplicateWarning.type === 'error' ? "var(--error-color)" : "#3c82ff",
              borderRadius: "var(--radius)",
              fontSize: "0.85rem",
              fontWeight: "500",
              border: `1px solid ${duplicateWarning.type === 'error' ? "rgba(255, 60, 60, 0.3)" : "rgba(60, 130, 255, 0.3)"}`
            }}>
              {duplicateWarning.message}
            </div>
          )}
      </div>

      {isDealerAdvance && (
        <div className="form-group">
          <label htmlFor="dealerReplacementSerialNumber">Dealer's New Serial Number *</label>
          <input 
            type="text" 
            id="dealerReplacementSerialNumber" 
            name="dealerReplacementSerialNumber" 
            className="form-control" 
            required={isDealerAdvance}
            placeholder="Serial No. given to customer"
          />
        </div>
      )}

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
        <SubmitButton>Submit Claim</SubmitButton>
      </div>
    </form>
  );
}
