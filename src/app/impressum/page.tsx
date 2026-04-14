import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum | AxionIntegra',
  description: 'Legal notice for AxionIntegra.',
  alternates: { canonical: '/impressum' },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-bg pt-[88px] text-primary">
      <section className="border-b border-border bg-soft/50">
        <div className="mx-auto w-full max-w-3xl px-6 py-8">
          <p className="label-text text-muted">Legal</p>
          <h1 className="heading-2 mt-2">Impressum</h1>
          <p className="body-text mt-2 text-secondary">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="heading-3 text-primary">Unternehmensangaben</h2>
              <div className="body-text flex flex-col gap-1 text-secondary">
                <p className="font-medium text-primary">AxionIntegra</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ] [Stadt]</p>
                <p>[Land]</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="heading-3 text-primary">Vertreten durch</h2>
              <p className="body-text text-secondary">Geschäftsführer: Nikhil Kichambare</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="heading-3 text-primary">Kontakt</h2>
              <div className="body-text flex flex-col gap-1 text-secondary">
                <p>
                  E-Mail:{' '}
                  <a
                    href="mailto:contact@axionintegra.com"
                    className="text-accent underline underline-offset-2"
                  >
                    contact@axionintegra.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="heading-3 text-primary">Registereintrag</h2>
              <div className="body-text flex flex-col gap-1 text-secondary">
                <p>Registergericht: [Zuständiges Registergericht]</p>
                <p>Registernummer: [Handelsregisternummer]</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="heading-3 text-primary">Umsatzsteuer-ID</h2>
              <p className="body-text text-secondary">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [USt-IdNr.]
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="heading-3 text-primary">Haftungsausschluss</h2>
              <p className="body-text text-secondary">
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="heading-3 text-primary">Urheberrecht</h2>
              <p className="body-text text-secondary">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

            <div className="border-t border-border pt-8">
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
