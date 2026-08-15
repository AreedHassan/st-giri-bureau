"use client";

import { useState } from "react";

const CATEGORIES = [
  { value: "bureau", label: "The Bureau" },
  { value: "confession", label: "Confession" },
  { value: "tea", label: "The Tea" },
  { value: "bulletin", label: "Bulletin" },
  { value: "topic", label: "Topic of the Day" },
  { value: "class-xii", label: "Class XII" },
];

// NOTE: This is a placeholder gate only. Before going live, replace with
// real auth (Supabase Auth email/password is enough for a two-person team).
export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("bureau");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState<"verified" | "unverified">("verified");
  const [saved, setSaved] = useState(false);

  if (!authed) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="glass rounded-squircle p-8 w-full max-w-sm flex flex-col gap-4">
          <h1 className="font-serif text-xl text-bureau-ink">Bureau Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="glass rounded-full px-4 py-2.5 text-sm outline-none"
          />
          <button
            onClick={() => setAuthed(true)} // TODO: replace with real Supabase auth check
            className="rounded-full bg-bureau-ink text-bureau-paper py-2.5 text-sm font-medium"
          >
            Enter
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-5 sm:px-8 pt-24 pb-16 max-w-lg mx-auto flex flex-col gap-6">
      <h1 className="font-serif text-2xl text-bureau-ink">New Post</h1>

      <div>
        <label className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-2 w-full glass rounded-full px-4 py-2.5 text-sm outline-none"
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 w-full glass rounded-squircle px-4 py-2.5 text-sm outline-none"
        />
      </div>

      <div>
        <label className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          Body
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={6}
          className="mt-2 w-full glass rounded-squircle p-4 text-sm outline-none resize-none"
        />
      </div>

      {category === "tea" && (
        <div>
          <label className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
            Tag
          </label>
          <div className="flex gap-2 mt-2">
            {(["verified", "unverified"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  tag === t ? "bg-bureau-ink text-bureau-paper" : "glass"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button className="flex-1 rounded-full glass py-3 text-sm font-medium text-bureau-ink/70">
          Save Draft
        </button>
        <button
          onClick={() => setSaved(true)} // TODO: write to Supabase `posts` table
          className="flex-1 rounded-full bg-bureau-ink text-bureau-paper py-3 text-sm font-medium"
        >
          Publish
        </button>
      </div>

      {saved && (
        <p className="text-center text-sm text-bureau-accent font-medium">
          Published. (stub — wire to Supabase next)
        </p>
      )}
    </section>
  );
}
