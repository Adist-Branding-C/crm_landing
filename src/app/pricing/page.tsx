import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[77px]">
        <PricingSection />
        <Footer />
      </main>
    </>
  );
}
