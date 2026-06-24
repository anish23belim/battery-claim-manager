import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import prisma from "@/lib/prisma";
import EditDealerClient from "./EditDealerClient";
import { notFound } from "next/navigation";

export default async function EditDealerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const dealer = await prisma.dealer.findUnique({
    where: { id }
  });

  if (!dealer) {
    notFound();
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Link href={`/dealers/${id}`} className="btn btn-outline" style={{ padding: "0.5rem" }}>
          <ArrowLeft size={18} />
        </Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Edit {dealer.type === "Dealer" ? "Dealer" : "Customer"}</h1>
      </div>

      <div className="card" style={{ maxWidth: "800px" }}>
        <EditDealerClient dealer={dealer} />
      </div>
    </div>
  );
}
