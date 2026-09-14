import React from "react";
import { CalendarCheck, UserRound, Laptop } from "lucide-react";
import CtaButton from "./CtaButton";

const STEPS = [
  { icon: CalendarCheck, title: "Book your class", desc: "$10, fully refundable, takes 60 seconds." },
  { icon: UserRound, title: "Get matched with a teacher", desc: "Tell us your preference (male/female) and best timing." },
  { icon: Laptop, title: "Start your live class", desc: "One-on-one, from any device, anywhere in the world." }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">How It Works</p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-ink">Three Simple Steps</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-border bg-card p-8 shadow-sm">
              <span className="absolute -top-4 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-forest text-vellum font-heading font-bold text-sm">
                {i + 1}
              </span>
              <Icon className="h-8 w-8 text-forest" strokeWidth={1.5} />
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton size="lg">Book My $10 Class</CtaButton>
        </div>
      </div>
    </section>
  );
}