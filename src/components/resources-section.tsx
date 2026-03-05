'use client';

import { type PointerEvent as ReactPointerEvent, useRef, useState } from 'react';
import Link from 'next/link';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import type { Locale, ResourceCard } from '@/lib/content';

type ResourcesSectionProps = {
  resources: ResourceCard[];
  requestedLocale: Locale;
};

export default function ResourcesSection({ resources, requestedLocale }: ResourcesSectionProps) {
  const trackRef = useRef<HTMLElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  const isInteractiveTarget = (target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) return false;
    return Boolean(target.closest('a,button,input,select,textarea,label,[role="button"]'));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;
    if (isInteractiveTarget(event.target)) return;
    const track = trackRef.current;
    if (!track) return;

    setIsDragging(true);
    dragStartX.current = event.clientX;
    dragStartScrollLeft.current = track.scrollLeft;
    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;
    if (!isDragging) return;
    if (isInteractiveTarget(event.target)) return;
    const track = trackRef.current;
    if (!track) return;

    const deltaX = event.clientX - dragStartX.current;
    track.scrollLeft = dragStartScrollLeft.current - deltaX;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;
    const track = trackRef.current;
    if (!track) return;

    setIsDragging(false);
    track.releasePointerCapture(event.pointerId);
  };

  const handleNavScroll = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const distance = track.clientWidth * 0.82;
    track.scrollBy({
      left: direction === 'right' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  return (
    <section id="resources" className="bg-bg py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:gap-16">
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-col gap-3">
            <p className="section-heading text-secondary">Resources</p>
            <h2 className="heading-2">Insights for engineering-led programs</h2>
            <p className="body-text max-w-2xl text-secondary">
              Practical references and operating guides for teams building industrial products with
              high performance and compliance requirements.
            </p>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Scroll resources left"
              onClick={() => handleNavScroll('left')}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-secondary transition hover:bg-soft hover:text-primary cursor-pointer"
            >
              <HiOutlineArrowLongLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Scroll resources right"
              onClick={() => handleNavScroll('right')}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-secondary transition hover:bg-soft hover:text-primary cursor-pointer"
            >
              <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section
          ref={trackRef}
          onScroll={() => {
            const track = trackRef.current;
            if (!track || window.innerWidth >= 768) return;

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
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 hide-scrollbar ${
            isDragging ? 'snap-none' : 'snap-x snap-mandatory'
          } ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        >
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={`/resources/${resource.postSlug}?lang=${requestedLocale}`}
              className="group relative min-h-[340px] w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl border border-border bg-slate-900 p-6 cursor-pointer sm:w-[62%] lg:w-[38%]"
            >
              <img
                src={resource.backgroundImagePath}
                alt={resource.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/55 transition-colors duration-500 group-hover:bg-slate-900/45" />
              <div className="absolute bottom-0 right-0 h-[72%] w-[78%] translate-x-full translate-y-full rounded-tl-2xl bg-accent/85 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="max-w-[85%] pt-[20%]">
                  <p className="heading-3 text-white">{resource.title}</p>
                  <p className="body-text mt-3 translate-y-1 text-[14px] leading-[1.6] text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {resource.preview}
                  </p>
                </div>
                <span className="absolute bottom-0 right-0 flex items-center gap-2 text-white">
                  <span className="label-text translate-x-0 opacity-100">{resource.ctaLabel}</span>
                  <HiOutlineArrowLongRight className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </section>

        <div className="flex items-center justify-center gap-3 md:hidden">
          {resources.map((resource, index) => (
            <span
              key={`${resource.title}-dot`}
              className={`inline-block rounded-full bg-slate-500 transition-all duration-300 ${
                mobileActiveIndex === index ? 'h-2 w-5 bg-slate-900' : 'h-2 w-2'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
