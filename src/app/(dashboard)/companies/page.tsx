import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Plus, Pencil } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteCompany } from "@/actions/companyActions";



export default async function CompaniesPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q || "";

  const companies = await prisma.company.findMany({
    where: q ? {
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { brandName: { contains: q, mode: "insensitive" } },
        { contactPerson: { contains: q, mode: "insensitive" } },
        { mobile: { contains: q, mode: "insensitive" } },
      ]
    } : undefined,
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
          <SearchBar placeholder="Search by name, brand, contact, mobile..." />
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
