import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMarket, markets } from '@/lib/markets-data';
import { buildAlternates } from '@/lib/locale-meta';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const market = getMarket(slug);
  if (!market) return {};
  return {
    title: `${market.title} | AxionIntegra`,
    description: market.metaDescription,
    alternates: buildAlternates(locale, `/markets/${slug}`),
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const market = getMarket(slug);
  if (!market) notFound();

  const others = markets.filter((m) => m.slug !== slug);

  return (
    <main className="min-h-screen bg-soft text-primary">
      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-footer pt-16">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent" />
        <div className="mx-auto max-w-[1060px] px-6 py-14 sm:px-14 sm:py-20">
          <div className="mb-6 flex items-center gap-3.5">
            <span className="bg-accent px-3 py-1.5 font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-white">
              Market Sector
            </span>
            <span className="font-ibm-mono text-[10px] tracking-[0.15em] uppercase text-[#64748b]">
              AxionIntegra
            </span>
          </div>
          <h1 className="mb-5 text-[clamp(26px,3.8vw,44px)] font-black leading-[1.15] text-[#f1f5f9]">
            {market.title}
          </h1>
          <p className="max-w-[640px] text-[16px] font-light leading-[1.7] text-[#94a3b8]">
            {market.metaDescription}
          </p>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-border bg-bg/80">
        <div className="mx-auto max-w-[1060px] px-6 py-3 sm:px-14">
          <nav className="flex items-center gap-2 font-ibm-mono text-[11px] tracking-[0.08em] uppercase">
            <Link href={`/${locale}/#market`} className="text-accent transition hover:opacity-70">
              Markets
            </Link>
            <span className="text-muted">/</span>
            <span className="truncate text-secondary">{market.title}</span>
          </nav>
        </div>
      </div>

      {/* ── CONTENT + SIDEBAR ── */}
      <div className="mx-auto grid max-w-[1060px] grid-cols-1 items-start gap-14 px-6 py-14 sm:px-14 lg:grid-cols-[1fr_260px] lg:gap-16 lg:py-20">
        {/* Main content */}
        <article className="flex flex-col gap-12">
          <section id="overview">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              01 Overview
            </span>
            <div className="flex flex-col gap-4">
              {market.intro.map((para, i) => (
                <p key={i} className="body-text text-secondary">
                  {para}
                </p>
              ))}
            </div>
          </section>

          <section id="capabilities">
            <span className="mb-4 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              02 Sector Capabilities
            </span>
            <div className="flex flex-wrap gap-2">
              {market.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="border border-accent/40 px-3 py-1.5 font-ibm-mono text-[11px] tracking-[0.08em] text-accent"
                >
                  {cap}
                </span>
              ))}
            </div>
          </section>

          <section id="challenges">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              03 Key Challenges We Solve
            </span>
            <ul className="flex flex-col gap-3">
              {market.challenges.map((item) => (
                <li key={item} className="flex items-start gap-3 body-text text-secondary">
                  <span className="shrink-0 font-ibm-mono text-[13px] text-accent" aria-hidden="true">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="value">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              04 Why AxionIntegra
            </span>
            <ul className="flex flex-col gap-3">
              {market.valuePoints.map((item) => (
                <li key={item} className="flex items-start gap-3 body-text text-secondary">
                  <span className="mt-[3px] shrink-0 font-ibm-mono text-[13px] font-semibold text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="specs">
            <span className="mb-4 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              05 Technical Specifications
            </span>
            <div className="overflow-hidden border border-border">
              {market.specs.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[160px_1fr] sm:grid-cols-[200px_1fr] ${i % 2 === 0 ? 'bg-bg' : 'bg-soft'}`}
                >
                  <div className="border-r border-border px-4 py-3 font-ibm-mono text-[11px] tracking-[0.06em] text-secondary">
                    {row.label}
                  </div>
                  <div className="px-4 py-3 text-[14px] leading-[1.6] text-secondary">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Sticky sidebar */}
        <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
          <div className="bg-accent p-5">
            <span className="mb-2.5 block font-ibm-mono text-[9px] tracking-[0.2em] uppercase text-white/60">
              Start a Programme
            </span>
            <p className="mb-4 text-[14px] leading-[1.6] text-white/90">{market.ctaLine}</p>
            <Link
              href={`/${locale}/contact`}
              className="block text-center bg-black/20 px-4 py-2.5 font-ibm-mono text-[11px] tracking-[0.15em] uppercase text-white transition hover:bg-black/30"
            >
              Speak to Our Team →
            </Link>
          </div>

          <div className="overflow-hidden border border-border">
            <div className="bg-footer px-4 py-3">
              <p className="font-ibm-mono text-[9px] tracking-[0.22em] uppercase text-[#94a3b8]">
                Explore Other Sectors
              </p>
              <p className="mt-1 text-[12px] leading-[1.5] text-[#64748b]">
                AxionIntegra operates across six industrial markets.
              </p>
            </div>
            <ul className="bg-bg divide-y divide-border">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/${locale}/markets/${other.slug}`}
                    className="group flex items-center justify-between gap-3 px-4 py-3.5 transition hover:bg-soft"
                  >
                    <span className="text-[13px] leading-[1.45] text-secondary group-hover:text-primary transition">
                      {other.title}
                    </span>
                    <span className="shrink-0 text-accent opacity-0 group-hover:opacity-100 transition text-[14px]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-accent">
        <div className="mx-auto max-w-[1060px] px-6 py-14 sm:px-14 sm:py-20">
          <p className="mb-2 font-ibm-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
            Your sector. Your programme.
          </p>
          <h2 className="mb-4 text-[clamp(22px,3vw,34px)] font-black leading-[1.2] text-white">
            Our accountability.
          </h2>
          <p className="mb-8 max-w-[560px] text-[15px] leading-[1.7] text-white/70">
            Tell us about your component requirements, production volumes, and target timeline. We
            will respond with a clear outline of how we can structure the engagement.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white px-6 py-3 font-ibm-mono text-[11px] tracking-[0.15em] uppercase text-accent transition hover:bg-white/90"
          >
            Speak to Our Team →
          </Link>
        </div>
      </div>
    </main>
  );
}
