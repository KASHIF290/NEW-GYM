"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { business } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="grain-overlay relative flex min-h-screen items-end overflow-hidden bg-ink">
      {/* background photo placeholder — replace /public/hero.jpg with real gym photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Image
            src="/logo.png"
            alt={business.name}
            width={88}
            height={88}
            className="h-20 w-20 rounded-full object-cover ring-2 ring-lime/40 sm:h-22 sm:w-22"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-lime"
        >
          Tikiapara · Howrah
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl font-semibold uppercase leading-[0.95] tracking-tight text-paper sm:text-7xl md:text-8xl"
        >
          Built in
          <br />
          <span className="text-lime">Howrah.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-md font-body text-lg text-paper-dim"
        >
          {business.name} — {business.googleReviewCount} members trained. No shortcuts, no gimmicks.
          Just equipment, coaching, and results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="bg-lime px-8 py-4 font-display text-sm uppercase tracking-widest text-ink transition-colors hover:bg-lime-light"
          >
            Book a Free Trial
          </a>
          <a
            href="#programs"
            className="border border-paper-dim px-8 py-4 font-display text-sm uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
          >
            See Programs
          </a>
        </motion.div>

        {/* stat bar — styled like a loaded barbell, each stat a plate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center gap-6 border-t border-paper-dim/20 pt-8"
        >
          <div className="flex items-center gap-3 text-paper">
            <span className="plate text-lime">{business.googleRating}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-paper-dim">
              Google
              <br />
              Rating
            </span>
          </div>
          <div className="flex items-center gap-3 text-paper">
            <span className="plate text-lime">6-11</span>
            <span className="font-mono text-xs uppercase tracking-widest text-paper-dim">
              Mon–Sat
              <br />
              Open Hours
            </span>
          </div>
          <div className="hidden items-center gap-3 text-paper sm:flex">
            <span className="plate text-lime">600+</span>
            <span className="font-mono text-xs uppercase tracking-widest text-paper-dim">
              Members
              <br />
              Trained
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
