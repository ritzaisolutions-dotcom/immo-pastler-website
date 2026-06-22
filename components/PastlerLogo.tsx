import Image from "next/image";
import Link from "next/link";

type PastlerLogoProps = {
  variant?: "dark" | "light";
  layout?: "vertical" | "horizontal";
  showWordmark?: boolean;
  hideWordmarkOnMobile?: boolean;
  linkToHome?: boolean;
  className?: string;
  imageClassName?: string;
};

export default function PastlerLogo({
  variant = "dark",
  layout = "vertical",
  showWordmark = false,
  hideWordmarkOnMobile = false,
  linkToHome = false,
  className = "",
  imageClassName = "",
}: PastlerLogoProps) {
  const wordmarkPrimaryClass =
    variant === "dark" ? "text-white" : "text-burgundy";
  const wordmarkSecondaryClass =
    variant === "dark" ? "text-white/75" : "text-burgundy/70";
  const imageSize =
    layout === "horizontal" ? "h-auto w-10 sm:w-12" : "h-auto w-[88px]";

  const content = (
    <div
      className={`flex ${
        layout === "horizontal"
          ? "flex-row items-center gap-2.5 sm:gap-3"
          : "flex-col items-center"
      } ${className}`}
    >
      <Image
        src="/JPlogo-png.avif"
        alt="Immobilienverwaltung Pastler — Hausverwaltung Koblenz"
        width={120}
        height={132}
        className={`${imageSize} ${imageClassName}`}
        priority
      />
      {showWordmark && (
        <div
          className={`min-w-0 leading-tight ${
            hideWordmarkOnMobile ? "hidden sm:block" : ""
          }`}
        >
          <p
            className={`font-sans text-[9px] uppercase tracking-[1.5px] sm:text-[10px] sm:tracking-[1.8px] ${wordmarkSecondaryClass}`}
          >
            Immobilienverwaltung
          </p>
          <p
            className={`font-display text-sm tracking-[1.5px] sm:text-base sm:tracking-[2px] ${wordmarkPrimaryClass}`}
          >
            Pastler
          </p>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}
