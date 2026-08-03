import type { NextConfig } from 'next';

const LOCALES = ['en', 'de', 'fr'];

const securityHeaders = [
  // Prevent DNS prefetch leaking navigations to third parties
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Force HTTPS for 2 years, include subdomains, submit to preload list
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Block the site from being framed (clickjacking protection)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Limit referrer info sent to cross-origin destinations
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable unused browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Content Security Policy
  // - unsafe-inline required: Next.js hydration scripts + Framer Motion inline styles
  // - unsafe-eval required: Next.js dynamic code evaluation in production builds
  // - img-src data: required: next/image blur placeholders
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://flagcdn.com",
      "font-src 'self'",
      "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com",
      "media-src 'none'",
      "object-src 'none'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

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
      {
        source: `/${locale}/portfolio`,
        destination: `/${locale}/#portfolio`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
