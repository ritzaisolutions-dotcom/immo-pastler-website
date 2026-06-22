const categories = [
  {
    title: "Handwerksbetriebe",
    description: "Zuverlässige Partner für Reparatur, Wartung und Modernisierung.",
  },
  {
    title: "Sachverständige",
    description: "Fachliche Begutachtung bei Schäden und technischen Fragen.",
  },
  {
    title: "Versicherungen",
    description: "Absicherung und Schadensabwicklung für Ihr Objekt.",
  },
  {
    title: "Rechtsberater",
    description: "Unterstützung bei rechtlichen Fragestellungen rund um die WEG.",
  },
];

export default function PartnerSection() {
  return (
    <section id="partner" className="hidden bg-warm-white px-4 py-14 sm:px-6 md:block md:px-12 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-3 text-[11px] uppercase tracking-[2px] text-gold">
          Partner
        </p>
        <h2 className="font-display text-[36px] text-burgundy">Gut vernetzt</h2>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
          Eine professionelle Hausverwaltung zeichnet sich nicht nur durch die
          eigene fachliche Kompetenz aus, sondern insbesondere durch ein
          vertrauensvolles Netzwerk aus verlässlichen Partnern.
        </p>
        <p className="mt-3 max-w-3xl text-[15px] font-medium text-burgundy">
          Dadurch: schnellere Reparaturen, weniger Koordinationsaufwand für Sie.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded border border-border bg-white p-6 before:block before:h-0.5 before:w-8 before:bg-gold"
            >
              <h3 className="mt-3 font-display text-lg text-burgundy">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
