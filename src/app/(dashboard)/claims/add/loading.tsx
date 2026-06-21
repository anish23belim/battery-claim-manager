import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoadingAddClaim() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Link href="/claims" className="btn btn-outline" style={{ padding: "0.5rem", pointerEvents: "none", opacity: 0.5 }}>
          <ArrowLeft size={18} />
        </Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>New Replacement Claim</h1>
      </div>

      <div className="card" style={{ maxWidth: "800px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Skeleton lines for form fields */}
          <div style={{ height: "40px", backgroundColor: "var(--border)", borderRadius: "var(--radius)", animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}></div>
          <div style={{ height: "40px", backgroundColor: "var(--border)", borderRadius: "var(--radius)", animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}></div>
          <div style={{ height: "40px", backgroundColor: "var(--border)", borderRadius: "var(--radius)", animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}></div>
          <div style={{ height: "40px", backgroundColor: "var(--border)", borderRadius: "var(--radius)", animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}></div>
          <div style={{ height: "40px", backgroundColor: "var(--border)", borderRadius: "var(--radius)", animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}></div>
          <div style={{ height: "80px", backgroundColor: "var(--border)", borderRadius: "var(--radius)", animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", marginTop: "1rem" }}></div>
        </div>
      </div>
    </div>
  );
}
