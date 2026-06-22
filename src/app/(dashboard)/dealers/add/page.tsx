import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DealerFormClient from "./DealerFormClient";

export default function AddDealerPage() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Link href="/dealers" className="btn btn-outline" style={{ padding: "0.5rem" }}>
          <ArrowLeft size={18} />
        </Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Add New Contact</h1>
      </div>

      <div className="card" style={{ maxWidth: "800px" }}>
        <DealerFormClient />
      </div>
    </div>
  );
}
