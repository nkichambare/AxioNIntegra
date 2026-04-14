import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ResourceBody from '@/components/resource-body';
import { type BlogPostSummary, getPostBySlug, getPosts, normalizeLocale } from '@/lib/content';
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
  const [post, allPosts] = await Promise.all([getPostBySlug(slug, locale), getPosts(locale)]);
  const relatedArticles = allPosts.filter((p) => p.routeSlug !== slug).slice(0, 5);
  return { locale, post, relatedArticles };
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
      alternates: { canonical: `/resources/${(await params).slug}` },
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

export default async function ResourcePostPage({ params, searchParams }: ResourcePostPageProps) {
  let locale: ReturnType<typeof normalizeLocale> = 'en';
  let post: Awaited<ReturnType<typeof getPostBySlug>> = null;
  let relatedArticles: BlogPostSummary[] = [];

  try {
    const data = await getResourcePageData(params, searchParams);
    locale = data.locale;
    post = data.post;
    relatedArticles = data.relatedArticles;
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

          <h1 className="mb-5 text-[clamp(26px,3.8vw,44px)] font-black leading-[1.15] text-[#f1f5f9]">
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
            <Link
              href="/contact"
              className="block text-center bg-black/20 px-4 py-2.5 font-ibm-mono text-[11px] tracking-[0.15em] uppercase text-white transition hover:bg-black/30"
            >
              Contact Us →
            </Link>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="overflow-hidden border border-border">
              <div className="bg-footer px-4 py-2.5 font-ibm-mono text-[9px] tracking-[0.22em] uppercase text-[#94a3b8]">
                Related Articles
              </div>
              <ul className="bg-bg">
                {relatedArticles.map((article, i) => (
                  <li key={article.routeSlug} className="border-b border-border last:border-b-0">
                    <Link
                      href={`/resources/${article.routeSlug}?lang=${locale}`}
                      className="flex items-start gap-2.5 px-4 py-3 transition hover:bg-soft"
                    >
                      <span className="mt-0.5 shrink-0 font-ibm-mono text-[10px] text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13px] leading-[1.45] text-secondary hover:text-primary">
                        {article.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
            <span className="mb-3.5 block font-ibm-mono text-[10px] tracking-[0.22em] uppercase text-[#93c5fd]">
              From Design to Delivery — One Responsible Partner
            </span>
            <h3 className="mb-3.5 text-[28px] font-bold leading-[1.25] text-white sm:text-[30px]">
              Ready to Scale with Confidence?
            </h3>
            <p className="max-w-[500px] text-[15px] leading-[1.7] text-[#94a3b8]">
              AxionIntegra takes complete accountability for precision manufacturing accuracy,
              quality performance, cost efficiency, and delivery reliability.
            </p>
          </div>
          <div className="flex min-w-[180px] flex-col">
            <Link
              href="/contact"
              className="block whitespace-nowrap bg-accent px-6 py-3.5 text-center font-ibm-mono text-[11px] tracking-[0.15em] uppercase text-white transition hover:opacity-90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
