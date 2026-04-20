'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import HeroCarousel from './hero-carousel';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const trustItems = [
  { label: 'ISO-aligned quality processes' },
  { label: 'EU supply chain coverage' },
  { label: 'Single accountable interface' },
  { label: 'Prototype to volume production' },
];

export default function HomeHero() {
  const { locale = 'en' } = useParams<{ locale: string }>();
  return (
    <section className="relative w-full overflow-hidden pt-22">
      {/* Full-bleed background carousel */}
      <div className="absolute inset-0 z-0">
        <HeroCarousel />
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 z-10 bg-slate-900/65" />

      {/* Foreground content */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex max-w-3xl flex-col gap-6 pb-24 pt-[12%] text-left"
        >
          <motion.h1 variants={fadeUp} className="heading-1 text-white">
            From Requirement to Delivery.
            <span className="block text-white/85"> One Responsible Interface..</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="body-text max-w-2xl text-pretty text-white/90">
            We step in as your dedicated execution partner coordinating suppliers, validating
            quality, and managing delivery under one accountable structure, so your team stays
            focused while we keep the programme on track.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center gap-6">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[14px] font-semibold leading-[1.2] text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
            >
              Speak to us
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex shrink-0 items-center gap-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="shrink-0 text-white/90"
                  aria-hidden="true"
                >
                  <circle cx="7.5" cy="7.5" r="7.5" className="fill-white/20" />
                  <path
                    d="M4.5 7.5L6.5 9.5L10.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="whitespace-nowrap text-[13px] leading-[1.4] text-white/90">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
