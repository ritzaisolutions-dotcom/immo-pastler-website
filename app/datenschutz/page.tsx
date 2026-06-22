import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz — Pastler Immobilienverwaltung",
};

export default function DatenschutzPage() {
  return (
    <main className="flex-1 px-4 py-14 sm:px-6 md:px-12 md:py-16">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl text-navy sm:text-4xl">
          Datenschutzerklärung
        </h1>

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
              <br />
              Telefon: 0261 1349 4710
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              2. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zur Bearbeitung Ihrer Anfrage verarbeitet.
            </p>
            <p className="mt-3">
              <strong className="font-medium text-text-primary">
                Erhobene Daten:
              </strong>{" "}
              Vor- und Nachname, E-Mail-Adresse, optional Telefonnummer, Anliegen,
              Nachricht.
            </p>
            <p className="mt-3">
              <strong className="font-medium text-text-primary">
                Rechtsgrundlagen:
              </strong>{" "}
              Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung bzw. vorvertragliche
              Maßnahmen) sowie Art. 6 Abs. 1 lit. a DSGVO, soweit Sie im
              Kontaktformular in die Verarbeitung einwilligen.
            </p>
            <p className="mt-3">
              <strong className="font-medium text-text-primary">
                Widerruf der Einwilligung:
              </strong>{" "}
              Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die
              Zukunft widerrufen, z. B. per E-Mail an hausverwaltung@pastler.com.
              Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
              bleibt unberührt.
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
              3. Direktkontakt per E-Mail oder Telefon
            </h2>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
              die von Ihnen mitgeteilten personenbezogenen Daten (z. B. Name,
              Kontaktdaten, Inhalt Ihrer Anfrage) zur Bearbeitung Ihres
              Anliegens.
            </p>
            <p className="mt-3">
              <strong className="font-medium text-text-primary">
                Rechtsgrundlage:
              </strong>{" "}
              Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen bzw.
              Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der effektiven Bearbeitung von Anfragen).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              4. Missbrauchsschutz beim Kontaktformular
            </h2>
            <p>
              Zum Schutz vor missbräuchlichen Mehrfachabsendungen speichern wir
              beim Absenden des Kontaktformulars vorübergehend die IP-Adresse des
              anfragenden Geräts im Arbeitsspeicher unseres Servers. Diese
              Verarbeitung dient ausschließlich der Begrenzung von
              Anfragen (derzeit maximal drei Absendungen pro IP-Adresse innerhalb
              von zehn Minuten) und erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
              f DSGVO (berechtigtes Interesse an der Sicherheit unseres
              Onlineangebots).
            </p>
            <p className="mt-3">
              Die Daten werden automatisch gelöscht, sobald das Zeitfenster
              abgelaufen ist; eine dauerhafte Speicherung erfolgt nicht.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              5. Empfänger und Auftragsverarbeitung
            </h2>
            <p>
              Zur technischen Bereitstellung und Weiterleitung Ihrer Anfrage
              setzen wir folgende Dienstleister ein:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="font-medium text-text-primary">Vercel Inc.</strong>{" "}
                (Hosting dieser Website). Beim Aufruf können Zugriffsdaten in
                Server-Logs verarbeitet werden. Vercel hat seinen Sitz in den USA;
                die Übermittlung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO sowie — soweit erforderlich — Standardvertragsklauseln der
                EU-Kommission. Informationen zu den Garantien finden Sie in der
                Datenschutzerklärung von Vercel.
              </li>
              <li>
                <strong className="font-medium text-text-primary">n8n</strong>{" "}
                (Workflow-Automatisierung über die Instanz n8n.ritz-ai.solutions,
                betrieben in der EU). Die Formulardaten werden dort ausschließlich
                zur Weiterleitung an unsere interne E-Mail-Adresse verarbeitet.
                Software-Anbieter: n8n GmbH, Deutschland.
              </li>
              <li>
                <strong className="font-medium text-text-primary">SMTP-E-Mail-Versand</strong>{" "}
                für hausverwaltung@pastler.com über den in n8n konfigurierten
                E-Mail-Zugang von Pastler.
              </li>
            </ul>
            <p className="mt-3">
              Es erfolgt keine Weitergabe an weitere Dritte zu Werbezwecken. Mit
              den genannten Auftragsverarbeitern bestehen — soweit gesetzlich
              erforderlich — Vereinbarungen zur Auftragsverarbeitung.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              6. Server-Logdateien und SSL/TLS
            </h2>
            <p>
              Beim Aufruf dieser Website können durch den Hosting-Anbieter
              technisch notwendige Zugriffsdaten in Server-Logs verarbeitet werden
              (z. B. IP-Adresse, Zeitpunkt des Abrufs, angeforderte Seite).
              Diese Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb
              der Website).
            </p>
            <p className="mt-3">
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers mit „https://“ beginnt und
              ein Schloss-Symbol angezeigt wird.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              7. Schriftarten
            </h2>
            <p>
              Die auf dieser Website verwendeten Schriftarten werden über Next.js
              lokal auf unserem Server bereitgestellt und beim Seitenaufruf von
              dort ausgeliefert. Es erfolgt kein Abruf von Schriftdateien bei
              Google oder anderen Drittanbietern zum Zeitpunkt Ihres Besuchs.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">8. Cookies</h2>
            <p>
              Diese Website setzt keine Analyse- oder Marketing-Cookies ein. Es
              werden keine nicht notwendigen Cookies zu Tracking- oder
              Werbezwecken gespeichert.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">9. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Widerspruch und
              Datenübertragbarkeit. Zur Ausübung Ihrer Rechte wenden Sie sich
              an hausverwaltung@pastler.com.
            </p>
            <p className="mt-3">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren. Zuständige Aufsichtsbehörde:
            </p>
            <p className="mt-3">
              Der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Rheinland-Pfalz
              <br />
              Hintere Bleiche 34
              <br />
              55116 Mainz
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-medium text-text-primary">
              10. Keine Tracking-Tools
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Dienste wie Google Analytics,
              Facebook Pixel oder vergleichbare Analyse- und Marketing-Tools.
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
