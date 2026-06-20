"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function SubmitButton({ children, className = "btn btn-primary" }: { children: React.ReactNode, className?: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={className} disabled={pending}>
      {pending && <Loader2 className="spinner" size={16} />}
      {children}
    </button>
  );
}
