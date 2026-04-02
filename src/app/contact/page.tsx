import ContactForm from '@/components/contact-form';

const TRUST_POINTS = [
  'Full NDA available on request before project discussion',
  'No commitment required for initial technical review',
  'EU-based data handling, GDPR compliant',
];

export default function ContactPage() {
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
            </div>

            {/* Response time */}
            <div>
              <p className="font-ibm-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
                Response Time
              </p>
              <p className="text-[17px] font-medium text-primary mb-1.5">Within 1 business day</p>
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
            className="rounded-b-2xl rounded-t-none border border-border bg-bg p-6"
            style={{ borderTopWidth: '1.5px', borderTopColor: 'var(--color-accent)' }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
