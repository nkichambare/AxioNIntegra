'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AboutSection from '@/components/about-section';
import Button from '@/components/button';
import CapabilitiesSection from '@/components/capabilities-section';
import ExpertiseSection from '@/components/expertise-section';
import LanguageSelect from '@/components/language-select';
import MarketSection from '@/components/market-section';
import ResourcesSection from '@/components/resources-section';
import SiteFooter from '@/components/site-footer';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-soft blur-3xl" />

      <header className="fixed top-0 left-0 right-0 z-30 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4">
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-semibold leading-[1.2] text-primary">
              AxioNIntegra
            </span>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <a
              href="#market"
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              Market
            </a>
            <a
              href="#capabilities"
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              Capabilities
            </a>
            <a
              href="#about"
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary transition hover:text-primary"
            >
              <span className="sr-only">Open menu</span>
              <span className="relative block h-3 w-4">
                <span className="absolute top-0 left-0 h-px w-full bg-current" />
                <span className="absolute top-1.5 left-0 h-px w-full bg-current" />
                <span className="absolute top-3 left-0 h-px w-full bg-current" />
              </span>
            </button>

            <LanguageSelect />
          </div>
        </div>
      </header>

      <main className="relative flex w-full flex-col text-primary">
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
                <span className="label-text text-secondary">End‑to‑end engineering services</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="heading-1">
                From Concept to Production.
                <span className="block text-muted">One Accountable Partner.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="body-text max-w-2xl text-pretty text-secondary"
              >
                We take full ownership of the engineering journey. By integrating design,
                development, and production under one roof, we reduce technical risk and complexity
                for enterprise clients.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center gap-6">
                <Button>Talk to an Engineer</Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <AboutSection />
        <ExpertiseSection />
        <MarketSection />
        <CapabilitiesSection />
        <ResourcesSection />
        <SiteFooter />
      </main>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-footer"
          >
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mx-auto flex h-full max-w-5xl flex-col px-6 py-10 text-footer-text"
            >
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-semibold leading-[1.2]">AxioNIntegra</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-footer-text"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-16 flex flex-col gap-8">
                <a className="heading-2 text-footer-text" href="#market">
                  Market
                </a>
                <a className="heading-2 text-footer-text" href="#capabilities">
                  Capabilities
                </a>
                <a className="heading-2 text-footer-text" href="#about">
                  About
                </a>
                <a className="heading-2 text-footer-text" href="#contact">
                  Contact
                </a>
                <a className="heading-2 text-footer-text" href="#resources">
                  Resources
                </a>
                <a className="heading-2 text-footer-text" href="#how-we-work">
                  How We Work
                </a>
              </nav>

              <div className="mt-auto">
                <LanguageSelect
                  id="language-mobile"
                  selectClassName="border-white/20 bg-transparent text-footer-text focus:ring-white/20"
                  chevronClassName="text-footer-text"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
