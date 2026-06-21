import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Plus, Eye } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import SearchBar from "@/components/common/SearchBar";
import { deleteDelivery } from "@/actions/deliveryActions";
import { format } from "date-fns";



export default async function DeliveriesPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q || "";

  const deliveries = await prisma.delivery.findMany({
    where: q ? {
      OR: [
        { deliveryNumber: { contains: q, mode: "insensitive" } },
        { dealer: { name: { contains: q, mode: "insensitive" } } },
        { dealer: { shopName: { contains: q, mode: "insensitive" } } }
      ]
    } : undefined,
    include: {
      dealer: true,
      _count: {
        select: { items: true }
      }
    },
    orderBy: { date: "desc" }
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Dealer Deliveries</h1>
        <Link href="/deliveries/add" className="btn btn-primary">
          <Plus size={18} />
          Create Delivery
        </Link>
      </div>

      <div className="card">
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <SearchBar placeholder="Search by delivery number, dealer..." />
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Delivery No</th>
                <th>Date</th>
                <th>Dealer</th>
                <th>Quantity</th>
                <th style={{ width: "80px", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No deliveries found</td>
                </tr>
              ) : (
                deliveries.map((delivery) => (
                  <tr key={delivery.id}>
                    <td style={{ fontWeight: 500 }}>{delivery.deliveryNumber}</td>
                    <td>{format(new Date(delivery.date), 'dd MMM yyyy')}</td>
                    <td>{delivery.dealer.name} ({delivery.dealer.shopName})</td>
                    <td>{delivery.quantity}</td>
                    <td style={{ textAlign: "center" }}>
                      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                        <Link href={`/deliveries/${delivery.id}`} prefetch={true} className="btn btn-outline" style={{ padding: "0.4rem", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "0.375rem" }} title="View Details">
                          <Eye size={16} />
                        </Link>
                        <DeleteButton id={delivery.id} action={deleteDelivery} entityName="delivery" />
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
