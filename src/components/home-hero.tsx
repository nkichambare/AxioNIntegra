'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

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
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="h-px w-10 bg-border" />
            <span className="label-text text-secondary">End-to-end engineering services</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="heading-1">
            From Concept to Production.
            <span className="block text-muted">One Accountable Partner.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="body-text max-w-2xl text-pretty text-secondary">
            We take full ownership of the engineering journey. By integrating design, development,
            and production under one roof, we reduce technical risk and complexity for enterprise
            clients.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[14px] font-semibold leading-[1.2] text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
            >
              Speak to us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
