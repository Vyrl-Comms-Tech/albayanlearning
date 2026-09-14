import React from "react";
import { Image } from "@/components/ui/image";

const CHILD_IMG = "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/a41b7ff03_generated_image.png";

export default function WhyNow() {
  return (
    <section className="py-20 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
              <Image src={CHILD_IMG} alt="A child studying at a wooden desk in morning light" className="h-full w-full" fittingType="fill" />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden sm:flex items-center gap-2 rounded-lg bg-forest-dark px-4 py-3 text-vellum shadow-lg">
              <span className="font-heading text-2xl text-gold">2,000+</span>
              <span className="text-sm leading-tight">families<br/>started here</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Why Now</p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-ink text-balance">
              Every Month You Wait Is a Month of Habits Forming the Wrong Way
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Reading Quran without correction doesn't just stay the same — it gets harder to fix the longer it goes uncorrected. One live session with a qualified teacher shows you exactly where your child stands, and what to fix first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}