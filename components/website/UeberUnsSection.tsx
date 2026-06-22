import Image from "next/image";

const highlights = [
  "10 Jahre Erfahrung in der Verwaltung eigener Immobilien",
  "Persönliche Betreuung durch den Inhaber",
  "Nähe zum Objekt",
  "Zuverlässig und kompetent",
  "Preiswerte, moderne und digitale Verwaltung",
];

function CertBadge({
  letter,
  title,
  subtitle,
}: {
  letter: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded border border-border bg-white p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-burgundy font-display text-lg text-gold">
        {letter}
      </div>
      <div>
        <p className="text-sm font-medium text-text-primary">{title}</p>
        <p className="text-xs text-text-secondary">{subtitle}</p>
      </div>
    </div>
  );
}

export default function UeberUnsSection() {
  return (
    <section id="ueber-uns" className="bg-white px-4 py-14 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded border border-border sm:max-w-none md:mx-0 md:h-96 md:max-w-none md:aspect-auto">
          <Image
            src="/Pic_pastler.avif"
            alt="Jürgen Pastler — Immobilienverwaltung Pastler"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 50vw"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gold"
            aria-hidden
          />
          <div className="absolute bottom-3 left-3 rounded bg-white/95 px-2.5 py-1.5 text-[11px] font-medium text-burgundy sm:bottom-4 sm:left-4 sm:px-3 sm:py-2 sm:text-xs">
            Zertifizierter Verwalter (IHK)
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[2px] text-gold">
            Über uns
          </p>
          <h2 className="font-display text-[28px] leading-tight text-burgundy md:text-[36px]">
            Der Hausverwalter in der Nähe
          </h2>

          <ul className="mt-5 space-y-2 md:mt-6">
            {highlights.map((item, index) => (
              <li
                key={item}
                className={`flex items-start gap-2 text-sm text-text-primary ${
                  index >= 3 ? "hidden sm:flex" : "flex"
                }`}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 hidden text-[15px] leading-relaxed text-text-secondary md:block">
            Grundbesitz bildet das Fundament für eine langfristige,
            inflationsgeschützte Vermögenssicherung. Und Eigentum verpflichtet.
            Als professionelle Hausverwaltung verringern wir den administrativen
            und operativen Aufwand und machen die Verwaltung von Immobilien
            effizient und profitabel.
          </p>

          <blockquote className="mt-6 border-l-2 border-gold pl-4 md:mt-8 md:pl-5">
            <p className="text-[11px] uppercase tracking-[1.5px] text-text-hint">
              Mein Versprechen an Sie
            </p>
            <p className="mt-2 font-display text-base leading-relaxed text-burgundy sm:text-lg">
              „Hier ist Ihr Wohneigentum in guten Händen! Ich übernehme
              Verantwortung für Ihre Immobilie, als wäre es meine eigene.“
            </p>
            <footer className="mt-2 text-sm text-text-secondary">
              Jürgen Pastler · Hausverwaltung Koblenz
            </footer>
          </blockquote>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <CertBadge
              letter="§"
              title="§34c GewO"
              subtitle="Zugelassene Hausverwaltung"
            />
            <CertBadge
              letter="V"
              title="VDIV"
              subtitle="Verband der Immobilienverwalter"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
