const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://pastler.com";

const organization = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  name: "Immobilienverwaltung Pastler UG (haftungsbeschränkt)",
  alternateName: "Pastler Immobilienverwaltung",
  url: siteUrl,
  logo: `${siteUrl}/JPlogo-png.avif`,
  image: `${siteUrl}/hero_vid_fallbackpic.jpg`,
  telephone: "+49-261-13494710",
  email: "hausverwaltung@pastler.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kammertsweg 66",
    addressLocality: "Koblenz",
    postalCode: "56070",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.3569,
    longitude: 7.588,
  },
  areaServed: [
    { "@type": "City", name: "Koblenz" },
    { "@type": "City", name: "Andernach" },
    { "@type": "City", name: "Neuwied" },
    { "@type": "City", name: "Sinzig" },
    { "@type": "City", name: "Mayen" },
    { "@type": "City", name: "Bad Neuenahr-Ahrweiler" },
    { "@type": "AdministrativeArea", name: "Mittelrhein" },
  ],
  description:
    "Professionelle WEG- und Mietverwaltung in Koblenz und Region. Zertifiziert nach §34c GewO.",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
