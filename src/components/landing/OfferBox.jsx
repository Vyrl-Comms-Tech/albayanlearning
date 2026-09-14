import React from "react";
import { Check } from "lucide-react";
import CtaButton from "./CtaButton";

const PERKS = [
  "One-on-one live class (not a recording, not a group session)",
  "Full 30–45 minute session with a qualified Tajweed-trained teacher",
  "Choice of male or female teacher",
  "Any device, any timezone — no app download needed",
  "100% refundable if you're not satisfied — no questions asked"
];

export default function OfferBox() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
          <div className="p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">The Offer</p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-ink">What You Get for $10</h2>
            <ul className="mt-8 space-y-4">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Check className="h-4 w-4 text-forest" strokeWidth={3} />
                  </span>
                  <span className="text-ink">{perk}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CtaButton size="lg">Book My $10 Class</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}