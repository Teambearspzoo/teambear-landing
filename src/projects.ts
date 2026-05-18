// Language-independent project metadata. The index of each entry matches the
// index in `content.<lang>.portfolio.projects` (src/i18n.ts), which holds the
// localized title / description / highlights. Both the listing (Portfolio.astro)
// and the detail route (pages/portfolio/[slug].astro) join the two by index.

export interface ProjectMeta {
  slug: string;
  /** Thumbnail used on the portfolio listing cards. */
  image: string;
  /** Gallery shown in the carousel on the project detail page. */
  images: string[];
  tags: string[];
}

export const projects: ProjectMeta[] = [
  {
    slug: 'anodizing',
    image: '/portfolio-anodizing.png',
    images: [
      '/portfolio/anoding/anoding_1.png',
      '/portfolio/anoding/anoding_2.png',
      '/portfolio/anoding/anoding_3.png',
    ],
    tags: ['CRM', 'PDF Generation', 'Live Chat', 'BI'],
  },
  {
    slug: 'distribution',
    image: '/portfolio-distribution.png',
    images: [
      '/portfolio/distribution/distribution_1.png',
      '/portfolio/distribution/distribution_2.png',
      '/portfolio/distribution/distribution_3.png',
    ],
    tags: ['BI', 'CRM', 'ERP Integration', 'Real-time'],
  },
  {
    slug: 'dealers',
    image: '/portfolio-dealers.png',
    images: [
      '/portfolio/dealers/dealers_1.png',
      '/portfolio/dealers/dealers_2.png',
      '/portfolio/dealers/dealers_3.png',
      '/portfolio/dealers/dealers_4.png',
    ],
    tags: ['Ruby on Rails', 'PostgreSQL', 'PDF', 'Fast Delivery'],
  },
  {
    slug: 'fleet',
    image: '/portfolio-fleet.png',
    images: [
      '/portfolio/tet/tet_1.png',
      '/portfolio/tet/tet_2.png',
      '/portfolio/tet/tet_3.png',
      '/portfolio/tet/tet_4.png',
    ],
    tags: ['Fleet Management', 'Automation', 'ERP Integration'],
  },
];
