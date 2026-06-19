"use client";

import React, { useActionState } from "react";
import { login } from "@/actions/auth";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <form style={{ width: "100%" }} action={formAction}>
      {state?.error && (
        <div style={{ padding: "0.75rem", background: "var(--danger-bg)", color: "var(--danger-text)", borderRadius: "var(--radius)", marginBottom: "1rem", fontSize: "0.875rem" }}>
          {state.error}
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" className="form-control" placeholder="Enter your username" required disabled={isPending} />
      </div>
      <div className="form-group" style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" required disabled={isPending} />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "0.75rem" }} disabled={isPending}>
        {isPending ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
}
