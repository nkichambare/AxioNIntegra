import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/locale-meta';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'About | AxionIntegra',
    description:
      'Engineering expertise and industrial discipline. Meet the team behind AxionIntegra.',
    alternates: buildAlternates(locale, '/about'),
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
