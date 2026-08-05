"use client";

import { motion } from "framer-motion";
import { business, testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between gap-4">
          <div className="flex items-end gap-4">
            <span className="plate text-lime">05</span>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">Members</p>
              <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
                Testimonials
              </h2>
            </div>
          </div>
          <p className="hidden font-mono text-sm text-paper-dim sm:block">
            {business.googleRating}★ · {business.googleReviewCount} Google reviews
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-paper-dim/20 bg-ink-panel/50 p-8"
            >
              <div className="mb-4 font-mono text-lime" aria-label={`${t.rating} out of 5 stars`}>
                {"★".repeat(t.rating)}
                <span className="text-paper-dim/30">{"★".repeat(5 - t.rating)}</span>
              </div>
              <p className="font-body text-sm italic leading-relaxed text-paper-dim">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 font-display text-sm uppercase tracking-wide text-paper">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
