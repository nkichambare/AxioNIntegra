import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { capabilities, getCapability } from '@/lib/capabilities-data';
import { buildAlternates } from '@/lib/locale-meta';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const cap = getCapability(slug);
  if (!cap) return {};
  return {
    title: `${cap.title} | AxionIntegra`,
    description: cap.metaDescription,
    alternates: buildAlternates(locale, `/capabilities/${slug}`),
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const cap = getCapability(slug);
  if (!cap) notFound();

  const others = capabilities.filter((c) => c.slug !== slug);

  return (
    <main className="min-h-screen bg-soft text-primary">
      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-footer pt-16">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent" />
        <div className="mx-auto max-w-[1060px] px-6 py-14 sm:px-14 sm:py-20">
          <div className="mb-6 flex items-center gap-3.5">
            <span className="bg-accent px-3 py-1.5 font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-white">
              Capability
            </span>
            <span className="font-ibm-mono text-[10px] tracking-[0.15em] uppercase text-[#64748b]">
              AxionIntegra
            </span>
          </div>
          <h1 className="mb-5 text-[clamp(26px,3.8vw,44px)] font-black leading-[1.15] text-[#f1f5f9]">
            {cap.title}
          </h1>
          <p className="max-w-[640px] text-[16px] font-light leading-[1.7] text-[#94a3b8]">
            {cap.heroSubtitle}
          </p>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-border bg-bg/80">
        <div className="mx-auto max-w-[1060px] px-6 py-3 sm:px-14">
          <nav className="flex items-center gap-2 font-ibm-mono text-[11px] tracking-[0.08em] uppercase">
            <Link href={`/${locale}/#capabilities`} className="text-accent transition hover:opacity-70">
              Capabilities
            </Link>
            <span className="text-muted">/</span>
            <span className="truncate text-secondary">{cap.title}</span>
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
              {cap.overview.map((para, i) => (
                <p key={i} className="body-text text-secondary">
                  {para}
                </p>
              ))}
            </div>
          </section>

          <section id="scope">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              02 Scope
            </span>
            <ul className="flex flex-col gap-3">
              {cap.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 body-text text-secondary">
                  <span className="shrink-0 font-ibm-mono text-[13px] text-accent" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="process">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              03 Process
            </span>
            <ol className="flex flex-col gap-4">
              {cap.process.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 font-ibm-mono text-[11px] font-semibold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="body-text text-secondary">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section id="risk">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              04 Risk Control
            </span>
            <ul className="flex flex-col gap-3">
              {cap.risk.map((item) => (
                <li key={item} className="flex items-start gap-3 body-text text-secondary">
                  <span className="shrink-0 font-ibm-mono text-[13px] text-accent" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="outcome">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              05 Outcome
            </span>
            <p className="body-text text-secondary">{cap.outcome}</p>
          </section>
        </article>

        {/* Sticky sidebar */}
        <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
          {/* CTA */}
          <div className="bg-accent p-5">
            <span className="mb-2.5 block font-ibm-mono text-[9px] tracking-[0.2em] uppercase text-white/60">
              Start a Programme
            </span>
            <p className="mb-4 text-[14px] leading-[1.6] text-white/90">{cap.ctaText}</p>
            <Link
              href={`/${locale}/contact`}
              className="block text-center bg-black/20 px-4 py-2.5 font-ibm-mono text-[11px] tracking-[0.15em] uppercase text-white transition hover:bg-black/30"
            >
              Contact Us →
            </Link>
          </div>

          {/* Other capabilities */}
          <div className="overflow-hidden border border-border">
            <div className="bg-footer px-4 py-2.5 font-ibm-mono text-[9px] tracking-[0.22em] uppercase text-[#94a3b8]">
              Other Capabilities
            </div>
            <ul className="bg-bg">
              {others.map((other, i) => (
                <li key={other.slug} className="border-b border-border last:border-b-0">
                  <Link
                    href={`/${locale}/capabilities/${other.slug}`}
                    className="flex items-start gap-2.5 px-4 py-3 transition hover:bg-soft"
                  >
                    <span className="mt-0.5 shrink-0 font-ibm-mono text-[10px] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[13px] leading-[1.45] text-secondary hover:text-primary">
                      {other.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
