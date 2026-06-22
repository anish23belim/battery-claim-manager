"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function SubmitButton({ children, className = "btn btn-primary", disabled = false }: { children: React.ReactNode, className?: string, disabled?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={className} disabled={pending || disabled}>
      {pending && <Loader2 className="spinner" size={16} />}
      {children}
    </button>
  );
}
