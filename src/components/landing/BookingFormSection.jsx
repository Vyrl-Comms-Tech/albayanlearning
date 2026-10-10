import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import GHLBookingFlow from "./GHLBookingFlow";

export default function BookingFormSection() {
  return (
    <section id="book" className="py-12 sm:py-32">
      <div className="mx-auto max-w-2xl px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-forest-dark">
            <ShieldCheck className="h-4 w-4 text-gold" /> Free Trial
          </div>
          <h2 className="mt-5 font-heading text-2xl sm:text-4xl font-bold text-ink">Book Your Free Trial Live Class Now</h2>
          <p className="mt-3 text-muted-foreground">Fill in your details and continue to secure checkout — takes 60 seconds.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 sm:mt-10 rounded-2xl bg-card border border-border p-0"
          style={{
            height: "auto",
            overflow: "visible",
          }}
        >
          <GHLBookingFlow />
        </motion.div>
      </div>
    </section>
  );
}