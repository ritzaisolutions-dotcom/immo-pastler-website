import CtaBand from "@/components/website/CtaBand";
import EinzugsgebietSection from "@/components/website/EinzugsgebietSection";
import HeroSection from "@/components/website/HeroSection";
import KontaktSection from "@/components/website/KontaktSection";
import LeistungenSection from "@/components/website/LeistungenSection";
import LogoStorySection from "@/components/website/LogoStorySection";
import PartnerSection from "@/components/website/PartnerSection";
import TestimonialSection from "@/components/website/TestimonialSection";
import TrustBar from "@/components/website/TrustBar";
import UeberUnsSection from "@/components/website/UeberUnsSection";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <TrustBar />
      <LeistungenSection />
      <EinzugsgebietSection />
      <PartnerSection />
      <UeberUnsSection />
      <TestimonialSection />
      <CtaBand />
      <KontaktSection />
      <LogoStorySection />
    </main>
  );
}
