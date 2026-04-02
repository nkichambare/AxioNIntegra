import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ResourceBody from '@/components/resource-body';
import { getPostBySlug, getPosts, normalizeLocale } from '@/lib/content';
import { formatLocalDate } from '@/lib/date-format';

type ResourcePostPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
};

async function getResourcePageData(
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ lang?: string | string[] }>,
) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = normalizeLocale(lang);
  const post = await getPostBySlug(slug, locale);
  return { locale, post };
}

export async function generateStaticParams() {
  const posts = await getPosts('en');
  return posts.map((post) => ({ slug: post.routeSlug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: ResourcePostPageProps): Promise<Metadata> {
  try {
    const { post } = await getResourcePageData(params, searchParams);

    if (!post) {
      return { title: 'Resources | AxionIntegra' };
    }

    return {
      title: `${post.title} | AxionIntegra`,
      description: post.excerpt,
    };
  } catch {
    return { title: 'Resources | AxionIntegra' };
  }
}

function extractHeadings(markdown: string): { text: string; id: string }[] {
  return markdown
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.replace(/^## /, '').trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      return { text, id };
    });
}

const CAPABILITIES = [
  'Precision CNC Components',
  'Tight Tolerance Manufacturing',
  'Sub-assemblies & Modules',
  'Manufacturing Integration',
  'Quality Inspection & Reporting',
  'Supplier Qualification',
  'Prototypes to Mass Production',
  'Material Sourcing',
];

export default async function ResourcePostPage({ params, searchParams }: ResourcePostPageProps) {
  let locale: ReturnType<typeof normalizeLocale> = 'en';
  let post: Awaited<ReturnType<typeof getPostBySlug>> = null;

  try {
    const data = await getResourcePageData(params, searchParams);
    locale = data.locale;
    post = data.post;
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.body);

  return (
    <main className="min-h-screen bg-soft text-primary">
      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-footer pt-16">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent" />

        <div className="mx-auto max-w-[1060px] px-6 py-14 sm:px-14 sm:py-20">
          <div className="mb-6 flex items-center gap-3.5">
            <span className="bg-accent px-3 py-1.5 font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-white">
              Article
            </span>
            <span className="font-ibm-mono text-[10px] tracking-[0.15em] uppercase text-[#64748b]">
              AxionIntegra Resources
            </span>
          </div>

          <h1 className="mb-5 font-playfair text-[clamp(26px,3.8vw,44px)] font-black leading-[1.15] text-[#f1f5f9]">
            {post.title}
          </h1>

          <p className="max-w-[640px] text-[16px] font-light leading-[1.7] text-[#94a3b8]">
            {post.excerpt}
          </p>

          <div className="mt-9 flex flex-wrap gap-2 border-t border-[#1e293b] pt-6">
            <span className="border border-[#1e293b] px-2.5 py-1.5 font-ibm-mono text-[10px] tracking-[0.1em] uppercase text-[#64748b]">
              AxionIntegra Editorial
            </span>
            <span className="border border-[#1e293b] px-2.5 py-1.5 font-ibm-mono text-[10px] tracking-[0.1em] uppercase text-[#64748b]">
              {formatLocalDate(post.publishDate, locale)}
            </span>
          </div>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-border bg-bg/80">
        <div className="mx-auto max-w-[1060px] px-6 py-3 sm:px-14">
          <nav className="flex items-center gap-2 font-ibm-mono text-[11px] tracking-[0.08em] uppercase">
            <Link
              href={`/?lang=${locale}#resources`}
              className="text-accent transition hover:opacity-70"
            >
              Resources
            </Link>
            <span className="text-muted">/</span>
            <span className="truncate text-secondary">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="mx-auto grid max-w-[1060px] grid-cols-1 items-start gap-14 px-6 py-14 sm:px-14 lg:grid-cols-[1fr_260px] lg:gap-16 lg:py-20">
        {/* Article body */}
        <article>
          <ResourceBody body={post.body} />
        </article>

        {/* Sticky sidebar */}
        <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
          {/* Table of Contents */}
          {headings.length > 0 && (
            <div className="overflow-hidden border border-border">
              <div className="bg-footer px-4 py-2.5 font-ibm-mono text-[9px] tracking-[0.22em] uppercase text-[#94a3b8]">
                In This Article
              </div>
              <ul className="bg-bg">
                {headings.map((h, i) => (
                  <li key={h.id} className="border-b border-border last:border-b-0">
                    <a
                      href={`#${h.id}`}
                      className="flex items-start gap-2.5 px-4 py-2.5 transition hover:bg-soft"
                    >
                      <span className="mt-0.5 shrink-0 font-ibm-mono text-[10px] text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13px] leading-[1.45] text-secondary hover:text-primary">
                        {h.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA card */}
          <div className="bg-accent p-5">
            <span className="mb-2.5 block font-ibm-mono text-[9px] tracking-[0.2em] uppercase text-white/60">
              Talk to AxionIntegra
            </span>
            <p className="mb-4 text-[14px] leading-[1.6] text-white/90">
              Approaching a scale-up decision? We provide end-to-end manufacturing accountability —
              from DFM review to production ramp support.
            </p>
            <a
              href="mailto:info@axionintegra.com"
              className="block text-center bg-black/20 px-4 py-2.5 font-ibm-mono text-[11px] tracking-[0.15em] uppercase text-white transition hover:bg-black/30"
            >
              Contact Us →
            </a>
          </div>

          {/* Capabilities */}
          <div className="overflow-hidden border border-border">
            <div className="bg-footer px-4 py-2.5 font-ibm-mono text-[9px] tracking-[0.22em] uppercase text-[#94a3b8]">
              AxionIntegra Capabilities
            </div>
            <div className="flex flex-col gap-1.5 bg-bg p-4">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap}
                  className="border-l-[3px] border-accent bg-soft px-3 py-1.5 font-ibm-mono text-[11px] tracking-[0.06em] text-primary"
                >
                  {cap}
                </div>
              ))}
            </div>
          </div>

          {/* How We Operate */}
          <div className="overflow-hidden border border-border">
            <div className="bg-footer px-4 py-2.5 font-ibm-mono text-[9px] tracking-[0.22em] uppercase text-[#94a3b8]">
              How We Operate
            </div>
            <div className="space-y-3 bg-bg p-4">
              <p className="text-[13.5px] leading-[1.65] text-secondary">
                <strong className="font-medium text-primary">
                  Precision Manufacturing &amp; Supply
                </strong>{' '}
                — Components and assemblies delivered under AxionIntegra&apos;s name and
                responsibility.
              </p>
              <p className="text-[13.5px] leading-[1.65] text-secondary">
                <strong className="font-medium text-primary">Manufacturing Integration</strong> — We
                coordinate third-party production while controlling processes, quality, and
                delivery.
              </p>
              <p className="text-[13.5px] leading-[1.65] text-secondary">
                <strong className="font-medium text-primary">Consultancy &amp; Sourcing</strong> —
                Vendor qualification, cost benchmarking, and manufacturing feasibility support.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* ── CLOSING CTA ── */}
      <div className="mx-auto max-w-[1060px] px-6 pb-20 sm:px-14">
        <div className="relative overflow-hidden border-t-4 border-accent bg-footer p-10 sm:p-14 grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto] sm:gap-10">
          <div
            className="pointer-events-none absolute right-[-20px] bottom-[-20px] select-none font-playfair text-[90px] font-black whitespace-nowrap text-white/[0.03]"
            aria-hidden="true"
          >
            AXIONINTEGRA
          </div>
          <div>
            <span className="mb-3.5 block font-ibm-mono text-[10px] tracking-[0.22em] uppercase text-accent">
              From Design to Delivery — One Responsible Partner
            </span>
            <h3 className="mb-3.5 font-playfair text-[28px] font-bold leading-[1.25] text-white sm:text-[30px]">
              Ready to Scale with Confidence?
            </h3>
            <p className="max-w-[500px] text-[15px] leading-[1.7] text-[#94a3b8]">
              AxionIntegra takes complete accountability for precision manufacturing accuracy,
              quality performance, cost efficiency, and delivery reliability.
            </p>
          </div>
          <div className="flex min-w-[180px] flex-col">
            <a
              href="mailto:info@axionintegra.com"
              className="block whitespace-nowrap bg-accent px-6 py-3.5 text-center font-ibm-mono text-[11px] tracking-[0.15em] uppercase text-white transition hover:opacity-90"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
