'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const COUNTRIES = [
  { code: 'de', name: 'Germany' },
  { code: 'in', name: 'India' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'fr', name: 'France' },
  { code: 'ie', name: 'Ireland' },
  { code: 'it', name: 'Italy' },
  { code: 'dk', name: 'Denmark' },
  { code: 'nl', name: 'Netherlands' },
  { code: 'be', name: 'Belgium' },
  { code: 'at', name: 'Austria' },
  { code: 'pl', name: 'Poland' },
  { code: 'hu', name: 'Hungary' },
  { code: 'au', name: 'Australia' },
  { code: 'jp', name: 'Japan' },
];

const label = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function OperatingInSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-soft py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6">
        <motion.span
          variants={label}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="font-ibm-mono text-[16px] tracking-[0.2em] uppercase text-[#475569]"
        >
          Operating In
        </motion.span>

        <div
          className="w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="flex w-max animate-marquee-slow items-center gap-10 hover:[animation-play-state:paused]">
            {[...COUNTRIES, ...COUNTRIES].map((country, i) => (
              <span
                key={`${country.code}-${i}`}
                aria-hidden={i >= COUNTRIES.length ? true : undefined}
                className="flex shrink-0 items-center gap-2 text-[15px] font-medium text-secondary"
              >
                <Image
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  alt={country.name}
                  width={22}
                  height={16}
                  className="rounded-sm object-cover"
                />
                {country.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
