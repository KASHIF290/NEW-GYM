# M.S Fitness Gym — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Zero-cost stack, built to deploy on Vercel's free tier.

## 1. Local setup

```bash
npm install
cp .env.example .env.local
```

Open `.env.local` and add your Formspree form ID (see step 2).

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 2. Set up the contact form (Formspree — free)

1. Go to [formspree.io](https://formspree.io) → sign up free.
2. Create a new form.
3. Copy the form ID from the endpoint URL: `formspree.io/f/XXXXXXXX` → `XXXXXXXX` is your ID.
4. Paste it into `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID=XXXXXXXX`.
5. Free tier = 50 submissions/month. Upgrade only if the gym outgrows that.

## 3. Deploy to Vercel (free)

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
5. Before clicking Deploy, add the environment variable:
   - Key: `NEXT_PUBLIC_FORMSPREE_ID`
   - Value: your Formspree ID
6. Click **Deploy**. You'll get a live URL like `ms-fitness-gym.vercel.app`.
7. To add a custom domain later: **Project → Settings → Domains** → follow Vercel's DNS instructions.

## 4. Info needed from client before launch

This is the master checklist — nothing below should go live until confirmed.

| Item | Where it lives in code | Status |
|---|---|---|
| Correct phone number (two found in public listings: 09804611612 vs 7450000123) | `lib/data.ts` → `phonePrimary`, `phoneDisplay` | ⬜ Confirm with client |
| WhatsApp number (with country code, digits only, e.g. `917450000123`) | `lib/data.ts` → `whatsappNumber` | ⬜ Confirm with client |
| Gym story / About copy | `components/About.tsx` | ⬜ Client to provide |
| Trainer names, specialties, photos | `lib/data.ts` → `trainers`, `public/trainers/` | ⬜ Client to provide |
| Real programs/classes offered | `lib/data.ts` → `programs` | ⬜ Client to confirm |
| Membership pricing (all 3 tiers + features) | `lib/data.ts` → `membershipPlans` | ⬜ Client to provide |
| Real member testimonials (do not fabricate) | `lib/data.ts` → `testimonials` | ⬜ Client to provide |
| Real gym photos (hero + gallery) | `public/hero.jpg`, `public/gallery/` | ⬜ Client to provide |
| USPs (AC, women's hours, steam room, etc.) | Add to About/Programs copy | ⬜ Client to confirm |

**Do not replace placeholder pricing, testimonials, or trainer bios with invented content** — every placeholder is intentionally marked `[client to confirm]` so nothing fabricated accidentally ships to a real business's site.

## 5. Replacing placeholder images

Drop real photos into these paths (same filenames, or update the paths in `lib/data.ts`):
- `public/hero.jpg` — hero background (1600×1000px or larger recommended)
- `public/gallery/placeholder-1.jpg`, `-2.jpg`, `-3.jpg` — reused in rotation across the 9-image grid; add more and update `lib/data.ts` → `galleryImages` for unique photos
- `public/trainers/placeholder-1.jpg`, `-2.jpg`, `-3.jpg` — trainer headshots (3:4 portrait ratio)

## 6. Project structure

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
  hero.jpg, gallery/, trainers/, favicon.svg
```

To change any text, price, or contact detail, start in `lib/data.ts` — nearly everything pulls from there.
