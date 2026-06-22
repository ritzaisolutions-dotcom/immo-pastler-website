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
  const wordmarkClass =
    variant === "dark" ? "text-white" : "text-burgundy";
  const periodClass = variant === "dark" ? "text-gold" : "text-burgundy/70";
  const imageSize =
    layout === "horizontal" ? "h-auto w-10 sm:w-12" : "h-auto w-[88px]";

  const content = (
    <div
      className={`flex ${
        layout === "horizontal"
          ? "flex-row items-center gap-3"
          : "flex-col items-center"
      } ${className}`}
    >
      <Image
        src="/JPlogo-png.avif"
        alt="Pastler Immobilienverwaltung — Hausverwaltung Koblenz"
        width={120}
        height={132}
        className={`${imageSize} ${imageClassName}`}
        priority
      />
      {showWordmark && (
        <p
          className={`font-display tracking-[3px] ${
            layout === "horizontal" ? "text-sm sm:text-base" : "mt-3 text-sm"
          } ${wordmarkClass} ${hideWordmarkOnMobile ? "hidden sm:block" : ""}`}
        >
          PASTLER<span className={periodClass}>.</span>
        </p>
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
