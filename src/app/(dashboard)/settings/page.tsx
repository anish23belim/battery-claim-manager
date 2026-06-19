import React from "react";

export default function SettingsPage() {
  return (
    <div className="card">
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Settings</h1>
      
      <div style={{ padding: "2rem 0", textAlign: "center" }}>
        <div style={{ 
          width: "64px", 
          height: "64px", 
          borderRadius: "50%", 
          background: "var(--primary)", 
          color: "white", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          fontSize: "1.5rem", 
          fontWeight: "bold",
          margin: "0 auto 1rem auto"
        }}>
          A
        </div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem" }}>Admin User</h2>
        <p style={{ color: "var(--secondary-foreground)", marginBottom: "2rem" }}>Role: Administrator</p>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem" }}>Application Settings</h3>
        <p style={{ color: "var(--secondary-foreground)" }}>Settings and configuration options will be available here in the next update.</p>
      </div>
    </div>
  );
}
