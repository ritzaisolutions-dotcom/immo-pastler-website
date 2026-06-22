import GoogleReviewCarousel from "@/components/website/GoogleReviewCarousel";

export default function TestimonialSection() {
  return (
    <section className="bg-warm-white px-4 py-14 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-2 text-[11px] uppercase tracking-[2px] text-gold">
          Das sagen unsere Kunden
        </p>
        <GoogleReviewCarousel />
      </div>
    </section>
  );
}
