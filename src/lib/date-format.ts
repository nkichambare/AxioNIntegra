import type { Locale } from '@/lib/content';

const localeMap: Record<Locale, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  de: 'de-DE',
};

export function formatLocalDate(value: string, locale: Locale) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;

  return new Intl.DateTimeFormat(localeMap[locale], {
    dateStyle: 'medium',
    timeZone: 'Asia/Kolkata',
  }).format(parsed);
}
