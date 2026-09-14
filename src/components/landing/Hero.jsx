import React from "react";
import { ShieldCheck, Play, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import CtaButton from "./CtaButton";

const CHILD_IMG = "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/a41b7ff03_generated_image.png";

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
              $10 Fully Refundable Trial
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-ink text-balance">
              Try a Live Quran Class for <span className="text-forest">$10</span> — Fully Refundable
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
              One-on-one with a qualified teacher. See why 2,000+ families started here.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <CtaButton size="lg">Book My $10 Class</CtaButton>
              <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-forest font-medium hover:text-forest-dark transition-colors">
                <MessageCircle className="h-5 w-5" />
                Prefer WhatsApp? Chat with us instantly →
              </a>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="group relative aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-forest-dark/30 transition-all duration-500 hover:glow-green">
              <Image src={CHILD_IMG} alt="A student in a live one-on-one Quran class" className="absolute inset-0 h-full w-full" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/25 to-forest-dark/40" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-forest px-3 py-1 text-xs font-semibold text-vellum shadow-lg">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                LIVE CLASS PREVIEW
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/90 text-ink shadow-xl ring-8 ring-vellum/10 transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-8 w-8 fill-ink" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 rounded bg-black/60 px-2 py-0.5 text-xs text-vellum/90 font-medium">0:00</div>
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}