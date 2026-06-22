import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", flexDirection: "column", gap: "1rem" }}>
      <Loader2 className="spinner" size={40} style={{ color: "var(--primary)" }} />
      <p style={{ color: "var(--secondary-foreground)", fontWeight: 500 }}>Loading Claim Details...</p>
    </div>
  );
}
