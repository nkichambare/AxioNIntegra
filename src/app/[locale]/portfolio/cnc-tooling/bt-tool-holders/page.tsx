import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { normalizeLocale } from '@/lib/content';
import { buildAlternates } from '@/lib/locale-meta';
import { btToolHolders } from '@/lib/portfolio-data';

type BtToolHoldersPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: BtToolHoldersPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'BT Tool Holders | AxionIntegra',
    description:
      'Explore BT hydraulic chucks, drill chucks, collet holders, shrink-fit holders, milling holders, and related DIN ISO 7388-2 tooling.',
    alternates: buildAlternates(locale, '/portfolio/cnc-tooling/bt-tool-holders'),
  };
}

export default async function BtToolHoldersPage({ params }: BtToolHoldersPageProps) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return (
    <main className="min-h-screen bg-soft pt-16 text-primary">
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Link
            href={`/${normalizedLocale}/portfolio/cnc-tooling#bt-tool-holders`}
            className="text-[14px] font-medium text-accent transition hover:opacity-70"
          >
            ← Back to CNC Tooling
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="label-text text-muted">DIN ISO 7388-2</p>
            <h1 className="heading-1 mt-4">BT Tool Holders</h1>
            <p className="body-text mt-5 text-secondary">
              Precision BT taper tooling for drilling, milling, collet, hydraulic, and shrink-fit
              applications across CNC machining centres.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {btToolHolders.map((holder) => (
              <Link
                key={holder.slug}
                href={`/${normalizedLocale}/contact?product=${holder.slug}`}
                aria-label={`Enquire about ${holder.title}`}
                className="group overflow-hidden rounded-2xl border border-border bg-bg transition duration-200 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="relative aspect-square border-b border-border bg-bg">
                  <Image
                    src={holder.imageSrc}
                    alt={holder.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 transition duration-300 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h2 className="text-[16px] font-medium leading-[1.3] text-primary">
                    {holder.title}
                  </h2>
                  <HiOutlineArrowLongRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
