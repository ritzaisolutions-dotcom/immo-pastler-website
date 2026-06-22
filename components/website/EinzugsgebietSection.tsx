import Link from "next/link";
import ServiceAreaChecker from "@/components/website/ServiceAreaChecker";

const cities = [
  "Koblenz",
  "Andernach",
  "Neuwied",
  "Sinzig",
  "Mayen",
  "Ahrweiler",
];

export default function EinzugsgebietSection() {
  return (
    <section id="einzugsgebiet" className="bg-gold-pale px-4 py-14 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto grid max-w-[1100px] items-start gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[2px] text-burgundy/70">
            Einzugsgebiet
          </p>
          <h2 className="font-display text-[28px] leading-tight text-burgundy md:text-[36px]">
            Wir sind tätig zwischen Bonn und Koblenz.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-[15px]">
            Örtliche Nähe ist entscheidend — bei Schadensbegutachtung,
            Handwerkertermin oder Besichtigung sind wir vor Ort.
          </p>
          <p className="mt-3 hidden text-[15px] leading-relaxed text-text-secondary md:block">
            Die derzeit von uns verwalteten Immobilien befinden sich zwischen Bad
            Neuenahr–Ahrweiler und Braubach am Rhein.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {cities.map((city) => (
              <span
                key={city}
                className="rounded border border-border bg-white px-2.5 py-1 text-xs text-burgundy sm:px-3 sm:py-1.5"
              >
                {city}
              </span>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <ServiceAreaChecker />
          </div>

          <Link
            href="/#kontakt"
            className="mt-6 hidden rounded-sm bg-burgundy px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-burgundy/90 md:inline-block"
          >
            Jetzt Termin vereinbaren
          </Link>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded border border-border bg-white">
            <img
              src="/einzugsgebiet-map.svg"
              alt="Schematische Karte des Einzugsgebiets am Mittelrhein zwischen Bonn und Koblenz"
              width={800}
              height={520}
              className="h-auto w-full"
            />
            <p className="border-t border-border px-3 py-2 text-[10px] text-text-hint">
              Kartendarstellung vereinfacht · Geodaten © OpenStreetMap-Mitwirkende
              (ODbL), wo einschlägig
            </p>
          </div>

          <div className="hidden md:block">
            <ServiceAreaChecker />
          </div>
        </div>
      </div>
    </section>
  );
}
