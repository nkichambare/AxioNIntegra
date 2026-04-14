import type { Metadata } from 'next';
import { buildAlternates } from '@/lib/locale-meta';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'About AxionIntegra | Engineering Team & Industrial Expertise',
    description:
      'Meet the engineers and specialists behind AxionIntegra — a team with deep domain expertise in precision manufacturing, supply chain execution, and quality management.',
    alternates: buildAlternates(locale, '/about'),
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
