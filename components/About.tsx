"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { trainers, facilities } from "@/lib/data";

const facilityList = [
  facilities.floor && `${facilities.floor}${facilities.liftAvailable ? " · Lift Available" : ""}`,
  facilities.lockerRoom && "Locker Room Available",
  facilities.sauna.available &&
    `Sauna Room — ${facilities.sauna.cost}, ${facilities.sauna.schedule}`,
].filter(Boolean) as string[];

export default function About() {
  return (
    <section id="about" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end gap-4">
          <span className="plate text-lime">01</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">The Gym</p>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
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
            <p className="font-body text-lg leading-relaxed text-paper-dim">
              M.S Fitness Gym is the best gym in the Tikiapara area, built on one simple
              idea — no shortcuts, no gimmicks, just proper equipment and coaching that gets
              results. The floor is fully loaded with multiple equipment for strength,
              cardio, and functional training, set inside a clean, positive, and supportive
              environment led by Main Trainer Soumik Das. Rated 4.4/5 by 600+ members on
              Google, the gym keeps its floor open early to late so training fits around
              your day, not the other way around. Whether you're here to build strength,
              drop weight, or just stay consistent, the team's focus stays the same: showing
              up for you every single day.
            </p>

            <ul className="mt-8 space-y-2 border-t border-paper-dim/20 pt-6">
              {facilityList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-mono text-sm text-paper-dim"
                >
                  <span className="mt-1 text-lime">—</span>
                  {item}
                </li>
              ))}
            </ul>
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
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-panel">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 33vw, 200px"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-3 font-display text-sm uppercase tracking-wide text-paper">
                  {t.name}
                </p>
                <p className="font-mono text-xs text-paper-dim">{t.specialty}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
