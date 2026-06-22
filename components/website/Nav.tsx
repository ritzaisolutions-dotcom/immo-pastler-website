import Link from "next/link";
import PastlerLogo from "@/components/PastlerLogo";
import MobileNav from "@/components/website/MobileNav";
import { desktopNavLinks } from "@/components/website/nav-links";
import { cn } from "@/lib/utils";

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-gold-light/60 bg-gold shadow-sm",
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between gap-3 px-4 sm:h-[68px] sm:gap-4 sm:px-6 md:px-12">
        <PastlerLogo
          variant="light"
          layout="horizontal"
          showWordmark
          hideWordmarkOnMobile
          linkToHome
        />

        <nav className="hidden items-center gap-8 lg:flex">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.3px] text-burgundy/80 transition-colors hover:text-burgundy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/#kontakt"
            className="hidden rounded-sm bg-burgundy px-5 py-2.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-burgundy/90 sm:inline-block"
          >
            Jetzt anfragen
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
