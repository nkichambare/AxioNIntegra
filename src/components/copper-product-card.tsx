'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongRight, HiOutlineChevronDown } from 'react-icons/hi2';
import type { CopperRange, CopperTechnicalGroup } from '@/lib/portfolio-data';

type CopperProductCardProps = {
  item: CopperRange;
  index: number;
  locale: string;
};

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h5 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">{title}</h5>
      <ul className="mt-3 space-y-2">
        {items.map((detail) => (
          <li
            key={detail}
            className="flex items-start gap-2 text-[12px] leading-[1.55] text-secondary"
          >
            <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TechnicalGroup({ group }: { group: CopperTechnicalGroup }) {
  return (
    <section className="border-b border-border pb-7 last:border-b-0 last:pb-0">
      <h4 className="text-[17px] font-medium leading-[1.35] text-primary">{group.title}</h4>
      <div className="mt-5 grid gap-6 md:grid-cols-[0.9fr_1.15fr_1.35fr] md:gap-8">
        <DetailList title="Size range" items={group.sizeRange} />
        <DetailList title="Specifications" items={group.specifications} />
        <DetailList title="Applications" items={group.applications} />
      </div>
    </section>
  );
}

export default function CopperProductCard({ item, index, locale }: CopperProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsButtonRef = useRef<HTMLButtonElement>(null);
  const detailsId = `${item.slug}-technical-details`;

  function closeDetails() {
    const detailsButton = detailsButtonRef.current;
    if (!detailsButton) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsExpanded(false);
    detailsButton.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });
    detailsButton.focus({ preventScroll: true });
  }

  return (
    <article
      id={item.slug}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isExpanded) {
          event.preventDefault();
          closeDetails();
        }
      }}
      className="group scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-bg transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_14px_35px_rgba(15,23,42,0.06)]"
    >
      <div className="grid md:grid-cols-2">
        <div
          className={`relative min-h-[300px] overflow-hidden bg-bg md:min-h-[440px] ${
            index % 2 === 1 ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.015]"
          />
        </div>

        <div
          className={`flex min-h-[420px] flex-col justify-center border-t border-border p-7 sm:p-9 md:min-h-[440px] md:border-t-0 ${
            index % 2 === 1 ? 'md:order-1 md:border-r' : 'md:order-2 md:border-l'
          }`}
        >
          <h3 className="heading-2">{item.title}</h3>
          <p className="mt-4 text-[15px] leading-[1.65] text-secondary">{item.description}</p>

          <div className="mt-6 border-y border-border">
            {(
              [
                ['Size range', item.atAGlance.sizeRange],
                ['Specifications', item.atAGlance.specifications],
                ['Applications', item.atAGlance.applications],
              ] as const
            ).map(([label, values]) => (
              <div
                key={label}
                className="grid gap-1 border-b border-border py-3 last:border-b-0 sm:grid-cols-[108px_1fr] sm:gap-4"
              >
                <p className="text-[12px] font-medium text-primary">{label}</p>
                <p className="text-[12px] leading-[1.55] text-secondary">{values.join(' · ')}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              ref={detailsButtonRef}
              type="button"
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              onClick={() => setIsExpanded((expanded) => !expanded)}
              className="flex items-center gap-2 text-[13px] font-medium text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {isExpanded ? 'Hide full details' : 'View full details'}
              <HiOutlineChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
            <Link
              href={`/${locale}/contact?product=${item.slug}`}
              className="flex items-center gap-2 text-[13px] font-medium text-secondary transition hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Enquire
              <HiOutlineArrowLongRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div
        id={detailsId}
        aria-hidden={!isExpanded}
        inert={!isExpanded ? true : undefined}
        className={`copper-details-reveal ${isExpanded ? 'is-expanded' : ''}`}
      >
        <div className="copper-details-reveal-inner">
          <div className="border-t border-border bg-soft px-6 py-8 sm:px-9 sm:py-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="label-text text-muted">Complete technical data</p>
                <h4 className="mt-2 text-[21px] font-medium leading-[1.3] text-primary sm:text-[24px]">
                  {item.title}
                </h4>
              </div>
              <p className="text-[12px] text-muted">Size range · Specifications · Applications</p>
            </div>

            <div className="mt-8 space-y-8">
              {item.technicalDetails.map((group) => (
                <TechnicalGroup key={group.title} group={group} />
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <button
                type="button"
                onClick={closeDetails}
                className="text-[13px] font-medium text-secondary transition hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Close details
              </button>
              <Link
                href={`/${locale}/contact?product=${item.slug}`}
                className="flex items-center gap-2 text-[13px] font-medium text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Enquire about this range
                <HiOutlineArrowLongRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
