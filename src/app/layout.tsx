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
    'AxionIntegra is your dedicated execution partner for precision manufacturing and supply chain — coordinating suppliers, validating quality, and managing delivery end to end.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get('x-locale') ?? 'en';

  return (
    <html lang={locale}>
      <body className={`antialiased ${playfair.variable} ${ibmMono.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
