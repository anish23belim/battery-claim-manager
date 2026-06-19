import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { Plus, Search } from "lucide-react";

const prisma = new PrismaClient();

export default async function CompaniesPage() {
  const companies = await prisma.company.findMany({
    orderBy: { name: "asc" }
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
          <div className="form-control" style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "300px" }}>
            <Search size={18} color="var(--secondary-foreground)" />
            <input 
              type="text" 
              placeholder="Search companies..." 
              style={{ border: "none", outline: "none", width: "100%", background: "transparent" }}
            />
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Brand Name</th>
                <th>Contact Person</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No companies found</td>
                </tr>
              ) : (
                companies.map((company) => (
                  <tr key={company.id}>
                    <td style={{ fontWeight: 500 }}>{company.name}</td>
                    <td>{company.brandName}</td>
                    <td>{company.contactPerson || "-"}</td>
                    <td>{company.mobile || "-"}</td>
                    <td>
                      <Link href={`/companies/${company.id}`} className="btn btn-outline" style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>
                        Edit
                      </Link>
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
