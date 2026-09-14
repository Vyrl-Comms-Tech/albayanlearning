import React from "react";
import { ShieldCheck, RotateCcw, Users } from "lucide-react";
import CtaButton from "./CtaButton";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 bg-forest-dark text-vellum relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-balance">
          Your Child's Quran Journey Starts With One Class
        </h2>
        <p className="mt-5 text-lg text-vellum/80">
          $10. Fully refundable. Live, one-on-one, with a qualified teacher.
        </p>
        <div className="mt-9">
          <CtaButton size="lg">Book My $10 Class</CtaButton>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-vellum/70">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold" /> No commitment after your trial</span>
          <span className="inline-flex items-center gap-1.5"><RotateCcw className="h-4 w-4 text-gold" /> Refunded instantly if not satisfied</span>
          <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-gold" /> 2,000+ families already started</span>
        </div>
      </div>
    </section>
  );
}