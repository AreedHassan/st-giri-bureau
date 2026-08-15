"use client";

import { useState } from "react";
import Stamp from "@/components/Stamp";

const TYPES = ["Confession", "Tea", "Incident", "Meme", "Story", "Event", "Idea"];

export default function SubmitPage() {
  const [type, setType] = useState("Confession");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    // TODO: wire to Supabase `submissions` table once credentials are added
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center gap-4">
        <div className="animate-stamp-in" style={{ opacity: 0 }}>
          <Stamp variant="sealed" />
        </div>
        <h1 className="font-serif text-2xl text-bureau-ink mt-2">
          It&apos;s with us.
        </h1>
        <p className="text-sm text-bureau-ink/60 max-w-xs">
          Stays with the Bureau. Always. We&apos;ll review it before anything
          goes up.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setText("");
          }}
          className="mt-4 text-sm font-medium underline underline-offset-4 text-bureau-ink/70"
        >
          Submit something else
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-5 sm:px-8 pt-24 pb-16 max-w-lg mx-auto flex flex-col gap-8">
      <div className="text-center">
        <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          Submit
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl text-bureau-ink mt-2">
          Submit to the Bureau
        </h1>
      </div>

      <div>
        <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          What is this?
        </span>
        <div className="flex flex-wrap gap-2 mt-3">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                type === t
                  ? "bg-bureau-ink text-bureau-paper"
                  : "glass text-bureau-ink/70"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          Tell us everything
        </span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={7}
          placeholder="Type it exactly as it happened. We'll handle the rest."
          className="mt-3 w-full glass rounded-squircle p-4 text-sm text-bureau-ink placeholder:text-bureau-ink/40 outline-none resize-none"
        />
      </div>

      <div>
        <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          Add a photo (optional)
        </span>
        <button className="mt-3 w-full glass rounded-squircle py-3 text-sm text-bureau-ink/60 font-medium">
          + Attach
        </button>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!text.trim()}
        className="rounded-full bg-bureau-accent text-bureau-paper font-medium text-sm py-3.5 disabled:opacity-40 transition-opacity"
      >
        Seal & Submit →
      </button>

      <p className="text-center text-xs text-bureau-ink/50">
        Stays with the Bureau. Always.
      </p>
    </section>
  );
}
