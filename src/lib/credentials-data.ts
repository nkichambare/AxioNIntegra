import type { LocaleParam } from '@/lib/locale-meta';

export type CredentialCountry = 'germany' | 'india';
export type CredentialStatus = 'registered' | 'active' | 'valid' | 'no-expiry' | 'expired';
export type LocalizedCredentialText = Partial<Record<LocaleParam, string>> & { en: string };

export type CredentialDetail = {
  label: LocalizedCredentialText;
  value: string;
};

export type Credential = {
  id: string;
  title: LocalizedCredentialText;
  country: CredentialCountry;
  authority?: LocalizedCredentialText;
  registrationNumberLabel?: LocalizedCredentialText;
  registrationNumber: string;
  issuedDate?: string;
  validUntil?: string;
  details?: CredentialDetail[];
  status: CredentialStatus;
  featured: boolean;
  displayOrder: number;
};

export const credentials: Credential[] = [
  {
    id: 'udyam-registration',
    title: {
      en: 'UDYAM Registration Certificate',
    },
    country: 'india',
    authority: {
      en: 'Ministry of Micro, Small & Medium Enterprises',
    },
    registrationNumberLabel: {
      en: 'UDYAM registration number',
    },
    registrationNumber: 'UDYAM-MH-23-0405313',
    details: [
      {
        label: {
          en: 'Enterprise registration date',
        },
        value: '1 April 2026',
      },
      {
        label: {
          en: 'Business commencement date',
        },
        value: '1 April 2026',
      },
    ],
    status: 'registered',
    featured: true,
    displayOrder: 1,
  },
  {
    id: 'company-registration',
    title: {
      en: 'Company Registration Certificate',
    },
    country: 'india',
    registrationNumberLabel: {
      en: 'Certificate serial number',
    },
    registrationNumber: '2620600321222405',
    status: 'registered',
    featured: true,
    displayOrder: 2,
  },
];

export function getCredentialText(text: LocalizedCredentialText, locale: string) {
  return text[locale as LocaleParam] ?? text.en;
}

export function getFeaturedCredentials() {
  return credentials
    .filter((credential) => credential.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, 4);
}

export function getCredentialsByCountry(country: CredentialCountry) {
  return credentials
    .filter((credential) => credential.country === country)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
