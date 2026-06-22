export const navLinks = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#einzugsgebiet", label: "Einzugsgebiet" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export const desktopNavLinks = [
  ...navLinks.slice(0, 2),
  { href: "/#partner", label: "Partner" },
  ...navLinks.slice(2),
] as const;
