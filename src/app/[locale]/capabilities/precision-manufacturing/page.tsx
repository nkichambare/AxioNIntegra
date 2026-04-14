import type { Metadata } from 'next';
import Link from 'next/link';
import { buildAlternates } from '@/lib/locale-meta';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Precision Manufacturing Services | CNC & Traceable Execution | AxionIntegra',
    description:
      'CNC machining, sheet metal, and close-tolerance components delivered through controlled, traceable manufacturing execution — meeting technical specifications and delivery commitments.',
    alternates: buildAlternates(locale, '/capabilities/precision-manufacturing'),
  };
}

const otherCapabilities = [
  {
    label: 'Manufacturing Integration & Supplier Coordination',
    slug: 'manufacturing-integration',
  },
  { label: 'Quality Validation & Compliance Control', slug: 'quality-validation' },
  { label: 'Strategic Sourcing & Cost Optimization', slug: 'strategic-sourcing' },
  { label: 'Scalable Production & Program Support', slug: 'scalable-production' },
];

export default async function Page({ params }: Props) {
  const { locale } = await params;

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
            Precision Manufacturing Execution
          </h1>
          <p className="max-w-[640px] text-[16px] font-light leading-[1.7] text-[#94a3b8]">
            Controlled, traceable, and performance-aligned manufacturing execution that meets
            technical specifications and delivery commitments.
          </p>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-border bg-bg/80">
        <div className="mx-auto max-w-[1060px] px-6 py-3 sm:px-14">
          <nav className="flex items-center gap-2 font-ibm-mono text-[11px] tracking-[0.08em] uppercase">
            <Link
              href={`/${locale}/#capabilities`}
              className="text-accent transition hover:opacity-70"
            >
              Capabilities
            </Link>
            <span className="text-muted">/</span>
            <span className="truncate text-secondary">Precision Manufacturing Execution</span>
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
              <p className="body-text text-secondary">
                AxionIntegra delivers precision-manufactured components and assemblies through
                structured coordination with qualified production partners. Our execution model
                ensures that engineering intent is preserved throughout manufacturing while
                maintaining cost discipline and delivery reliability.
              </p>
              <p className="body-text text-secondary">
                Every engagement begins with technical alignment and feasibility validation before
                production is initiated.
              </p>
            </div>
          </section>

          <section id="scope">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              02 Scope
            </span>
            <p className="body-text mb-5 text-secondary">
              We support industrial manufacturing across:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'CNC machining of tight-tolerance components',
                'Fabricated and formed metal parts',
                'Conductive and structural industrial components',
                'Surface treatment and finishing processes',
                'Sub-assembly integration',
                'Prototype, pre-series, and serial production',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 body-text text-secondary">
                  <span
                    className="shrink-0 font-ibm-mono text-[13px] text-accent"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="process">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              03 Process
            </span>
            <p className="body-text mb-5 text-secondary">
              Our precision execution framework includes:
            </p>
            <ol className="flex flex-col gap-4">
              {[
                'Requirement clarification and drawing validation',
                'Manufacturing feasibility review',
                'Supplier capability alignment',
                'Production scheduling coordination',
                'In-process inspection checkpoints',
                'Final dimensional and documentation validation',
                'Delivery release approval',
              ].map((step, i) => (
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
            <p className="body-text mb-5 text-secondary">We reduce production risk through:</p>
            <ul className="flex flex-col gap-3">
              {[
                'Pre-production technical verification',
                'Defined inspection protocols',
                'Clear acceptance criteria',
                'Structured communication with manufacturing partners',
                'Escalation procedures for deviation management',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 body-text text-secondary">
                  <span
                    className="shrink-0 font-ibm-mono text-[13px] text-accent"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="outcome">
            <span className="mb-3 block font-ibm-mono text-[14px] tracking-[0.2em] uppercase text-accent">
              05 Outcome
            </span>
            <p className="body-text text-secondary">
              Controlled, traceable, and performance-aligned manufacturing execution that meets
              technical specifications and delivery commitments.
            </p>
          </section>
        </article>

        {/* Sticky sidebar */}
        <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
          {/* CTA */}
          <div className="bg-accent p-5">
            <span className="mb-2.5 block font-ibm-mono text-[9px] tracking-[0.2em] uppercase text-white/60">
              Start a Programme
            </span>
            <p className="mb-4 text-[14px] leading-[1.6] text-white/90">
              Have a precision manufacturing requirement? We will review your specifications and
              outline an execution approach.
            </p>
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
              {otherCapabilities.map((cap, i) => (
                <li key={cap.slug} className="border-b border-border last:border-b-0">
                  <Link
                    href={`/${locale}/capabilities/${cap.slug}`}
                    className="flex items-start gap-2.5 px-4 py-3 transition hover:bg-soft"
                  >
                    <span className="mt-0.5 shrink-0 font-ibm-mono text-[10px] text-accent">
                      {String(i + 2).padStart(2, '0')}
                    </span>
                    <span className="text-[13px] leading-[1.45] text-secondary hover:text-primary">
                      {cap.label}
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
