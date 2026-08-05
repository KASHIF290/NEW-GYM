"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { business } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) next.name = "Enter your full name.";
    if (!/^[0-9+\-\s]{10,15}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (message.length < 5) next.message = "Tell us a little about your goals.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      console.error("NEXT_PUBLIC_FORMSPREE_ID is not set in .env.local");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi, I'd like to know more about membership at M.S Fitness Gym."
  )}`;

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
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-xs uppercase tracking-widest text-paper/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full border bg-transparent px-4 py-3 font-body text-paper placeholder:text-paper/30 focus:border-lime ${errors.name ? "border-alert" : "border-paper/20"}`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 font-mono text-xs text-alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block font-mono text-xs uppercase tracking-widest text-paper/60">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full border bg-transparent px-4 py-3 font-body text-paper placeholder:text-paper/30 focus:border-lime ${errors.phone ? "border-alert" : "border-paper/20"}`}
                placeholder="10-digit mobile number"
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 font-mono text-xs text-alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-xs uppercase tracking-widest text-paper/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={5}
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full border bg-transparent px-4 py-3 font-body text-paper placeholder:text-paper/30 focus:border-lime ${errors.message ? "border-alert" : "border-paper/20"}`}
                placeholder="What are your fitness goals?"
              />
              {errors.message && (
                <p id="message-error" className="mt-1 font-mono text-xs text-alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-lime px-8 py-4 font-display text-sm uppercase tracking-widest text-ink transition-colors hover:bg-lime-light disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Request Free Trial"}
            </button>

            {status === "success" && (
              <p role="status" className="font-mono text-sm text-lime-light">
                Thanks — we&apos;ll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="font-mono text-sm text-alert">
                Something went wrong. Please try WhatsApp instead, or call us directly.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
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

            <div className="space-y-2 font-body text-sm text-paper/70">
              <p>{business.address}</p>
              <p>{business.hours} · {business.hoursSunday}</p>
              <p>{business.phoneDisplay}</p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 font-display text-sm uppercase tracking-widest text-ink transition-opacity hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
