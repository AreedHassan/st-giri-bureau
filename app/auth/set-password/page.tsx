"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    async function establishSession() {
      const hash = window.location.hash;
      if (hash) {
        const params = new URLSearchParams(hash.substring(1));
        const access_token = params.get("access_token");
        const refresh_token = params.get("refresh_token");

        if (access_token && refresh_token) {
          const { error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });
          if (error) {
            setError(
              "This invite link has expired or already been used. Please ask for a new invite."
            );
          } else {
            setSessionReady(true);
          }
          return;
        }
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setSessionReady(true);
      } else {
        setError(
          "No active invite session found. Please use the link from your invite email."
        );
      }
    }

    establishSession();
  }, [supabase]);

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
          disabled={!sessionReady}
          className="w-full border border-bureau-line rounded-lg px-3 py-2 bg-transparent disabled:opacity-50"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          disabled={!sessionReady}
          className="w-full border border-bureau-line rounded-lg px-3 py-2 bg-transparent disabled:opacity-50"
        />

        {error && <p className="text-bureau-accent text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading || !sessionReady}
          className="w-full bg-bureau-ink text-bureau-paper rounded-lg py-2 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : sessionReady
            ? "Set Password & Continue"
            : "Verifying invite..."}
        </button>
      </form>
    </div>
  );
            }
