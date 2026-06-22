"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/website/Nav";

export default function ScrollNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return null;
  }

  return (
    <>
      <Nav />
      <div className="h-14 shrink-0 sm:h-[68px]" aria-hidden />
    </>
  );
}
