'use client';

import { useRef, useState } from 'react';
import ResourceCardComponent from '@/components/resource-card';
import type { Locale, ResourceCard } from '@/lib/content';

type ResourcesSliderProps = {
  resources: ResourceCard[];
  requestedLocale: Locale;
};

export default function ResourcesSlider({ resources, requestedLocale }: ResourcesSliderProps) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = resources.length;

  function scrollTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    setCurrent(index);
  }

  const prev = () => scrollTo(Math.max(current - 1, 0));
  const next = () => scrollTo(Math.min(current + 1, total - 1));

  if (total === 0) {
    return <p className="text-[15px] text-muted">No resources published yet.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Carousel track  scrollable but scrollbar hidden */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {resources.map((resource, index) => (
          <div
            key={resource.translationKey}
            className="w-full shrink-0 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
          >
            <ResourceCardComponent
              index={index + 1}
              category="Resources"
              heading={resource.title}
              description={resource.preview}
              readTime={resource.ctaLabel}
              href={`/resources/${resource.postSlug}?lang=${requestedLocale}`}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex gap-2">
          {resources.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-accent' : 'w-1.5 bg-border'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className="flex h-8 w-8 items-center justify-center border border-border text-secondary transition hover:border-accent hover:text-accent rounded disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            aria-label="Next"
            className="flex h-8 w-8 items-center justify-center border border-border text-secondary transition hover:border-accent hover:text-accent rounded disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
