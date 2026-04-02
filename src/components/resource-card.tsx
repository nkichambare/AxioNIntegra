import Link from 'next/link';

type ResourceCardProps = {
  index: number;
  category: string;
  heading: string;
  description: string;
  readTime: string;
  href: string;
};

export default function ResourceCard({
  index,
  category,
  heading,
  description,
  readTime,
  href,
}: ResourceCardProps) {
  const indexLabel = String(index).padStart(2, '0');

  return (
    <Link
      href={href}
      className="group flex flex-col border border-border border-t-accent bg-bg p-5 transition hover:bg-soft rounded-b-xl rounded-t-none [border-top-width:1.5px]"
    >
      {/* Index / Category */}
      <p className="mb-4 font-ibm-mono text-[11px] tracking-[0.12em] uppercase text-muted">
        {indexLabel} / {category}
      </p>

      {/* Heading */}
      <h3 className="mb-2.5 font-playfair text-[19px] font-bold leading-[1.25] text-primary transition group-hover:text-accent">
        {heading}
      </h3>

      {/* Description */}
      <p className="mb-6 grow text-[14px] leading-[1.65] text-secondary">{description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <span className="font-ibm-mono text-[11px] tracking-[0.1em] uppercase text-muted">
          {readTime}
        </span>
        <span className="text-accent transition group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
