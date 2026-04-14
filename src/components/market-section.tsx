'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { markets } from '@/lib/markets-data';

export default function MarketSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileTrackRef = useRef<HTMLElement | null>(null);
  const total = markets.length;

  function scrollToIndex(index: number) {
    const track = mobileTrackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
    setMobileActiveIndex(index);
  }

  const prev = () => scrollToIndex(Math.max(mobileActiveIndex - 1, 0));
  const next = () => scrollToIndex(Math.min(mobileActiveIndex + 1, total - 1));
  const marketRows = [markets.slice(0, 3), markets.slice(3, 6)];

  // Desktop-only: resize cards within the hovered row (expanded card + shrunken neighbors).
  const getDesktopCardBasis = (index: number) => {
    if (hoveredIndex === null) {
      return '33.3333%';
    }

    const rowStart = Math.floor(index / 3) * 3;
    const rowEnd = rowStart + 2;

    if (hoveredIndex < rowStart || hoveredIndex > rowEnd) {
      return '33.3333%';
    }

    return hoveredIndex === index ? '40.3333%' : '29.8333%';
  };

  // Shared card UI for mobile/tablet/desktop with optional behavior flags.
  const renderCardContent = (
    title: string,
    isHovered: boolean,
    options?: { alwaysShowExplore?: boolean; titleClassName?: string },
  ) => (
    <>
      <div className="absolute inset-0 bg-slate-900/55 transition-colors duration-500 group-hover:bg-slate-900/45" />
      <div className="relative h-full">
        <p className={`heading-3 absolute top-[20%] text-white ${options?.titleClassName ?? ''}`}>
          {title}
        </p>
        <span className="absolute bottom-0 right-0 flex items-center gap-2 text-white">
          <span
            className={`label-text transition-all duration-500 ${
              isHovered || options?.alwaysShowExplore
                ? 'translate-x-0 opacity-100'
                : 'translate-x-2 opacity-0'
            }`}
          >
            Explore
          </span>
          <HiOutlineArrowLongRight className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
    </>
  );

  return (
    <section id="market" className="bg-bg py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:gap-16 px-6">
        <div className="flex flex-col gap-3">
          <p className="section-heading text-secondary">Markets</p>
          <h2 className="heading-2">Supporting Industrial Manufacturing Where Precision Matters</h2>
          <p className="body-text max-w-4xl text-secondary">
            AxionIntegra operates in industrial sectors where engineering accuracy, structured
            execution, and delivery reliability are critical to performance. We support
            organizations that require precision components, assemblies, and integrated
            manufacturing solutions within regulated and cost-sensitive environments. Our approach
            is aligned with industries that value accountability, technical clarity, and long-term
            supply stability.
          </p>
        </div>

        {/* Mobile carousel (< md): horizontal snap slider with active-dot tracking */}
        <section
          ref={mobileTrackRef}
          onScroll={() => {
            const track = mobileTrackRef.current;
            if (!track) return;

            const cardCenters = Array.from(track.children).map((card) => {
              const element = card as HTMLElement;
              return element.offsetLeft + element.offsetWidth / 2;
            });
            const trackCenter = track.scrollLeft + track.clientWidth / 2;
            let nextIndex = 0;
            let nearestDistance = Number.POSITIVE_INFINITY;

            cardCenters.forEach((center, index) => {
              const distance = Math.abs(center - trackCenter);
              if (distance < nearestDistance) {
                nearestDistance = distance;
                nextIndex = index;
              }
            });

            setMobileActiveIndex(nextIndex);
          }}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 hide-scrollbar md:hidden"
        >
          {markets.map((market) => (
            <Link
              key={market.title}
              href={`/markets/${market.slug}`}
              className={`group relative min-h-[420px] w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl border border-border bg-slate-900 bg-cover bg-center bg-no-repeat p-6 cursor-pointer ${market.bgClass}`}
            >
              {renderCardContent(market.title, false, {
                alwaysShowExplore: true,
                titleClassName: 'max-w-[85%] text-[22px] font-medium leading-[1.25] break-words',
              })}
            </Link>
          ))}
        </section>

        {/* Mobile controls: dots + arrows */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex gap-2">
            {markets.map((market, index) => (
              <span
                key={`${market.title}-dot`}
                className={`inline-block rounded-full transition-all duration-300 ${
                  mobileActiveIndex === index ? 'h-1.5 w-6 bg-accent' : 'h-1.5 w-1.5 bg-border'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={mobileActiveIndex === 0}
              aria-label="Previous"
              className="flex h-8 w-8 items-center justify-center rounded border border-border text-secondary transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={mobileActiveIndex === total - 1}
              aria-label="Next"
              className="flex h-8 w-8 items-center justify-center rounded border border-border text-secondary transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>

        {/* Tablet grid (md to lg): static 2-column card layout */}
        <section className="hidden gap-6 md:grid md:grid-cols-2 lg:hidden">
          {markets.map((market) => (
            <Link
              key={market.title}
              href={`/markets/${market.slug}`}
              className={`group relative min-h-[280px] overflow-hidden rounded-2xl border border-border bg-slate-900 bg-cover bg-center bg-no-repeat p-6 cursor-pointer ${market.bgClass}`}
            >
              {renderCardContent(market.title, false)}
            </Link>
          ))}
        </section>

        {/* Desktop grid (lg+): row-based hover expansion behavior */}
        <section className="hidden flex-col gap-6 lg:flex">
          {marketRows.map((row, rowIndex) => (
            <div key={`market-row-${rowIndex}`} className="flex gap-6">
              {row.map((market, colIndex) => {
                const index = rowIndex * 3 + colIndex;
                const isHovered = hoveredIndex === index;

                return (
                  <Link
                    key={market.title}
                    href={`/markets/${market.slug}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ flexBasis: getDesktopCardBasis(index) }}
                    className={`group relative min-h-[280px] shrink-0 overflow-hidden rounded-2xl border border-border bg-slate-900 bg-cover bg-center bg-no-repeat p-6 cursor-pointer transition-all duration-500 ${market.bgClass}`}
                  >
                    {renderCardContent(market.title, isHovered)}
                  </Link>
                );
              })}
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
