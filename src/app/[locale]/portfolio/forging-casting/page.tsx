import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { normalizeLocale } from '@/lib/content';
import { buildAlternates } from '@/lib/locale-meta';
import { forgedSectors } from '@/lib/portfolio-data';

type ForgingCastingPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ForgingCastingPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Forging & Casting Components | AxionIntegra',
    description:
      'Explore forged, cast, and machined components for automotive, agricultural, and general-engineering programmes through AxionIntegra.',
    alternates: buildAlternates(locale, '/portfolio/forging-casting'),
  };
}

export default async function ForgingCastingPage({ params }: ForgingCastingPageProps) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return (
    <main className="min-h-screen bg-bg pt-16 text-primary">
      <section className="relative h-[calc(100svh-4rem)] min-h-[520px] max-h-[760px] overflow-hidden bg-slate-900">
        <Image
          src="/portfolio/forging.jpg"
          alt="Hot metal component being formed in a forging press"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_56%]"
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
              Forging &amp; Casting
            </h1>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-soft py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="section-heading text-secondary">Available Components</p>
            <h2 className="heading-2 mt-3">Explore by industrial application</h2>
          </div>

          <div className="mt-10 space-y-7">
            {forgedSectors.map((sector, index) => (
              <Link
                key={sector.slug}
                href={`/${normalizedLocale}/portfolio/forged-components/${sector.slug}`}
                className="group grid overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 md:grid-cols-2"
              >
                <div
                  className={`relative min-h-[300px] overflow-hidden bg-bg md:min-h-[390px] ${
                    index % 2 === 1 ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <Image
                    src={sector.imageSrc}
                    alt={sector.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>

                <article
                  className={`flex min-h-[300px] flex-col justify-center border-t border-border p-7 sm:p-10 md:min-h-[390px] md:border-t-0 ${
                    index % 2 === 1 ? 'md:order-1 md:border-r' : 'md:order-2 md:border-l'
                  }`}
                >
                  <p className="label-text text-muted">
                    {String(index + 1).padStart(2, '0')} / Industrial application
                  </p>
                  <h3 className="heading-2 mt-4">{sector.title}</h3>
                  <p className="body-text mt-5 max-w-xl text-secondary">{sector.description}</p>
                  <div className="mt-8 flex items-center gap-3 text-accent">
                    <span className="text-[14px] font-medium">View components</span>
                    <HiOutlineArrowLongRight
                      aria-hidden="true"
                      className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-soft py-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="heading-2">Have a component requirement?</h2>
            <p className="body-text mt-3 max-w-2xl text-secondary">
              Share the drawing, material, expected volume, and validation requirements for an
              initial manufacturing review.
            </p>
          </div>
          <Link
            href={`/${normalizedLocale}/contact?product=forging-casting`}
            className="shrink-0 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-white transition hover:-translate-y-0.5"
          >
            Discuss your requirement
          </Link>
        </div>
      </section>
    </main>
  );
}
