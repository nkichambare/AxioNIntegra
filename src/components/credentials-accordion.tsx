'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiChevronDown, FiFileText, FiShield } from 'react-icons/fi';
import { type Credential, credentials, getCredentialText } from '@/lib/credentials-data';

type CredentialsAccordionProps = {
  locale: string;
};

const statusLabels: Record<Credential['status'], string> = {
  registered: 'Registered',
  active: 'Active',
  valid: 'Valid',
  'no-expiry': 'No expiry',
  expired: 'Expired',
};

export default function CredentialsAccordion({ locale }: CredentialsAccordionProps) {
  const sortedCredentials = credentials.toSorted((a, b) => a.displayOrder - b.displayOrder);
  const [openCredentialId, setOpenCredentialId] = useState<string | null>(
    sortedCredentials[0]?.id ?? null,
  );

  return (
    <div className="border-t border-border">
      <div className="flex items-center justify-between border-b border-border py-7 sm:py-8">
        <h2 className="text-[24px] font-semibold leading-[1.25] text-primary sm:text-[30px]">
          Registration Certificates{' '}
          <span className="text-[17px] font-medium text-accent sm:text-[20px]">
            / {String(sortedCredentials.length).padStart(2, '0')}
          </span>
        </h2>
        <FiShield className="h-5 w-5 text-accent" aria-hidden="true" />
      </div>

      {sortedCredentials.map((credential, index) => {
        const isOpen = credential.id === openCredentialId;
        const title = getCredentialText(credential.title, locale);
        const buttonId = `credential-${credential.id}-button`;
        const panelId = `credential-${credential.id}-panel`;

        return (
          <article key={credential.id} className="border-b border-border">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenCredentialId(isOpen ? null : credential.id)}
              className="grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left transition hover:text-accent sm:gap-7 sm:py-7"
            >
              <span className="font-ibm-mono text-[12px] text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[18px] font-medium leading-[1.3] text-primary sm:text-[22px]">
                {title}
              </span>
              <span className="flex items-center gap-4">
                <span className="hidden rounded-full border border-border px-3 py-1 text-[12px] font-medium text-secondary sm:inline-flex">
                  {statusLabels[credential.status]}
                </span>
                <FiChevronDown
                  className={`h-5 w-5 text-accent transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </span>
            </button>

            {isOpen ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="grid gap-8 pb-10 pt-2 sm:grid-cols-[220px_1fr] sm:gap-12 sm:pb-12"
              >
                <div
                  className="flex min-h-[270px] max-w-[220px] flex-col justify-between border border-border bg-soft p-6"
                  aria-hidden="true"
                >
                  <div className="flex items-start justify-between gap-4">
                    <FiFileText className="h-7 w-7 text-accent" />
                    <span className="font-ibm-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                      Verified
                    </span>
                  </div>
                  <div>
                    <div className="mb-5 h-px w-10 bg-accent" />
                    <p className="text-[16px] font-medium leading-[1.35] text-primary">{title}</p>
                    <p className="mt-3 break-words font-ibm-mono text-[11px] leading-[1.6] text-muted">
                      {credential.registrationNumber}
                    </p>
                  </div>
                </div>

                <div className="flex max-w-2xl flex-col">
                  <p className="label-text text-muted">Registration details</p>
                  <h3 className="heading-3 mt-3">{title}</h3>
                  {credential.authority ? (
                    <p className="mt-3 text-[14px] leading-[1.7] text-secondary">
                      Issued by {getCredentialText(credential.authority, locale)}
                    </p>
                  ) : null}

                  <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
                        {credential.registrationNumberLabel
                          ? getCredentialText(credential.registrationNumberLabel, locale)
                          : 'Registration number'}
                      </dt>
                      <dd className="mt-1.5 break-words text-[14px] font-medium text-primary">
                        {credential.registrationNumber}
                      </dd>
                    </div>
                    {credential.details?.map((detail) => (
                      <div key={getCredentialText(detail.label, locale)}>
                        <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
                          {getCredentialText(detail.label, locale)}
                        </dt>
                        <dd className="mt-1.5 text-[14px] text-secondary">{detail.value}</dd>
                      </div>
                    ))}
                    {credential.validUntil ? (
                      <div>
                        <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
                          Valid until
                        </dt>
                        <dd className="mt-1.5 text-[14px] text-secondary">
                          {credential.validUntil}
                        </dd>
                      </div>
                    ) : credential.issuedDate ? (
                      <div>
                        <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
                          Issued
                        </dt>
                        <dd className="mt-1.5 text-[14px] text-secondary">
                          {credential.issuedDate}
                        </dd>
                      </div>
                    ) : null}
                  </dl>

                  <div className="mt-7 border-t border-border pt-5">
                    <Link
                      href={`/${locale}/contact?request=credential-verification`}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-accent transition hover:opacity-75"
                    >
                      Request verification
                      <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <p className="mt-2 text-[12px] leading-[1.6] text-muted">
                      Supporting documents are provided privately after request review.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
