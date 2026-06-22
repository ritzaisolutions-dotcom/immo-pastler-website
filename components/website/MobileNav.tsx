"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/components/website/nav-links";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-10 text-burgundy hover:bg-burgundy/10 lg:hidden"
          aria-label="Menü öffnen"
        >
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-full w-[min(100vw-2rem,20rem)] flex-col border-border bg-gold-pale px-0"
      >
        <SheetHeader className="border-b border-border px-5 pb-4">
          <SheetTitle className="font-display text-lg text-burgundy">
            Menü
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col px-5 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 text-[16px] text-burgundy transition-colors active:bg-burgundy/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-border px-5 py-5">
          <Link
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="block rounded-sm bg-burgundy px-5 py-3.5 text-center text-[15px] font-medium text-white transition-colors active:bg-burgundy/90"
          >
            Jetzt anfragen
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
