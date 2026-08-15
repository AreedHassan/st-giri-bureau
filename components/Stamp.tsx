type StampVariant = "unverified" | "filed" | "sealed" | "confidential";

const LABELS: Record<StampVariant, string> = {
  unverified: "UNVERIFIED",
  filed: "FILED",
  sealed: "SEALED",
  confidential: "CONFIDENTIAL",
};

export default function Stamp({
  variant,
  animate = false,
}: {
  variant: StampVariant;
  animate?: boolean;
}) {
  return (
    <span
      className={`inline-block border-[1.5px] border-bureau-accent text-bureau-accent px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] uppercase -rotate-6 select-none ${
        animate ? "animate-stamp-in" : ""
      }`}
      style={{ opacity: animate ? 0 : 1 }}
    >
      {LABELS[variant]}
    </span>
  );
}
