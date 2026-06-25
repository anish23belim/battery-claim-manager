"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Eye, Filter, X } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteClaim } from "@/actions/claimActions";
import { format, isWithinInterval, startOfDay, endOfDay } from "date-fns";
import * as XLSX from "xlsx";

import { useSearchParams } from "next/navigation";

export default function ClaimsClient({ initialData, companies = [], dealers = [] }: { initialData: any[], companies?: any[], dealers?: any[] }) {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('status') || searchParams.get('filter') || "All";

  const [q, setQ] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statusFilter, setStatusFilter] = useState(initialFilter);

  // Advanced Filters
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [companyFilter, setCompanyFilter] = useState("All");
  const [dealerFilter, setDealerFilter] = useState("All");
  const [advanceFilter, setAdvanceFilter] = useState("All");
  const [settledFilter, setSettledFilter] = useState("All");

  const filteredData = initialData.filter((claim) => {
    // Check Date Range first
    if (startDate || endDate) {
      const claimDate = new Date(claim.date);
      // Strip time from claimDate for accurate day-level comparison
      claimDate.setHours(0, 0, 0, 0);

      if (startDate) {
        const sDate = new Date(startDate);
        sDate.setHours(0, 0, 0, 0);
        if (claimDate < sDate) return false;
      }
      if (endDate) {
        const eDate = new Date(endDate);
        eDate.setHours(0, 0, 0, 0);
        if (claimDate > eDate) return false;
      }
    }

    // Then check search query
    if (q) {
      const lowerQ = q.toLowerCase();
      const matchesSearch = (claim.claimNumber && claim.claimNumber.toLowerCase().includes(lowerQ)) ||
        (claim.customerName && claim.customerName.toLowerCase().includes(lowerQ)) ||
        (claim.customerMobile && claim.customerMobile.toLowerCase().includes(lowerQ)) ||
        (claim.batteryModel && claim.batteryModel.toLowerCase().includes(lowerQ)) ||
        (claim.oldSerialNumber && claim.oldSerialNumber.toLowerCase().includes(lowerQ)) ||
        (claim.dealer?.name && claim.dealer.name.toLowerCase().includes(lowerQ)) ||
        (claim.company?.name && claim.company.name.toLowerCase().includes(lowerQ));
      if (!matchesSearch) return false;
    }

    // Finally check status filter
    if (statusFilter !== "All") {
      if (statusFilter === "pending-dealer") {
        if (!claim.dealerId) return false;
        if (["Delivered to Dealer", "Closed", "Closed (Moved to Shop Stock)"].includes(claim.status)) return false;
      } else if (claim.status !== statusFilter) {
        return false;
      }
    }

    // Check Advanced Filters
    if (companyFilter !== "All" && claim.companyId !== companyFilter) return false;
    
    if (dealerFilter !== "All") {
      if (dealerFilter === "Direct Customer") {
        if (claim.dealerId) return false;
      } else if (claim.dealerId !== dealerFilter) {
        return false;
      }
    }

    if (advanceFilter !== "All") {
      const isAdv = advanceFilter === "Yes";
      if (claim.isDealerAdvance !== isAdv) return false;
    }

    if (settledFilter !== "All") {
      const isSet = settledFilter === "Yes";
      if (claim.isShopSettled !== isSet) return false;
    }

    return true;
  });

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case "Approved": return "badge-success";
      case "Rejected": return "badge-danger";
      case "Sent to Company": return "badge-warning";
      case "Replacement Received from Company": return "badge-warning";
      case "Delivered to Dealer": return "badge-success";
      case "Closed": return "badge-default";
      default: return "badge-default";
    }
  };

  const exportToExcel = () => {
    const exportData = filteredData.map(claim => ({
      "Claim No": claim.claimNumber,
      "Date": format(new Date(claim.date), 'dd MMM yyyy'),
      "Dealer": claim.dealer ? claim.dealer.name : "Direct Customer",
      "Company": claim.company.name,
      "Battery Model": claim.batteryModel,
      "Old Serial No": claim.oldSerialNumber || "-",
      "Dealer's Given Serial No": claim.dealerReplacementSerialNumber || "-",
      "Shop's Given Serial No": claim.shopReplacementSerialNumber || "-",
      "Status": claim.status,
      "Customer Name": claim.customerName || "N/A",
      "Customer Mobile": claim.customerMobile || "N/A",
      "Advance Replacement": claim.isDealerAdvance ? "Yes" : "No",
      "Dealer Settled": claim.isShopSettled ? "Yes" : "No"
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Claims");
    
    const fileName = `Claims_Export_${format(new Date(), 'yyyy-MM-dd')}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Claims</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={exportToExcel} className="btn btn-outline" style={{ borderColor: "var(--success)", color: "var(--success)" }}>
            Export to Excel
          </button>
          <Link href="/claims/add" className="btn btn-primary">
            <Plus size={18} />
            New Claim
          </Link>
        </div>
      </div>

      <div className="card">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ flex: "1 1 300px" }}>
            <SearchBar 
              placeholder="Search claims, name, serial, number..." 
              value={q} 
              onChange={setQ} 
            />
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <select 
              className="form-control" 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ width: "auto" }}
            >
              <option value="All">All Statuses</option>
              <option value="Received from Dealer">Received from Dealer</option>
              <option value="Received from Customer">Received from Customer</option>
              <option value="Sent to Company">Sent to Company</option>
              <option value="Replacement Received from Company">Replacement Received from Company</option>
              <option value="Delivered to Dealer">Delivered to Dealer</option>
              <option value="Delivered to Customer">Delivered to Customer</option>
              <option value="Closed">Closed</option>
              <option value="Closed (Moved to Shop Stock)">Closed (Moved to Shop Stock)</option>
              <option value="pending-dealer">⚠️ Pending to Dealers</option>
            </select>
            <input 
              type="date" 
              className="form-control" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)}
              title="Start Date"
            />
            <span style={{ color: "var(--secondary-foreground)", fontWeight: 500 }}>to</span>
            <input 
              type="date" 
              className="form-control" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)}
              title="End Date"
            />
            {(startDate || endDate) && (
              <button 
                onClick={() => { setStartDate(""); setEndDate(""); }} 
                className="btn btn-outline"
                style={{ padding: "0.5rem", borderRadius: "var(--radius)" }}
                title="Clear Dates"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`btn ${showAdvanced ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: "0.5rem", borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: "0.25rem" }}
            >
              <Filter size={16} />
              Advanced
            </button>
          </div>
        </div>

        {showAdvanced && (
          <div style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, margin: 0 }}>Advanced Filters</h3>
              <button 
                onClick={() => {
                  setCompanyFilter("All");
                  setDealerFilter("All");
                  setAdvanceFilter("All");
                  setSettledFilter("All");
                }}
                className="btn btn-ghost"
                style={{ fontSize: "0.8rem", padding: "0.25rem 0.5rem", height: "auto" }}
              >
                Clear Advanced Filters
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem", color: "var(--secondary-foreground)" }}>Company</label>
                <select className="form-control" value={companyFilter} onChange={e => setCompanyFilter(e.target.value)}>
                  <option value="All">All Companies</option>
                  {companies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem", color: "var(--secondary-foreground)" }}>Dealer / Customer</label>
                <select className="form-control" value={dealerFilter} onChange={e => setDealerFilter(e.target.value)}>
                  <option value="All">All Dealers</option>
                  <option value="Direct Customer">Direct Customers (No Dealer)</option>
                  {dealers.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem", color: "var(--secondary-foreground)" }}>Dealer Advance Given?</label>
                <select className="form-control" value={advanceFilter} onChange={e => setAdvanceFilter(e.target.value)}>
                  <option value="All">Any</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem", color: "var(--secondary-foreground)" }}>Shop Settled?</label>
                <select className="form-control" value={settledFilter} onChange={e => setSettledFilter(e.target.value)}>
                  <option value="All">Any</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Claim No</th>
                <th>Date</th>
                <th>Dealer</th>
                <th>Company/Brand</th>
                <th>Battery Model</th>
                <th>Status</th>
                <th style={{ width: "80px", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No claims found</td>
                </tr>
              ) : (
                filteredData.map((claim) => (
                  <tr key={claim.id}>
                    <td>
                      <div style={{ fontWeight: 500 }}>{claim.claimNumber}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--secondary-foreground)" }}>Old SN: {claim.oldSerialNumber || "N/A"}</div>
                      {claim.dealerReplacementSerialNumber && (
                         <div style={{ fontSize: "0.8rem", color: "var(--success)" }}>New SN: {claim.dealerReplacementSerialNumber}</div>
                      )}
                      {claim.shopReplacementSerialNumber && (
                         <div style={{ fontSize: "0.8rem", color: "var(--primary)" }}>Shop SN: {claim.shopReplacementSerialNumber}</div>
                      )}
                    </td>
                    <td>{format(new Date(claim.date), 'dd MMM yyyy')}</td>
                    <td>
                      {claim.dealer ? claim.dealer.name : <span style={{ color: "var(--primary)" }}>Direct Customer</span>}
                    </td>
                    <td>{claim.company.name}</td>
                    <td>{claim.batteryModel}</td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
                        <span className={`badge ${getStatusBadgeClass(claim.status)}`}>{claim.status}</span>
                        {claim.isDealerAdvance && !claim.isShopSettled && (
                          <span className="badge badge-warning" style={{ fontSize: "0.7rem", padding: "0.1rem 0.4rem" }}>Dealer Advance (Pending)</span>
                        )}
                        {claim.isDealerAdvance && claim.isShopSettled && (
                          <span className="badge badge-success" style={{ fontSize: "0.7rem", padding: "0.1rem 0.4rem" }}>Dealer Settled</span>
                        )}
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                        <Link href={`/claims/${claim.id}`} prefetch={true} className="btn btn-outline" style={{ padding: "0.4rem", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "0.375rem" }} title="View Details">
                          <Eye size={16} />
                        </Link>
                        <DeleteButton id={claim.id} action={deleteClaim} entityName="claim" />
                      </div>
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
