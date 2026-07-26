import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { normalizeLocale } from '@/lib/content';
import { buildAlternates } from '@/lib/locale-meta';
import { forgedSectors, getForgedSector } from '@/lib/portfolio-data';

type ForgedSectorPageProps = {
  params: Promise<{ locale: string; sector: string }>;
};

export function generateStaticParams() {
  return forgedSectors.map((sector) => ({ sector: sector.slug }));
}

export async function generateMetadata({ params }: ForgedSectorPageProps): Promise<Metadata> {
  const { locale, sector: sectorSlug } = await params;
  const sector = getForgedSector(sectorSlug);

  if (!sector) return {};

  return {
    title: `${sector.title} | AxionIntegra`,
    description: `${sector.description} Supplied through AxionIntegra’s qualified manufacturing network with coordinated quality and delivery.`,
    alternates: buildAlternates(locale, `/portfolio/forged-components/${sector.slug}`),
  };
}

export default async function ForgedSectorPage({ params }: ForgedSectorPageProps) {
  const { locale, sector: sectorSlug } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const sector = getForgedSector(sectorSlug);

  if (!sector) notFound();

  return (
    <main className="min-h-screen bg-bg pt-16 text-primary">
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Link
            href={`/${normalizedLocale}/portfolio`}
            className="text-[14px] font-medium text-accent transition hover:opacity-70"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-8 flex flex-col gap-3 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-heading text-secondary">Available Components</p>
              <h1 className="heading-2 mt-3">{sector.title}</h1>
            </div>
            <p className="text-[14px] leading-[1.6] text-muted">
              Additional configurations are available on request.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sector.components.map((component) => (
              <Link
                key={component.slug}
                href={`/${normalizedLocale}/contact?sector=${sector.slug}&component=${component.slug}`}
                aria-label={`Enquire about ${component.title}`}
                className="group overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="relative aspect-[3/2] border-b border-border bg-soft">
                  <Image
                    src={component.imageSrc}
                    alt={component.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <h3 className="text-[16px] font-medium leading-[1.3] text-primary">
                    {component.title}
                  </h3>
                  <HiOutlineArrowLongRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
