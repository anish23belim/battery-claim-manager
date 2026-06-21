import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Plus, Eye } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteClaim } from "@/actions/claimActions";
import { format } from "date-fns";



export default async function ClaimsPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q || "";

  const claims = await prisma.claim.findMany({
    where: q ? {
      OR: [
        { claimNumber: { contains: q, mode: "insensitive" } },
        { customerName: { contains: q, mode: "insensitive" } },
        { customerMobile: { contains: q, mode: "insensitive" } },
        { batteryModel: { contains: q, mode: "insensitive" } },
        { oldSerialNumber: { contains: q, mode: "insensitive" } },
        { dealer: { name: { contains: q, mode: "insensitive" } } },
        { company: { name: { contains: q, mode: "insensitive" } } }
      ]
    } : undefined,
    include: {
      dealer: true,
      company: true,
      batch: true
    },
    orderBy: { createdAt: "desc" }
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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Claims</h1>
        <Link href="/claims/add" className="btn btn-primary">
          <Plus size={18} />
          New Claim
        </Link>
      </div>

      <div className="card">
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <SearchBar placeholder="Search claims, name, serial, number..." />
        </div>

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
              {claims.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No claims found</td>
                </tr>
              ) : (
                claims.map((claim) => (
                  <tr key={claim.id}>
                    <td style={{ fontWeight: 500 }}>{claim.claimNumber}</td>
                    <td>{format(new Date(claim.date), 'dd MMM yyyy')}</td>
                    <td>{claim.dealer.name}</td>
                    <td>{claim.company.name}</td>
                    <td>{claim.batteryModel}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(claim.status)}`}>
                        {claim.status}
                      </span>
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
