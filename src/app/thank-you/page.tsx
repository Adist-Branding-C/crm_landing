import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[77px]">
        <section className="py-20 px-4">
          <div className="max-w-[560px] mx-auto text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#e8f5e6] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#3fb52a]" />
            </div>
            <h1 className="font-heading text-[36px] font-medium text-black">
              Thank You!
            </h1>
            <p className="text-[17px] text-[#666] max-w-[400px]">
              Your demo request has been received. Our team will reach out to
              you shortly to schedule your personalized walkthrough.
            </p>
            <Link
              href="/"
              className="mt-4 h-12 px-8 rounded-md bg-[#1a1a1a] text-white font-medium text-sm flex items-center justify-center hover:bg-[#333] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
