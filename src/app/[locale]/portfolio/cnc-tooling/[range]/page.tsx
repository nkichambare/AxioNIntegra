import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { normalizeLocale } from '@/lib/content';
import { buildAlternates } from '@/lib/locale-meta';
import { getToolingRange, toolingRanges } from '@/lib/portfolio-data';

type ToolingRangePageProps = {
  params: Promise<{ locale: string; range: string }>;
};

export function generateStaticParams() {
  return toolingRanges.map((range) => ({ range: range.slug }));
}

export async function generateMetadata({ params }: ToolingRangePageProps): Promise<Metadata> {
  const { locale, range: rangeSlug } = await params;
  const range = getToolingRange(rangeSlug);

  if (!range) {
    return {};
  }

  return {
    title: `${range.title} | AxionIntegra`,
    description: range.description,
    alternates: buildAlternates(locale, `/portfolio/cnc-tooling/${range.slug}`),
  };
}

export default async function ToolingRangePage({ params }: ToolingRangePageProps) {
  const { locale, range: rangeSlug } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const range = getToolingRange(rangeSlug);

  if (!range) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-soft pt-16 text-primary">
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Link
            href={`/${normalizedLocale}/portfolio/cnc-tooling#${range.slug}`}
            className="text-[14px] font-medium text-accent transition hover:opacity-70"
          >
            ← Back to CNC Tooling
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="label-text text-muted">{range.standard}</p>
            <h1 className="heading-1 mt-4">{range.title}</h1>
            <p className="body-text mt-5 text-secondary">{range.description}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {range.products.map((holder) => (
              <Link
                key={holder.slug}
                href={`/${normalizedLocale}/contact?product=${holder.slug}`}
                aria-label={`Enquire about ${holder.title}`}
                className="group overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="relative aspect-square border-b border-border bg-bg">
                  <Image
                    src={holder.imageSrc}
                    alt={holder.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 transition duration-300 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h2 className="text-[16px] font-medium leading-[1.3] text-primary">
                    {holder.title}
                  </h2>
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
