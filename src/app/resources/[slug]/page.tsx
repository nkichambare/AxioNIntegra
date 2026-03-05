import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts, normalizeLocale, supportedLocales } from '@/lib/content';

type ResourcePostPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateStaticParams() {
  const posts = await getPosts('en');
  return posts.map((post) => ({ slug: post.routeSlug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: ResourcePostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = normalizeLocale(lang);
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    return {
      title: 'Resources | AxioNIntegra',
    };
  }

  return {
    title: `${post.title} | AxioNIntegra`,
    description: post.excerpt,
  };
}

export default async function ResourcePostPage({ params, searchParams }: ResourcePostPageProps) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = normalizeLocale(lang);
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg pt-[104px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <p className="label-text text-muted">Resource article</p>
          <Link href={`/?lang=${locale}#resources`} className="text-[14px] font-medium text-accent transition hover:opacity-80">
            Back to Resources
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="rounded-3xl border border-border bg-bg">
            <div className="relative h-[280px] overflow-hidden rounded-t-3xl border-b border-border bg-soft">
              <Image src={post.coverImagePath} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="label-text text-muted">{post.publishDate}</p>
              <h1 className="heading-2 mt-3">{post.title}</h1>
              <p className="body-text mt-4 text-secondary">{post.excerpt}</p>

              <div className="mt-8 flex flex-col gap-4">
                {post.body.split('\n').filter(Boolean).map((paragraph, index) => (
                  <p key={`${post.routeSlug}-${index}`} className="body-text text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <aside className="h-fit rounded-3xl border border-border bg-bg p-5 sm:p-6">
            <h2 className="heading-3">Language</h2>
            <div className="mt-4 flex flex-col gap-3">
              {supportedLocales.map((targetLocale) => {
                const translated = post.translations.find((item) => item.locale === targetLocale);
                const href = translated
                  ? `/resources/${translated.routeSlug}?lang=${targetLocale}`
                  : `/resources/${post.routeSlug}?lang=${targetLocale}`;

                return (
                  <Link
                    key={targetLocale}
                    href={href}
                    className={`rounded-xl border px-4 py-3 text-[14px] font-medium transition ${
                      locale === targetLocale
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border text-secondary hover:text-primary'
                    }`}
                  >
                    {targetLocale.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
