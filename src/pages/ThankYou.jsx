import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, CalendarClock, UserRound, BookOpen, Sparkles } from "lucide-react";

const STEPS = [
  { icon: CheckCircle2, title: "Payment Confirmed", desc: "Your free trial class is booked and secured." },
  { icon: UserRound, title: "Teacher Matching", desc: "We're matching your child with a qualified Tajweed teacher based on your preferences." },
  { icon: CalendarClock, title: "Scheduling", desc: "You'll receive a confirmation within 24 hours to confirm your class time." },
  { icon: BookOpen, title: "Start Learning", desc: "Join your live one-on-one class from any device, anywhere in the world." }
];

export default function ThankYou() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (active >= STEPS.length - 1) return;
    const t = setTimeout(() => setActive((a) => a + 1), 1100);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="min-h-screen bg-vellum flex flex-col items-center">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-2xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-forest text-vellum shadow-xl animate-fade-up">
          <CheckCircle2 className="h-10 w-10 text-gold" />
        </div>
        <h1 className="mt-7 font-heading text-3xl sm:text-5xl font-extrabold text-ink text-balance">
          Thank You — Your Class Is Booked!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're excited to welcome you to Al Bayan Learning Centre. Here's what happens next.
        </p>

        <div className="mt-12 text-left">
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />
            {STEPS.map((s, i) => {
              const done = i <= active;
              const Icon = s.icon;
              return (
                <div key={s.title} className={`relative pb-8 transition-all duration-500 ${done ? "opacity-100" : "opacity-40"}`}>
                  <span className={`absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-vellum transition-colors ${done ? "bg-forest" : "bg-border"}`}>
                    <Icon className={`h-3.5 w-3.5 ${done ? "text-gold" : "text-muted-foreground"}`} />
                  </span>
                  <h3 className={`font-heading text-lg font-semibold ${done ? "text-forest" : "text-ink"}`}>{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-forest-dark">
          <Sparkles className="h-4 w-4 text-gold" />
          Keep an eye on your email — we'll reach out shortly.
        </div>

        <div className="mt-10">
          <Link to="/" className="inline-flex items-center justify-center rounded-lg bg-forest px-7 py-3.5 text-base font-semibold text-vellum shadow-md hover:bg-forest-dark transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}