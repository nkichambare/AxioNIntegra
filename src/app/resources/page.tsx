import Link from 'next/link';
import { getPosts, normalizeLocale } from '@/lib/content';
import { formatLocalDate } from '@/lib/date-format';

type ResourcesListPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export default async function ResourcesListPage({ searchParams }: ResourcesListPageProps) {
  const { lang } = await searchParams;
  const locale = normalizeLocale(lang);
  const posts = await getPosts(locale);

  return (
    <main className="min-h-screen bg-soft text-primary">
      {/* ── HERO HEADER ── */}
      <div className="relative overflow-hidden bg-footer pt-16">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent" />
        <div className="mx-auto max-w-[1060px] px-6 py-14 sm:px-14 sm:py-20">
          <div className="mb-5 flex items-center gap-3.5">
            <span className="bg-accent px-3 py-1.5 font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-white">
              Insights
            </span>
            <span className="font-ibm-mono text-[10px] tracking-[0.15em] uppercase text-[#64748b]">
              Manufacturing · Precision · Scale
            </span>
          </div>
          <h1 className="mb-4 font-playfair text-[clamp(28px,3.8vw,48px)] font-black leading-[1.15] text-[#f1f5f9]">
            AxionIntegra <em className="italic text-[#94a3b8]">Resources</em>
          </h1>
          <p className="max-w-[520px] text-[16px] font-light leading-[1.7] text-[#94a3b8]">
            Technical articles on precision manufacturing, production scaling, quality systems, and
            supply chain integration.
          </p>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-border bg-bg/80">
        <div className="mx-auto flex max-w-[1060px] items-center justify-between px-6 py-3 sm:px-14">
          <span className="font-ibm-mono text-[11px] tracking-[0.08em] uppercase text-muted">
            All Articles
          </span>
          <Link
            href={`/?lang=${locale}#resources`}
            className="font-ibm-mono text-[11px] tracking-[0.08em] uppercase text-accent transition hover:opacity-70"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* ── ARTICLE LIST ── */}
      <div className="mx-auto max-w-[1060px] px-6 py-12 sm:px-14 sm:py-16">
        {posts.length === 0 ? (
          <p className="text-[15px] text-muted">No articles published yet.</p>
        ) : (
          <div className="flex flex-col">
            {posts.map((post, index) => (
              <Link
                key={`${post.translationKey}-${post.locale}`}
                href={`/resources/${post.routeSlug}?lang=${locale}`}
                className="group grid grid-cols-1 items-start gap-4 border-b border-border py-8 transition hover:bg-bg sm:grid-cols-[72px_1fr] sm:gap-8 sm:px-4"
              >
                {/* Index number */}
                <div className="hidden sm:flex items-start pt-1">
                  <span className="font-playfair text-[36px] font-black leading-none text-border transition group-hover:text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <p className="mb-2 font-ibm-mono text-[10px] tracking-[0.15em] uppercase text-muted">
                    {formatLocalDate(post.publishDate, locale)}
                  </p>
                  <h2 className="mb-2.5 font-playfair text-[22px] font-bold leading-[1.25] text-primary transition group-hover:text-accent sm:text-[24px]">
                    {post.title}
                  </h2>
                  <p className="max-w-[620px] text-[15px] leading-[1.65] text-secondary">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="font-ibm-mono text-[10px] tracking-[0.15em] uppercase text-accent transition group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
