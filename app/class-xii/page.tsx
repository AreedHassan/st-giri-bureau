import Link from "next/link";
import GlassCard from "@/components/GlassCard";

export default function ClassXIIPage() {
  return (
    <section className="min-h-screen px-5 sm:px-8 pt-24 pb-16 max-w-2xl mx-auto">
      <span className="text-[11px] uppercase tracking-[0.14em] text-bureau-ink/50 font-medium">
        Batch of 2027
      </span>
      <h1 className="font-serif text-3xl text-bureau-ink mt-2 mb-8">
        Class XII
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/class-xii/science">
          <GlassCard className="text-center py-10">
            <h2 className="font-serif text-xl text-bureau-ink">Science</h2>
          </GlassCard>
        </Link>
        <Link href="/class-xii/commerce">
          <GlassCard className="text-center py-10">
            <h2 className="font-serif text-xl text-bureau-ink">Commerce</h2>
          </GlassCard>
        </Link>
      </div>
    </section>
  );
}
