import Link from "next/link";
import PastlerLogo from "@/components/PastlerLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep px-4 py-8 sm:px-6 md:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-6 sm:gap-8 md:grid md:grid-cols-3 md:items-start">
          <PastlerLogo variant="dark" layout="horizontal" showWordmark />

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/impressum"
              className="text-[13px] text-white/65 transition-colors hover:text-gold"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-[13px] text-white/65 transition-colors hover:text-gold"
            >
              Datenschutz
            </Link>
            <Link
              href="/#kontakt"
              className="text-[13px] text-white/65 transition-colors hover:text-gold"
            >
              Kontakt
            </Link>
          </nav>

          <div className="text-[13px] text-white/65 md:text-right">
            <p>hausverwaltung@pastler.com</p>
            <p className="mt-1">0261 1349 4710</p>
          </div>
        </div>

        <p className="mt-6 border-t border-white/10 pt-5 text-[12px] text-white/45 sm:mt-8 sm:pt-6">
          © {year} Immobilienverwaltung Pastler UG
        </p>
      </div>
    </footer>
  );
}
