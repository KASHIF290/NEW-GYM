# M.S Fitness Gym — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Zero-cost stack, built to deploy on Vercel's free tier.

## 1. Local setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Contact is handled entirely via WhatsApp (`wa.me` link) and a direct `tel:` call button — no form, no third-party service, no environment variables needed.

## 2. Deploy to Vercel (free)

1. Push this project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → sign up free (use GitHub login).
3. Click **New Project** → import your repo.
4. Vercel auto-detects Next.js — no config needed.
5. Click **Deploy**. You'll get a live URL like `ms-fitness-gym.vercel.app`.
6. To add a custom domain later: **Project → Settings → Domains** → follow Vercel's DNS instructions.

## 3. Info needed from client before launch

This is the master checklist — nothing below should go live until confirmed.

| Item | Where it lives in code | Status |
|---|---|---|
| Phone numbers (confirmed from business card) | `lib/data.ts` → `phonePrimary`, `phoneSecondary`, `phoneDisplay` | ✅ Confirmed |
| WhatsApp number | `lib/data.ts` → `whatsappNumber` | ✅ Confirmed (using primary card number) |
| Address, website, email (confirmed from business card) | `lib/data.ts` → `business` | ✅ Confirmed |
| Floor, lift, locker room, sauna | `lib/data.ts` → `facilities` | ✅ Confirmed |
| One-time admission fee | `lib/data.ts` → `admissionFee` | ✅ Confirmed |
| Main Trainer (Soumik Das) | `lib/data.ts` → `trainers` | ✅ Confirmed |
| **Real logo file** | `public/logo.png` | ⬜ **Add real file — see below** |
| Trainer photos for Soumik + additional trainer names/specialties | `lib/data.ts` → `trainers`, `public/trainers/` | ⬜ Client to provide (currently stock placeholders) |
| Real programs/classes offered | `lib/data.ts` → `programs` | ⬜ Client to confirm final wording |
| Membership pricing (all 4 tiers + features) | `lib/data.ts` → `membershipPlans` | ⬜ Client to confirm final numbers |
| Real member testimonials (do not fabricate) | `lib/data.ts` → `testimonials` | ⬜ Client to provide |
| Gallery photos | `public/gallery/` | ✅ Real gym photos in place |
| Reel video orientation | `public/gallery/gym-reel.mp4` | ✅ Fixed — re-rotated with clean caption bar |

**Do not replace placeholder pricing, testimonials, or trainer bios with invented content** — anything still marked "client to provide" is intentionally left as-is so nothing fabricated accidentally ships to a real business's site.

## 5. Brand system

The site uses a black/lime/white palette pulled directly from the gym's signage, defined in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `ink` | `#000000` | Primary background |
| `ink-panel` | `#0D0D0D` | Cards / raised surfaces |
| `ink-soft` | `#141414` | Alternate section background |
| `lime` | `#8FD300` | Primary accent (CTAs, headings, icons) |
| `lime-light` / `lime-dark` | `#A6E62E` / `#6FA300` | Hover states |
| `paper` | `#FFFFFF` | Primary text |
| `paper-dim` / `paper-faint` | `#B3B3B3` / `#7A7A7A` | Secondary / tertiary text |

The whole site — nav, hero, every section, forms, footer — uses this one system now instead of switching between light and dark sections.

### Adding the real logo

The site is wired to display `public/logo.png` in the navbar, hero, and footer (circular, ~44–88px depending on placement). Your actual trademarked badge artwork wasn't recreated — export the real logo file (transparent PNG or square JPG, at least 200×200px) and drop it in as `public/logo.png`. Until then, those spots will show a broken image icon — the text wordmark (`M.S FITNESS`) still displays everywhere as a fallback.

The favicon (`public/favicon.svg`) is a lime-on-black placeholder — replace it with a proper favicon generated from your real logo when ready (e.g. via [realfavicongenerator.net](https://realfavicongenerator.net)).

## 6. Replacing placeholder images

Drop real photos into these paths (same filenames, or update the paths in `lib/data.ts`):
- `public/logo.png` — real logo badge (see above)
- `public/hero.jpg` — hero background (1600×1000px or larger recommended)
- `public/gallery/placeholder-1.jpg`, `-2.jpg`, `-3.jpg` — reused in rotation across the 9-image grid; add more and update `lib/data.ts` → `galleryImages` for unique photos
- `public/trainers/placeholder-1.jpg`, `-2.jpg`, `-3.jpg` — trainer headshots (3:4 portrait ratio)

## 7. Project structure

```
app/
  layout.tsx       — fonts, metadata, SEO
  page.tsx         — assembles all sections
  globals.css       — base styles, design tokens (plate motif, grain overlay)
components/
  Navbar.tsx, Hero.tsx, About.tsx, Programs.tsx, Membership.tsx,
  Gallery.tsx, Testimonials.tsx, Contact.tsx, Footer.tsx, WhatsAppButton.tsx
lib/
  data.ts          — ALL content lives here; edit this file to update copy/pricing/etc.
public/
  logo.png, hero.jpg, gallery/, trainers/, favicon.svg
```

To change any text, price, or contact detail, start in `lib/data.ts` — nearly everything pulls from there.
