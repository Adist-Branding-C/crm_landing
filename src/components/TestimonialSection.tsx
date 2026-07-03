import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="py-20 flex justify-center">
      <div className="max-w-[800px] text-center flex flex-col items-center gap-6 px-4">
        <blockquote className="text-[32px] font-normal leading-[38.4px] text-[#1a1a1a]">
          Thanks to Promptmonitor, we quickly saw improvements in AI
          visibility for our clients. We&apos;ve been using it for over 2
          months to track brand mentions in ChatGPT, and Perplexity and find
          AI citations, an absolute game changer for our agency.
        </blockquote>
        <div className="flex flex-col items-center gap-1.5">
          <Image
            src="/images/promptmonitor.io/assets/steve-lee.webp"
            alt="Steve Lee"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <div className="text-lg font-semibold text-[#3a3a3a]">
            Steve Lee
          </div>
          <div className="text-base text-[#5a5a5a]">
            Founder SEO Aesthetic (Ex-Google, Microsoft)
          </div>
        </div>
      </div>
    </section>
  );
}
