import type { NotionPage, NotionProperty, NotionRichText } from '@/lib/notion-client';

export type NotionPostRecord = {
  translationKey: string;
  locale: string;
  routeSlug: string;
  title: string;
  excerpt: string;
  coverImagePath: string;
  publishDate: string;
  body: string;
  status: string;
  publishAt: string;
  resourceSortOrder: number;
  resourceCtaLabel: string;
  translations: { locale: string; routeSlug: string; title: string }[];
};

function richTextToString(items: NotionRichText[] | undefined) {
  return (items ?? [])
    .map((item) => item.plain_text ?? '')
    .join('')
    .trim();
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

export function mapPageToPost(page: NotionPage, body: string): NotionPostRecord {
  const title = readTitle(page.properties);
  const slug = readText(page.properties, ['slug', 'routeSlug', 'route slug']);
  const excerpt = readText(page.properties, ['excerpt', 'preview', 'summary']);
  const locale = readSelect(page.properties, ['locale', 'language']).toLowerCase() || 'en';
  const translationKey =
    readText(page.properties, ['translationKey', 'translation key']) || slug || page.id;
  const coverImagePath = readFilesUrl(page.properties, ['coverImage', 'cover image', 'image']);
  const publishDate = readDate(page.properties, ['publishAt', 'publish at', 'publishDate', 'publish date']);
  const status = readSelect(page.properties, ['status']) || 'draft';
  const resourceSortOrder = readNumber(
    page.properties,
    ['resourceSortOrder', 'resource sort order'],
    999,
  );
  const resourceCtaLabel = readText(page.properties, ['resourceCtaLabel', 'resource cta label']) || 'Read';

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
    resourceSortOrder,
    resourceCtaLabel,
    translations: [],
  };
}

export function isPublishedPost(status: string, publishAt: string) {
  if (status.toLowerCase() !== 'published') return false;
  if (!publishAt) return true;
  return new Date(publishAt).getTime() <= Date.now();
}

export function attachTranslations(posts: NotionPostRecord[]) {
  const byTranslation = new Map<string, NotionPostRecord[]>();

  posts.forEach((post) => {
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

  return posts;
}
