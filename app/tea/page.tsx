import PostCard from "@/components/PostCard";
import { posts } from "@/lib/mock-data";

export default function TeaPage() {
  const items = posts.filter((p) => p.category === "tea");

  return (
    <section className="min-h-screen px-5 sm:px-8 pt-24 pb-16 max-w-2xl mx-auto">
      <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
        Rumours & drama
      </span>
      <h1 className="font-serif text-3xl text-bureau-ink mt-2 mb-2">
        The Tea
      </h1>
      <p className="text-sm text-bureau-ink/60 mb-8">
        Unverified items are labelled. Treat accordingly.
      </p>
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
