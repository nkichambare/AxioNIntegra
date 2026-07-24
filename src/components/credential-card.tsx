import Link from 'next/link';
import { FiFileText } from 'react-icons/fi';
import { type Credential, getCredentialText } from '@/lib/credentials-data';

type CredentialCardProps = {
  credential: Credential;
  locale: string;
};

const statusLabels: Record<Credential['status'], string> = {
  registered: 'Registered',
  active: 'Active',
  valid: 'Valid',
  'no-expiry': 'No expiry',
  expired: 'Expired',
};

export default function CredentialCard({ credential, locale }: CredentialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-bg p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent/30">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent">
          <FiFileText className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-[12px] font-medium text-secondary">
          {statusLabels[credential.status]}
        </span>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="heading-3 text-primary">{getCredentialText(credential.title, locale)}</h3>
        {credential.authority ? (
          <p className="mt-3 text-[14px] leading-[1.6] text-secondary">
            {getCredentialText(credential.authority, locale)}
          </p>
        ) : null}

        <dl className="mt-5 border-t border-border pt-4">
          <div className="flex flex-col gap-1">
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              {credential.registrationNumberLabel
                ? getCredentialText(credential.registrationNumberLabel, locale)
                : 'Registration number'}
            </dt>
            <dd className="break-words text-[14px] font-medium text-primary">
              {credential.registrationNumber}
            </dd>
          </div>
          {credential.details?.map((detail) => (
            <div key={getCredentialText(detail.label, locale)} className="mt-4 flex flex-col gap-1">
              <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
                {getCredentialText(detail.label, locale)}
              </dt>
              <dd className="text-[14px] text-secondary">{detail.value}</dd>
            </div>
          ))}
          {credential.validUntil ? (
            <div className="mt-4 flex flex-col gap-1">
              <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">Valid until</dt>
              <dd className="text-[14px] text-secondary">{credential.validUntil}</dd>
            </div>
          ) : credential.issuedDate && !credential.details?.length ? (
            <div className="mt-4 flex flex-col gap-1">
              <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">Issued</dt>
              <dd className="text-[14px] text-secondary">{credential.issuedDate}</dd>
            </div>
          ) : null}
        </dl>
      </div>

      <Link
        href={`/${locale}/contact?request=credential-verification`}
        className="mt-6 border-t border-border pt-4 text-[13px] font-medium text-accent transition hover:opacity-75"
      >
        Request verification
      </Link>
    </article>
  );
}
