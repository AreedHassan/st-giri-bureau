"use client";

import { useState } from "react";

export default function InviteAdminPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/admin/invite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("sent");
      setEmail("");
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <div className="max-w-md mx-auto py-16 px-6">
      <h1 className="font-serif text-2xl text-bureau-ink mb-2">
        Invite an Admin
      </h1>
      <p className="text-sm text-bureau-ink/60 mb-6">
        They&apos;ll get an email with a link to set their own password.
      </p>

      <form onSubmit={handleInvite} className="space-y-4">
        <input
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-bureau-line rounded-lg px-3 py-2 bg-transparent"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-bureau-ink text-bureau-paper rounded-lg py-2 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Invite"}
        </button>
      </form>

      {status === "sent" && (
        <p className="text-sm text-bureau-ink/70 mt-4">
          Invite sent. They&apos;ll need to check their inbox.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-bureau-accent mt-4">{errorMsg}</p>
      )}
    </div>
  );
}
