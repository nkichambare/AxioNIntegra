import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | AxionIntegra',
  description: 'Datenschutzerklärung von AxionIntegra gemäß DSGVO.',
};

const LAST_UPDATED = '13. April 2025';
const CONTACT_EMAIL = 'contact@axionintegra.com';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-bg pt-[88px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto w-full max-w-3xl px-6 py-8">
          <p className="label-text text-muted">Legal</p>
          <h1 className="heading-2 mt-2">Datenschutzerklärung</h1>
          <p className="body-text mt-2 text-secondary">Stand: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="flex flex-col gap-10">
            <Section title="1. Verantwortlicher">
              <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
              <p>
                AxionIntegra
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ] [Stadt], [Land]
                <br />
                E-Mail:{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>

            <Section title="2. Erhebung und Verarbeitung personenbezogener Daten">
              <p>
                Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese über unser
                Kontaktformular freiwillig mitteilen. Dies umfasst:
              </p>
              <ul>
                <li>Vor- und Nachname</li>
                <li>Geschäftliche E-Mail-Adresse</li>
                <li>Unternehmen und Land</li>
                <li>
                  Projektbezogene Angaben (Programmtyp, Prozess, Volumen, Zeitplan, Nachricht)
                </li>
              </ul>
              <p>
                Wir erheben keine besonderen Kategorien personenbezogener Daten, keine
                Zahlungsinformationen und keine Daten von Personen unter 16 Jahren.
              </p>
            </Section>

            <Section title="3. Zweck der Datenverarbeitung">
              <p>Ihre Daten werden ausschließlich verwendet, um:</p>
              <ul>
                <li>Auf Ihre Anfrage zu antworten</li>
                <li>Projektgespräche, die Sie initiiert haben, fortzuführen</li>
              </ul>
              <p>
                Wir verwenden Ihre Daten nicht für Marketingzwecke, Profiling oder automatisierte
                Entscheidungsfindung. Wir verkaufen oder teilen Ihre Daten nicht mit Dritten, außer
                wie in Abschnitt 4 beschrieben.
              </p>
            </Section>

            <Section title="4. Auftragsverarbeiter">
              <p>Wir nutzen die folgenden Dienstleister zur Verarbeitung Ihrer Anfragen:</p>
              <ul>
                <li>
                  <strong>Resend</strong> (E-Mail-Versand) — Ihre Anfragedaten werden über die
                  Infrastruktur von Resend übermittelt, um unser Team zu erreichen. Resend ist
                  DSGVO-konform.
                </li>
                <li>
                  <strong>Google Analytics</strong> — wird nur verwendet, wenn Sie der Nutzung von
                  Analyse-Cookies ausdrücklich zugestimmt haben. Keine personenbezogenen Daten aus
                  dem Kontaktformular werden an Google Analytics übermittelt.
                </li>
              </ul>
            </Section>

            <Section title="5. Rechtsgrundlage der Verarbeitung">
              <p>
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von{' '}
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse) — konkret zur
                Bearbeitung einer von Ihnen initiierten Geschäftsanfrage. Eine Verarbeitung zu
                anderen Zwecken erfolgt nicht ohne Ihre ausdrückliche Einwilligung.
              </p>
            </Section>

            <Section title="6. Speicherdauer">
              <p>
                Wir speichern Ihre Anfragedaten nur so lange, wie es zur Bearbeitung Ihrer Anfrage
                und etwaiger Folgekommunikation erforderlich ist — in der Regel nicht länger als{' '}
                <strong>12 Monate</strong> ab dem letzten Kontakt. Danach werden die Daten gelöscht.
              </p>
            </Section>

            <Section title="7. Ihre Rechte (DSGVO)">
              <p>Sie haben als betroffene Person folgende Rechte:</p>
              <ul>
                <li>
                  <strong>Auskunftsrecht</strong> (Art. 15 DSGVO) — Kopie Ihrer gespeicherten Daten
                </li>
                <li>
                  <strong>Berichtigungsrecht</strong> (Art. 16 DSGVO) — Korrektur unrichtiger Daten
                </li>
                <li>
                  <strong>Recht auf Löschung</strong> (Art. 17 DSGVO) — „Recht auf
                  Vergessenwerden&quot;
                </li>
                <li>
                  <strong>Recht auf Einschränkung</strong> (Art. 18 DSGVO) — Einschränkung der
                  Verarbeitung
                </li>
                <li>
                  <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO) — gegen Verarbeitung auf Basis
                  berechtigten Interesses
                </li>
                <li>
                  <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO) — Erhalt Ihrer
                  Daten in maschinenlesbarem Format
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                . Wir antworten innerhalb von 30 Tagen.
              </p>
              <p>
                Sie haben außerdem das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde
                zu beschweren.
              </p>
            </Section>

            <Section title="8. Cookies">
              <p>
                Unsere Website verwendet ein Cookie-Einwilligungsbanner. Analyse-Cookies (Google
                Analytics) werden nur gesetzt, wenn Sie ausdrücklich zustimmen. Sie können Ihre
                Einwilligung jederzeit widerrufen, indem Sie Ihre Browser-Cookies löschen und die
                Website erneut besuchen.
              </p>
              <p>Wir verwenden keine Werbe-, Tracking- oder Drittanbieter-Marketing-Cookies.</p>
            </Section>

            <Section title="9. Datensicherheit">
              <p>
                Alle über unser Kontaktformular übertragenen Daten werden verschlüsselt per HTTPS
                übermittelt. Wir treffen angemessene technische und organisatorische Maßnahmen zum
                Schutz Ihrer Daten vor unbefugtem Zugriff, Verlust oder Offenlegung.
              </p>
            </Section>

            <Section title="10. Änderungen dieser Datenschutzerklärung">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Das
                Datum „Stand&quot; am Anfang dieser Seite gibt die letzte Überarbeitung an. Die
                weitere Nutzung der Website nach Änderungen gilt als Zustimmung zur aktualisierten
                Erklärung.
              </p>
            </Section>

            <div className="border-t border-border pt-8">
              <Link
                href="/"
                className="text-[14px] font-medium text-accent underline underline-offset-2 hover:opacity-80"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="heading-3 text-primary">{title}</h2>
      <div className="flex flex-col gap-3 [&_a]:transition [&_li]:body-text [&_li]:ml-5 [&_li]:list-disc [&_li]:text-secondary [&_p]:body-text [&_p]:text-secondary">
        {children}
      </div>
    </div>
  );
}
