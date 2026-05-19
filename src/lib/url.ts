// Base-aware URL helper.
//
// Astro does NOT rewrite hardcoded root-absolute paths (`/foo`) when `base`
// is set - only paths derived from `import.meta.env.BASE_URL`. So every
// internal link / asset reference must go through `url()` to stay correct
// whether the site is served from a custom-domain root (`base: '/'`) or a
// GitHub Pages project subpath (`base: '/teambear-landing/'`).
//
// `import.meta.env.BASE_URL` has a leading slash but its trailing slash is
// not guaranteed (depends on the configured `base`), so normalize it here.

const RAW = import.meta.env.BASE_URL;
const BASE = RAW.endsWith('/') ? RAW : RAW + '/';

export function url(path: string): string {
  // Leave external, protocol, and same-page anchor links untouched.
  if (/^([a-z]+:|\/\/|#)/i.test(path)) return path;
  return (BASE + path.replace(/^\//, '')).replace(/([^:]\/)\/+/g, '$1');
}
