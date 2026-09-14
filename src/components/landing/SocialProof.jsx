import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Aisha M.", location: "Dubai, UAE", quote: "My daughter's Tajweed improved noticeably in just a few weeks. The teacher is patient and truly qualified." },
  { name: "Yusuf K.", location: "London, UK", quote: "Finally found a class that fits our timezone. The one-on-one attention made all the difference for my son." },
  { name: "Fatima R.", location: "Houston, USA", quote: "I was nervous about the $10 trial, but the teacher was so warm. We signed up for the monthly plan right after." },
  { name: "Bilal H.", location: "Abu Dhabi, UAE", quote: "Being able to choose a male teacher for my boys mattered to us. Excellent, structured lessons." },
  { name: "Sara L.", location: "Manchester, UK", quote: "The trial class showed me exactly where my recitation was off. Worth far more than $10." },
  { name: "Omar T.", location: "New Jersey, USA", quote: "No app to download, no hassle. My kids log in from their tablet and love their teacher." }
];

function Stars({ className = "" }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3 w-3 fill-gold text-gold" />
      ))}
    </div>
  );
}

function PhoneMockup({ r, i }) {
  const rotate = i % 2 === 0 ? -2 : 2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[270px]"
    >
      <div className="rounded-[2.2rem] bg-black p-2.5 shadow-2xl ring-1 ring-forest-dark/20 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0">
        <div className="rounded-[1.7rem] overflow-hidden bg-vellum">
          <div className="flex items-center justify-between px-4 py-1.5 bg-forest-dark text-vellum text-[10px] font-medium">
            <span>9:41</span>
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Al Bayan</span>
            <span>•••</span>
          </div>
          <div className="px-4 py-3 bg-forest-dark text-vellum">
            <p className="text-sm font-semibold">Parent Reviews</p>
            <Stars className="mt-1" />
          </div>
          <div className="px-4 py-4 bg-secondary/40 min-h-[160px]">
            <div className="rounded-2xl rounded-tl-sm bg-card p-3.5 shadow-sm border border-border">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-forest/15 flex items-center justify-center font-heading font-bold text-forest text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink leading-tight">{r.name}</p>
                  <p className="text-[10px] text-muted-foreground">{r.location}</p>
                </div>
              </div>
              <Stars className="mt-2.5" />
              <p className="mt-2 text-[13px] text-ink leading-relaxed">{r.quote}</p>
              <p className="mt-2 text-[10px] text-muted-foreground text-right">9:41 AM ✓✓</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section id="reviews" className="py-20 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Social Proof</p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-ink">Trusted by Families in the UAE, UK & USA</h2>
          <p className="mt-3 text-muted-foreground">Real reviews, captured straight from parents' phones.</p>
        </motion.div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {REVIEWS.map((r, i) => (
            <PhoneMockup key={r.name} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}