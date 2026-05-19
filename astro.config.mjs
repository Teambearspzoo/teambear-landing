// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployment target is env-driven so the same codebase serves both:
//
// - Temporary GitHub Pages project URL (no custom domain yet):
//     https://teambearspzoo.github.io/teambear-landing/   (default)
// - Final custom domain (set SITE_DOMAIN once DNS is connected):
//     SITE_DOMAIN=teambear.io  ->  https://teambear.io/  (served from root)
//
// When SITE_DOMAIN is set, also re-add the CNAME file (see README /
// .github/workflows/deploy.yml) so GitHub Pages binds the custom domain.
const SITE_DOMAIN = process.env.SITE_DOMAIN;

// https://astro.build/config
export default defineConfig({
  site: SITE_DOMAIN ? `https://${SITE_DOMAIN}` : 'https://teambearspzoo.github.io',
  base: SITE_DOMAIN ? '/' : '/teambear-landing',
  vite: {
    plugins: [tailwindcss()],
  },
});
