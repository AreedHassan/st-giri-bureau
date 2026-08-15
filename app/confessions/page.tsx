import PostCard from "@/components/PostCard";
import Stamp from "@/components/Stamp";
import { posts } from "@/lib/mock-data";

export default function ConfessionsPage() {
  const items = posts.filter((p) => p.category === "confession");

  return (
    <section className="min-h-screen px-5 sm:px-8 pt-24 pb-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          Anonymous, always
        </span>
        <Stamp variant="filed" />
      </div>
      <h1 className="font-serif text-3xl text-bureau-ink mt-1 mb-8">
        Confessions
      </h1>
      <div className="flex flex-col gap-4">
        {items.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {items.length === 0 && (
          <p className="text-sm text-bureau-ink/50">Nothing filed yet.</p>
        )}
      </div>
    </section>
  );
}
