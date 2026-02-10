import type { Metadata } from 'next';
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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
