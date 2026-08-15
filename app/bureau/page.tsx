import PostCard from "@/components/PostCard";
import { posts } from "@/lib/mock-data";

export default function BureauPage() {
  const items = posts.filter((p) => p.category === "bureau");

  return (
    <section className="min-h-screen px-5 sm:px-8 pt-24 pb-16 max-w-2xl mx-auto">
      <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
        Main Feed
      </span>
      <h1 className="font-serif text-3xl text-bureau-ink mt-2 mb-8">
        The Bureau
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
