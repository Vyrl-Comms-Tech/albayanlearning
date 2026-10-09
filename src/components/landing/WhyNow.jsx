import React from "react";

export default function WhyNow() {
  return (
    <section className="pt-0 pb-12 sm:pb-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
              <img src="/1.jpg" alt="A child studying at a wooden desk in morning light" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden sm:flex items-center gap-2 rounded-lg bg-forest-dark px-4 py-3 text-vellum shadow-lg">
              <span className="font-heading text-2xl text-gold">2,000+</span>
              <span className="text-sm leading-tight">families<br/>started here</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Why Now</p>
            <h2 className="mt-2 font-heading text-2xl sm:text-4xl font-bold text-ink text-balance">
              Every Month You Wait Is a Month of Habits Forming the Wrong Way
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
              Reading Quran without correction doesn't just stay the same — it gets harder to fix the longer it goes uncorrected. One live session with a qualified teacher shows you exactly where your child stands, and what to fix first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}