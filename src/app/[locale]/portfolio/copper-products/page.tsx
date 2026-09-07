import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CopperProductCard from '@/components/copper-product-card';
import { normalizeLocale } from '@/lib/content';
import { buildAlternates } from '@/lib/locale-meta';
import { copperRanges } from '@/lib/portfolio-data';

type CopperProductsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CopperProductsPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Copper Products & Components | AxionIntegra',
    description:
      'Explore copper rods, busbars, foil, wires, cables, battery connectors, flexible busbars, and engineered copper components supplied through AxionIntegra.',
    alternates: buildAlternates(locale, '/portfolio/copper-products'),
  };
}

export default async function CopperProductsPage({ params }: CopperProductsPageProps) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return (
    <main className="min-h-screen bg-bg pt-16 text-primary">
      <section className="relative h-[calc(100svh-4rem)] min-h-[520px] max-h-[760px] overflow-hidden bg-slate-900">
        <Image
          src="/portfolio/copper.jpg"
          alt="Copper strips, rods, and profiles"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/50" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col px-6 py-8 sm:py-10">
          <Link
            href={`/${normalizedLocale}/#portfolio`}
            className="w-fit text-[14px] font-medium text-white/85 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-auto pb-2 sm:pb-4">
            <p className="label-text text-white/75">Product Portfolio</p>
            <h1 className="mt-4 max-w-4xl text-[38px] font-semibold uppercase leading-[1.12] tracking-[-0.03em] text-white sm:text-[52px] md:text-[60px]">
              Copper Products
            </h1>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-soft py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="heading-2">Copper products and engineered components</h2>
          </div>

          <div className="mt-10 space-y-7">
            {copperRanges.map((item, index) => (
              <CopperProductCard
                key={item.slug}
                item={item}
                index={index}
                locale={normalizedLocale}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-soft py-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="heading-2">Need a custom copper configuration?</h2>
            <p className="body-text mt-3 max-w-2xl text-secondary">
              Share the material grade, dimensions, electrical requirements, application, and
              expected quantity for an initial technical review.
            </p>
          </div>
          <Link
            href={`/${normalizedLocale}/contact`}
            className="shrink-0 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-white transition hover:-translate-y-0.5"
          >
            Discuss your requirement
          </Link>
        </div>
      </section>
    </main>
  );
}
