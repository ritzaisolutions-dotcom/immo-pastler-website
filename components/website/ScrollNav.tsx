"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Nav from "@/components/website/Nav";

export default function ScrollNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState(!isHome);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (!isHome) {
      setVisible(true);
      return;
    }

    setVisible(false);
    const hero = document.getElementById("hero");
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -1px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <>
      <Nav
        className={cn(
          reduceMotion ? "" : "transition-[transform,opacity] duration-300",
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none",
        )}
      />
      {!isHome && <div className="h-14 shrink-0 sm:h-[68px]" aria-hidden />}
    </>
  );
}
