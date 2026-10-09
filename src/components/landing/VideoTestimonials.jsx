import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Image } from "@/components/ui/image";

const VIDEOS = [
  { name: "Hana, age 9", tag: "Dubai", img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/12d051682_generated_image.png", duration: "0:42" },
  { name: "Zayd, age 11", tag: "London", img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/97ab44feb_generated_image.png", duration: "0:55" },
  { name: "Maryam, age 7", tag: "Houston", img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/0d5890708_generated_image.png", duration: "0:38" },
  { name: "Ibrahim, age 10", tag: "Abu Dhabi", img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/ed0fd55d5_generated_image.png", duration: "0:49" }
];

export default function VideoTestimonials() {
  return (
    <section className="py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Video Testimonials</p>
          <h2 className="mt-2 font-heading text-2xl sm:text-4xl font-bold text-ink">Hear It From the Students</h2>
          <p className="mt-3 text-muted-foreground">Short stories from the families who started with one free trial class.</p>
        </motion.div>

        <div className="mt-8 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {VIDEOS.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40 sm:h-52 sm:w-52 rounded-full overflow-hidden ring-2 ring-gold/40 shadow-xl transition-all duration-500 group-hover:rounded-2xl group-hover:scale-105 group-hover:glow-green cursor-pointer">
                <Image src={v.img} alt={v.name} className="absolute inset-0 h-full w-full" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/25 to-forest-dark/35 transition-opacity group-hover:from-forest-dark/90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90 text-ink shadow-lg ring-4 ring-vellum/10 transition-transform duration-300 group-hover:scale-125">
                    <Play className="h-6 w-6 fill-ink" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-vellum">{v.duration}</span>
                <span className="absolute top-3 left-3 rounded-full bg-forest px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-vellum">Play</span>
              </div>
              <p className="mt-4 font-heading text-lg font-semibold text-ink">{v.name}</p>
              <p className="text-sm text-muted-foreground">{v.tag}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Tap a student to watch their story — videos coming soon.</p>
      </div>
    </section>
  );
}