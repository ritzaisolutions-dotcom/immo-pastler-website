import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const virtues = [
  {
    title: "Mut",
    text: "Tapferkeit im Kampf, der Einsatz für Gerechtigkeit und den Schutz der Schwachen.",
  },
  {
    title: "Ehre",
    text: "Ein starkes Gefühl für Integrität und der Wille, das Richtige zu tun.",
  },
  {
    title: "Treue",
    text: "Loyalität gegenüber dem Lehnsherrn, der Familie und den eigenen Werten.",
  },
  {
    title: "Höflichkeit",
    text: "Respekt und vornehmes Verhalten, besonders gegenüber Schwächeren.",
  },
  {
    title: "Großzügigkeit",
    text: "Teilen von Ressourcen mit denen, die weniger haben.",
  },
  {
    title: "Demut",
    text: "Die eigenen Grenzen erkennen und sich stets verbessern.",
  },
];

export default function LogoStorySection() {
  return (
    <section className="hidden bg-gold-pale px-4 py-14 sm:px-6 md:block md:px-12 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-[11px] uppercase tracking-[2px] text-burgundy/70">
          Immobilienverwaltung · Hausverwaltung
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[2px] text-burgundy/50">
          Immobilienverwaltung Pastler Logo © · Hausverwaltung Koblenz
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-8 rounded border border-border bg-white"
        >
          <AccordionItem value="logo-story" className="border-none px-6">
            <AccordionTrigger className="rounded-sm py-6 text-burgundy hover:no-underline [&>svg]:text-burgundy">
              <span className="flex items-center gap-4 text-left">
                <Image
                  src="/JPlogo-png.avif"
                  alt=""
                  width={48}
                  height={52}
                  className="h-auto w-10 shrink-0"
                  aria-hidden
                />
                <span className="font-display text-2xl md:text-[28px]">
                  Warum dieses Logo?
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <p className="text-[15px] leading-relaxed text-text-secondary">
                Ritterlichkeit beschreibt die Eigenschaften und Verhaltensweisen
                von Rittern. Zu den wichtigen „Rittertugenden“ gehören:
              </p>

              <ol className="mt-6 space-y-4">
                {virtues.map((virtue, index) => (
                  <li key={virtue.title} className="flex gap-4">
                    <span className="font-display text-lg text-gold">
                      {index + 1}.
                    </span>
                    <div>
                      <p className="font-medium text-burgundy">{virtue.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {virtue.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-[15px] leading-relaxed text-text-secondary">
                Diese Tugenden zeigten das Ideal eines Ritters und wurden in
                vielen Geschichten über das Mittelalter thematisiert. Viele
                dieser Legenden spielen in unserer Heimat, dem
                UNESCO-Weltkulturerbe Oberes Mittelrheintal. Obwohl die Realität
                oft anders aussah, blieb das Bild des ritterlichen Verhaltens als
                Vorbild bis heute bestehen.
              </p>
              <p className="mt-4 font-medium text-burgundy">
                Wir finden, auch Ihre Immobilie hat einen Ritter verdient.
              </p>
              <p className="mt-4 text-xs text-text-hint">
                Design: Evamaria Deisen
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
