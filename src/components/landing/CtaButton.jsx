import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function CtaButton({ children, className, size = "md" }) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg"
  };
  return (
    <Link
      to="/booking"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-gold font-semibold text-ink shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl animate-pulse-gold",
        sizes[size],
        className
      )}
    >
      {children}
    </Link>
  );
}