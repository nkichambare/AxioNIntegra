import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-footer pt-16 text-footer-text sm:pt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="flex flex-col gap-4">
          <p className="text-[15px] font-semibold leading-[1.2] text-white">AxioNIntegra</p>
          <p className="body-text max-w-md text-footer-text">
            End-to-end engineering and production execution for enterprise industrial programs.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="label-text text-footer-text/80">Explore</p>
          <div className="flex flex-col gap-3">
            <Link
              href="/#about"
              className="text-[15px] text-footer-text transition hover:text-white"
            >
              About
            </Link>
            <Link
              href="/#market"
              className="text-[15px] text-footer-text transition hover:text-white"
            >
              Market
            </Link>
            <Link
              href="/#capabilities"
              className="text-[15px] text-footer-text transition hover:text-white"
            >
              Capabilities
            </Link>
            <Link
              href="/#resources"
              className="text-[15px] text-footer-text transition hover:text-white"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-[15px] text-footer-text transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="label-text text-footer-text/80">Contact</p>
          <a
            href="mailto:contact@axionintegra.com"
            className="text-[15px] text-footer-text transition hover:text-white"
          >
            contact@axionintegra.com
          </a>
          <p className="text-[14px] text-footer-text/80">Enterprise engineering inquiries</p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl border-t border-white/15 px-6 pt-6">
        <p className="text-[13px] text-footer-text/80">
          © {new Date().getFullYear()} AxioNIntegra. All rights reserved.
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
          AxioNIntegra
        </h1>
      </div>
    </footer>
  );
}
