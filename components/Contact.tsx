"use client";

import { motion } from "framer-motion";
import { business, facilities } from "@/lib/data";

export default function Contact() {
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi, I'd like to know more about membership at M.S Fitness Gym."
  )}`;
  const callHref = `tel:+91${business.phonePrimary}`;

  return (
    <section id="contact" className="bg-ink-soft px-6 py-24 text-paper">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end gap-4">
          <span className="plate text-lime">06</span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">Start Today</p>
            <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
              Get In Touch
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="font-body text-lg leading-relaxed text-paper/70">
              Fastest way to reach us — chat with us directly on WhatsApp or give us a call.
              We&apos;ll help you pick the right plan and get you started.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-[#25D366] px-8 py-4 font-display text-sm uppercase tracking-widest text-ink transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-ink" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.13.11-1.83-.12-.42-.14-.96-.32-1.65-.62-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.93.92.29.14.48.22.55.34.07.13.07.72-.17 1.4z" />
                </svg>
                Chat on WhatsApp
              </a>

              <a
                href={callHref}
                className="inline-flex flex-1 items-center justify-center gap-2 border border-lime px-8 py-4 font-display text-sm uppercase tracking-widest text-lime transition-colors hover:bg-lime hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
            </div>

            <div className="space-y-2 font-body text-sm text-paper/70">
              <p>{business.address}</p>
              <p className="text-lime">
                {facilities.floor}
                {facilities.liftAvailable ? " · Lift Available" : ""}
              </p>
              <p>{business.hours} · {business.hoursSunday}</p>
              <p>{business.phoneDisplay}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="aspect-video w-full overflow-hidden border border-paper/10">
              <iframe
                src={business.mapEmbedSrc}
                title="M.S Fitness Gym location"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
