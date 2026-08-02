"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#membership", label: "Membership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-iron/95 backdrop-blur-sm border-b border-brass/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide text-chalk">
          M.S <span className="text-brass">FITNESS</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-sm uppercase tracking-widest text-chalk-dim transition-colors hover:text-brass"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-none border border-brass px-5 py-2 font-display text-sm uppercase tracking-widest text-brass transition-colors hover:bg-brass hover:text-iron md:inline-block"
        >
          Free Trial
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-chalk transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-chalk transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-chalk transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-brass/20 bg-iron px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-base uppercase tracking-widest text-chalk-dim hover:text-brass"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block border border-brass px-5 py-2 font-display text-sm uppercase tracking-widest text-brass"
              >
                Free Trial
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
