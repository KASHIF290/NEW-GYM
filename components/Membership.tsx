"use client";

import { motion } from "framer-motion";
import { membershipPlans } from "@/lib/data";

export default function Membership() {
  return (
    <section id="membership" className="bg-iron px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end gap-4">
          <span className="plate text-brass">03</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">Join</p>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-chalk sm:text-5xl">
              Membership
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {membershipPlans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col justify-between p-8 ${
                plan.featured
                  ? "border-2 border-brass bg-iron-panel"
                  : "border border-chalk-dim/20 bg-iron-panel/50"
              }`}
            >
              <div>
                {plan.featured && (
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brass">
                    Most Popular
                  </p>
                )}
                <h3 className="font-display text-2xl uppercase tracking-tight text-chalk">
                  {plan.tier}
                </h3>
                <p className="mt-2 font-mono text-3xl text-brass">{plan.price}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-chalk-dim">
                      <span className="mt-1 text-brass">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-8 block py-3 text-center font-display text-sm uppercase tracking-widest transition-colors ${
                  plan.featured
                    ? "bg-brass text-iron hover:bg-brass-light"
                    : "border border-chalk-dim text-chalk hover:border-brass hover:text-brass"
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
