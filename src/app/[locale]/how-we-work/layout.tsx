import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/locale-meta';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Manufacturing Process | Spec Review to Delivery | AxionIntegra',
    description:
      'From DFM and supplier selection to in-process inspection and traceable final delivery — every programme follows a structured, documented sequence with one accountable team.',
    alternates: buildAlternates(locale, '/how-we-work'),
  };
}

export default function HowWeWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
