"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { trainers } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-iron px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end gap-4">
          <span className="plate text-brass">01</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">The Gym</p>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-chalk sm:text-5xl">
              About Us
            </h2>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-lg leading-relaxed text-chalk-dim">
              {/* PLACEHOLDER COPY — replace with the real story once client provides it */}
              [Gym story — client to provide: when it was founded, what makes it different,
              what members can expect. Rated 4.4/5 by 600+ members on Google — a strong
              foundation to build the story around.]
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {trainers.map((t) => (
              <div key={t.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-iron-panel">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 33vw, 200px"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-3 font-display text-sm uppercase tracking-wide text-chalk">
                  {t.name}
                </p>
                <p className="font-mono text-xs text-chalk-dim">{t.specialty}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
