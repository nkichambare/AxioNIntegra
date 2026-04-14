import type { Metadata } from 'next';
import AboutSection from '@/components/about-section';
import CapabilitiesSection from '@/components/capabilities-section';
import ExpertiseSection from '@/components/expertise-section';
import HomeHero from '@/components/home-hero';
import MarketSection from '@/components/market-section';
import ResourcesSection from '@/components/resources-section';
import TrustedBySection from '@/components/trusted-by-section';
import { getResources, normalizeLocale } from '@/lib/content';
import { buildAlternates } from '@/lib/locale-meta';

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'AxionIntegra | Precision Manufacturing & Supply Chain Execution Partner',
    description:
      'AxionIntegra is your dedicated execution partner for precision manufacturing and supply chain — coordinating suppliers, validating quality, and managing delivery end to end.',
    alternates: buildAlternates(locale, '/'),
  };
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const resources = await getResources(normalizedLocale);

  return (
    <>
      <HomeHero />
      <TrustedBySection />
      <AboutSection />
      <ExpertiseSection />
      <CapabilitiesSection />
      <MarketSection />
      <ResourcesSection resources={resources} requestedLocale={normalizedLocale} />
    </>
  );
}
