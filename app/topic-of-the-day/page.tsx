"use client";

import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { topicOfTheDay } from "@/lib/mock-data";

export default function TopicOfTheDayPage() {
  const [response, setResponse] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="min-h-screen px-5 sm:px-8 pt-24 pb-16 max-w-lg mx-auto">
      <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-accent font-semibold">
        Topic of the Day
      </span>
      <h1 className="font-serif text-2xl sm:text-3xl text-bureau-ink mt-2 mb-8 leading-snug">
        {topicOfTheDay.question}
      </h1>

      <GlassCard>
        {sent ? (
          <p className="text-sm text-bureau-ink/70 text-center py-4">
            Thanks — your response is in.
          </p>
        ) : (
          <>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              rows={4}
              placeholder="Your answer..."
              className="w-full bg-transparent outline-none text-sm text-bureau-ink placeholder:text-bureau-ink/40 resize-none"
            />
            <button
              onClick={() => response.trim() && setSent(true)}
              className="mt-3 w-full rounded-full bg-bureau-ink text-bureau-paper text-sm font-medium py-2.5"
            >
              Respond
            </button>
          </>
        )}
      </GlassCard>

      <p className="text-sm text-bureau-ink/50 mt-6 text-center">
        {topicOfTheDay.responses} responses so far
      </p>
    </section>
  );
}
