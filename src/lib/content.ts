import 'server-only';
import { getEnv, getPageBlocksMarkdown, hasNotionConfig, queryAllPages } from '@/lib/notion-client';
import {
  attachTranslations,
  isPublishedPost,
  mapPageToPost,
  type NotionPostRecord,
} from '@/lib/notion-mappers';

export const supportedLocales = ['en', 'fr', 'de'] as const;
export type Locale = (typeof supportedLocales)[number];

export type ResourceCard = {
  translationKey: string;
  locale: Locale;
  title: string;
  preview: string;
  backgroundImagePath: string;
  postSlug: string;
  ctaLabel: string;
  publishDate: string;
};

export type BlogPostSummary = {
  translationKey: string;
  locale: Locale;
  routeSlug: string;
  title: string;
  excerpt: string;
  coverImagePath: string;
  publishDate: string;
};

export type BlogPost = BlogPostSummary & {
  body: string;
  translations: { locale: Locale; routeSlug: string; title: string }[];
};

export function normalizeLocale(value: string | string[] | undefined): Locale {
  const next = Array.isArray(value) ? value[0] : value;
  return supportedLocales.includes(next as Locale) ? (next as Locale) : 'en';
}

async function getAllPosts(): Promise<NotionPostRecord[]> {
  const databaseId = getEnv('NOTION_DATABASE_ID');
  if (!hasNotionConfig() || !databaseId) {
    return [];
  }

  try {
    const pages = await queryAllPages(databaseId);
    const records = await Promise.all(
      pages.map(async (page) => {
        const body = await getPageBlocksMarkdown(page.id);
        return mapPageToPost(page, body);
      }),
    );

    const published = records.filter(
      (post) =>
        post.routeSlug &&
        post.title &&
        supportedLocales.includes(post.locale as Locale) &&
        isPublishedPost(post.status, post.publishAt),
    );

    return attachTranslations(published);
  } catch {
    return [];
  }
}

function pickLocalized<T extends { translationKey: string; locale: string }>(
  entries: T[],
  locale: Locale,
): T[] {
  const byTranslation = new Map<string, T[]>();

  entries.forEach((entry) => {
    const list = byTranslation.get(entry.translationKey);
    if (list) {
      list.push(entry);
      return;
    }
    byTranslation.set(entry.translationKey, [entry]);
  });

  return Array.from(byTranslation.values())
    .map(
      (group) =>
        group.find((entry) => entry.locale === locale) ??
        group.find((entry) => entry.locale === 'en'),
    )
    .filter((entry): entry is T => Boolean(entry));
}

export async function getResources(locale: Locale): Promise<ResourceCard[]> {
  const entries = await getAllPosts();
  const localized = pickLocalized(entries, locale);

  return localized
    .map((entry) => ({
      translationKey: entry.translationKey,
      locale: entry.locale as Locale,
      title: entry.title,
      preview: entry.excerpt,
      backgroundImagePath: entry.coverImagePath || '/about-us.png',
      postSlug: entry.routeSlug,
      ctaLabel: entry.resourceCtaLabel,
      publishDate: entry.publishDate,
    }))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export async function getPosts(locale: Locale): Promise<BlogPostSummary[]> {
  const entries = await getAllPosts();
  const localized = pickLocalized(entries, locale);

  return localized
    .map((entry) => ({
      translationKey: entry.translationKey,
      locale: entry.locale as Locale,
      routeSlug: entry.routeSlug,
      title: entry.title,
      excerpt: entry.excerpt,
      coverImagePath: entry.coverImagePath || '/about-us.png',
      publishDate: entry.publishDate,
    }))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export async function getPostTranslations(translationKey: string) {
  const entries = await getAllPosts();

  return entries
    .filter((entry) => entry.translationKey === translationKey)
    .map((entry) => ({
      locale: entry.locale as Locale,
      routeSlug: entry.routeSlug,
      title: entry.title,
    }))
    .sort((a, b) => supportedLocales.indexOf(a.locale) - supportedLocales.indexOf(b.locale));
}

export async function getPostBySlug(routeSlug: string, locale: Locale): Promise<BlogPost | null> {
  const entries = await getAllPosts();
  const matches = entries.filter((entry) => entry.routeSlug === routeSlug);

  if (matches.length === 0) return null;

  const resolved =
    matches.find((entry) => entry.locale === locale) ??
    matches.find((entry) => entry.locale === 'en');

  if (!resolved) return null;

  return {
    translationKey: resolved.translationKey,
    locale: resolved.locale as Locale,
    routeSlug: resolved.routeSlug,
    title: resolved.title,
    excerpt: resolved.excerpt,
    coverImagePath: resolved.coverImagePath || '/about-us.png',
    publishDate: resolved.publishDate,
    body: resolved.body,
    translations: resolved.translations
      .filter((item) => supportedLocales.includes(item.locale as Locale))
      .map((item) => ({
        locale: item.locale as Locale,
        routeSlug: item.routeSlug,
        title: item.title,
      })),
  };
}
