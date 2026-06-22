export default function TestimonialSection() {
  return (
    <section className="bg-warm-white px-4 py-14 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-2 text-[11px] uppercase tracking-[2px] text-gold">
          Das sagen unsere Kunden
        </p>
        <blockquote className="rounded border border-border border-l-4 border-l-gold bg-white p-5 sm:p-8 md:p-10">
          <p className="font-display text-lg leading-relaxed text-burgundy sm:text-xl md:text-2xl">
            „Herr Pastler erstellt schon seit Jahren die Abrechnungen für unsere
            Wohnungen. Insbesondere in Zeiten volatiler Heizkosten hat er durch
            sein Fachwissen dazu beigetragen, empfindliche Kosten abzuwenden.
            Uneingeschränkte Empfehlung!“
          </p>
          <footer className="mt-4 text-sm text-text-secondary sm:mt-6">
            Anne H., Andernach
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
