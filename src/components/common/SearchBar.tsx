"use client";

import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ placeholder = "Search...", value, onChange }: SearchBarProps) {
  return (
    <div className="form-control" style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", maxWidth: "300px" }}>
      <Search size={18} color="var(--secondary-foreground)" />
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ border: "none", outline: "none", width: "100%", background: "transparent" }}
      />
    </div>
  );
}
