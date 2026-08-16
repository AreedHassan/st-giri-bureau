"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSetPassword(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    setError(null);

    // Supabase's invite link already logs the user into a temporary session;
    // this just sets their real password on that account.
    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bureau-paper">
      <form
        onSubmit={handleSetPassword}
        className="glass w-full max-w-sm p-8 rounded-[24px] space-y-4"
      >
        <h1 className="font-serif text-2xl text-bureau-ink">
          Set Your Password
        </h1>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-bureau-line rounded-lg px-3 py-2 bg-transparent"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          className="w-full border border-bureau-line rounded-lg px-3 py-2 bg-transparent"
        />

        {error && <p className="text-bureau-accent text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-bureau-ink text-bureau-paper rounded-lg py-2 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Set Password & Continue"}
        </button>
      </form>
    </div>
  );
}
