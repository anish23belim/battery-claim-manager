"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  mobile: string;
  message: string;
}

export default function WhatsAppButton({ mobile, message }: WhatsAppButtonProps) {
  const handleWhatsApp = () => {
    // Format the number to remove any non-digit characters
    let formattedMobile = mobile.replace(/\D/g, "");
    
    // If it's a 10 digit Indian number, prepend 91
    if (formattedMobile.length === 10) {
      formattedMobile = `91${formattedMobile}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${formattedMobile}?text=${encodedMessage}`;
    
    window.open(url, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsApp}
      className="btn"
      style={{ 
        backgroundColor: "#25D366", 
        color: "white", 
        border: "none",
        padding: "0.5rem 1rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem"
      }}
    >
      <MessageCircle size={18} />
      Send WhatsApp
    </button>
  );
}
