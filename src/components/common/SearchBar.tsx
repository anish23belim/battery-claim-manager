"use client";

import React, { useState, useEffect, useTransition } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search..." }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (query) {
        params.set("q", query);
      } else {
        params.delete("q");
      }
      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`);
      });
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [query, router, pathname, searchParams]);

  return (
    <div className="form-control" style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", maxWidth: "300px", opacity: isPending ? 0.7 : 1 }}>
      <Search size={18} color="var(--secondary-foreground)" />
      <input 
        type="text" 
        placeholder={placeholder} 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ border: "none", outline: "none", width: "100%", background: "transparent" }}
      />
    </div>
  );
}
