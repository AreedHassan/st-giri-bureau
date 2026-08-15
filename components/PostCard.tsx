import { Post } from "@/lib/mock-data";
import GlassCard from "./GlassCard";
import Stamp from "./Stamp";

const CATEGORY_LABEL: Record<Post["category"], string> = {
  bureau: "The Bureau",
  confession: "Confession",
  tea: "The Tea",
  bulletin: "Bulletin",
  topic: "Topic of the Day",
  "class-xii": "Class XII",
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <GlassCard className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
          {CATEGORY_LABEL[post.category]} · {post.createdAt}
        </span>
        {post.category === "tea" && post.verified === false && (
          <Stamp variant="unverified" />
        )}
      </div>
      <h3 className="font-serif text-lg leading-snug text-bureau-ink">
        {post.title}
      </h3>
      <p className="text-sm text-bureau-ink/70 leading-relaxed">{post.body}</p>
    </GlassCard>
  );
}
