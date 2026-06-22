"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import {
  customerReviews,
  GOOGLE_REVIEWS_URL,
  type GoogleReview,
} from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating
              ? "fill-gold text-gold"
              : "fill-transparent text-border"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const isGoogleCta = review.source === "google";

  return (
    <blockquote className="rounded border border-border border-l-4 border-l-gold bg-white p-5 sm:p-8 md:p-10">
      <Stars rating={review.rating} />
      <p
        className={`mt-4 leading-relaxed text-burgundy ${
          isGoogleCta
            ? "text-sm sm:text-base"
            : "font-display text-lg sm:text-xl md:text-2xl"
        }`}
      >
        {isGoogleCta ? review.quote : `„${review.quote}“`}
      </p>
      <footer className="mt-4 text-sm text-text-secondary sm:mt-6">
        {review.author}
        {review.location ? `, ${review.location}` : ""}
      </footer>
      {isGoogleCta && (
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-sm bg-burgundy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-burgundy/90"
        >
          Bewertung bei Google hinterlassen
        </a>
      )}
    </blockquote>
  );
}

export default function GoogleReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = customerReviews.length;

  useEffect(() => {
    if (total <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 9000);

    return () => window.clearInterval(timer);
  }, [total]);

  function goTo(index: number) {
    setActiveIndex((index + total) % total);
  }

  const review = customerReviews[activeIndex];

  return (
    <div>
      <ReviewCard review={review} />

      {total > 1 && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {customerReviews.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-burgundy" : "bg-border"
                }`}
                aria-label={`Bewertung ${index + 1} anzeigen`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-white text-burgundy transition-colors hover:border-burgundy/30"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-white text-burgundy transition-colors hover:border-burgundy/30"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-text-hint">
        Der Link zu Google öffnet sich in einem neuen Tab.{" "}
        <Link href="/datenschutz#google-bewertungen" className="text-burgundy underline">
          Datenschutzhinweise
        </Link>
      </p>
    </div>
  );
}
