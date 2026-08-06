"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink-soft px-6 py-24 text-paper">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end gap-4">
          <span className="plate text-lime">04</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">Inside</p>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
              Gallery
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {galleryImages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="relative aspect-square overflow-hidden bg-ink-panel"
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={item.alt}
                    className="h-full w-full object-cover"
                  />
                  <span className="pointer-events-none absolute right-2 top-2 rounded-sm bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-lime">
                    Reel
                  </span>
                </>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
