"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { changePassword } from "@/actions/auth";

export default function ChangePasswordForm() {
  const [state, formAction, isPending] = useActionState(changePassword, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} style={{ width: "100%", maxWidth: "400px" }}>
      {state?.error && (
        <div style={{ padding: "0.75rem", background: "var(--danger-bg)", color: "var(--danger-text)", borderRadius: "var(--radius)", marginBottom: "1rem", fontSize: "0.875rem" }}>
          {state.error}
        </div>
      )}
      
      {state?.success && (
        <div style={{ padding: "0.75rem", background: "var(--success-bg)", color: "var(--success-text)", borderRadius: "var(--radius)", marginBottom: "1rem", fontSize: "0.875rem" }}>
          {state.success}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="currentPassword">Current Password *</label>
        <input 
          type="password" 
          id="currentPassword" 
          name="currentPassword" 
          className="form-control" 
          required 
          disabled={isPending} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="newPassword">New Password *</label>
        <input 
          type="password" 
          id="newPassword" 
          name="newPassword" 
          className="form-control" 
          required 
          disabled={isPending} 
          minLength={6}
        />
        <span style={{ fontSize: "0.75rem", color: "var(--secondary-foreground)" }}>Minimum 6 characters</span>
      </div>

      <div className="form-group" style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="confirmPassword">Confirm New Password *</label>
        <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword" 
          className="form-control" 
          required 
          disabled={isPending} 
          minLength={6}
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={isPending}>
        {isPending ? "Changing Password..." : "Change Password"}
      </button>
    </form>
  );
}
