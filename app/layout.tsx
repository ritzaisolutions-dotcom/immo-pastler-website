import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import Footer from "@/components/website/Footer";
import JsonLd from "@/components/website/JsonLd";
import ScrollNav from "@/components/website/ScrollNav";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://pastler.com";

const defaultTitle =
  "Immobilienverwaltung Pastler — Hausverwaltung Koblenz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Immobilienverwaltung Pastler",
  title: {
    default: defaultTitle,
    template: "%s | Immobilienverwaltung Pastler",
  },
  description:
    "Professionelle WEG- und Mietverwaltung in Koblenz und Region. Zertifiziert nach §34c GewO. Reaktion innerhalb von 24 Stunden.",
  keywords: [
    "Hausverwaltung Koblenz",
    "WEG-Verwaltung",
    "Mietverwaltung",
    "Immobilienverwaltung Mittelrhein",
    "Pastler",
  ],
  authors: [{ name: "Immobilienverwaltung Pastler UG" }],
  creator: "Immobilienverwaltung Pastler UG",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Immobilienverwaltung Pastler",
    title: defaultTitle,
    description:
      "Professionelle WEG- und Mietverwaltung in Koblenz und Region.",
    images: [
      {
        url: "/hero_vid_fallbackpic.jpg",
        width: 1200,
        height: 630,
        alt: "Immobilienverwaltung Pastler — Hausverwaltung Koblenz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Professionelle WEG- und Mietverwaltung in Koblenz und Region.",
    images: ["/hero_vid_fallbackpic.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "geo.region": "DE-RP",
    "geo.placename": "Koblenz",
    "geo.position": "50.3569;7.5880",
    ICBM: "50.3569, 7.5880",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        playfair.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd />
        <ScrollNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
