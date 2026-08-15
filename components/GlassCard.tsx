import { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass rounded-squircle p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}
