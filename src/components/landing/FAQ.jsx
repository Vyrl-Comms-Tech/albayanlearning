import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Is this really just $10?",
    a: "Yes. Your first live class is $10, and if you're not happy with it, we refund the full amount — no conditions."
  },
  {
    q: "Are the teachers actually qualified?",
    a: "Yes. All our teachers are Tajweed-certified, and Al Bayan Learning Centre is ISO-certified as an institution."
  },
  {
    q: "What age is this suitable for?",
    a: "We teach children and adults, from complete beginners (Qaida) through to Hifz and Tajweed mastery — classes are paced to the student's level."
  },
  {
    q: "Will the class work with our timezone?",
    a: "Yes — we teach families across the UAE, UK, and USA, with flexible scheduling across all timezones."
  },
  {
    q: "What happens after the trial?",
    a: "There's no obligation to continue. If you'd like to keep going, we'll walk you through our monthly plans starting at AED 100/month."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">FAQ</p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-ink">Common Questions</h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className={`font-heading text-lg font-semibold transition-colors ${isOpen ? "text-forest" : "text-ink"}`}>
                    {item.q}
                  </span>
                  <span className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-gold text-ink" : "bg-forest/10 text-forest"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="relative pl-5 pr-2 text-muted-foreground">
                      <span className="absolute left-0 top-1 bottom-1 w-0.5 bg-gold" />
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}