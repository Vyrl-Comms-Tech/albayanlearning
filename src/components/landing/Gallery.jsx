import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Image } from "@/components/ui/image";

const SHOTS = [
  { img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/a41b7ff03_generated_image.png", caption: "Live one-on-one classroom" },
  { img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/12d051682_generated_image.png", caption: "Student recitation feedback" },
  { img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/91b52638d_generated_image.png", caption: "Tajweed correction in real time" },
  { img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/97ab44feb_generated_image.png", caption: "Progress tracking" },
  { img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/0d5890708_generated_image.png", caption: "Interactive whiteboard" },
  { img: "https://media.base44.com/images/public/6aa7d718dfce26298911a44a/ed0fd55d5_generated_image.png", caption: "Parent dashboard updates" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Gallery</p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-ink">A Look Inside the Classroom</h2>
          <p className="mt-3 text-muted-foreground">Screenshots from our live classes, dashboards, and parent updates.</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOTS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-1.5 px-3 py-2 bg-forest-dark">
                <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-vellum/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-vellum/30" />
                <span className="ml-2 text-[10px] text-vellum/50 font-mono truncate">live.albayanlearning.com</span>
              </div>
              <div className="relative aspect-video overflow-hidden">
                <Image src={s.img} alt={s.caption} className="h-full w-full transition-transform duration-500 group-hover:scale-105" fittingType="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-vellum text-sm font-medium">{s.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          <Camera className="h-4 w-4 text-gold" /> Replace these placeholders with your own classroom screenshots.
        </p>
      </div>
    </section>
  );
}