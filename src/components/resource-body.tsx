import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';

type ResourceBodyProps = {
  body: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const components: Components = {
  h2({ children }) {
    const text = Array.isArray(children)
      ? children.map((c) => (typeof c === 'string' ? c : '')).join('')
      : String(children ?? '');
    return <h2 id={slugify(text)}>{children}</h2>;
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
        '[&>p:first-of-type]:first-letter:font-playfair',
        '[&>p:first-of-type]:first-letter:text-[64px]',
        '[&>p:first-of-type]:first-letter:font-black',
        '[&>p:first-of-type]:first-letter:leading-[0.8]',
        '[&>p:first-of-type]:first-letter:mr-2',
        '[&>p:first-of-type]:first-letter:mt-2',
        '[&>p:first-of-type]:first-letter:text-primary',

        // H2 — editorial section headings
        '[&_h2]:mt-16',
        '[&_h2]:mb-5',
        '[&_h2]:font-playfair',
        '[&_h2]:text-[27px]',
        '[&_h2]:font-bold',
        '[&_h2]:leading-[1.2]',
        '[&_h2]:text-primary',
        '[&_h2]:pb-3.5',
        '[&_h2]:border-b-2',
        '[&_h2]:border-border',

        // H3 — uppercase label style
        '[&_h3]:mt-10',
        '[&_h3]:mb-3',
        '[&_h3]:font-ibm-mono',
        '[&_h3]:text-[12px]',
        '[&_h3]:font-medium',
        '[&_h3]:tracking-[0.18em]',
        '[&_h3]:uppercase',
        '[&_h3]:text-accent',

        // Unordered lists — arrow bullets
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
        '[&_ul_li]:before:text-[13px]',
        '[&_ul_li]:before:text-accent',

        // Ordered lists
        '[&_ol]:my-5',
        '[&_ol]:ml-5',
        '[&_ol]:list-decimal',
        '[&_ol_li]:py-1.5',
        '[&_ol_li]:text-[15.5px]',
        '[&_ol_li]:leading-[1.55]',

        // Blockquotes — pull-quote style
        '[&_blockquote]:my-10',
        '[&_blockquote]:-mx-8',
        '[&_blockquote]:border-l-4',
        '[&_blockquote]:border-accent',
        '[&_blockquote]:bg-footer',
        '[&_blockquote]:px-9',
        '[&_blockquote]:py-7',
        '[&_blockquote_p]:font-playfair',
        '[&_blockquote_p]:text-[20px]',
        '[&_blockquote_p]:italic',
        '[&_blockquote_p]:leading-[1.55]',
        '[&_blockquote_p]:text-[#e2e8f0]',
        '[&_blockquote_p]:mb-0',

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
      <ReactMarkdown components={components}>{body}</ReactMarkdown>
    </div>
  );
}
