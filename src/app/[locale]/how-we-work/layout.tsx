import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/locale-meta';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'How We Work | AxionIntegra',
    description:
      'Every programme follows the same disciplined sequence — from technical review to documented delivery.',
    alternates: buildAlternates(locale, '/how-we-work'),
  };
}

export default function HowWeWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
