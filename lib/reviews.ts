export type GoogleReview = {
  id: string;
  quote: string;
  author: string;
  location?: string;
  rating: number;
  source: "google" | "kunde";
};

export const GOOGLE_REVIEWS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
  "https://www.google.com/maps/search/?api=1&query=Immobilienverwaltung+Pastler+Kammertsweg+66+56070+Koblenz";

export const customerReviews: GoogleReview[] = [
  {
    id: "anne-h",
    quote:
      "Herr Pastler erstellt schon seit Jahren die Abrechnungen für unsere Wohnungen. Insbesondere in Zeiten volatiler Heizkosten hat er durch sein Fachwissen, sein beherztes Handeln und sein freundliches Auftreten dazu beigetragen, empfindliche Kosten abzuwenden, und gleichzeitig Verständnis bei unserer Mieterschaft geschaffen. Uneingeschränkte Empfehlung, und viel Erfolg bei der Tätigkeit als Hausverwalter!",
    author: "Anne H.",
    location: "Andernach",
    rating: 5,
    source: "kunde",
  },
  {
    id: "google-cta",
    quote:
      "Sind Sie mit unserer Arbeit zufrieden? Wir freuen uns über Ihr Feedback bei Google. Ihre Bewertung hilft anderen Eigentümern, eine verlässliche Hausverwaltung in der Region zu finden.",
    author: "Immobilienverwaltung Pastler",
    rating: 5,
    source: "google",
  },
];
