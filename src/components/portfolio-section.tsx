import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/content';

type PortfolioSectionProps = {
  locale: Locale;
};

const portfolioCategories = [
  {
    title: 'Forging & Casting',
    href: '/portfolio/forging-casting',
    imageSrc: '/portfolio/forging.jpg',
    imageAlt: 'Hot metal component being formed in a forging press',
    imageClassName: 'object-cover',
  },
  {
    title: 'CNC Tooling',
    href: '/portfolio/cnc-tooling',
    imageSrc: '/portfolio/cnc-tooling.jpg',
    imageAlt: 'Precision CNC milling tool holder',
    imageClassName: 'object-cover object-[68%_center]',
  },
  {
    title: 'Copper Products',
    href: '/portfolio/copper-products',
    imageSrc: '/portfolio/copper.jpg',
    imageAlt: 'Copper strips and profiles',
    imageClassName: 'object-cover',
  },
] as const;

export default function PortfolioSection({ locale }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="border-b border-border bg-bg py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="section-heading text-secondary">Product Portfolio</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {portfolioCategories.map((category) => (
            <Link
              key={category.title}
              href={`/${locale}${category.href}`}
              aria-label={`Explore ${category.title}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Image
                src={category.imageSrc}
                alt={category.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className={`${category.imageClassName} transition duration-500 group-hover:scale-[1.025]`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-slate-900/55 transition-colors duration-500 group-hover:bg-slate-900/45"
              />
              <h3 className="absolute inset-x-0 bottom-0 p-6 text-[22px] font-semibold uppercase leading-[1.2] tracking-[-0.02em] text-white sm:p-7 sm:text-[24px]">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
