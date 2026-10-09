import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SHOTS = [2, 3, 4, 5, 6, 7].map((n) => ({ img: `/${n}.jpg`, caption: "Award Ceremony" }));

export default function Gallery() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const kids = Array.from(el.children);
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
      setActive(kids.length - 1);
      return;
    }
    const origin = kids[0].offsetLeft;
    let nearest = 0;
    let best = Infinity;
    kids.forEach((child, i) => {
      const d = Math.abs(child.offsetLeft - origin - el.scrollLeft);
      if (d < best) { best = d; nearest = i; }
    });
    setActive(nearest);
  };

  const goTo = (i) => {
    const el = sliderRef.current;
    const child = el?.children[i];
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - el.children[0].offsetLeft, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Gallery</p>
          <h2 className="mt-2 font-heading text-2xl sm:text-4xl font-bold text-ink">Moments from Al Bayan Academy</h2>
          <p className="mt-3 text-muted-foreground">A look at our students, teachers, and award ceremonies.</p>
        </motion.div>

        {/* Mobile: swipeable snap slider. sm+: regular grid. */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="mt-10 sm:mt-14 -mx-4 px-4 scroll-px-4 py-4 flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:py-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible"
        >
          {SHOTS.map((s, i) => (
            <motion.div
              key={s.img}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group shrink-0 basis-[88%] sm:basis-auto sm:shrink snap-start rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={s.img}
                  alt={s.caption}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-dark text-vellum shadow transition-opacity disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {SHOTS.map((s, i) => (
              <button
                key={s.img}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-gold" : "w-2 bg-forest/25"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => goTo(Math.min(SHOTS.length - 1, active + 1))}
            disabled={active === SHOTS.length - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-dark text-vellum shadow transition-opacity disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
