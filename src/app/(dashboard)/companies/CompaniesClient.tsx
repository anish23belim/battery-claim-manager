"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteCompany } from "@/actions/companyActions";

export default function CompaniesClient({ initialData }: { initialData: any[] }) {
  const [q, setQ] = useState("");

  const filteredData = initialData.filter((company) => {
    if (!q) return true;
    const lowerQ = q.toLowerCase();
    return (
      (company.name && company.name.toLowerCase().includes(lowerQ)) ||
      (company.brandName && company.brandName.toLowerCase().includes(lowerQ)) ||
      (company.contactPerson && company.contactPerson.toLowerCase().includes(lowerQ)) ||
      (company.mobile && company.mobile.toLowerCase().includes(lowerQ))
    );
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Companies / Brands</h1>
        <Link href="/companies/add" className="btn btn-primary">
          <Plus size={18} />
          Add Company
        </Link>
      </div>

      <div className="card">
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <SearchBar 
            placeholder="Search by name, brand, contact, mobile..." 
            value={q} 
            onChange={setQ} 
          />
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Brand Name</th>
                <th>Contact Person</th>
                <th>Mobile</th>
                <th style={{ width: "80px", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No companies found</td>
                </tr>
              ) : (
                filteredData.map((company) => (
                  <tr key={company.id}>
                    <td style={{ fontWeight: 500 }}>{company.name}</td>
                    <td>{company.brandName}</td>
                    <td>{company.contactPerson || "-"}</td>
                    <td>{company.mobile || "-"}</td>
                    <td style={{ textAlign: "center" }}>
                      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                        <Link href={`/companies/${company.id}`} prefetch={true} className="btn btn-outline" style={{ padding: "0.4rem", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "0.375rem" }} title="Edit Details">
                          <Pencil size={16} />
                        </Link>
                        <DeleteButton id={company.id} action={deleteCompany} entityName="company" confirmMessage="WARNING: This will PERMANENTLY delete this company AND all of their claims and batches. Are you sure?" />
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
