import React from "react";
import { BatteryWarning } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "var(--background)" }}>
      <div className="card" style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ background: "var(--primary)", color: "white", padding: "1rem", borderRadius: "50%", marginBottom: "1.5rem" }}>
          <BatteryWarning size={32} />
        </div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Welcome Back</h2>
        <p style={{ color: "var(--secondary-foreground)", marginBottom: "2rem", fontSize: "0.875rem" }}>Log in to Battery Claim Manager</p>
        
        <LoginForm />
      </div>
    </div>
  );
}
