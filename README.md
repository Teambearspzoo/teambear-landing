# TeamBear

The official TeamBear marketing site - a single-page static site built with
[Astro](https://astro.build/) and Tailwind v4, deployed at
[teambear.io](https://teambear.io/). This is the canonical and only TeamBear site.

It includes the main landing page, statically generated portfolio detail pages,
and the `/picking` campaign page (system obsługi zamówień z pickingiem).

## Requirements

- Node.js >= 22.12.0

## Commands

All commands are run from the root of the project:

| Command                 | Action                                            |
| :---------------------- | :------------------------------------------------ |
| `npm install`           | Install dependencies                              |
| `npm run dev`           | Start the dev server at `localhost:4321`          |
| `npm run build`         | Build the static site to `./dist/`                |
| `npm run preview`       | Preview the production build locally              |
| `npm run astro check`   | Type-check `.astro` files (strict tsconfig)       |

## Project structure

```text
/
├── public/              # static assets (logo, favicon, portfolio images)
├── scripts/onepager/    # generator for the /picking one-pager PDF
├── src/
│   ├── components/      # one component per page section (+ picking/)
│   ├── layouts/         # shared <head> and client scripts
│   ├── pages/           # routes: index, picking, portfolio/[slug]
│   ├── i18n.ts          # localized copy (PL/EN)
│   └── projects.ts      # portfolio metadata
└── astro.config.mjs
```

## Deployment

The site is built to static files (`npm run build` → `dist/`) and published to
GitHub Pages via the workflow in `.github/workflows/deploy.yml` on every push to
`master`.

The deploy target is env-driven (see `astro.config.mjs`), so the same codebase
works on both URLs without code changes:

- **Now (no custom domain yet):** builds with `base: '/teambear-landing'` and is
  served at `https://teambearspzoo.github.io/teambear-landing/`. All internal
  links/assets go through `src/lib/url.ts` so they stay correct under the subpath.
- **Later (custom domain connected):** set repository/Actions variable
  `SITE_DOMAIN=teambear.io` and add a `public/CNAME` file containing `teambear.io`.
  The build then switches to `site: https://teambear.io` with `base: '/'` and is
  served from the domain root. Nothing else needs to change.
