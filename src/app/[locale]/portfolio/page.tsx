import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { normalizeLocale } from '@/lib/content';
import { buildAlternates } from '@/lib/locale-meta';
import { forgedSectors, portfolioItems } from '@/lib/portfolio-data';

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Industrial Product Portfolio | AxionIntegra',
    description:
      'Explore precision tooling and forged automotive, agricultural, and general-engineering components supplied through AxionIntegra’s qualified manufacturing network.',
    alternates: buildAlternates(locale, '/portfolio'),
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return (
    <main className="min-h-screen bg-bg pt-16 text-primary">
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-3 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-heading text-secondary">Available Ranges</p>
              <h1 className="heading-2 mt-3">Tool holders and machine accessories</h1>
            </div>
            <p className="text-[14px] leading-[1.6] text-muted">
              Programme-specific configurations available on request.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <Link
                key={item.slug}
                id={item.slug}
                href={`/${normalizedLocale}/contact?product=${item.slug}`}
                aria-label={`Enquire about ${item.title}`}
                className="group scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="relative aspect-[4/3] border-b border-border bg-soft">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 sm:p-7"
                  />
                </div>
                <div className="flex items-center justify-between gap-5 p-5">
                  <h2 className="heading-3">{item.title}</h2>
                  <HiOutlineArrowLongRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="heading-2">Forged &amp; machined components</h2>
              <p className="text-[14px] leading-[1.6] text-muted">
                Organised by industrial application.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {forgedSectors.map((sector) => (
                <Link
                  key={sector.slug}
                  href={`/${normalizedLocale}/portfolio/forged-components/${sector.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <div className="relative aspect-[4/3] border-b border-border bg-soft">
                    <Image
                      src={sector.imageSrc}
                      alt={sector.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-4 sm:p-5"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-5 p-5">
                    <h3 className="heading-3">{sector.title}</h3>
                    <HiOutlineArrowLongRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-soft py-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="heading-2">Need a specific configuration?</h2>
            <p className="body-text mt-3 max-w-2xl text-secondary">
              Share the machine interface, application, and required quantity. Our team will review
              the requirement with the appropriate manufacturing partner.
            </p>
          </div>
          <Link
            href={`/${normalizedLocale}/contact`}
            className="shrink-0 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-white transition hover:-translate-y-0.5"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </main>
  );
}
