const items = [
  { value: "WEG", label: "Wohnungseigentumsverwaltung", shortLabel: "Verwaltung" },
  { value: "VDIV", label: "Mitglied im Verband", shortLabel: "Verband" },
  { value: "§34c", label: "GewO-zertifiziert", shortLabel: "GewO" },
  { value: "24h", label: "Reaktionszeit garantiert", shortLabel: "Antwort" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-gold-pale px-4 py-6 sm:px-6 sm:py-8 md:px-12">
      <div className="mx-auto grid max-w-[1100px] grid-cols-4 gap-2 sm:gap-6">
        {items.map((item, index) => (
          <div
            key={item.value}
            className={`text-center ${
              index < items.length - 1 ? "md:border-r md:border-gold-light" : ""
            }`}
          >
            <p className="font-display text-xl text-burgundy sm:text-2xl md:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-[10px] leading-tight text-text-secondary sm:mt-2 sm:text-[13px]">
              <span className="md:hidden">{item.shortLabel}</span>
              <span className="hidden md:inline">{item.label}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
