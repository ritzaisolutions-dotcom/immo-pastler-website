import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[min(100svh,520px)] overflow-hidden px-4 py-16 sm:min-h-[520px] sm:px-6 sm:py-20 md:min-h-[600px] md:px-12 md:py-28">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/Pic_pastler.avif"
        aria-hidden
      >
        <source src="/Hero_Vid.mp4" type="video/mp4" />
      </video>

      <div
        className="hero-fallback-image absolute inset-0 hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/Pic_pastler.avif)" }}
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gold/35 mix-blend-multiply"
        aria-hidden
      />
      <div className="absolute inset-0 bg-burgundy/20 md:bg-burgundy/15" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/50 md:bg-gradient-to-r md:from-black/45 md:via-black/20 md:to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1100px]">
        <p className="mb-2 text-[10px] uppercase tracking-[2px] text-gold-pale sm:mb-3 sm:text-[11px] sm:tracking-[2.5px]">
          Hausverwaltung Koblenz
        </p>

        <h1 className="max-w-xl font-display text-[32px] leading-[1.15] text-white sm:max-w-2xl sm:text-[40px] md:text-[48px]">
          Ihr Wohneigentum in guten Händen
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:mt-5 sm:max-w-[560px] sm:text-[15px]">
          <span className="md:hidden">
            WEG- &amp; Mietverwaltung · persönlich · §34c zertifiziert
          </span>
          <span className="hidden md:inline">
            WEG- &amp; Mietverwaltung in Koblenz und Region · persönlich ·
            digital · §34c zertifiziert
          </span>
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/#kontakt"
            className="block rounded-sm bg-burgundy px-6 py-3.5 text-center text-sm font-medium text-white transition-colors active:bg-burgundy/90 sm:inline-block sm:px-7"
          >
            Kontakt aufnehmen
          </Link>
          <Link
            href="/#leistungen"
            className="hidden rounded-sm border border-white/40 px-7 py-3 text-center text-sm text-white transition-colors hover:bg-white/10 sm:inline-block"
          >
            Leistungen ansehen
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-6 right-6 hidden rounded border border-gold/40 bg-gold/15 p-4 text-center md:right-12 md:block"
        aria-label="Zulassung nach Paragraph 34c Gewerbeordnung"
      >
        <p className="font-display text-2xl text-gold-pale">§34c</p>
        <p className="mt-1 text-[10px] uppercase tracking-[1.5px] text-white/60">
          GewO zugelassen
        </p>
      </div>
    </section>
  );
}
