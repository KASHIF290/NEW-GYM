import Image from "next/image";
import { business, facilities } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-paper-dim/10 bg-ink px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={business.name}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <p className="font-display text-lg font-semibold uppercase tracking-wide text-paper">
              M.S <span className="text-lime">Fitness</span>
            </p>
          </div>
          <p className="mt-3 max-w-xs font-body text-sm text-paper-dim">{business.address}</p>
          <p className="mt-1 font-body text-sm text-paper-dim">
            {facilities.floor}
            {facilities.liftAvailable ? " · Lift Available" : ""}
          </p>
          <p className="mt-1 font-body text-sm text-paper-dim">
            {business.hours} · {business.hoursSunday}
          </p>
          <p className="mt-1 font-body text-sm text-paper-dim">
            {business.website} · {business.email}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-2">
          {[
            ["About", "#about"],
            ["Programs", "#programs"],
            ["Membership", "#membership"],
            ["Gallery", "#gallery"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs uppercase tracking-widest text-paper-dim hover:text-lime"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex gap-6">
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-paper-dim hover:text-lime"
          >
            Instagram
          </a>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-paper-dim hover:text-lime"
          >
            Facebook
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl font-mono text-xs text-paper-dim/50">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </p>
    </footer>
  );
}
