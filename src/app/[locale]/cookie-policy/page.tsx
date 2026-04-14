import type { Metadata } from 'next';
import Link from 'next/link';
import { buildAlternates } from '@/lib/locale-meta';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Cookie Policy | AxionIntegra',
    description: 'How AxionIntegra uses cookies on its website.',
    alternates: buildAlternates(locale, '/cookie-policy'),
  };
}

const LAST_UPDATED = '13 April 2025';

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-bg pt-[88px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto w-full max-w-3xl px-6 py-8">
          <p className="label-text text-muted">Legal</p>
          <h1 className="heading-2 mt-2">Cookie Policy</h1>
          <p className="body-text mt-2 text-secondary">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="flex flex-col gap-10">
            <PolicySection title="1. What are cookies?">
              <p>
                Cookies are small text files stored on your device when you visit a website. They
                are widely used to make websites work, remember your preferences, and provide
                information to site owners.
              </p>
            </PolicySection>

            <PolicySection title="2. Cookies we use">
              <p>We use a minimal set of cookies. The table below describes each one:</p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="border-b border-border bg-soft text-left">
                      <th className="px-4 py-3 font-medium text-primary">Name</th>
                      <th className="px-4 py-3 font-medium text-primary">Purpose</th>
                      <th className="px-4 py-3 font-medium text-primary">Duration</th>
                      <th className="px-4 py-3 font-medium text-primary">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-secondary">
                    <tr>
                      <td className="px-4 py-3 font-mono text-[13px]">axion_cookie_consent</td>
                      <td className="px-4 py-3">
                        Stores your cookie consent preference (accepted/denied)
                      </td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3">Functional</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-[13px]">_ga, _ga_*</td>
                      <td className="px-4 py-3">
                        Google Analytics measures aggregate website usage (pages visited, session
                        length). Only set if you accept analytics cookies.
                      </td>
                      <td className="px-4 py-3">Up to 2 years</td>
                      <td className="px-4 py-3">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                We do not use advertising, marketing, social media tracking, or any other
                third-party cookies beyond those listed above.
              </p>
            </PolicySection>

            <PolicySection title="3. Your consent">
              <p>When you first visit our website, a cookie consent banner is shown. You can:</p>
              <ul>
                <li>
                  <strong>Accept</strong> - the functional cookie is set and Google Analytics is
                  activated to help us understand how the site is used.
                </li>
                <li>
                  <strong>Decline</strong> - only the consent preference cookie is set. Google
                  Analytics does not load. The site works fully without analytics cookies.
                </li>
              </ul>
              <p>
                Your choice is remembered for 1 year. The banner will not appear again on subsequent
                visits unless you clear your cookies.
              </p>
            </PolicySection>

            <PolicySection title="4. Changing or withdrawing consent">
              <p>You can change or withdraw your cookie consent at any time by:</p>
              <ul>
                <li>
                  Clearing your browser cookies for this site, then revisiting the banner will
                  reappear
                </li>
                <li>
                  Using your browser&apos;s built-in privacy controls to block or delete cookies
                </li>
              </ul>
              <p>
                Most browsers allow you to refuse cookies or delete existing ones via their settings
                (usually under Privacy or Security).
              </p>
            </PolicySection>

            <PolicySection title="5. Google Analytics">
              <p>
                When you accept analytics cookies, we use Google Analytics 4 (GA4) to collect
                anonymised information about how visitors use our site such as pages visited and
                time spent. This data is aggregate and does not identify individuals.
              </p>
              <p>
                Google&apos;s use of your data is governed by their own privacy policy. For more
                information, visit <span className="text-accent">policies.google.com/privacy</span>.
              </p>
            </PolicySection>

            <PolicySection title="6. Contact">
              <p>
                If you have questions about our use of cookies, contact us at{' '}
                <a
                  href="mailto:contact@axionintegra.com"
                  className="text-accent underline underline-offset-2"
                >
                  contact@axionintegra.com
                </a>
                .
              </p>
            </PolicySection>

            <div className="border-t border-border pt-8 flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-[14px] font-medium text-accent underline underline-offset-2 hover:opacity-80"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-[14px] font-medium text-accent underline underline-offset-2 hover:opacity-80"
              >
                ← Back to Home
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
