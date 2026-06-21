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

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm(`Are you sure you want to delete this ${entityName}?`)) {
      const tr = e.currentTarget.closest("tr");
      if (tr) {
        tr.style.opacity = "0.4";
        tr.style.pointerEvents = "none";
        tr.style.transition = "opacity 0.2s ease";
      }

      startTransition(async () => {
        try {
          const res = await action(id);
          if (res && res.error) {
            alert(res.error);
            if (tr) {
              tr.style.opacity = "1";
              tr.style.pointerEvents = "auto";
            }
          } else {
            if (tr) {
              tr.style.display = "none";
            }
          }
        } catch (error) {
          alert("An error occurred while deleting.");
          if (tr) {
            tr.style.opacity = "1";
            tr.style.pointerEvents = "auto";
          }
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
