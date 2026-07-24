import Link from 'next/link';
import { FiArrowRight, FiShield } from 'react-icons/fi';
import CredentialCard from '@/components/credential-card';
import { getFeaturedCredentials } from '@/lib/credentials-data';

type CredentialsSectionProps = {
  locale: string;
};

export default function CredentialsSection({ locale }: CredentialsSectionProps) {
  const featuredCredentials = getFeaturedCredentials();

  return (
    <section className="border-y border-border bg-soft py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="label-text text-muted">Company verification</p>
            <h2 className="heading-2 mt-3 text-primary">Registrations &amp; Credentials</h2>
            <p className="body-text mt-4 text-secondary">
              Verified company registration documentation supporting transparent supplier onboarding
              and business verification.
            </p>
          </div>
          <Link
            href={`/${locale}/credentials`}
            className="inline-flex w-fit items-center gap-2 text-[14px] font-medium text-accent transition hover:opacity-75"
          >
            View all credentials
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {featuredCredentials.length ? (
          <div className="mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            {featuredCredentials.map((credential) => (
              <CredentialCard key={credential.id} credential={credential} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-bg p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                <FiShield className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[17px] font-medium text-primary">
                  Documentation is being prepared for publication
                </h3>
                <p className="mt-2 max-w-2xl text-[14px] leading-[1.7] text-secondary">
                  Approved, redacted registration and compliance documents will be published here.
                  Verification support is available in the meantime.
                </p>
              </div>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex shrink-0 items-center gap-2 text-[14px] font-medium text-accent transition hover:opacity-75"
            >
              Request verification
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
