import { cache } from 'react';
import 'server-only';

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

type NotionRichText = {
  plain_text: string;
  href: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
  };
};

type NotionProperty = {
  type: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  select?: { name: string } | null;
  status?: { name: string } | null;
  number?: number | null;
  date?: { start: string } | null;
  url?: string | null;
  files?: Array<{ type: 'external' | 'file'; external?: { url: string }; file?: { url: string } }>;
};

type NotionPage = {
  id: string;
  properties: Record<string, NotionProperty>;
};

type NotionQueryResponse = {
  results: NotionPage[];
  has_more: boolean;
  next_cursor: string | null;
};

type NotionBlock = {
  id: string;
  type: string;
  has_children: boolean;
  paragraph?: { rich_text: NotionRichText[] };
  heading_1?: { rich_text: NotionRichText[] };
  heading_2?: { rich_text: NotionRichText[] };
  heading_3?: { rich_text: NotionRichText[] };
  bulleted_list_item?: { rich_text: NotionRichText[] };
  numbered_list_item?: { rich_text: NotionRichText[] };
  quote?: { rich_text: NotionRichText[] };
  to_do?: { rich_text: NotionRichText[]; checked: boolean };
  callout?: { rich_text: NotionRichText[] };
  image?: { type: 'external' | 'file'; external?: { url: string }; file?: { url: string } };
  code?: { rich_text: NotionRichText[] };
};

type NotionBlocksResponse = {
  results: NotionBlock[];
  has_more: boolean;
  next_cursor: string | null;
};

type NotionPostRecord = BlogPost & {
  status: string;
  publishAt: string;
  resourceSortOrder: number;
  resourceCtaLabel: string;
};

export function normalizeLocale(value: string | string[] | undefined): Locale {
  const next = Array.isArray(value) ? value[0] : value;
  return supportedLocales.includes(next as Locale) ? (next as Locale) : 'en';
}

function getEnv(name: string) {
  return process.env[name]?.trim();
}

function richTextToString(items: NotionRichText[] | undefined) {
  return (items ?? [])
    .map((item) => item.plain_text ?? '')
    .join('')
    .trim();
}

function richTextToMarkdown(items: NotionRichText[] | undefined) {
  return (items ?? [])
    .map((item) => {
      const text = item.plain_text ?? '';
      const isBold = item.annotations?.bold;
      const isItalic = item.annotations?.italic;
      const isCode = item.annotations?.code;

      let value = text;
      if (isCode) value = `\`${value}\``;
      if (isBold) value = `**${value}**`;
      if (isItalic) value = `*${value}*`;
      if (item.href) value = `[${value}](${item.href})`;
      return value;
    })
    .join('');
}

function findProperty(properties: Record<string, NotionProperty>, names: string[]) {
  const lowered = names.map((name) => name.toLowerCase());
  const key = Object.keys(properties).find((candidate) =>
    lowered.includes(candidate.toLowerCase()),
  );
  return key ? properties[key] : undefined;
}

function readTitle(properties: Record<string, NotionProperty>) {
  const explicit = findProperty(properties, ['title', 'name', 'post title']);
  if (explicit?.type === 'title') return richTextToString(explicit.title);

  const titleProp = Object.values(properties).find((prop) => prop.type === 'title');
  return titleProp ? richTextToString(titleProp.title) : '';
}

function readText(properties: Record<string, NotionProperty>, names: string[]) {
  const prop = findProperty(properties, names);
  if (!prop) return '';
  if (prop.type === 'rich_text') return richTextToString(prop.rich_text);
  if (prop.type === 'title') return richTextToString(prop.title);
  if (prop.type === 'url') return prop.url ?? '';
  return '';
}

function readSelect(properties: Record<string, NotionProperty>, names: string[]) {
  const prop = findProperty(properties, names);
  if (!prop) return '';
  if (prop.type === 'select') return prop.select?.name ?? '';
  if (prop.type === 'status') return prop.status?.name ?? '';
  if (prop.type === 'rich_text') return richTextToString(prop.rich_text);
  return '';
}

function readNumber(properties: Record<string, NotionProperty>, names: string[], fallback: number) {
  const prop = findProperty(properties, names);
  if (!prop) return fallback;
  if (prop.type === 'number' && typeof prop.number === 'number') return prop.number;
  if (prop.type === 'rich_text') {
    const parsed = Number(richTextToString(prop.rich_text));
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  return fallback;
}

function readDate(properties: Record<string, NotionProperty>, names: string[]) {
  const prop = findProperty(properties, names);
  if (!prop) return '';
  if (prop.type === 'date') return prop.date?.start ?? '';
  if (prop.type === 'rich_text') return richTextToString(prop.rich_text);
  return '';
}

function readFilesUrl(properties: Record<string, NotionProperty>, names: string[]) {
  const prop = findProperty(properties, names);
  if (!prop) return '';
  if (prop.type === 'url') return prop.url ?? '';
  if (prop.type === 'files') {
    const first = prop.files?.[0];
    if (!first) return '';
    if (first.type === 'external') return first.external?.url ?? '';
    return first.file?.url ?? '';
  }
  if (prop.type === 'rich_text') return richTextToString(prop.rich_text);
  return '';
}

function isPublishedPost(status: string, publishAt: string) {
  if (status.toLowerCase() !== 'published') return false;
  if (!publishAt) return true;
  return new Date(publishAt).getTime() <= Date.now();
}

async function notionRequest<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const token = getEnv('NOTION_TOKEN');
  if (!token) {
    return {} as T;
  }

  const response = await fetch(`https://api.notion.com/v1${endpoint}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Notion API request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

async function queryAllPages(databaseId: string): Promise<NotionPage[]> {
  const pages: NotionPage[] = [];
  let cursor: string | null = null;

  while (true) {
    const payload: { start_cursor?: string; page_size: number } = cursor
      ? { start_cursor: cursor, page_size: 100 }
      : { page_size: 100 };
    const data = await notionRequest<NotionQueryResponse>(`/databases/${databaseId}/query`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    pages.push(...(data.results ?? []));

    if (!data.has_more || !data.next_cursor) break;
    cursor = data.next_cursor;
  }

  return pages;
}

async function getPageBlocksMarkdown(pageId: string): Promise<string> {
  const lines: string[] = [];
  let cursor: string | null = null;

  while (true) {
    const query: string = cursor ? `?start_cursor=${cursor}&page_size=100` : '?page_size=100';
    const data = await notionRequest<NotionBlocksResponse>(`/blocks/${pageId}/children${query}`);

    data.results.forEach((block) => {
      if (block.type === 'paragraph') {
        lines.push(richTextToMarkdown(block.paragraph?.rich_text));
        lines.push('');
        return;
      }
      if (block.type === 'heading_1') {
        lines.push(`# ${richTextToMarkdown(block.heading_1?.rich_text)}`);
        lines.push('');
        return;
      }
      if (block.type === 'heading_2') {
        lines.push(`## ${richTextToMarkdown(block.heading_2?.rich_text)}`);
        lines.push('');
        return;
      }
      if (block.type === 'heading_3') {
        lines.push(`### ${richTextToMarkdown(block.heading_3?.rich_text)}`);
        lines.push('');
        return;
      }
      if (block.type === 'bulleted_list_item') {
        lines.push(`- ${richTextToMarkdown(block.bulleted_list_item?.rich_text)}`);
        return;
      }
      if (block.type === 'numbered_list_item') {
        lines.push(`1. ${richTextToMarkdown(block.numbered_list_item?.rich_text)}`);
        return;
      }
      if (block.type === 'quote') {
        lines.push(`> ${richTextToMarkdown(block.quote?.rich_text)}`);
        lines.push('');
        return;
      }
      if (block.type === 'to_do') {
        const checked = block.to_do?.checked ? 'x' : ' ';
        lines.push(`- [${checked}] ${richTextToMarkdown(block.to_do?.rich_text)}`);
        return;
      }
      if (block.type === 'callout') {
        lines.push(richTextToMarkdown(block.callout?.rich_text));
        lines.push('');
        return;
      }
      if (block.type === 'image') {
        const url =
          block.image?.type === 'external'
            ? (block.image.external?.url ?? '')
            : (block.image?.file?.url ?? '');
        if (url) {
          lines.push(`![Blog image](${url})`);
          lines.push('');
        }
        return;
      }
      if (block.type === 'code') {
        lines.push('```');
        lines.push(richTextToMarkdown(block.code?.rich_text));
        lines.push('```');
        lines.push('');
      }
    });

    if (!data.has_more || !data.next_cursor) break;
    cursor = data.next_cursor;
  }

  return lines.join('\n').trim();
}

const getAllPosts = cache(async (): Promise<NotionPostRecord[]> => {
  const databaseId = getEnv('NOTION_DATABASE_ID');
  const token = getEnv('NOTION_TOKEN');

  if (!databaseId || !token) {
    return [];
  }

  try {
    const pages = await queryAllPages(databaseId);
    const posts = await Promise.all(
      pages.map(async (page) => {
        const title = readTitle(page.properties);
        const slug = readText(page.properties, ['slug', 'routeSlug', 'route slug']);
        const excerpt = readText(page.properties, ['excerpt', 'preview', 'summary']);
        const localeValue = readSelect(page.properties, ['locale', 'language']).toLowerCase();
        const locale = supportedLocales.includes(localeValue as Locale)
          ? (localeValue as Locale)
          : 'en';
        const translationKey =
          readText(page.properties, ['translationKey', 'translation key']) || slug || page.id;
        const coverImagePath = readFilesUrl(page.properties, [
          'coverImage',
          'cover image',
          'image',
        ]);
        const publishDate = readDate(page.properties, [
          'publishAt',
          'publish at',
          'publishDate',
          'publish date',
        ]);
        const status = readSelect(page.properties, ['status']) || 'draft';
        const sortOrder = readNumber(
          page.properties,
          ['resourceSortOrder', 'resource sort order'],
          999,
        );
        const cta = readText(page.properties, ['resourceCtaLabel', 'resource cta label']) || 'Read';
        const body = await getPageBlocksMarkdown(page.id);

        return {
          translationKey,
          locale,
          routeSlug: slug,
          title,
          excerpt,
          coverImagePath,
          publishDate,
          body,
          status,
          publishAt: publishDate,
          resourceSortOrder: sortOrder,
          resourceCtaLabel: cta,
          translations: [],
        } satisfies NotionPostRecord;
      }),
    );

    const published = posts.filter(
      (post) =>
        post.routeSlug &&
        post.title &&
        post.coverImagePath &&
        isPublishedPost(post.status, post.publishAt),
    );

    const byTranslation = new Map<string, NotionPostRecord[]>();
    published.forEach((post) => {
      const list = byTranslation.get(post.translationKey) ?? [];
      list.push(post);
      byTranslation.set(post.translationKey, list);
    });

    byTranslation.forEach((list) => {
      const translations = list.map((post) => ({
        locale: post.locale,
        routeSlug: post.routeSlug,
        title: post.title,
      }));
      list.forEach((post) => {
        post.translations = translations;
      });
    });

    return published;
  } catch {
    return [];
  }
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
  const entries = await getAllPosts();
  const localized = pickLocalized(entries, locale);

  return localized
    .map((entry) => ({
      translationKey: entry.translationKey,
      locale: entry.locale,
      title: entry.title,
      preview: entry.excerpt,
      backgroundImagePath: entry.coverImagePath,
      postSlug: entry.routeSlug,
      ctaLabel: entry.resourceCtaLabel,
      sortOrder: entry.resourceSortOrder,
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
      publishDate: entry.publishDate,
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
    publishDate: resolved.publishDate,
    body: resolved.body,
    translations,
  };
}
