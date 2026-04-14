import { notFound } from 'next/navigation';
import { LOCALES } from '@/lib/locale-meta';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) notFound();
  return <>{children}</>;
}
