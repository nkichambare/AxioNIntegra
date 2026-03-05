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
    <main className="min-h-screen bg-bg pt-[104px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <p className="label-text text-muted">Resources</p>
          <Link href={`/?lang=${locale}#resources`} className="text-[14px] font-medium text-accent transition hover:opacity-80">
            Back to Home
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-6">
          {posts.map((post) => (
            <Link
              key={`${post.translationKey}-${post.locale}`}
              href={`/resources/${post.routeSlug}?lang=${locale}`}
              className="rounded-2xl border border-border bg-bg p-5 transition hover:border-accent/40"
            >
              <p className="label-text text-muted">{formatLocalDate(post.publishDate, locale)}</p>
              <h2 className="heading-3 mt-2">{post.title}</h2>
              <p className="body-text mt-2 text-secondary">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
