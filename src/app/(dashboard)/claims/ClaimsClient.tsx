"use client";

import React, { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { Plus, Eye, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteClaim } from "@/actions/claimActions";
import { format } from "date-fns";
import * as XLSX from "xlsx";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function ClaimsClient({ 
  initialData, 
  companies = [], 
  dealers = [],
  totalClaims = 0,
  currentPage = 1,
  pageSize = 50
}: { 
  initialData: any[], 
  companies?: any[], 
  dealers?: any[],
  totalClaims?: number,
  currentPage?: number,
  pageSize?: number
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Local state for immediate UI feedback, synced to URL
  const [q, setQ] = useState(searchParams.get("q") || "");
  const [startDate, setStartDate] = useState(searchParams.get("startDate") || "");
  const [endDate, setEndDate] = useState(searchParams.get("endDate") || "");
  const [statusFilter, setStatusFilter] = useState(searchParams.get("statusFilter") || "All");
  
  // Advanced Filters
  const [showAdvanced, setShowAdvanced] = useState(
    !!(searchParams.get("companyFilter") || searchParams.get("dealerFilter") || searchParams.get("advanceFilter") || searchParams.get("settledFilter"))
  );
  const [companyFilter, setCompanyFilter] = useState(searchParams.get("companyFilter") || "All");
  const [dealerFilter, setDealerFilter] = useState(searchParams.get("dealerFilter") || "All");
  const [advanceFilter, setAdvanceFilter] = useState(searchParams.get("advanceFilter") || "All");
  const [settledFilter, setSettledFilter] = useState(searchParams.get("settledFilter") || "All");

  // Debounce search query update to URL
  const isFirstRender = React.useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const timer = setTimeout(() => {
      updateUrl({ q });
    }, 300);
    return () => clearTimeout(timer);
  }, [q]);

  const updateUrl = (updates: Record<string, string | null>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    // Reset to page 1 on filter changes (except when explicitly changing page)
    if (!updates.page) {
      current.set("page", "1");
    }

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "All" || value === "") {
        current.delete(key);
      } else {
        current.set(key, value);
      }
    });

    const search = current.toString();
    const query = search ? `?${search}` : "";
    
    startTransition(() => {
      router.replace(`${pathname}${query}`, { scroll: false });
    });
  };

  const clearAdvanced = () => {
    setCompanyFilter("All");
    setDealerFilter("All");
    setAdvanceFilter("All");
    setSettledFilter("All");
    updateUrl({
      companyFilter: null,
      dealerFilter: null,
      advanceFilter: null,
      settledFilter: null
    });
  };

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
    const exportData = initialData.map(claim => ({
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
    
    const fileName = `Claims_Export_Page${currentPage}_${format(new Date(), 'yyyy-MM-dd')}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const totalPages = Math.ceil(totalClaims / pageSize);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Claims</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={exportToExcel} className="btn btn-outline" style={{ borderColor: "var(--success)", color: "var(--success)" }} title="Export current page to Excel">
            Export (Page {currentPage})
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
              onChange={(e) => {
                setStatusFilter(e.target.value);
                updateUrl({ statusFilter: e.target.value });
              }}
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
              onChange={(e) => {
                setStartDate(e.target.value);
                updateUrl({ startDate: e.target.value });
              }}
              title="Start Date"
            />
            <span style={{ color: "var(--secondary-foreground)", fontWeight: 500 }}>to</span>
            <input 
              type="date" 
              className="form-control" 
              value={endDate} 
              onChange={(e) => {
                setEndDate(e.target.value);
                updateUrl({ endDate: e.target.value });
              }}
              title="End Date"
            />
            {(startDate || endDate) && (
              <button 
                onClick={() => { 
                  setStartDate(""); setEndDate(""); 
                  updateUrl({ startDate: null, endDate: null });
                }} 
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
                onClick={clearAdvanced}
                className="btn btn-ghost"
                style={{ fontSize: "0.8rem", padding: "0.25rem 0.5rem", height: "auto" }}
              >
                Clear Advanced Filters
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem", color: "var(--secondary-foreground)" }}>Company</label>
                <select className="form-control" value={companyFilter} onChange={e => {
                  setCompanyFilter(e.target.value);
                  updateUrl({ companyFilter: e.target.value });
                }}>
                  <option value="All">All Companies</option>
                  {companies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem", color: "var(--secondary-foreground)" }}>Dealer / Customer</label>
                <select className="form-control" value={dealerFilter} onChange={e => {
                  setDealerFilter(e.target.value);
                  updateUrl({ dealerFilter: e.target.value });
                }}>
                  <option value="All">All Dealers</option>
                  <option value="Direct Customer">Direct Customers (No Dealer)</option>
                  {dealers.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem", color: "var(--secondary-foreground)" }}>Dealer Advance Given?</label>
                <select className="form-control" value={advanceFilter} onChange={e => {
                  setAdvanceFilter(e.target.value);
                  updateUrl({ advanceFilter: e.target.value });
                }}>
                  <option value="All">Any</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.25rem", color: "var(--secondary-foreground)" }}>Shop Settled?</label>
                <select className="form-control" value={settledFilter} onChange={e => {
                  setSettledFilter(e.target.value);
                  updateUrl({ settledFilter: e.target.value });
                }}>
                  <option value="All">Any</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="table-container" style={{ opacity: isPending ? 0.5 : 1, transition: "opacity 0.2s ease-in-out" }}>
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
              {initialData.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "var(--secondary-foreground)", padding: "2rem" }}>
                    No claims found matching your filters.
                  </td>
                </tr>
              ) : (
                initialData.map((claim) => (
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

        {/* Pagination UI */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", padding: "1rem", backgroundColor: "var(--background)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: "0.875rem", color: "var(--secondary-foreground)" }}>
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, totalClaims)} of {totalClaims} claims
            </div>
            <div style={{ display: "flex", gap: "0.25rem" }}>
              <button 
                onClick={() => updateUrl({ page: String(currentPage - 1) })} 
                disabled={currentPage === 1}
                className="btn btn-outline"
                style={{ padding: "0.5rem", display: "flex", alignItems: "center" }}
              >
                <ChevronLeft size={16} />
              </button>
              
              {/* Simple page numbers */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = currentPage;
                // Center the current page if possible
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => updateUrl({ page: String(pageNum) })}
                    className={`btn ${currentPage === pageNum ? 'btn-primary' : 'btn-outline'}`}
                    style={{ padding: "0.5rem 1rem" }}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button 
                onClick={() => updateUrl({ page: String(currentPage + 1) })} 
                disabled={currentPage === totalPages}
                className="btn btn-outline"
                style={{ padding: "0.5rem", display: "flex", alignItems: "center" }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
