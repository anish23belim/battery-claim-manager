import React from "react";
import ChangePasswordForm from "@/components/auth/ChangePasswordForm";

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
        <p style={{ color: "var(--secondary-foreground)", marginBottom: "1rem" }}>Settings and configuration options will be available here in the next update.</p>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem" }}>Data Management</h3>
        <p style={{ color: "var(--secondary-foreground)", marginBottom: "1rem" }}>
          Download a complete backup of your database (Claims, Dealers, Companies, Deliveries, Batches) in Excel format.
        </p>
        <a href="/api/backup" download className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Database Backup (Excel)
        </a>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem" }}>Security</h3>
        <p style={{ color: "var(--secondary-foreground)", marginBottom: "1.5rem" }}>Update your password to keep your account secure.</p>
        <ChangePasswordForm />
      </div>
    </div>
  );
}
