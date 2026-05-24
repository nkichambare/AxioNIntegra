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
  { code: 'cl', name: 'Chile' },
  { code: 'au', name: 'Australia' },
  { code: 'jp', name: 'Japan' },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const chip = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 24 },
  },
};

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

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {COUNTRIES.map((country, i) => (
            <motion.div key={country.name} variants={chip} className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-[15px] font-medium text-secondary">
                <Image
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  alt={country.name}
                  width={22}
                  height={16}
                  className="rounded-sm object-cover"
                />
                {country.name}
              </span>
              {i < COUNTRIES.length - 1 && (
                <span className="h-3.5 w-px bg-border" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
