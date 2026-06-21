import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Plus, Eye } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteDealer } from "@/actions/dealerActions";



export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const q = params.q || "";

  const dealers = await prisma.dealer.findMany({
    where: q ? {
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { shopName: { contains: q, mode: "insensitive" } },
        { mobile: { contains: q, mode: "insensitive" } },
        { city: { contains: q, mode: "insensitive" } },
      ]
    } : undefined,
    orderBy: { name: "asc" }
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Dealers</h1>
        <Link href="/dealers/add" className="btn btn-primary">
          <Plus size={18} />
          Add Dealer
        </Link>
      </div>

      <div className="card">
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <SearchBar placeholder="Search by name, shop, mobile, city..." />
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Dealer Name</th>
                <th>Shop Name</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Pending Balance</th>
                <th style={{ width: "80px", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dealers.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No dealers found</td>
                </tr>
              ) : (
                dealers.map((dealer) => (
                  <tr key={dealer.id}>
                    <td style={{ fontWeight: 500 }}>{dealer.name}</td>
                    <td>{dealer.shopName}</td>
                    <td>{dealer.mobile}</td>
                    <td>{dealer.city}</td>
                    <td>
                      <span className={`badge ${dealer.openingPendingBalance > 0 ? 'badge-warning' : 'badge-default'}`}>
                        {dealer.openingPendingBalance}
                      </span>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                        <Link href={`/dealers/${dealer.id}`} prefetch={true} className="btn btn-outline" style={{ padding: "0.4rem", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "0.375rem" }} title="View Details">
                          <Eye size={16} />
                        </Link>
                        <DeleteButton id={dealer.id} action={deleteDealer} entityName="dealer" confirmMessage="WARNING: This will PERMANENTLY delete this dealer AND all of their claims and deliveries. Are you sure?" />
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
