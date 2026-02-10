'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';

import LanguageSelect from '@/components/language-select';

const menuReveal = {
  hidden: {
    opacity: 0,
    clipPath: 'circle(0px at calc(100% - 54px) 32px)',
  },
  show: {
    opacity: 1,
    clipPath: 'circle(160% at calc(100% - 54px) 32px)',
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 28,
    },
  },
  exit: {
    opacity: 0,
    clipPath: 'circle(0px at calc(100% - 54px) 32px)',
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 28,
    },
  },
};

const menuContent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.1 },
  },
  exit: { opacity: 0 },
};

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

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
    <>
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4">
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-semibold leading-[1.2] text-primary">
              AxioNIntegra
            </span>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <Link
              href="/#market"
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              Market
            </Link>
            <Link
              href="/#capabilities"
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              Capabilities
            </Link>
            <Link
              href="/#about"
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary transition hover:text-primary"
            >
              <span className="sr-only">Open menu</span>
              <RxHamburgerMenu className="h-4 w-4" aria-hidden="true" />
            </button>

            <LanguageSelect />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={menuReveal}
            className="fixed inset-0 z-40 bg-footer"
          >
            <motion.div
              variants={menuContent}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mx-auto flex h-full max-w-5xl flex-col px-6 py-10 text-footer-text"
            >
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-semibold leading-[1.2]">AxioNIntegra</span>
                <div className="flex items-center gap-3">
                  <LanguageSelect
                    id="language-mobile"
                    selectClassName="border-white/20 bg-transparent text-footer-text focus:ring-white/20"
                    chevronClassName="text-footer-text"
                  />
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={closeMenu}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-footer-text"
                  >
                    <TfiClose className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <nav className="mt-16 flex flex-col items-start gap-8">
                <Link className="heading-2 text-footer-text" href="/#market" onClick={closeMenu}>
                  Market
                </Link>
                <Link
                  className="heading-2 text-footer-text"
                  href="/#capabilities"
                  onClick={closeMenu}
                >
                  Capabilities
                </Link>
                <Link className="heading-2 text-footer-text" href="/#about" onClick={closeMenu}>
                  About
                </Link>
                <Link className="heading-2 text-footer-text" href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
                <Link className="heading-2 text-footer-text" href="/#resources" onClick={closeMenu}>
                  Resources
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
