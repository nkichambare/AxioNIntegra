import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import type { Locale } from '@/lib/content';
import { featuredPortfolioItems, forgedSectors } from '@/lib/portfolio-data';

type PortfolioSectionProps = {
  locale: Locale;
};

export default function PortfolioSection({ locale }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="border-b border-border bg-bg py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="section-heading text-secondary">Product Portfolio</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPortfolioItems.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/portfolio#${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-soft">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.015]"
                />
              </div>
              <div className="flex min-h-[154px] flex-col p-5">
                <p className="label-text text-muted">{item.standard}</p>
                <h3 className="heading-3 mt-2 text-primary">{item.title}</h3>
                <div className="mt-auto flex items-center justify-between pt-6 text-accent">
                  <span className="text-[14px] font-medium">View range</span>
                  <HiOutlineArrowLongRight
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <h3 className="heading-3 text-primary">Forged &amp; Machined Components</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {forgedSectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/${locale}/portfolio/forged-components/${sector.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-soft">
                  <Image
                    src={sector.imageSrc}
                    alt={sector.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition duration-300 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="flex items-center justify-between gap-5 p-5">
                  <p className="heading-3">{sector.title}</p>
                  <HiOutlineArrowLongRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-start">
          <Link
            href={`/${locale}/portfolio`}
            className="group inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[14px] font-semibold leading-[1.2] text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
          >
            View complete portfolio
            <HiOutlineArrowLongRight
              aria-hidden="true"
              className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
