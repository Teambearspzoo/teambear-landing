# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - dev server at `localhost:4321`
- `npm run build` - static build to `./dist/`
- `npm run preview` - serve the production build locally
- `npm run astro check` - type-check `.astro` files (strict tsconfig)

No test suite or linter is configured. Requires Node >= 22.12.0.

## What this is

The official TeamBear marketing site: a single-page static site built with Astro,
deployed at https://teambear.io/. It is the canonical and only TeamBear site.

All copy is in Polish. Keep it verbatim unless asked to change it. Do not use em-dashes
(`-`/`-`); use a plain hyphen.

## Architecture

- `src/pages/index.astro` - the landing route. Pure composition: imports `Layout` and the
  seven section components, no markup logic of its own.
- `src/pages/portfolio/[slug].astro` - statically generated detail page per project
  (`getStaticPaths` over `src/projects.ts`). Reuses `Layout` + `Header` + `Footer`.
- `src/layouts/Layout.astro` - `<head>` (title, meta description, Instrument Sans from
  Google Fonts, favicon) plus two inline client scripts shared by all pages:
  1. **Scroll-reveal**: an `IntersectionObserver` adds `is-visible` to every `.reveal`
     element. A `window.load` safety net reveals any still-hidden `.reveal` already in the
     viewport - this is required for bottom-of-page elements (e.g. the footer) that can
     never scroll far enough to trigger the observer alone. Do not reintroduce a negative
     bottom `rootMargin`; it re-hides the footer.
  2. **Mobile menu**: toggles `[data-mobile-menu]` via `[data-menu-toggle]`.
- `src/components/*.astro` - one component per page section: `Header`, `Hero`, `Services`,
  `TeamBearWay`, `Portfolio`, `Contact`, `Footer`. Section content lives as data arrays in
  each component's frontmatter (e.g. `services`, `projects`), so editing a section is
  self-contained.
- `src/styles/global.css` - Tailwind entrypoint (`@import 'tailwindcss'`), base body
  styling, and the `.reveal` / `.is-visible` / `.no-js .reveal` animation rules.

## Conventions

- Tailwind v4 is wired through the Vite plugin in `astro.config.mjs`
  (`@tailwindcss/vite`), not a `tailwind.config` file. There is no theme config - the
  brand color is the literal arbitrary value `[#FF5A2D]` (orange) on `#1a1a1a`/`#141414`
  dark backgrounds; reuse these literals to stay consistent.
- Any element that should fade in on scroll needs the `reveal` class. `Layout.astro` sets
  `<html class="no-js">` and the head script removes it, so content stays visible without
  JS.
- Static assets (logo, favicon, `portfolio-*.png`) live in `public/` and are referenced by
  root-absolute paths, so the site is fully self-contained.
- Portfolio data is split by concern: `src/projects.ts` holds language-independent
  metadata (`slug`, `image` card thumbnail, `images` carousel gallery, `tags`);
  `src/i18n.ts` holds the localized `title`, `desc`, and `highlights`. The detail page
  renders the gallery via `src/components/Carousel.astro` (self-contained vanilla-JS
  slider; its `<script>` auto-inits every `[data-carousel]`). The listing and `[slug]` page join the two **by array index**, so the
  order of `projects` in `projects.ts` must stay in sync with
  `content.<lang>.portfolio.projects`.
- Gallery image folders under `public/portfolio/` do **not** all match their slug:
  `anodizing` → `anoding/`, `fleet` → `tet/` (the other two match). The mapping lives
  explicitly in each project's `images` array in `src/projects.ts`.
