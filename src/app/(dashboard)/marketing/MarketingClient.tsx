"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Download, MessageCircle, Filter, Plus, UserPlus } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { addMarketingContact } from "@/actions/marketingActions";

type Contact = {
  id: string;
  name: string;
  mobile: string;
  type: string;
  lastClaimDate: Date;
  batteryModel: string;
  ageInYears: number;
};

export default function MarketingClient({ initialData }: { initialData: Contact[] }) {
  const [filterAge, setFilterAge] = useState<string>("all");
  const [messageTemplate, setMessageTemplate] = useState<string>(
    "नमस्ते [NAME],\n\nआपकी बैटरी को काफी समय हो गया है। अगर आपको बैकअप में कोई समस्या आ रही है तो आज ही हमसे संपर्क करें और फ्री हेल्थ चेकअप का लाभ उठाएं!\n\nधन्यवाद,\nBharat Auto Agency Tinwari"
  );
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredData = initialData.filter(contact => {
    if (filterAge === "all") return true;
    if (filterAge === "1") return contact.ageInYears >= 1 && contact.ageInYears < 2;
    if (filterAge === "2") return contact.ageInYears >= 2 && contact.ageInYears < 3;
    if (filterAge === "3+") return contact.ageInYears >= 3;
    return true;
  });

  const exportToExcel = () => {
    const dataToExport = filteredData.map(c => ({
      "Name": c.name,
      "Mobile": c.mobile,
      "Type": c.type,
      "Battery Model": c.batteryModel,
      "Battery Age (Years)": c.ageInYears,
      "Last Interaction": new Date(c.lastClaimDate).toLocaleDateString('en-GB')
    }));

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Marketing Contacts");
    XLSX.writeFile(wb, `Marketing_Contacts_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div>
      <div className="claim-header" style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Marketing & Retention</h1>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button onClick={() => setShowAddForm(!showAddForm)} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {showAddForm ? <Filter size={18} /> : <UserPlus size={18} />}
            {showAddForm ? "Cancel" : "Add Contact"}
          </button>
          <button onClick={exportToExcel} className="btn btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Download size={18} />
            Export to Excel
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="card" style={{ marginBottom: "2rem", border: "2px solid var(--primary)" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <UserPlus size={20} />
            Add Custom Contact
          </h2>
          <form action={async (formData) => {
            setIsSubmitting(true);
            try {
              await addMarketingContact(formData);
              setShowAddForm(false);
            } catch (err) {
              alert("Error adding contact");
            } finally {
              setIsSubmitting(false);
            }
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
              <div className="form-group">
                <label>Customer Name *</label>
                <input type="text" name="name" className="form-control" required placeholder="e.g. Rahul Kumar" />
              </div>
              <div className="form-group">
                <label>Mobile Number *</label>
                <input type="tel" name="mobile" className="form-control" required placeholder="10 digit number" />
              </div>
              <div className="form-group">
                <label>Battery Model (Optional)</label>
                <input type="text" name="batteryModel" className="form-control" placeholder="e.g. 150AH Tall Tubular" />
              </div>
              <div className="form-group">
                <label>Purchase Date (Optional)</label>
                <input type="date" name="purchaseDate" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Save Contact"}
            </button>
          </form>
        </div>
      )}

      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>Campaign Settings</h2>
        
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <div style={{ flex: 1, minWidth: "250px" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
              <Filter size={16} style={{ display: "inline", marginRight: "0.5rem" }} />
              Filter by Battery Age
            </label>
            <select 
              className="form-control" 
              style={{ width: "100%" }}
              value={filterAge}
              onChange={(e) => setFilterAge(e.target.value)}
            >
              <option value="all">All Contacts ({initialData.length})</option>
              <option value="1">1 Year Old ({initialData.filter(c => c.ageInYears >= 1 && c.ageInYears < 2).length})</option>
              <option value="2">2 Years Old ({initialData.filter(c => c.ageInYears >= 2 && c.ageInYears < 3).length})</option>
              <option value="3+">3+ Years Old ({initialData.filter(c => c.ageInYears >= 3).length})</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            WhatsApp Message Template
          </label>
          <p style={{ fontSize: "0.8rem", color: "var(--secondary-foreground)", marginBottom: "0.5rem" }}>
            Use <strong style={{ color: "var(--primary)" }}>[NAME]</strong> in your text to automatically insert the customer's name.
          </p>
          <textarea 
            className="form-control" 
            rows={5} 
            value={messageTemplate}
            onChange={(e) => setMessageTemplate(e.target.value)}
            style={{ width: "100%", resize: "vertical" }}
          ></textarea>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Target Contacts ({filteredData.length})
        </h2>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Type</th>
                <th>Battery Model</th>
                <th>Age</th>
                <th style={{ width: "150px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "var(--secondary-foreground)" }}>
                    No contacts found matching the selected filters.
                  </td>
                </tr>
              ) : (
                filteredData.map(contact => (
                  <tr key={contact.id}>
                    <td style={{ fontWeight: 500 }}>{contact.name}</td>
                    <td>{contact.mobile}</td>
                    <td><span className={`badge ${contact.type === 'Dealer' ? 'badge-primary' : 'badge-default'}`}>{contact.type}</span></td>
                    <td style={{ fontSize: "0.8rem" }}>{contact.batteryModel}</td>
                    <td>{contact.ageInYears} yrs</td>
                    <td style={{ textAlign: "center" }}>
                      <WhatsAppButton 
                        mobile={contact.mobile} 
                        message={messageTemplate.replace(/\[NAME\]/g, contact.name)} 
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
