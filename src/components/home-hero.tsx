'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
  return (
    <section className="relative w-full px-0 pb-20 pt-[88px] [background-image:linear-gradient(to_right,rgba(226,232,240,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.6)_1px,transparent_1px)] [background-size:40px_40px]">
      <div className="mx-auto flex w-full max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex max-w-3xl flex-col gap-6 pt-[12%] text-left"
        >
          {/* <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="h-px w-10 bg-border" />
            <span className="label-text text-secondary">From Requirement to Delivery.</span>
          </motion.div> */}

          <motion.h1 variants={fadeUp} className="heading-1">
            From Requirement to Delivery.
            <span className="block text-muted"> One Responsible Interface..</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="body-text max-w-2xl text-pretty text-secondary">
            We take full ownership of precision manufacturing and supply chain execution. By
            integrating supplier coordination, quality validation, and delivery management under one
            accountable structure, we reduce operational complexity and protect performance for
            industrial customers.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[14px] font-semibold leading-[1.2] text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
            >
              Speak to us
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex items-center gap-6 border-t border-border pt-6"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex shrink-0 items-center gap-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                >
                  <circle cx="7.5" cy="7.5" r="7.5" className="fill-accent/10" />
                  <path
                    d="M4.5 7.5L6.5 9.5L10.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="whitespace-nowrap text-[13px] leading-[1.4] text-secondary">
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
