'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const LOCALES = ['en', 'de', 'fr'];

const companyPaths = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Team', path: '/about' },
  { label: 'Capabilities', path: '/#capabilities' },
  { label: 'Product Portfolio', path: '/#portfolio' },
  { label: 'How We Work', path: '/how-we-work' },
  { label: 'Markets', path: '/#market' },
  { label: 'Resources', path: '/#resources' },
  { label: 'Registrations & Credentials', path: '/credentials' },
  { label: 'Contact', path: '/contact' },
];

const legalPaths = [
  { label: 'Impressum', path: '/impressum' },
  { label: 'Datenschutzerklärung', path: '/datenschutz' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
];

export default function SiteFooter() {
  const pathname = usePathname();
  const locale = (() => {
    const segment = pathname.split('/')[1];
    return LOCALES.includes(segment) ? segment : 'en';
  })();

  const localePath = (path: string) => {
    const [p, hash] = path.split('#');
    const full = `/${locale}${p === '/' ? '' : p}`;
    return hash ? `${full}#${hash}` : full;
  };

  return (
    <footer className="bg-footer pt-16 text-footer-text sm:pt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <p className="text-[15px] font-semibold leading-[1.2] text-white">AxionIntegra</p>
          <p className="body-text max-w-xs text-footer-text">
            Precision manufacturing and supply chain execution. One accountable partner from
            requirement to delivery.
          </p>
          <p className="text-[14px] text-footer-text/70 leading-relaxed">
            Stuttgart, Baden-Württemberg
            <br />
            Germany 70186
            <br />
            Germany
          </p>
          <p className="text-[14px] text-footer-text/70 leading-relaxed">
            705, Sai Dwarka Residency, Bankar Mala
            <br />
            Kathe Galli, Nashik – 422011
            <br />
            India
          </p>
          <a
            href="mailto:contact@axionintegra.com"
            className="text-[14px] text-blue-400 transition hover:text-blue-300"
          >
            contact@axionintegra.com
          </a>
          <a
            href="tel:+919920981545"
            className="text-[14px] text-footer-text/70 transition hover:text-white"
          >
            +91 99209 81545
          </a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <p className="label-text text-footer-text/60">Company</p>
          <div className="flex flex-col gap-3">
            {companyPaths.map((link) => (
              <Link
                key={link.label}
                href={localePath(link.path)}
                className="text-[15px] text-footer-text transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal + Follow us */}
        <div className="flex flex-col gap-4">
          <p className="label-text text-footer-text/60">Legal</p>
          <div className="flex flex-col gap-3">
            {legalPaths.map((link) => (
              <Link
                key={link.label}
                href={localePath(link.path)}
                className="text-[15px] text-footer-text transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <p className="label-text text-footer-text/60">Follow us</p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/axionintegra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-footer-text transition hover:border-blue-400 hover:text-blue-400"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919920981545"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-footer-text transition hover:border-green-400 hover:text-green-400"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl border-t border-white/15 px-6 pt-6">
        <p className="text-[13px] text-footer-text/60">
          © {new Date().getFullYear()} AxionIntegra. All rights reserved.
        </p>
      </div>

      <div className="mt-8 w-full overflow-hidden" style={{ height: '15vw' }}>
        <p
          className="whitespace-nowrap text-[18vw] font-semibold leading-[1] tracking-tight translate-y-[-15%] select-none"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(148,163,184,0.25)',
          }}
          aria-hidden="true"
        >
          AxionIntegra
        </p>
      </div>
    </footer>
  );
}
