import Link from "next/link";
import GrainCanvas from "@/components/GrainCanvas";
import GlassCard from "@/components/GlassCard";
import PostCard from "@/components/PostCard";
import Stamp from "@/components/Stamp";
import { posts, topicOfTheDay } from "@/lib/mock-data";

export default function Home() {
  const confession = posts.find((p) => p.category === "confession");
  const trending = posts.slice(0, 3);

  return (
    <>
      {/* Hero - full viewport, bottom-anchored content, quiet grain bg */}
      <section className="relative h-screen w-full overflow-hidden bg-bureau-paper flex flex-col">
        <GrainCanvas />

        <div className="relative z-10 flex flex-col flex-1 justify-end px-5 pb-10 sm:px-8 sm:pb-14 gap-6">
          <div
            className="animate-blur-fade-up"
            style={{ animationDelay: "0ms", opacity: 0 }}
          >
            <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
              St. Giri, unofficially
            </span>
            <h1 className="font-serif text-[2rem] sm:text-5xl leading-[1.15] tracking-tight text-bureau-ink mt-2">
              What happened at
              <br />
              school today?
            </h1>
          </div>

          <p
            className="text-[0.9375rem] text-bureau-ink/70 leading-relaxed max-w-sm animate-blur-fade-up"
            style={{ animationDelay: "60ms", opacity: 0 }}
          >
            Incidents, confessions, rumours and everything else St. Giri
            won&apos;t put on the noticeboard.
          </p>

          <Link
            href="/submit"
            className="animate-blur-fade-up inline-flex items-center justify-center rounded-full bg-bureau-ink text-bureau-paper font-medium text-sm px-6 py-3.5 w-fit hover:bg-bureau-ink/90 transition-colors"
            style={{ animationDelay: "120ms", opacity: 0 }}
          >
            Submit to the Bureau →
          </Link>
        </div>
      </section>

      {/* Content below the fold */}
      <section className="px-5 sm:px-8 py-10 flex flex-col gap-8 max-w-2xl mx-auto">
        {/* Topic of the Day */}
        <GlassCard>
          <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-accent font-semibold">
            Topic of the Day
          </span>
          <h2 className="font-serif text-xl mt-2 text-bureau-ink leading-snug">
            {topicOfTheDay.question}
          </h2>
          <p className="text-sm text-bureau-ink/60 mt-3">
            {topicOfTheDay.responses} responses so far
          </p>
          <Link
            href="/topic-of-the-day"
            className="mt-4 inline-block text-sm font-medium text-bureau-ink underline underline-offset-4"
          >
            Join the discussion
          </Link>
        </GlassCard>

        {/* Latest confession */}
        {confession && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-serif text-lg text-bureau-ink">
                Latest confession
              </h2>
              <Stamp variant="filed" />
            </div>
            <PostCard post={confession} />
          </div>
        )}

        {/* Trending */}
        <div>
          <h2 className="font-serif text-lg text-bureau-ink mb-3">
            Trending now
          </h2>
          <div className="flex flex-col gap-4">
            {trending.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <Link
          href="/bureau"
          className="text-center text-sm font-medium text-bureau-ink/70 hover:text-bureau-ink py-4"
        >
          See everything →
        </Link>
      </section>
    </>
  );
}
