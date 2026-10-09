import React from "react";
import { ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";
import VideoModalPreview from "./VideoModalPreview";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-vellum via-vellum to-secondary/40" />
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-forest-dark mb-6">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Free Trial
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-ink text-balance">
              Try a Live Quran Class as a <span className="text-forest">Free Trial</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
              One-on-one with a qualified teacher. See why 2,000+ families started here.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <CtaButton size="lg">Book My Free Trial Class</CtaButton>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <VideoModalPreview />
          </div>
        </div>
      </div>
    </section>
  );
}