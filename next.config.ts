import type { NextConfig } from "next";

const LOCALES = ['en', 'de', 'fr'];

const nextConfig: NextConfig = {
  async redirects() {
    return LOCALES.flatMap((locale) => [
      {
        source: '/',
        has: [{ type: 'query' as const, key: 'lang', value: locale }],
        destination: `/${locale}`,
        permanent: true,
      },
      {
        source: '/resources',
        has: [{ type: 'query' as const, key: 'lang', value: locale }],
        destination: `/${locale}/resources`,
        permanent: true,
      },
      {
        source: '/resources/:slug',
        has: [{ type: 'query' as const, key: 'lang', value: locale }],
        destination: `/${locale}/resources/:slug`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
