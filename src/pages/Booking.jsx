import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import GHLCalendar from "@/components/landing/GHLCalendar";

export default function Booking() {
  return (
    <div className="min-h-screen bg-vellum flex flex-col">
      <div className="mx-auto w-full max-w-3xl px-2 sm:px-6 py-6 sm:py-16">
        <Link to="/" className="inline-flex ml-2 sm:ml-0 items-center gap-2 text-sm font-medium text-forest hover:text-forest-dark transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <div className="mt-6 sm:mt-8 text-center px-2 sm:px-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-forest-dark">
            <ShieldCheck className="h-4 w-4 text-gold" /> Free Trial
          </div>
          <h1 className="mt-5 font-heading text-2xl sm:text-4xl font-extrabold text-ink">Book Your Free Trial Live Class</h1>
          <p className="mt-3 text-muted-foreground">Fill in your details, choose a teacher, and continue to secure checkout.</p>
        </div>
        <div className="mt-6 sm:mt-10 rounded-2xl bg-card border border-border shadow-xl p-0">
          <GHLCalendar />
        </div>
      </div>
    </div>
  );
}