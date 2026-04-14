import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | AxionIntegra',
  description: 'How AxionIntegra collects, uses, and protects your personal data.',
  alternates: { canonical: '/privacy-policy' },
};

const LAST_UPDATED = '13 April 2025';
const CONTACT_EMAIL = 'contact@axionintegra.com';
const COMPANY_NAME = 'AxionIntegra';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-bg pt-[88px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto w-full max-w-3xl px-6 py-8">
          <p className="label-text text-muted">Legal</p>
          <h1 className="heading-2 mt-2">Privacy Policy</h1>
          <p className="body-text mt-2 text-secondary">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="flex flex-col gap-10">
            <PolicySection title="1. Who we are">
              <p>
                {COMPANY_NAME} is a precision manufacturing and supply chain integration company.
                This Privacy Policy explains how we collect, use, and protect personal data
                submitted through our website (<strong>axionintegra.com</strong>).
              </p>
              <p>
                For any privacy-related questions, contact us at{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection title="2. Data we collect">
              <p>
                We collect personal data only when you voluntarily submit our contact form. This
                includes:
              </p>
              <ul>
                <li>Full name</li>
                <li>Work email address</li>
                <li>Company name and country</li>
                <li>
                  Project details you choose to share (programme type, process, volume, timeline,
                  message)
                </li>
              </ul>
              <p>
                We do not collect any sensitive personal data, payment information, or data from
                children under 16.
              </p>
            </PolicySection>

            <PolicySection title="3. How we use your data">
              <p>Your data is used solely to:</p>
              <ul>
                <li>Respond to your inquiry</li>
                <li>Follow up on project discussions you have initiated</li>
              </ul>
              <p>
                We do not use your data for marketing, profiling, or automated decision-making. We
                do not sell or share your data with third parties, except as described in Section 4.
              </p>
            </PolicySection>

            <PolicySection title="4. Data processors">
              <p>
                We use the following third-party service to process and deliver your inquiry
                submissions:
              </p>
              <ul>
                <li>
                  <strong>Resend</strong> (email delivery) your inquiry data is transmitted through
                  Resend&apos;s infrastructure to reach our team. Resend is GDPR-compliant. See
                  their privacy policy at <span className="text-accent">resend.com/privacy</span>.
                </li>
              </ul>
              <p>
                We also use <strong>Google Analytics</strong> to understand aggregate website usage
                only if you have accepted analytics cookies. No personal data from the contact form
                is sent to Google Analytics.
              </p>
            </PolicySection>

            <PolicySection title="5. Legal basis for processing">
              <p>
                We process your personal data under the lawful basis of{' '}
                <strong>legitimate interest</strong> (Article 6(1)(f) GDPR) specifically, to respond
                to an inbound business inquiry that you have initiated. We do not process your data
                for any other purpose without your explicit consent.
              </p>
            </PolicySection>

            <PolicySection title="6. Data retention">
              <p>
                We retain inquiry data only for as long as necessary to handle your inquiry and any
                follow-up communications typically no longer than <strong>12 months</strong> from
                last contact. After this period, data is deleted.
              </p>
            </PolicySection>

            <PolicySection title="7. Your rights (GDPR)">
              <p>If you are located in the European Economic Area (EEA), you have the right to:</p>
              <ul>
                <li>
                  <strong>Access</strong> - request a copy of the personal data we hold about you
                </li>
                <li>
                  <strong>Rectification</strong> - request correction of inaccurate data
                </li>
                <li>
                  <strong>Erasure</strong> - request deletion of your data (&quot;right to be
                  forgotten&quot;)
                </li>
                <li>
                  <strong>Restriction</strong> - request that we limit processing of your data
                </li>
                <li>
                  <strong>Objection</strong> - object to processing based on legitimate interest
                </li>
                <li>
                  <strong>Portability</strong> - receive your data in a structured, machine-readable
                  format
                </li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                . We will respond within 30 days.
              </p>
            </PolicySection>

            <PolicySection title="8. Cookies">
              <p>
                Our website uses a cookie consent banner. Analytics cookies (Google Analytics) are
                only placed if you explicitly accept. You can change your preference at any time by
                clearing your browser cookies and revisiting the site.
              </p>
              <p>We do not use advertising, tracking, or third-party marketing cookies.</p>
            </PolicySection>

            <PolicySection title="9. Data security">
              <p>
                All data transmitted through our contact form is sent over HTTPS. We take reasonable
                technical and organisational measures to protect your data against unauthorised
                access, loss, or disclosure.
              </p>
            </PolicySection>

            <PolicySection title="10. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot;
                date at the top of this page reflects the most recent revision. Continued use of the
                site after changes constitutes acceptance of the updated policy.
              </p>
            </PolicySection>

            <div className="border-t border-border pt-8">
              <Link
                href="/contact"
                className="text-[14px] font-medium text-accent underline underline-offset-2 hover:opacity-80"
              >
                ← Back to Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="heading-3 text-primary">{title}</h2>
      <div className="flex flex-col gap-3 [&_a]:transition [&_li]:body-text [&_li]:ml-5 [&_li]:list-disc [&_li]:text-secondary [&_p]:body-text [&_p]:text-secondary">
        {children}
      </div>
    </div>
  );
}
