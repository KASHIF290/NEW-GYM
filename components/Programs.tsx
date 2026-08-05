"use client";

import { motion } from "framer-motion";
import { programs } from "@/lib/data";

export default function Programs() {
  return (
    <section id="programs" className="bg-ink-soft px-6 py-24 text-paper">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end gap-4">
          <span className="plate text-lime">02</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">Train</p>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
              Programs
            </h2>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border border-paper/10 bg-ink-panel sm:grid-cols-2">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col justify-between gap-6 bg-ink-soft p-8"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-2xl uppercase tracking-tight text-paper">
                  {p.name}
                </h3>
                <span className="plate shrink-0 border-2 text-sm text-lime">{p.plate}</span>
              </div>
              <p className="font-body text-sm leading-relaxed text-paper/70">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
