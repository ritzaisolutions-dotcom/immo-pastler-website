const pillars = [
  {
    number: "01",
    title: "Technisch",
    features: [
      "Regelmäßige Objektbegehungen",
      "Erfassung der Verbrauchswerte (Heizung, Wasser, Strom)",
      "Management von Reparatur- und Modernisierungsmaßnahmen",
      "Veranlassung von Kontrollmaßnahmen z. B. zum Brandschutz",
    ],
  },
  {
    number: "02",
    title: "Organisatorisch",
    features: [
      "Korrespondenz mit Mietern, Behörden, Handwerkern",
      "Erstellung von Nebenkosten- und Heizkostenabrechnungen",
      "Durchführung und Protokollierung der WEG-Eigentümerversammlung",
      "Durchsetzen von Beschlüssen",
    ],
  },
  {
    number: "03",
    title: "Rechtlich",
    features: [
      "Beachtung rechtlicher Verordnungen",
      "Bearbeitung von Versicherungsschäden und Rechtsstreitigkeiten",
      "Mahnungen bei Zahlungsverzug",
      "Anwendung gesetzlicher Änderungen mit Auswirkungen auf die WEG",
    ],
  },
  {
    number: "04",
    title: "Kaufmännisch",
    features: [
      "Verwaltung der gemeinschaftlichen Finanzen",
      "Abschluss und Neuordnung von Versicherungsverträgen",
      "Buchführung und Prüfung der Geldbewegungen",
      "Berechnung von Sonderumlagen",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LeistungenSection() {
  return (
    <section id="leistungen" className="bg-white px-4 py-14 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-2 text-[11px] uppercase tracking-[2px] text-gold">
          Leistungen
        </p>
        <h2 className="font-display text-[28px] leading-tight text-burgundy md:text-[36px]">
          Was macht eine Hausverwaltung?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary md:hidden">
          Die Aufgaben eines WEG-Verwalters sind in §27 WEG definiert. Sprechen
          Sie uns an — wir berücksichtigen individuelle Wünsche.
        </p>
        <p className="mt-4 hidden max-w-3xl text-[15px] leading-relaxed text-text-secondary md:block">
          Die Aufgaben eines WEG-Verwalters sind in §27 des Wohneigentumsgesetzes
          (WEG) definiert. Hier ist eine Auswahl der wichtigsten Tätigkeiten
          einer Immobilienverwaltung. Details regelt ein Hausverwaltervertrag.
          Wenn Sie individuelle Dienstleistungen wünschen, berücksichtigen wir
          das gerne. Sprechen Sie uns an!
        </p>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="relative rounded border border-border bg-warm-white p-5 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:rounded-t before:bg-gold md:p-7"
            >
              <p className="font-display text-3xl text-border md:text-4xl">
                {pillar.number}
              </p>
              <h3 className="mt-3 font-display text-xl text-burgundy md:mt-4 md:text-[22px]">
                {pillar.title}
              </h3>
              <ul className="mt-4 space-y-2 md:mt-5">
                {pillar.features.map((feature, index) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm text-text-primary ${
                      index >= 2 ? "hidden md:flex" : "flex"
                    }`}
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
