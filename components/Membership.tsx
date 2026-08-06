"use client";

import { motion } from "framer-motion";
import { membershipPlans, admissionFee } from "@/lib/data";

export default function Membership() {
  return (
    <section id="membership" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-end gap-4">
          <span className="plate text-lime">03</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">Join</p>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
              Membership
            </h2>
          </div>
        </div>

        <p className="mb-12 font-mono text-sm text-paper-dim">
          One-time admission fee: <span className="text-lime">{admissionFee}</span> (applies once, on joining, regardless of plan)
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {membershipPlans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col justify-between p-8 ${
                plan.featured
                  ? "border-2 border-lime bg-ink-panel"
                  : "border border-paper-dim/20 bg-ink-panel/50"
              }`}
            >
              <div>
                {plan.featured && (
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-lime">
                    Best Value
                  </p>
                )}
                <h3 className="font-display text-2xl uppercase tracking-tight text-paper">
                  {plan.tier}
                </h3>
                <p className="mt-2">
                  <span className="font-mono text-3xl text-lime">{plan.price}</span>
                  <span className="font-mono text-sm text-paper-dim">{plan.period}</span>
                </p>
                {plan.effectiveRate && (
                  <p className="mt-1 font-mono text-xs text-paper-dim">{plan.effectiveRate}</p>
                )}

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-paper-dim">
                      <span className="mt-1 text-lime">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-8 block py-3 text-center font-display text-sm uppercase tracking-widest transition-colors ${
                  plan.featured
                    ? "bg-lime text-ink hover:bg-lime-light"
                    : "border border-paper-dim text-paper hover:border-lime hover:text-lime"
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
