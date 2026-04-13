import Link from 'next/link';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/about' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Markets', href: '/#market' },
  { label: 'Resources', href: '/#resources' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutzerklärung', href: '/datenschutz' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export default function SiteFooter() {
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
          <a
            href="mailto:contact@axionintegra.com"
            className="text-[14px] text-blue-400 transition hover:text-blue-300"
          >
            contact@axionintegra.com
          </a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <p className="label-text text-footer-text/60">Company</p>
          <div className="flex flex-col gap-3">
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
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
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] text-footer-text transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <p className="label-text text-footer-text/60">Follow us</p>
            <a
              href="https://linkedin.com/company/axionintegra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-blue-400 transition hover:text-blue-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl border-t border-white/15 px-6 pt-6">
        <p className="text-[13px] text-footer-text/60">
          © {new Date().getFullYear()} AxionIntegra. All rights reserved.
        </p>
      </div>

      <div className="mt-8 w-full overflow-hidden" style={{ height: '15vw' }}>
        <h1
          className="whitespace-nowrap text-[18vw] font-semibold leading-[1] tracking-tight translate-y-[-15%] select-none"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(148,163,184,0.25)',
          }}
        >
          AxionIntegra
        </h1>
      </div>
    </footer>
  );
}
