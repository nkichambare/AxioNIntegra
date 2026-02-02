"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-soft blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-soft blur-3xl" />

      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-primary">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex w-full flex-col items-center gap-6 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="label-text inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-1 font-semibold text-secondary shadow-sm"
          >
            AxioNIntegra
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="heading-1"
          >
            Home Page
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="body-text max-w-2xl text-pretty text-secondary"
          >
            A clean, static landing space with subtle motion — built on Next.js, Tailwind, and
            Framer Motion.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="rounded-full bg-accent px-6 py-2 text-[14px] font-semibold leading-[1.2] text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20">
              Get Started
            </button>
            <button className="rounded-full border border-border bg-bg px-6 py-2 text-[14px] font-semibold leading-[1.2] text-secondary shadow-sm transition hover:-translate-y-0.5">
              View Stack
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="label-text mt-16 flex items-center gap-2 tracking-[0.3em] text-muted"
        >
          <span className="h-px w-12 bg-border" />
          Subtle motion. Strong first impression.
          <span className="h-px w-12 bg-border" />
        </motion.div>
      </main>
    </div>
  );
}
