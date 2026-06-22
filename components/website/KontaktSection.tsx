import ContactForm from "@/components/website/ContactForm";

const contactBlocks = [
  {
    title: "Adresse",
    lines: ["Kammertsweg 66", "56070 Koblenz"],
  },
  {
    title: "E-Mail",
    lines: ["hausverwaltung@pastler.com"],
  },
  {
    title: "Telefon",
    lines: ["0261 1349 4710"],
  },
  {
    title: "Erreichbarkeit",
    lines: ["Mo–Fr 09:00–17:00 Uhr"],
  },
];

export default function KontaktSection() {
  return (
    <section id="kontakt" className="bg-gold-pale px-4 py-14 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-2 md:gap-14">
        <div className="order-2 md:order-1">
          <p className="mb-2 text-[11px] uppercase tracking-[2px] text-burgundy/70">
            Kontakt
          </p>
          <h2 className="font-display text-[28px] leading-tight text-burgundy md:text-[36px]">
            Was jetzt nur noch fehlt
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary md:mt-4 md:text-[15px]">
            Schreiben Sie kurz, worum es geht. Wir melden uns innerhalb von 24
            Stunden.
          </p>

          <div className="mt-8 hidden space-y-5 md:block md:space-y-6">
            {contactBlocks.map((block) => (
              <div
                key={block.title}
                className="border-l-2 border-burgundy/30 pl-4"
              >
                <p className="text-[11px] uppercase tracking-[1px] text-text-hint">
                  {block.title}
                </p>
                {block.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-text-primary">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 rounded border border-border bg-white p-4 sm:p-6 md:order-2 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
