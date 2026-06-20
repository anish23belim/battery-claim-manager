import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Plus, Search } from "lucide-react";
import { format } from "date-fns";



export default async function DeliveriesPage() {
  const deliveries = await prisma.delivery.findMany({
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
          <div className="form-control" style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "300px" }}>
            <Search size={18} color="var(--secondary-foreground)" />
            <input 
              type="text" 
              placeholder="Search deliveries..." 
              style={{ border: "none", outline: "none", width: "100%", background: "transparent" }}
            />
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Delivery No</th>
                <th>Date</th>
                <th>Dealer</th>
                <th>Quantity</th>
                <th>Actions</th>
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
                    <td>
                      <Link href={`/deliveries/${delivery.id}`} className="btn btn-outline" style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>
                        View
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
