import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PrismaClient } from "@prisma/client";
import DeliveryForm from "@/components/deliveries/DeliveryForm";

const prisma = new PrismaClient();

export default async function AddDeliveryPage() {
  const dealers = await prisma.dealer.findMany({ orderBy: { name: "asc" } });
  
  // Fetch claims that are "Replacement Received from Company" or equivalent to be delivered to dealer.
  // Actually, any claim that is not closed or delivered. Wait, standard flow is:
  // Received -> Sent -> Replacement Received -> Delivered -> Closed.
  // We'll show claims that are not Delivered or Closed.
  const claims = await prisma.claim.findMany({
    where: {
      status: {
        notIn: ["Closed", "Delivered to Dealer"]
      }
    },
    include: {
      company: { select: { name: true } }
    },
    orderBy: { date: "desc" }
  });

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Link href="/deliveries" className="btn btn-outline" style={{ padding: "0.5rem" }}>
          <ArrowLeft size={18} />
        </Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Create Dealer Delivery</h1>
      </div>

      <DeliveryForm dealers={dealers} claims={claims as any} />
    </div>
  );
}
