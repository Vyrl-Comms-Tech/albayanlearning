import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Users, Star, UserRound } from "lucide-react";
import CountUp from "./CountUp";

const STATS = [
  { icon: BadgeCheck, end: null, label: "ISO Certified" },
  { icon: Users, end: 2000, suffix: "+", label: "Students Taught" },
  { icon: Star, end: 4.8, decimals: 1, suffix: "/5", label: "Rated by Parents" },
  { icon: UserRound, end: null, label: "Male & Female Teachers" }
];

export default function TrustBar() {
  return (
    <section className="relative bg-forest-dark text-vellum overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-44 w-[40rem] rounded-full bg-leaf/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 28, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                className="group relative flex flex-col items-center text-center gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-vellum/10 bg-vellum/5 px-2 py-4 sm:px-4 sm:py-7 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-gold/40 hover:bg-vellum/10"
              >
                <div className="absolute -top-px left-1/2 -translate-x-1/2 h-8 w-px bg-gradient-to-b from-gold to-transparent" />
                <div className="flex h-9 w-9 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-4 w-4 sm:h-7 sm:w-7 text-gold" strokeWidth={1.5} />
                </div>
                <div className="font-heading text-xl sm:text-4xl font-extrabold text-vellum leading-none">
                  {s.end != null ? (
                    <CountUp end={s.end} decimals={s.decimals || 0} suffix={s.suffix || ""} />
                  ) : (
                    <span className="text-gold">✓</span>
                  )}
                </div>
                <div className="text-xs sm:text-base text-vellum/75 font-medium">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}