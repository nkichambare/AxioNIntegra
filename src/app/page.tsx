'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,#fff7ed_0%,#f8fafc_45%,#eef2ff_100%)]'>
      <div className='pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl' />
      <div className='pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-400/20 blur-3xl' />

      <main className='relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-slate-900'>
        <motion.div
          initial='hidden'
          animate='show'
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className='flex w-full flex-col items-center gap-6 text-center'
        >
          <motion.span
            variants={fadeUp}
            className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm'
          >
            AxioNIntegra
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className='text-balance text-4xl font-semibold tracking-tight sm:text-6xl'
          >
            Home Page
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className='max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg'
          >
            A clean, static landing space with subtle motion — built on Next.js, Tailwind, and
            Framer Motion.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className='mt-4 flex flex-wrap items-center justify-center gap-4'
          >
            <button className='rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-slate-900/25'>
              Get Started
            </button>
            <button className='rounded-full border border-slate-900/15 bg-white/70 px-6 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5'>
              View Stack
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className='mt-16 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400'
        >
          <span className='h-px w-12 bg-slate-300' />
          Subtle motion. Strong first impression.
          <span className='h-px w-12 bg-slate-300' />
        </motion.div>
      </main>
    </div>
  );
}
