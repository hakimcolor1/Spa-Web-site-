import { HeroSection } from "@/components/home/HeroSection";
import { BrandIntro } from "@/components/home/BrandIntro";
import { SignatureTreatments } from "@/components/home/SignatureTreatments";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { MembershipPreview } from "@/components/home/MembershipPreview";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntro />
      <SignatureTreatments />
      <WhyChooseUs />
      <PhilosophySection />
      <TestimonialsSection />
      <MembershipPreview />
      <NewsletterSection />
    </>
  );
}
