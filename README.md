# Shravan S Chowta — Portfolio

Production-ready developer portfolio built with **Next.js**, **Tailwind CSS v4**, and **Framer Motion**. Preserves the original Stitch design: dark glassmorphism, glowing orbs, particle hero, and premium startup-founder aesthetic.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/              # Layout, page, loading, global styles
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, About, Skills, Projects, Journey, Contact
│   └── ui/         # GlassCard, particles, buttons, animations
├── hooks/          # Active section, glass mouse, glow parallax
└── lib/            # Site content & constants
```

## Customization

Edit personal info, projects, and links in `src/lib/constants.ts`.

## Performance notes

- Hero portrait uses `priority` loading; other images are lazy-loaded via `next/image`.
- Respects `prefers-reduced-motion` for animations and particles.
- Static generation for the home page.
