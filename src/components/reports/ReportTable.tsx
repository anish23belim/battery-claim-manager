"use client";

import React from "react";
import * as XLSX from "xlsx";
import { Download } from "lucide-react";

type ReportTableProps = {
  title: string;
  columns: string[];
  data: any[];
};

export default function ReportTable({ title, columns, data }: ReportTableProps) {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data, { header: columns });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, `${title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="card" style={{ marginBottom: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", margin: 0 }}>{title}</h2>
        <button onClick={exportToExcel} className="btn btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Download size={16} />
          Export Excel
        </button>
      </div>
      
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center", color: "var(--secondary-foreground)" }}>No data available</td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={idx}>
                  {columns.map(col => (
                    <td key={col}>{row[col] !== undefined && row[col] !== null ? String(row[col]) : "-"}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
