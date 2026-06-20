"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/actions/auth";
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  BatteryWarning, 
  FileBox, 
  Truck, 
  BarChart3, 
  Settings,
  Menu,
  Bell,
  LogOut
} from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Dealers", href: "/dealers", icon: Users },
    { name: "Companies", href: "/companies", icon: Building2 },
    { name: "Claims", href: "/claims", icon: BatteryWarning },
    { name: "Company Batch", href: "/batches", icon: FileBox },
    { name: "Dealer Delivery", href: "/deliveries", icon: Truck },
    { name: "Reports", href: "/reports", icon: BarChart3 },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside 
        className="sidebar"
        style={{ transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)", position: sidebarOpen ? "relative" : "absolute" }}
      >
        <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--sidebar-border)" }}>
          <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "var(--primary)" }}>Battery Claim Mgr</h1>
        </div>
        
        <nav style={{ padding: "1rem 0", flex: 1, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1.5rem",
                  color: isActive ? "var(--sidebar-active-text)" : "var(--foreground)",
                  background: isActive ? "var(--sidebar-active)" : "transparent",
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: "none"
                }}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div style={{ padding: "1.5rem", borderTop: "1px solid var(--sidebar-border)" }}>
          <form action={logout} style={{ width: "100%" }}>
            <button type="submit" className="btn btn-outline" style={{ width: "100%", justifyContent: "flex-start" }}>
              <LogOut size={18} />
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="top-nav">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ background: "transparent", border: "none", color: "var(--foreground)" }}
            >
              <Menu size={24} />
            </button>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 500, margin: 0 }}>
              {navigation.find(n => pathname === n.href || pathname.startsWith(n.href + "/"))?.name || "Dashboard"}
            </h2>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button style={{ background: "transparent", border: "none", color: "var(--foreground)", position: "relative" }}>
              <Bell size={20} />
              <span style={{ 
                position: "absolute", top: -2, right: -2, background: "var(--danger)", color: "white", 
                fontSize: "0.6rem", padding: "0.1rem 0.3rem", borderRadius: "99px", fontWeight: "bold" 
              }}>3</span>
            </button>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
              A
            </div>
          </div>
        </header>

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}
