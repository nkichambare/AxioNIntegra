import type { Metadata } from 'next';
import { IBM_Plex_Mono, Playfair_Display } from 'next/font/google';
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
  title: 'AxioNIntegra',
  description: 'AxioNIntegra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${playfair.variable} ${ibmMono.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
