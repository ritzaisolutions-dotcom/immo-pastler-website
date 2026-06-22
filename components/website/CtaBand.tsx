import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="hidden bg-burgundy px-4 py-10 md:block md:px-12 md:py-12">
      <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-display text-2xl leading-snug text-white md:text-[28px]">
          Kostenlos beraten lassen — Antwort innerhalb von 24 Stunden
        </p>
        <Link
          href="/#kontakt"
          className="shrink-0 rounded-sm border border-white px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-burgundy"
        >
          Jetzt anfragen
        </Link>
      </div>
    </section>
  );
}
