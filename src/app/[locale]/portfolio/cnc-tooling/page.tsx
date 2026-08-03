import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { normalizeLocale } from '@/lib/content';
import { buildAlternates } from '@/lib/locale-meta';
import { portfolioItems } from '@/lib/portfolio-data';

type CncToolingPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CncToolingPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'CNC Tooling & Tool Holders | AxionIntegra',
    description:
      'Explore CNC tool holders, collet chucks, drilling and tapping tooling, and machine accessories supplied through AxionIntegra.',
    alternates: buildAlternates(locale, '/portfolio/cnc-tooling'),
  };
}

export default async function CncToolingPage({ params }: CncToolingPageProps) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return (
    <main className="min-h-screen bg-bg pt-16 text-primary">
      <section className="relative h-[calc(100svh-4rem)] min-h-[520px] max-h-[760px] overflow-hidden bg-slate-900">
        <Image
          src="/portfolio/cnc-tooling.jpg"
          alt="Precision CNC milling tool holder"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
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
              CNC Tooling
            </h1>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-soft py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="heading-2">Tool holders and machine accessories</h2>
          </div>

          <div className="mt-10 space-y-7">
            {portfolioItems.map((item, index) => (
              <Link
                key={item.slug}
                id={item.slug}
                href={`/${normalizedLocale}/contact?product=${item.slug}`}
                aria-label={`Enquire about ${item.title}`}
                className="group grid scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 md:grid-cols-2"
              >
                <div
                  className={`relative min-h-[300px] overflow-hidden bg-bg md:min-h-[390px] ${
                    index % 2 === 1 ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-contain p-8 transition duration-500 group-hover:scale-[1.025] sm:p-10"
                  />
                </div>

                <article
                  className={`flex min-h-[300px] flex-col justify-center border-t border-border p-7 sm:p-10 md:min-h-[390px] md:border-t-0 ${
                    index % 2 === 1 ? 'md:order-1 md:border-r' : 'md:order-2 md:border-l'
                  }`}
                >
                  <p className="label-text text-muted">{item.standard}</p>
                  <h3 className="heading-2 mt-4">{item.title}</h3>
                  <p className="body-text mt-5 max-w-xl text-secondary">{item.description}</p>

                  <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {item.products.map((product) => (
                      <li
                        key={product}
                        className="flex items-start gap-2 text-[13px] leading-[1.55] text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {product}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-3 text-accent">
                    <span className="text-[14px] font-medium">Enquire about this range</span>
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
            <h2 className="heading-2">Need a special tooling configuration?</h2>
            <p className="body-text mt-3 max-w-2xl text-secondary">
              Share the machine interface, application, required accuracy, and expected quantity for
              an initial tooling review.
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
