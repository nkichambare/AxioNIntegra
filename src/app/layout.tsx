import type { Metadata } from 'next';
import { IBM_Plex_Mono, Playfair_Display } from 'next/font/google';
import { headers } from 'next/headers';
import CookieBanner from '@/components/cookie-banner';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://axionintegra.com'),
  title: 'AxionIntegra | Precision Manufacturing & Supply Chain Partner',
  description:
    'AxionIntegra Pvt. Ltd. is your dedicated execution partner for precision manufacturing and supply chain — coordinating suppliers, validating quality, and managing delivery end to end.',
  icons: {
    icon: '/favicon.ico',
  },
};

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://axionintegra.com/#organization',
  name: 'AxionIntegra',
  legalName: 'AxionIntegra Pvt. Ltd.',
  alternateName: 'AxionIntegra Pvt Ltd',
  url: 'https://axionintegra.com',
  logo: 'https://axionintegra.com/logo-transparent.png',
  email: 'contact@axionintegra.com',
  telephone: '+91 99209 81545',
  sameAs: ['https://linkedin.com/company/axionintegra'],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Stuttgart',
      addressRegion: 'Baden-Württemberg',
      postalCode: '70186',
      addressCountry: 'DE',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '705, Sai Dwarka Residency, Bankar Mala, Kathe Galli',
      addressLocality: 'Nashik',
      postalCode: '422011',
      addressCountry: 'IN',
    },
  ],
};

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://axionintegra.com/#website',
  url: 'https://axionintegra.com',
  name: 'AxionIntegra',
  alternateName: ['AxionIntegra Pvt. Ltd.', 'AxionIntegra Pvt Ltd'],
  publisher: { '@id': 'https://axionintegra.com/#organization' },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get('x-locale') ?? 'en';

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </head>
      <body className={`antialiased ${playfair.variable} ${ibmMono.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
