'use client';

import { useEffect, useState, useTransition } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';

const menuReveal: Variants = {
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

const menuContent: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.1 },
  },
  exit: { opacity: 0 },
};

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const LOCALES = ['en', 'de', 'fr'];

  const currentLang = (() => {
    const segment = pathname.split('/')[1];
    return LOCALES.includes(segment) ? segment : 'en';
  })();

  const withLang = (href: string) => {
    if (!href.startsWith('/')) return href;
    const [path, hash] = href.split('#');
    const localePath = `/${currentLang}${path === '/' ? '' : path}`;
    return hash ? `${localePath}#${hash}` : localePath;
  };

  const handleLanguageChange = (nextLang: string) => {
    const segments = pathname.split('/');
    if (LOCALES.includes(segments[1])) segments[1] = nextLang;
    else segments.splice(1, 0, nextLang);
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    startTransition(() => {
      router.push(`${segments.join('/')}${hash}`);
    });
    closeMenu();
  };

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
      <div
        aria-hidden="true"
        className={`fixed left-0 right-0 top-0 z-50 h-[2px] bg-accent/85 transition-transform duration-300 ease-out ${
          isPending ? 'origin-left scale-x-100' : 'origin-right scale-x-0'
        }`}
      />
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:grid md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-3">
            <Link
              href={withLang('/')}
              className="text-[15px] font-semibold leading-[1.2] text-primary"
            >
              AxioNIntegra
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <Link
              href={withLang('/#market')}
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              Market
            </Link>
            <Link
              href={withLang('/#capabilities')}
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              Capabilities
            </Link>
            <Link
              href={withLang('/how-we-work')}
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              How We Work
            </Link>
            <Link
              href={withLang('/about')}
              className="text-[14px] font-medium text-secondary transition hover:text-primary"
            >
              About
            </Link>
            <Link
              href={withLang('/contact')}
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

            {/* <LanguageSelect value={currentLang} onChange={handleLanguageChange} /> */}
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
                <Link
                  href={withLang('/')}
                  className="text-[15px] font-semibold leading-[1.2]"
                  onClick={closeMenu}
                >
                  AxioNIntegra
                </Link>
                <div className="flex items-center gap-3">
                  {/* <LanguageSelect
                    id="language-mobile"
                    value={currentLang}
                    onChange={handleLanguageChange}
                    selectClassName="border-white/20 bg-transparent text-footer-text focus:ring-white/20"
                    chevronClassName="text-footer-text"
                  /> */}
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
                <Link
                  className="heading-2 text-footer-text"
                  href={withLang('/#market')}
                  onClick={closeMenu}
                >
                  Market
                </Link>
                <Link
                  className="heading-2 text-footer-text"
                  href={withLang('/#capabilities')}
                  onClick={closeMenu}
                >
                  Capabilities
                </Link>
                <Link
                  className="heading-2 text-footer-text"
                  href={withLang('/how-we-work')}
                  onClick={closeMenu}
                >
                  How We Work
                </Link>
                <Link
                  className="heading-2 text-footer-text"
                  href={withLang('/#about')}
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  className="heading-2 text-footer-text"
                  href={withLang('/contact')}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <Link
                  className="heading-2 text-footer-text"
                  href={withLang('/#resources')}
                  onClick={closeMenu}
                >
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
