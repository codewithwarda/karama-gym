# Fitness District — Next.js 15 Website

> Karama's Biggest 24/7 Warehouse Gym · Dubai, UAE

A production-ready, fully typed Next.js 15 website built with TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

Requirements: **Node.js 18+**, npm 9+

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 15 | React framework (App Router) |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations |
| Lucide React | 0.460 | Icons |

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, OG tags
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Tailwind directives + base styles
│
├── components/
│   ├── navbar/
│   │   └── Navbar.tsx      # Sticky nav, active section, mobile menu
│   ├── hero/
│   │   └── Hero.tsx        # Full-screen hero, stats, CTAs
│   ├── why/
│   │   └── Why.tsx         # 4 feature cards
│   ├── facilities/
│   │   ├── Facilities.tsx  # Section wrapper
│   │   └── FacilityCard.tsx
│   ├── membership/
│   │   └── Membership.tsx  # Benefits + plan card
│   ├── trainers/
│   │   ├── Trainers.tsx
│   │   └── TrainerCard.tsx
│   ├── testimonials/
│   │   ├── Testimonials.tsx
│   │   └── TestimonialCard.tsx
│   ├── gallery/
│   │   └── Gallery.tsx     # CSS grid masonry
│   ├── cta/
│   │   └── CtaBand.tsx     # Red full-bleed CTA band
│   ├── contact/
│   │   ├── Contact.tsx     # Section wrapper
│   │   ├── ContactInfo.tsx # Phone, location, hours, map
│   │   └── ContactForm.tsx # Validated form → WhatsApp
│   ├── footer/
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx      # Reusable Button + LinkButton
│       └── SectionHeader.tsx
│
├── data/
│   └── gymData.ts          # ALL content — edit this to update the site
│
├── hooks/
│   ├── useActiveSection.ts # Intersection Observer nav highlighting
│   └── useScrolled.ts      # Detects scroll position for navbar
│
├── lib/
│   ├── utils.ts            # scrollToSection, cn, whatsappLink, telLink
│   └── animations.ts       # Shared Framer Motion variants
│
└── types/
    └── index.ts            # TypeScript interfaces
```

---

## Architecture Decisions

### Data-Driven Content
All text content lives in `src/data/gymData.ts`. To update the gym name, phone number, trainers, or testimonials — **only edit that one file**. No hunting through JSX.

### Shared Animation Variants
`src/lib/animations.ts` exports named Framer Motion variants (`fadeUp`, `staggerContainer`, `scaleIn`, etc.). All components import these rather than defining inline variants, keeping animation behavior consistent and easy to tune globally.

### Reusable Button System
`src/components/ui/Button.tsx` exports two components:
- `Button` — standard `<button>` element
- `LinkButton` — `<a>` element with identical styling API

Both accept a `variant` prop (`primary | ghost | white | outline-white | whatsapp`) and `size` (`sm | md | lg`).

### Active Section Detection
`useActiveSection` uses a single `IntersectionObserver` watching all 6 section IDs. The rootMargin `"-40% 0px -55% 0px"` means a section is "active" when its middle is roughly centred in the viewport — giving accurate nav highlighting during scroll.

### Navigation
All nav clicks call `scrollToSection(href)` from `lib/utils.ts`, which:
1. Finds the element by ID
2. Offsets by `72px` (navbar height)
3. Uses `window.scrollTo({ behavior: "smooth" })`

This works for both desktop buttons and mobile menu links. The mobile menu auto-closes on any nav click.

---

## Customisation Guide

### Update Gym Info
```ts
// src/data/gymData.ts
export const gymInfo: GymInfo = {
  name: "Fitness District",
  phone: "+971504586689",
  whatsapp: "971504586689",  // no + prefix for wa.me links
  address: "Near Karama Post Office, Karama, Dubai, UAE",
  // ...
};
```

### Add / Remove a Trainer
```ts
// src/data/gymData.ts
export const trainers: Trainer[] = [
  {
    id: "new-trainer",
    name: "John Smith",
    specialty: "Olympic Weightlifting",
    bio: "...",
    imageUrl: "https://...",
    certifications: ["USAW-L2"],
  },
  // ...
];
```

### Change Brand Colours
```ts
// tailwind.config.ts → theme.extend.colors.brand
brand: {
  red: "#D72638",       // primary accent
  "red-dark": "#a81c27", // hover state
  black: "#080808",     // page background
  // ...
}
```

### Add an Animation Variant
```ts
// src/lib/animations.ts
export const myVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};
```

Then use it in any component:
```tsx
import { myVariant } from "@/lib/animations";
<motion.div variants={myVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
```

---

## Performance Notes

- Images use `next/image` with `fill` + `sizes` for automatic srcset generation
- Hero image uses `priority` prop to preload above the fold
- All other images use `loading="lazy"`
- Framer Motion animations respect `prefers-reduced-motion` via globals.css
- Fonts load with `display: swap` to prevent FOIT

---

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### Self-hosted
```bash
npm run build
npm start
```

### Static export (optional)
Add to `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  output: "export",
  // ...
};
```
Then `npm run build` outputs to `/out`.

---

## Contact

Gym: **+971 50 458 6689**  
Location: Near Karama Post Office, Karama, Dubai, UAE  
Hours: Open 24 Hours
