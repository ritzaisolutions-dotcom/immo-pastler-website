import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz — Pastler Immobilienverwaltung",
};

export default function DatenschutzPage() {
  return (
    <main className="flex-1 px-12 py-16">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl text-navy">Datenschutzerklärung</h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              1. Verantwortlicher
            </h2>
            <p>
              Immobilienverwaltung Pastler UG (haftungsbeschränkt)
              <br />
              Kammertsweg 66, 56070 Koblenz
              <br />
              E-Mail: hausverwaltung@pastler.com
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              2. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen dort
              angegebenen Kontaktdaten verarbeitet.
            </p>
            <p className="mt-3">
              <strong className="font-medium text-text-primary">
                Erhobene Daten:
              </strong>{" "}
              Name, E-Mail-Adresse, optional Telefonnummer, Anliegen,
              Nachricht.
            </p>
            <p className="mt-3">
              <strong className="font-medium text-text-primary">
                Rechtsgrundlage:
              </strong>{" "}
              Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung bzw. vorvertragliche
              Maßnahmen).
            </p>
            <p className="mt-3">
              <strong className="font-medium text-text-primary">
                Speicherdauer:
              </strong>{" "}
              Die Daten werden gelöscht, sobald Ihre Anfrage abschließend
              bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              3. Empfänger und Auftragsverarbeitung
            </h2>
            <p>
              Zur technischen Weiterleitung Ihrer Anfrage nutzen wir n8n
              (Betreiber: n8n GmbH, Deutschland/EU) als Auftragsverarbeiter.
              Die Formulardaten werden ausschließlich an unsere interne
              E-Mail-Adresse weitergeleitet. Es erfolgt keine Weitergabe an
              weitere Dritte zu Werbezwecken.
            </p>
            <p className="mt-3">
              Der E-Mail-Versand an hausverwaltung@pastler.com erfolgt über den
              E-Mail-Provider von Pastler.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              4. Server-Logdateien
            </h2>
            <p>
              Beim Aufruf dieser Website können durch den Hosting-Anbieter
              (Vercel Inc.) technisch notwendige Zugriffsdaten in Server-Logs
              verarbeitet werden (z. B. IP-Adresse, Zeitpunkt des Abrufs).
              Diese Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an einem sicheren Betrieb der
              Website).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Widerspruch und
              Datenübertragbarkeit. Zur Ausübung Ihrer Rechte wenden Sie sich
              an hausverwaltung@pastler.com.
            </p>
            <p className="mt-3">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              6. Keine Tracking-Tools
            </h2>
            <p>
              Diese Website setzt keine Analyse- oder Marketing-Cookies ein und
              verwendet keine Tracking-Dienste wie Google Analytics oder
              Facebook Pixel.
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
