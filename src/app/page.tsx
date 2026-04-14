import type { Metadata } from 'next';
import AboutSection from '@/components/about-section';
import CapabilitiesSection from '@/components/capabilities-section';
import ExpertiseSection from '@/components/expertise-section';
import HomeHero from '@/components/home-hero';
import MarketSection from '@/components/market-section';
import ResourcesSection from '@/components/resources-section';
import TrustedBySection from '@/components/trusted-by-section';
import { getResources, normalizeLocale } from '@/lib/content';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

type HomePageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const { lang } = await searchParams;
  const locale = normalizeLocale(lang);
  const resources = await getResources(locale);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-soft blur-3xl" />

      <main className="relative flex w-full flex-col text-primary">
        <HomeHero />
        <TrustedBySection />

        <AboutSection />
        <ExpertiseSection />
        <MarketSection />
        <CapabilitiesSection />
        <ResourcesSection resources={resources} requestedLocale={locale} />
      </main>
    </div>
  );
}
