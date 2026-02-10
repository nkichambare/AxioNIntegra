export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-footer py-16 text-footer-text sm:py-20">
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
            <a href="#about" className="text-[15px] text-footer-text transition hover:text-white">
              About
            </a>
            <a href="#market" className="text-[15px] text-footer-text transition hover:text-white">
              Market
            </a>
            <a
              href="#capabilities"
              className="text-[15px] text-footer-text transition hover:text-white"
            >
              Capabilities
            </a>
            <a
              href="#resources"
              className="text-[15px] text-footer-text transition hover:text-white"
            >
              Resources
            </a>
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

      <div className="mt-8 w-full overflow-hidden px-6 pb-6">
        <h1 className="whitespace-nowrap text-[17vw] font-semibold leading-[0.9] tracking-tight text-white/15">
          AxioNIntegra
        </h1>
      </div>
    </footer>
  );
}
