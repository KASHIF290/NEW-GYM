import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-chalk-dim/10 bg-iron px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold uppercase tracking-wide text-chalk">
            M.S <span className="text-brass">Fitness</span>
          </p>
          <p className="mt-2 max-w-xs font-body text-sm text-chalk-dim">{business.address}</p>
          <p className="mt-1 font-body text-sm text-chalk-dim">
            {business.hours} · {business.hoursSunday}
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
              className="font-mono text-xs uppercase tracking-widest text-chalk-dim hover:text-brass"
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
            className="font-mono text-xs uppercase tracking-widest text-chalk-dim hover:text-brass"
          >
            Instagram
          </a>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-chalk-dim hover:text-brass"
          >
            Facebook
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl font-mono text-xs text-chalk-dim/50">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </p>
    </footer>
  );
}
