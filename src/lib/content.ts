import { cache } from 'react';
import { createReader } from '@keystatic/core/reader';
import 'server-only';
import keystaticConfig from '../../keystatic.config';

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
  sortOrder: number;
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

type CmsResourceRecord = {
  translationKey: string;
  locale: Locale;
  sortOrder: number | null;
  title: string;
  preview: string;
  backgroundImagePath: string;
  postSlug: string;
  ctaLabel: string;
  published: boolean;
};

type CmsPostRecord = {
  translationKey: string;
  locale: Locale;
  routeSlug: string;
  title: string;
  excerpt: string;
  coverImagePath: string;
  publishDate: string | null;
  body: string;
  published: boolean;
};

const cmsReader = createReader(process.cwd(), keystaticConfig);

export function normalizeLocale(value: string | string[] | undefined): Locale {
  const next = Array.isArray(value) ? value[0] : value;
  return supportedLocales.includes(next as Locale) ? (next as Locale) : 'en';
}

const getAllResources = cache(async (): Promise<CmsResourceRecord[]> => {
  const entries = await cmsReader.collections.resources.all();

  return entries
    .map(({ entry }) => ({
      translationKey: entry.translationKey,
      locale: entry.locale,
      sortOrder: entry.sortOrder,
      title: entry.title,
      preview: entry.preview,
      backgroundImagePath: entry.backgroundImagePath,
      postSlug: entry.postSlug,
      ctaLabel: entry.ctaLabel,
      published: entry.published,
    }))
    .filter((entry) => entry.published && supportedLocales.includes(entry.locale));
});

const getAllPosts = cache(async (): Promise<CmsPostRecord[]> => {
  const entries = await cmsReader.collections.posts.all();

  return entries
    .map(({ entry }) => ({
      translationKey: entry.translationKey,
      locale: entry.locale,
      routeSlug: entry.routeSlug,
      title: entry.title,
      excerpt: entry.excerpt,
      coverImagePath: entry.coverImagePath,
      publishDate: entry.publishDate,
      body: entry.body,
      published: entry.published,
    }))
    .filter((entry) => entry.published && supportedLocales.includes(entry.locale));
});

function pickLocalized<T extends { translationKey: string; locale: Locale }>(
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
  const entries = await getAllResources();
  const localized = pickLocalized(entries, locale);

  return localized
    .map((entry) => ({
      translationKey: entry.translationKey,
      locale: entry.locale,
      title: entry.title,
      preview: entry.preview,
      backgroundImagePath: entry.backgroundImagePath,
      postSlug: entry.postSlug,
      ctaLabel: entry.ctaLabel,
      sortOrder: entry.sortOrder ?? 999,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getPosts(locale: Locale): Promise<BlogPostSummary[]> {
  const entries = await getAllPosts();
  const localized = pickLocalized(entries, locale);

  return localized
    .map((entry) => ({
      translationKey: entry.translationKey,
      locale: entry.locale,
      routeSlug: entry.routeSlug,
      title: entry.title,
      excerpt: entry.excerpt,
      coverImagePath: entry.coverImagePath,
      publishDate: entry.publishDate ?? '',
    }))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export async function getPostTranslations(translationKey: string) {
  const entries = await getAllPosts();

  return entries
    .filter((entry) => entry.translationKey === translationKey)
    .map((entry) => ({ locale: entry.locale, routeSlug: entry.routeSlug, title: entry.title }))
    .sort((a, b) => supportedLocales.indexOf(a.locale) - supportedLocales.indexOf(b.locale));
}

export async function getPostBySlug(routeSlug: string, locale: Locale): Promise<BlogPost | null> {
  const entries = await getAllPosts();
  const matches = entries.filter((entry) => entry.routeSlug === routeSlug);

  if (matches.length === 0) {
    return null;
  }

  const resolved =
    matches.find((entry) => entry.locale === locale) ??
    matches.find((entry) => entry.locale === 'en');

  if (!resolved) {
    return null;
  }

  const translations = await getPostTranslations(resolved.translationKey);

  return {
    translationKey: resolved.translationKey,
    locale: resolved.locale,
    routeSlug: resolved.routeSlug,
    title: resolved.title,
    excerpt: resolved.excerpt,
    coverImagePath: resolved.coverImagePath,
    publishDate: resolved.publishDate ?? '',
    body: resolved.body,
    translations,
  };
}
