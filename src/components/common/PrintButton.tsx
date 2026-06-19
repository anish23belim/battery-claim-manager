"use client";

import React from "react";
import { Printer } from "lucide-react";

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button onClick={handlePrint} className="btn btn-outline">
      <Printer size={18} />
      Print Slip
    </button>
  );
}
