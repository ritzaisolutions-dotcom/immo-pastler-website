import Link from "next/link";
import HeroMedia from "@/components/website/HeroMedia";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[min(100svh,520px)] overflow-hidden px-4 py-16 sm:min-h-[520px] sm:px-6 sm:py-20 md:min-h-[600px] md:px-12 md:py-28"
    >
      <HeroMedia />

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
            WEG- &amp; Mietverwaltung in Koblenz und Region · persönlich
          </span>
          <span className="hidden md:inline">
            WEG- &amp; Mietverwaltung in Koblenz und Region · persönlich ·
            digital
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
    </section>
  );
}
