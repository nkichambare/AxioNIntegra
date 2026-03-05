import 'server-only';

export type NotionRichText = {
  plain_text: string;
  href: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
  };
};

export type NotionProperty = {
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

export type NotionPage = {
  id: string;
  properties: Record<string, NotionProperty>;
};

type NotionQueryResponse = {
  results: NotionPage[];
  has_more: boolean;
  next_cursor: string | null;
};

type NotionBlock = {
  type: string;
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

export function getEnv(name: string) {
  return process.env[name]?.trim();
}

export function hasNotionConfig() {
  return Boolean(getEnv('NOTION_TOKEN') && getEnv('NOTION_DATABASE_ID'));
}

function richTextToMarkdown(items: NotionRichText[] | undefined) {
  return (items ?? [])
    .map((item) => {
      const text = item.plain_text ?? '';
      let value = text;
      if (item.annotations?.code) value = `\`${value}\``;
      if (item.annotations?.bold) value = `**${value}**`;
      if (item.annotations?.italic) value = `*${value}*`;
      if (item.href) value = `[${value}](${item.href})`;
      return value;
    })
    .join('');
}

async function notionRequest<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const token = getEnv('NOTION_TOKEN');
  if (!token) {
    throw new Error('Missing NOTION_TOKEN');
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

export async function queryAllPages(databaseId: string): Promise<NotionPage[]> {
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

export async function getPageBlocksMarkdown(pageId: string): Promise<string> {
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
