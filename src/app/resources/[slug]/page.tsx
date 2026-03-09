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

async function getResourcePageData(params: Promise<{ slug: string }>, searchParams: Promise<{ lang?: string | string[] }>) {
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
      return {
        title: 'Resources | AxioNIntegra',
      };
    }

    return {
      title: `${post.title} | AxioNIntegra`,
      description: post.excerpt,
    };
  } catch {
    return {
      title: 'Resources | AxioNIntegra',
    };
  }
}

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

  return (
    <main className="min-h-screen bg-bg pt-[104px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-6 py-5">
          <nav className="flex items-center gap-3 text-[14px] font-medium">
            <Link href={`/?lang=${locale}#resources`} className="text-accent transition hover:opacity-80">
              Resources
            </Link>
            <span className="text-muted">/</span>
            <span className="text-secondary">{post.title}</span>
          </nav>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-6 py-10 sm:py-14">
        <div className="relative h-[240px] overflow-hidden rounded-3xl border border-border bg-soft sm:h-[320px]">
          <img src={post.coverImagePath} alt={post.title} className="h-full w-full object-cover" />
        </div>

        <header className="mt-7">
          <p className="label-text text-muted">{formatLocalDate(post.publishDate, locale)}</p>
          <h1 className="heading-2 mt-3">{post.title}</h1>
        </header>

        <div className="mt-6">
          <p className="body-text text-secondary">{post.excerpt}</p>
          <ResourceBody body={post.body} />
        </div>
      </article>
    </main>
  );
}
