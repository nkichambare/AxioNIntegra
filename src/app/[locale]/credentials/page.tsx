import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiShield } from 'react-icons/fi';
import CredentialCard from '@/components/credential-card';
import { credentials } from '@/lib/credentials-data';
import { buildAlternates } from '@/lib/locale-meta';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const hasPublishedCredentials = credentials.length > 0;

  return {
    title: 'Registrations & Credentials | AxionIntegra',
    description: 'Review AxionIntegra company registrations and business verification credentials.',
    alternates: buildAlternates(locale, '/credentials'),
    robots: hasPublishedCredentials ? undefined : { index: false, follow: true },
  };
}

export default async function CredentialsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-bg pt-[64px] text-primary">
      <section className="border-b border-border bg-soft py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="label-text text-muted">Company verification</p>
          <h1 className="heading-1 mt-3 max-w-3xl">Registrations &amp; Credentials</h1>
          <p className="body-text mt-5 max-w-3xl text-secondary">
            Company registrations and compliance documents are provided to support procurement,
            supplier onboarding, and independent business verification.
          </p>
        </div>
      </section>

      {credentials.length ? (
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid max-w-4xl gap-5 sm:grid-cols-2">
              {credentials
                .toSorted((a, b) => a.displayOrder - b.displayOrder)
                .map((credential) => (
                  <CredentialCard key={credential.id} credential={credential} locale={locale} />
                ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="rounded-2xl border border-border bg-soft p-8 sm:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-accent">
                <FiShield className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="heading-3 mt-6">Documents are being prepared for publication</h2>
              <p className="body-text mt-3 max-w-3xl text-secondary">
                We are preparing approved, redacted copies of our registration and compliance
                documents for public access. Contact our team if you require verification for
                procurement or supplier onboarding.
              </p>
              <Link
                href={`/${locale}/contact`}
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-accent transition hover:opacity-75"
              >
                Request verification
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
