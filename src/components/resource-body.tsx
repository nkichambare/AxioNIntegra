import React from 'react';
import type { Blockquote, Text } from 'mdast';
import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

type ResourceBodyProps = {
  body: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const BLOCKQUOTE_THEMES = {
  highlight: { borderColor: '#d97706', background: '#fffbeb', color: '#92400e' },
  warning: { borderColor: '#dc2626', background: '#fff5f5', color: '#991b1b' },
  success: { borderColor: '#16a34a', background: '#f0fdf4', color: '#14532d' },
  default: { borderColor: '#1e3a8a', background: '#f1f5f9', color: '#0f172a' },
} as const;

type BlockquoteTheme = keyof typeof BLOCKQUOTE_THEMES;

/**
 * Remark plugin: detects [highlight] / [warning] at the start of a blockquote,
 * strips the keyword from the AST text node, and stores the theme on
 * node.data.hProperties so it reaches the React component as a data-* attribute.
 */
function remarkBlockquoteTheme() {
  return (tree: Parameters<typeof visit>[0]) => {
    visit(tree, 'blockquote', (node: Blockquote) => {
      const firstBlock = node.children[0];
      if (firstBlock?.type !== 'paragraph') return;

      const firstInline = firstBlock.children[0];
      if (firstInline?.type !== 'text') return;

      const match = (firstInline as Text).value.match(/^\[(highlight|warning|success)\]\s*/);
      if (!match) return;

      // Strip keyword from the AST  bold/italic siblings are untouched
      (firstInline as Text).value = (firstInline as Text).value.replace(
        /^\[(highlight|warning|success)\]\s*/,
        '',
      );

      // Pass theme down to the hast/React layer via a data attribute
      node.data = node.data ?? {};
      (node.data as Record<string, unknown>).hProperties = {
        ...((node.data as Record<string, unknown>).hProperties as object),
        'data-theme': match[1],
      };
    });
  };
}

const components: Components = {
  // H2  left vertical bar
  h2({ children }) {
    const text = Array.isArray(children)
      ? children.map((c) => (typeof c === 'string' ? c : '')).join('')
      : String(children ?? '');
    return (
      <h2
        id={slugify(text)}
        className="mt-16 mb-5 border-l-4 border-accent pl-4 text-[27px] font-bold leading-[1.2] text-primary"
      >
        {children}
      </h2>
    );
  },

  // Blockquote  theme read from data-theme attribute set by remark plugin
  blockquote({ children, node }) {
    const theme = ((node as unknown as { properties?: Record<string, string> })?.properties?.[
      'data-theme'
    ] ?? 'default') as BlockquoteTheme;
    const t = BLOCKQUOTE_THEMES[theme] ?? BLOCKQUOTE_THEMES.default;
    return (
      <blockquote
        className="my-10 -mx-8 px-9 py-7 text-[19px] italic leading-[1.6] [&_p]:mb-0"
        style={{
          borderLeft: `4px solid ${t.borderColor}`,
          background: t.background,
          color: t.color,
        }}
      >
        {children}
      </blockquote>
    );
  },

  // Ordered list  numbered card layout
  ol({ children }) {
    const items = React.Children.toArray(children);
    let liIdx = 0;
    return (
      <ol className="my-6 list-none pl-0">
        {items.map((child, i) => {
          if (React.isValidElement<{ children: React.ReactNode }>(child) && child.type === 'li') {
            liIdx++;
            const num = String(liIdx).padStart(2, '0');
            return (
              <li key={i} className="mb-3 flex border border-border">
                <span className="flex min-w-[64px] shrink-0 items-center justify-center self-stretch bg-footer font-ibm-mono text-[22px] font-black text-accent">
                  {num}
                </span>
                <div className="px-5 py-4 text-[15px] leading-[1.65] text-secondary [&_p]:mb-0 [&_strong]:mb-1.5 [&_strong]:block [&_strong]:font-ibm-mono [&_strong]:text-[10px] [&_strong]:font-medium [&_strong]:not-italic [&_strong]:tracking-[0.15em] [&_strong]:uppercase [&_strong]:text-primary">
                  {child.props.children}
                </div>
              </li>
            );
          }
          return child;
        })}
      </ol>
    );
  },

  // Tables
  table({ children }) {
    return (
      <div className="my-8 overflow-x-auto">
        <table className="w-full border-collapse border border-border text-[14px]">
          {children}
        </table>
      </div>
    );
  },
  thead({ children }) {
    return <thead className="bg-footer">{children}</thead>;
  },
  tbody({ children }) {
    return <tbody>{children}</tbody>;
  },
  tr({ children }) {
    return <tr className="border-b border-border even:bg-soft">{children}</tr>;
  },
  th({ children }) {
    return (
      <th className="px-4 py-3 text-left font-ibm-mono text-[10px] tracking-[0.15em] uppercase text-[#94a3b8]">
        {children}
      </th>
    );
  },
  td({ children }) {
    return <td className="px-4 py-3 text-[14px] leading-[1.55] text-secondary">{children}</td>;
  },
};

export default function ResourceBody({ body }: ResourceBodyProps) {
  return (
    <div
      className={[
        'text-[17px] font-light leading-[1.85] text-primary',

        // Paragraphs
        '[&_p]:mb-6',

        // Drop cap on first paragraph
        '[&>p:first-of-type]:first-letter:float-left',
        '[&>p:first-of-type]:first-letter:font-sans',
        '[&>p:first-of-type]:first-letter:text-[64px]',
        '[&>p:first-of-type]:first-letter:font-black',
        '[&>p:first-of-type]:first-letter:leading-[0.8]',
        '[&>p:first-of-type]:first-letter:mr-2',
        '[&>p:first-of-type]:first-letter:mt-2',
        '[&>p:first-of-type]:first-letter:text-primary',

        // H3  uppercase label style
        '[&_h3]:mt-10',
        '[&_h3]:mb-3',
        '[&_h3]:font-ibm-mono',
        '[&_h3]:text-[12px]',
        '[&_h3]:font-medium',
        '[&_h3]:tracking-[0.18em]',
        '[&_h3]:uppercase',
        '[&_h3]:text-accent',

        // Unordered lists  arrow bullets
        '[&_ul]:my-5',
        '[&_ul]:list-none',
        '[&_ul]:pl-0',
        '[&_ul_li]:relative',
        '[&_ul_li]:pl-7',
        '[&_ul_li]:py-2.5',
        '[&_ul_li]:border-b',
        '[&_ul_li]:border-border',
        '[&_ul_li]:text-[15.5px]',
        '[&_ul_li]:leading-[1.55]',
        '[&_ul_li]:text-secondary',
        '[&_ul_li:last-child]:border-b-0',
        '[&_ul_li]:before:content-["→"]',
        '[&_ul_li]:before:absolute',
        '[&_ul_li]:before:left-0',
        '[&_ul_li]:before:top-[11px]',
        '[&_ul_li]:before:font-ibm-mono',
        '[&_ul_li]:before:text-[10px]',
        '[&_ul_li]:before:text-accent',

        // Strong / bold
        '[&_strong]:font-medium',
        '[&_strong]:text-primary',

        // Links
        '[&_a]:text-accent',
        '[&_a]:underline',
        '[&_a]:underline-offset-4',
        '[&_a:hover]:opacity-75',
      ].join(' ')}
    >
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm, remarkBlockquoteTheme]}>
        {body}
      </ReactMarkdown>
    </div>
  );
}
