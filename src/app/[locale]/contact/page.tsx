import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '@/components/contact-form';
import SalesRegionsAccordion from '@/components/sales-regions-accordion';
import { buildAlternates } from '@/lib/locale-meta';
import { getForgedSector, getPortfolioItem } from '@/lib/portfolio-data';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    request?: string;
    product?: string;
    sector?: string;
    component?: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Contact AxionIntegra | Start Your Manufacturing Programme',
    description:
      'Discuss your precision manufacturing or supply chain requirement with the AxionIntegra team. No commitment required for an initial technical review.',
    alternates: buildAlternates(locale, '/contact'),
  };
}

const OFFICES = [
  {
    code: 'de',
    country: 'Germany',
    address: ['Stuttgart, Baden-Württemberg', 'Germany 70186'],
    mapsUrl: 'https://maps.google.com/?q=Stuttgart,+Baden-Württemberg,+Germany+70186',
  },
  {
    code: 'in',
    country: 'India',
    address: ['705, Sai Dwarka Residency, Bankar Mala', 'Kathe Galli, Nashik – 422011', 'India'],
    mapsUrl: 'https://maps.google.com/?q=Kathe+Galli,+Nashik+422011,+India',
  },
];

const TRUST_POINTS = [
  'Full NDA available on request before project discussion',
  'No commitment required for initial technical review',
];

export default async function ContactPage({ searchParams }: Props) {
  const { request, product, sector: sectorSlug, component: componentSlug } = await searchParams;
  const requestType = request === 'credential-verification' ? 'credential-verification' : undefined;
  const forgedSector = getForgedSector(sectorSlug);
  const forgedComponent = forgedSector?.components.find((item) => item.slug === componentSlug);
  const enquiryProduct =
    getPortfolioItem(product)?.title ??
    (forgedComponent ? `${forgedComponent.title} — ${forgedSector?.title}` : forgedSector?.title);

  return (
    <main className="min-h-screen bg-soft pt-[88px] text-primary">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        {/* Page heading */}
        <div className="mb-12">
          <p className="section-heading mb-3 text-secondary">Contact</p>
          <h1 className="heading-1 max-w-2xl">Talk to our team.</h1>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
          {/* ── Left info panel ── */}
          <div className="flex flex-col gap-8">
            {/* General inquiries */}
            <div>
              <p className="font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
                General Inquiries
              </p>
              <a
                href="mailto:contact@axionintegra.com"
                className="text-[17px] font-medium text-accent transition hover:opacity-75 break-all"
              >
                contact@axionintegra.com
              </a>
              <a
                href="tel:+919920981545"
                className="mt-2 block text-[17px] font-medium text-accent transition hover:opacity-75"
              >
                +91 99209 81545
              </a>
            </div>

            {/* Response time */}
            <div>
              <p className="font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
                Response Time
              </p>
              <p className="text-[17px] font-medium text-primary mb-1.5">
                Within 2-3 business days
              </p>
              <p className="text-[14px] leading-[1.6] text-secondary">
                Project inquiries routed to the relevant engineering team on receipt.
              </p>
            </div>

            {/* Operating hours */}
            <div>
              <p className="font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
                Operating Hours
              </p>
              <p className="text-[17px] font-medium text-primary">Mon – Fri, 09:00 – 18:00 CET</p>
            </div>

            {/* Divider */}
            <hr className="border-border" />

            {/* Trust bullets */}
            <ul className="flex flex-col gap-3.5">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="text-[14px] leading-[1.6] text-secondary">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right form card ── */}
          <div
            className="rounded-b-2xl rounded-t-none border border-border bg-bg p-8 sm:p-10"
            style={{ borderTopWidth: '1.5px', borderTopColor: 'var(--color-accent)' }}
          >
            {requestType ? (
              <div className="mb-7 border-b border-border pb-7">
                <p className="label-text text-muted">Registration verification</p>
                <h2 className="mt-2 text-[18px] font-medium leading-[1.3] text-primary">
                  Requesting registration verification
                </h2>
                <p className="mt-2 text-[14px] leading-[1.7] text-secondary">
                  Complete the form below and our team will provide the relevant documentation after
                  reviewing your request.
                </p>
              </div>
            ) : null}
            <ContactForm requestType={requestType} enquiryProduct={enquiryProduct} />
          </div>
        </div>

        {/* Our Locations */}
        <div className="mt-10 border-t border-border pt-10">
          <p className="font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-6">
            Our Locations
          </p>

          {/* Physical offices — dark inverted cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {OFFICES.map((office) => (
              <div
                key={office.code}
                className="rounded-b-2xl rounded-t-none border border-border bg-bg p-6 flex flex-col"
                style={{ borderTopWidth: '1.5px', borderTopColor: '#0f172a' }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Image
                    src={`https://flagcdn.com/w40/${office.code}.png`}
                    alt={office.country}
                    width={22}
                    height={16}
                    className="rounded-sm object-cover shrink-0"
                  />
                  <span className="text-[16px] font-semibold text-primary">{office.country}</span>
                  <span className="font-ibm-mono text-[9px] tracking-[0.15em] uppercase text-white bg-accent px-1.5 py-0.5 rounded">
                    Office
                  </span>
                </div>
                <address className="text-[13px] leading-[1.8] text-secondary not-italic flex-1">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-ibm-mono text-[10px] tracking-[0.12em] uppercase text-accent transition hover:opacity-75"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>

          <SalesRegionsAccordion />
        </div>
      </div>
    </main>
  );
}
