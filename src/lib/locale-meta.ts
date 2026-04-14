export const LOCALES = ['en', 'de', 'fr'] as const;
export type LocaleParam = (typeof LOCALES)[number];

const BASE = 'https://axionintegra.com';

export function buildAlternates(locale: string, path: string) {
  return {
    canonical: `${BASE}/${locale}${path}`,
    languages: {
      en: `${BASE}/en${path}`,
      de: `${BASE}/de${path}`,
      fr: `${BASE}/fr${path}`,
      'x-default': `${BASE}/en${path}`,
    },
  };
}
