import type { MetadataRoute } from 'next';
import { capabilities } from '@/lib/capabilities-data';
import { getPosts } from '@/lib/content';
import { markets } from '@/lib/markets-data';
import { teamProfiles } from '@/lib/team-profiles';

const BASE = 'https://axionintegra.com';
const LOCALES = ['en', 'de', 'fr'] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts('en');
  const postSlugs = [...new Set(posts.map((p) => p.routeSlug))];

  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/how-we-work', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/resources', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/impressum', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const dynamicRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    ...capabilities.map((c) => ({
      path: `/capabilities/${c.slug}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/capabilities/precision-manufacturing', priority: 0.8, changeFrequency: 'monthly' },
    ...markets.map((m) => ({
      path: `/markets/${m.slug}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    ...teamProfiles.map((p) => ({
      path: `/about/${p.slug}`,
      priority: 0.6,
      changeFrequency: 'yearly' as const,
    })),
    ...postSlugs.map((slug) => ({
      path: `/resources/${slug}`,
      priority: 0.7,
      changeFrequency: 'yearly' as const,
    })),
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
  );
}
