import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  { name: "Aisha M.", location: "Dubai, UAE", quote: "My daughter's Tajweed improved noticeably in just a few weeks. The teacher is patient and truly qualified." },
  { name: "Yusuf K.", location: "London, UK", quote: "Finally found a class that fits our timezone. The one-on-one attention made all the difference for my son." },
  { name: "Fatima R.", location: "Houston, USA", quote: "I was nervous about the trial, but the teacher was so warm. We signed up for the monthly plan right after." },
  { name: "Bilal H.", location: "Abu Dhabi, UAE", quote: "Being able to choose a male teacher for my boys mattered to us. Excellent, structured lessons." },
  { name: "Sara L.", location: "Manchester, UK", quote: "The trial class showed me exactly where my recitation was off. Worth far more than the price of admission." },
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
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const d = Math.abs(child.offsetLeft + child.offsetWidth / 2 - center);
      if (d < best) { best = d; nearest = i; }
    });
    setActive(nearest);
  };

  const goTo = (i) => {
    const el = sliderRef.current;
    const child = el?.children[i];
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-12 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Social Proof</p>
          <h2 className="mt-2 font-heading text-2xl sm:text-4xl font-bold text-ink">Trusted by Families in the UAE, UK & USA</h2>
          <p className="mt-3 text-muted-foreground">Real reviews, captured straight from parents' phones.</p>
        </motion.div>
        {/* Mobile: swipeable snap slider. sm+: regular grid. */}
        <div ref={sliderRef} onScroll={handleScroll} className="mt-8 sm:mt-14 -mx-4 px-4 py-8 flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:py-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 sm:overflow-visible">
          {REVIEWS.map((r, i) => (
            <div key={r.name} className="shrink-0 basis-[78%] snap-center sm:basis-auto sm:shrink">
              <PhoneMockup r={r} i={i} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-dark text-vellum shadow transition-opacity disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-gold" : "w-2 bg-forest/25"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => goTo(Math.min(REVIEWS.length - 1, active + 1))}
            disabled={active === REVIEWS.length - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-dark text-vellum shadow transition-opacity disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}