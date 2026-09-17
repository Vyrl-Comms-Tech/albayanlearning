import React from "react";
import { cn } from "@/lib/utils";

export default function CtaButton({ children, className, size = "md" }) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-sm,"
  };
  return (
    // Plain <a> (not react-router's Link) so this does a full page reload,
    // ensuring the booking calendar always mounts fresh.
    <a
      href="/booking"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-gold font-semibold text-ink shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl animate-pulse-gold",
        sizes[size],
        className
      )}
    >
      {children}
    </a>
  );
}