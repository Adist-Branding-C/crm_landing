import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HeroDemoMockup } from "@/components/HeroDemoMockup";
import { TrustedByBar } from "@/components/TrustedByBar";
import { DividerSection } from "@/components/DividerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LlmLogosSection } from "@/components/LlmLogosSection";
import { ShiftSectionRow } from "@/components/ShiftSectionRow";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[77px]">
        <HeroSection />
        <HeroDemoMockup />
        {/* <TrustedByBar /> */}
        <DividerSection />
        <FeaturesSection />
        <DividerSection />
        <LlmLogosSection />
        <DividerSection />
        <ShiftSectionRow />
        <DividerSection />
        <TestimonialSection />
        <DividerSection />
        <CallToActionSection />
        <DividerSection />
        <FAQSection />
        <DividerSection />
        <Footer />
      </main>
    </>
  );
}
