"use client";

import React, { useTransition } from "react";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  id: string;
  action: (id: string) => Promise<{ error?: string; success?: boolean } | void>;
  entityName?: string;
}

export default function DeleteButton({ id, action, entityName = "item" }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete this ${entityName}?`)) {
      startTransition(async () => {
        try {
          const res = await action(id);
          if (res && res.error) {
            alert(res.error);
          }
        } catch (error) {
          alert("An error occurred while deleting.");
        }
      });
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      disabled={isPending}
      className="btn btn-outline" 
      style={{ 
        padding: "0.4rem", 
        display: "inline-flex", 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: "0.375rem",
        borderColor: "var(--danger-bg)",
        color: "var(--danger)",
        opacity: isPending ? 0.5 : 1
      }} 
      title={`Delete ${entityName}`}
    >
      <Trash2 size={16} />
    </button>
  );
}
