'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Spec Review & DFM',
    description:
      'Technical alignment before any production begins. We review your specifications, identify manufacturability risks, and confirm material and tolerance requirements before a single part is made.',
  },
  {
    num: '02',
    title: 'Supplier Selection',
    description:
      'Vetted partners qualified to documented standards. We match your programme to suppliers with verified capabilities, capacity, and quality track records — no guesswork, no untested vendors.',
  },
  {
    num: '03',
    title: 'In-Process Inspection',
    description:
      'Controlled checkpoints throughout production. We conduct staged inspections at critical production milestones, identifying deviations early so corrections happen before final delivery.',
  },
  {
    num: '04',
    title: 'Final Acceptance',
    description:
      'Dimensional reports & material certificates. Every batch is validated against your specifications before dispatch. Documentation is compiled, reviewed, and ready before shipment.',
  },
  {
    num: '05',
    title: 'Delivery',
    description:
      'Traceable, documented, on-time delivery. Parts arrive with full traceability certificates, inspection records, and delivery documentation in one consolidated package.',
  },
];

const fromRight = {
  hidden: { opacity: 0, x: 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};
const fromLeft = {
  hidden: { opacity: 0, x: -48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const lineGrow = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1.6, ease: 'easeOut' as const } },
};
const dotPop = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.35, ease: 'backOut' as const } },
};

const vp = { once: true, margin: '-80px' } as const;

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-bg pt-[88px] text-primary">
      {/* ── Hero ── */}
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
          <p className="label-text text-muted">Process</p>
          <h1 className="heading-1 mt-3 max-w-2xl">How We Work</h1>
          <p className="body-text mt-4 max-w-xl text-secondary">
            Every programme follows the same disciplined sequence from technical review to
            documented delivery. No step is skipped. One team owns every stage.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[14px] font-semibold leading-[1.2] text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="relative">
            {/* ── Vertical line ── */}
            {/* Mobile: left-aligned */}
            <motion.div
              variants={lineGrow}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute left-[19px] top-2 bottom-2 w-px origin-top bg-border md:hidden"
            />
            {/* Desktop: centered */}
            <motion.div
              variants={lineGrow}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute left-1/2 top-2 bottom-2 hidden w-px -translate-x-1/2 origin-top bg-border md:block"
            />

            <div className="flex flex-col gap-10 md:gap-16">
              {steps.map((step, i) => {
                const isCardRight = i % 2 === 0;
                return (
                  <div key={step.num} className="relative">
                    {/* ── MOBILE layout (single column, dot left) ── */}
                    <motion.div
                      variants={fromRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-40px' }}
                      className="flex items-start gap-6 md:hidden"
                    >
                      <div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent/30 bg-bg shadow-sm">
                        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                      </div>
                      <div className="flex-1">
                        <Card step={step} />
                      </div>
                    </motion.div>

                    {/* ── DESKTOP layout (alternating) ── */}
                    <div className="hidden md:grid md:grid-cols-[1fr_64px_1fr] md:items-center">
                      {/* Left slot */}
                      <div className="flex justify-end pr-8">
                        {isCardRight ? (
                          <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                            className="text-right"
                          >
                            <Badge num={step.num} title={step.title} align="right" />
                          </motion.div>
                        ) : (
                          <motion.div
                            variants={fromLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                            className="w-full max-w-[380px]"
                          >
                            <Card step={step} />
                          </motion.div>
                        )}
                      </div>

                      {/* Center dot */}
                      <motion.div
                        variants={dotPop}
                        initial="hidden"
                        whileInView="show"
                        viewport={vp}
                        className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-bg shadow-md"
                      >
                        <div className="h-3 w-3 rounded-full bg-accent" />
                      </motion.div>

                      {/* Right slot */}
                      <div className="flex justify-start pl-8">
                        {isCardRight ? (
                          <motion.div
                            variants={fromRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                            className="w-full max-w-[380px]"
                          >
                            <Card step={step} />
                          </motion.div>
                        ) : (
                          <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                            className="text-left"
                          >
                            <Badge num={step.num} title={step.title} align="left" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="border-t border-border bg-soft/50 py-16">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <h2 className="heading-2">Ready to run a programme with us?</h2>
          <p className="body-text mx-auto mt-4 max-w-lg text-secondary">
            Tell us about your requirement and we will walk you through how this process applies to
            your specific programme.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-[14px] font-semibold leading-[1.2] text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Sub-components ── */

type Step = { num: string; title: string; description: string };

function Card({ step }: { step: Step }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg shadow-[0_4px_20px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(15,23,42,0.12)]">
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-accent/60 via-accent/30 to-transparent" />
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h2 className="heading-3 text-primary">{step.title}</h2>
          <span className="shrink-0 rounded-full bg-accent/8 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-widest text-accent">
            {step.num}
          </span>
        </div>
        <p className="body-text mt-3 text-secondary">{step.description}</p>
      </div>
    </div>
  );
}

function Badge({ num, title, align }: { num: string; title: string; align: 'left' | 'right' }) {
  return (
    <div className={`flex flex-col gap-3 ${align === 'right' ? 'items-end' : 'items-start'}`}>
      <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 font-mono text-[13px] font-semibold tracking-widest text-white">
        {num}
      </span>
      <p
        className={`heading-3 max-w-[200px] text-primary ${align === 'right' ? 'text-right' : 'text-left'}`}
      >
        {title}
      </p>
    </div>
  );
}
