import type { Metadata } from 'next';
import Script from 'next/script';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import './globals.css';

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
    <html lang='en'>
      <body className='antialiased'>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-N9XBDHVLBQ'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N9XBDHVLBQ');
          `}
        </Script>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
