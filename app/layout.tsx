import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import Footer from "@/components/website/Footer";
import Nav from "@/components/website/Nav";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

export const metadata: Metadata = {
  title: "Immobilienverwaltung Pastler UG — Hausverwaltung Koblenz",
  description:
    "Professionelle WEG- und Mietverwaltung in Koblenz und Region. Zertifiziert nach §34c GewO. Reaktion innerhalb von 24 Stunden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={cn("h-full", "antialiased", inter.variable, playfair.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
