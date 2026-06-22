import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Pastler Immobilienverwaltung",
};

export default function ImpressumPage() {
  return (
    <main className="flex-1 px-4 py-14 sm:px-6 md:px-12 md:py-16">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl text-navy sm:text-4xl">Impressum</h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Immobilienverwaltung Pastler UG (haftungsbeschränkt)
              <br />
              Kammertsweg 66
              <br />
              56070 Koblenz
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">Vertreten durch</h2>
            <p>Jürgen Pastler (Geschäftsführer)</p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">Kontakt</h2>
            <p>
              E-Mail: hausverwaltung@pastler.com
              <br />
              Telefon: 0261 1349 4710
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht Koblenz
              <br />
              Registernummer: HRB 30707
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>DE450763885</p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              Erlaubnis nach § 34c GewO
            </h2>
            <p>
              Immobilienverwaltung Pastler UG ist als Hausverwaltung nach § 34c
              der Gewerbeordnung zugelassen.
            </p>
            <p className="mt-3">
              Zertifizierter Verwalter nach § 26a WEG (IHK).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              Verbraucherstreitbeilegung
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">Bildnachweise</h2>
            <p>
              Logo, Porträt, Hero-Video und weitere Bilder auf dieser Website:
              Immobilienverwaltung Pastler UG (eigene Aufnahmen bzw.
              Nutzungsrechte).
            </p>
            <p className="mt-3">
              Schematische Einzugsgebietskarte: vereinfachte Darstellung;
              Geodaten © OpenStreetMap-Mitwirkende (ODbL), wo einschlägig.
            </p>
          </section>
        </div>

        <p className="mt-10">
          <Link href="/" className="text-sm text-navy hover:text-gold">
            ← Zurück zur Startseite
          </Link>
        </p>
      </article>
    </main>
  );
}
