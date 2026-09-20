import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildAlternates, type LocaleParam } from '@/lib/locale-meta';

type Props = { params: Promise<{ locale: string }> };

const content = {
  en: {
    title: 'Sustainable Approach',
    description:
      'How AxionIntegra considers materials, production efficiency, supplier practices, and traceability in industrial programmes.',
    eyebrow: 'Our approach',
    sectionLabel: 'Where we focus',
    sectionTitle: 'Sustainability in the decisions we can influence',
    pillars: [
      {
        number: '01',
        title: 'Material and process choices',
        description:
          'During technical review, we look for opportunities to use material efficiently and select suitable manufacturing processes while meeting the required performance and quality criteria.',
      },
      {
        number: '02',
        title: 'Responsible supplier selection',
        description:
          'We consider a supplier’s process controls, documentation, and ability to meet applicable customer and regulatory requirements as part of qualification and ongoing coordination.',
      },
      {
        number: '03',
        title: 'Reducing avoidable waste',
        description:
          'Clear specifications, production planning, and staged inspection help identify errors early and limit preventable rework, rejected parts, and unnecessary movement.',
      },
      {
        number: '04',
        title: 'Traceability and improvement',
        description:
          'Material records, inspection results, and supplier feedback provide a basis for reviewing performance and identifying improvements over time.',
      },
    ],
    commitmentTitle: 'A programme-specific commitment',
    commitment:
      'We do not apply a single sustainability claim to every product or supplier. We work with customers to define relevant requirements, request supporting evidence where needed, and make practical improvements within the agreed scope.',
    ctaTitle: 'Discuss your requirements',
    cta: 'Tell us which environmental or supplier standards matter to your programme. We can review them alongside your technical, quality, and delivery needs.',
    ctaLink: 'Contact us',
  },
  de: {
    title: 'Unser Nachhaltigkeitsansatz',
    description:
      'Wie AxionIntegra Materialien, Produktionseffizienz, Lieferantenpraktiken und Rückverfolgbarkeit in Industrieprojekten berücksichtigt.',
    eyebrow: 'Unser Ansatz',
    sectionLabel: 'Unsere Schwerpunkte',
    sectionTitle: 'Nachhaltigkeit bei Entscheidungen, die wir beeinflussen können',
    pillars: [
      {
        number: '01',
        title: 'Materialien und Verfahren',
        description:
          'Bei der technischen Prüfung suchen wir nach Möglichkeiten für einen effizienten Materialeinsatz und geeignete Fertigungsverfahren, ohne die Anforderungen an Leistung und Qualität zu beeinträchtigen.',
      },
      {
        number: '02',
        title: 'Verantwortungsvolle Lieferantenauswahl',
        description:
          'Bei der Qualifizierung und laufenden Koordination berücksichtigen wir Prozesskontrollen, Dokumentation und die Fähigkeit der Lieferanten, geltende Kundenanforderungen und Vorschriften zu erfüllen.',
      },
      {
        number: '03',
        title: 'Vermeidbare Abfälle reduzieren',
        description:
          'Klare Spezifikationen, Produktionsplanung und stufenweise Prüfungen helfen, Fehler früh zu erkennen und vermeidbare Nacharbeit, Ausschuss und unnötige Transporte zu begrenzen.',
      },
      {
        number: '04',
        title: 'Rückverfolgbarkeit und Verbesserung',
        description:
          'Materialnachweise, Prüfergebnisse und Rückmeldungen von Lieferanten bilden die Grundlage, um Leistungen zu bewerten und Verbesserungen zu erkennen.',
      },
    ],
    commitmentTitle: 'Verpflichtung für jedes einzelne Projekt',
    commitment:
      'Wir übertragen keine pauschalen Nachhaltigkeitsaussagen auf alle Produkte oder Lieferanten. Gemeinsam mit unseren Kunden definieren wir relevante Anforderungen, fordern bei Bedarf Nachweise an und setzen Verbesserungen im vereinbarten Rahmen um.',
    ctaTitle: 'Sprechen wir über Ihre Anforderungen',
    cta: 'Teilen Sie uns mit, welche Umwelt- oder Lieferantenstandards für Ihr Projekt wichtig sind. Wir prüfen sie zusammen mit Ihren technischen Anforderungen sowie Ihren Qualitäts- und Lieferzielen.',
    ctaLink: 'Kontakt aufnehmen',
  },
  fr: {
    title: 'Notre approche durable',
    description:
      'Comment AxionIntegra prend en compte les matériaux, l’efficacité de production, les pratiques des fournisseurs et la traçabilité dans les projets industriels.',
    eyebrow: 'Notre approche',
    sectionLabel: 'Nos priorités',
    sectionTitle: 'La durabilité dans les décisions que nous pouvons influencer',
    pillars: [
      {
        number: '01',
        title: 'Choix des matériaux et des procédés',
        description:
          'Lors de l’analyse technique, nous cherchons à utiliser les matériaux efficacement et à choisir des procédés adaptés, tout en respectant les critères de performance et de qualité requis.',
      },
      {
        number: '02',
        title: 'Sélection responsable des fournisseurs',
        description:
          'La qualification et le suivi des fournisseurs tiennent compte de la maîtrise des procédés, de la documentation et de leur capacité à satisfaire aux exigences applicables des clients et de la réglementation.',
      },
      {
        number: '03',
        title: 'Réduction des déchets évitables',
        description:
          'Des spécifications claires, une production planifiée et des contrôles par étapes aident à détecter les erreurs tôt et à limiter les reprises, les rebuts et les transports inutiles.',
      },
      {
        number: '04',
        title: 'Traçabilité et amélioration',
        description:
          'Les documents relatifs aux matériaux, les résultats des contrôles et les retours des fournisseurs permettent d’évaluer les performances et de repérer des améliorations au fil du temps.',
      },
    ],
    commitmentTitle: 'Un engagement adapté à chaque projet',
    commitment:
      'Nous n’appliquons pas une même affirmation environnementale à tous les produits ou fournisseurs. Avec nos clients, nous définissons les exigences pertinentes, demandons des justificatifs si nécessaire et recherchons des améliorations concrètes dans le cadre convenu.',
    ctaTitle: 'Parlons de vos exigences',
    cta: 'Indiquez-nous les normes environnementales ou les critères fournisseurs qui comptent pour votre projet. Nous les examinerons avec vos besoins techniques, de qualité et de livraison.',
    ctaLink: 'Nous contacter',
  },
} satisfies Record<
  LocaleParam,
  {
    title: string;
    description: string;
    eyebrow: string;
    sectionLabel: string;
    sectionTitle: string;
    pillars: { number: string; title: string; description: string }[];
    commitmentTitle: string;
    commitment: string;
    ctaTitle: string;
    cta: string;
    ctaLink: string;
  }
>;

function getContent(locale: string) {
  return content[locale as LocaleParam] ?? content.en;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getContent(locale);
  return {
    title: `${copy.title} | AxionIntegra`,
    description: copy.description,
    alternates: buildAlternates(locale, '/sustainable-approach'),
  };
}

export default async function SustainableApproachPage({ params }: Props) {
  const { locale } = await params;
  const copy = getContent(locale);

  return (
    <main className="min-h-screen bg-bg text-primary">
      <section className="relative flex min-h-[380px] items-end overflow-hidden bg-footer py-12 sm:min-h-[500px] sm:py-16">
        <Image
          src="/sustainable-approach/sustainable-approach.jpg"
          alt="Wind turbines across fields beneath a blue sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[40%_center]"
        />
        <div className="absolute inset-0 bg-slate-950/45" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="label-text text-white/80">{copy.eyebrow}</p>
          <h1 className="heading-1 mt-4 max-w-4xl text-white">{copy.title}</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="label-text text-muted">{copy.sectionLabel}</p>
          <h2 className="heading-2 mt-3 max-w-3xl">{copy.sectionTitle}</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {copy.pillars.map((pillar) => (
              <article key={pillar.number} className="bg-bg p-7 sm:p-9">
                <span className="text-[14px] font-semibold text-accent">{pillar.number}</span>
                <h3 className="heading-3 mt-5">{pillar.title}</h3>
                <p className="body-text mt-3 text-secondary">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-soft py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <h2 className="heading-2">{copy.commitmentTitle}</h2>
          <p className="body-text text-secondary">{copy.commitment}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="heading-2 max-w-2xl">{copy.ctaTitle}</h2>
          <p className="body-text mt-4 max-w-2xl text-secondary">{copy.cta}</p>
          <Link
            href={`/${locale}/contact`}
            className="mt-7 inline-flex items-center rounded-full bg-accent px-7 py-3 text-[14px] font-semibold text-white transition hover:opacity-90"
          >
            {copy.ctaLink}
          </Link>
        </div>
      </section>
    </main>
  );
}
