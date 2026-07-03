"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Globe, Presentation } from "lucide-react";

interface CtaBrand {
  name: string;
  icon: string;
  gradient: string;
  duration: string;
}

const ctaBrands: CtaBrand[] = [
  {
    name: "ChatGPT",
    icon: "/images/promptmonitor.io/llms/openai-icon.svg",
    gradient: "linear-gradient(135deg, #000, #333, #666)",
    duration: "3s",
  },
  {
    name: "Claude",
    icon: "/images/promptmonitor.io/llms/claude-icon.svg",
    gradient: "linear-gradient(135deg, #d77655, #e68a6a, #c96340)",
    duration: "4s",
  },
  {
    name: "Gemini",
    icon: "/images/promptmonitor.io/llms/gemini-icon.svg",
    gradient: "linear-gradient(135deg, #9168c0, #1ea0e2)",
    duration: "3.5s",
  },
  {
    name: "DeepSeek",
    icon: "/images/promptmonitor.io/llms/deepseek-icon-filled.svg",
    gradient: "linear-gradient(135deg, #4d6bfe, #0052cc, #003d99)",
    duration: "3s",
  },
  {
    name: "Grok",
    icon: "/images/promptmonitor.io/llms/grok-icon.svg",
    gradient: "linear-gradient(135deg, #000, #333, #666)",
    duration: "3s",
  },
  {
    name: "Perplexity",
    icon: "/images/promptmonitor.io/llms/perplexity-icon.svg",
    gradient: "linear-gradient(135deg, #25a5b8, #21b2aa, #1da39d)",
    duration: "3s",
  },
];

function CtaAnimatedBrand() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % ctaBrands.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const brand = ctaBrands[activeIndex];

  return (
    <span className="relative inline-flex w-[160px] h-6 -mt-1 overflow-hidden align-middle">
      <span
        key={activeIndex}
        className="absolute inset-0 inline-flex items-center justify-center gap-1 whitespace-nowrap text-lg leading-6 font-semibold animate-[fadeIn_300ms_ease-in]"
      >
        <Image src={brand.icon} width={20} height={20} alt={brand.name} />
        <span
          style={{
            backgroundImage: brand.gradient,
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: `gradientShift ${brand.duration} ease-in-out infinite`,
          }}
        >
          {brand.name}
        </span>
      </span>
    </span>
  );
}

export function CallToActionSection() {
  return (
    <section className="relative flex flex-col items-center gap-8 py-10 px-4">
      <span
        className="absolute z-[-1] text-primary bg-yellow-300 px-3 py-2 rounded-lg shadow-sm hidden lg:block rotate-[-6deg]"
        style={{ top: 110, left: 32 }}
      >
        What if your competitor ranks but not you?
      </span>
      <span
        className="absolute z-[-1] text-primary bg-yellow-300 px-3 py-2 rounded-lg shadow-sm hidden lg:block rotate-[-5deg]"
        style={{ top: 302, right: 25 }}
      >
        Your boss asked about GEO? Show him this report
      </span>

      <h2 className="font-heading text-[28px] md:text-[36px] font-medium leading-[46px] tracking-[-0.72px] text-center">
        Is your brand mentioned in <CtaAnimatedBrand />?
      </h2>
      <p className="text-lg text-[#5a5a5a] text-center max-w-[500px]">
        Enter your website and see how AI talks about your brand. Takes 2
        minutes.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full max-w-[388px] sm:w-[388px] h-12">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Enter your website url, e.g. vercel.com"
            className="w-full h-12 pl-12 pr-3 text-base border border-[#e4e5e6] rounded-lg text-[#3a3a3a]"
          />
        </div>
        <button
          type="button"
          className="bg-[#2462ff] text-white rounded-md h-12 px-4 flex items-center gap-3 text-sm font-medium shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_4px_0_rgba(0,0,0,0.08)]"
        >
          <Image
            src="/images/promptmonitor.io/assets/googleicon.svg"
            width={14}
            height={14}
            alt=""
          />
          Get Free Report
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <a className="flex items-center gap-2 text-sm font-medium text-[#3a3a3a]" href="#">
        <Presentation className="w-4 h-4" /> Try live demo
      </a>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 text-sm text-[#3a3a3a]">
          <CheckCircle2 className="w-4 h-4 text-[#3fb52a]" /> 7 days free
          trial
        </span>
        <span className="flex items-center gap-2 text-sm text-[#3a3a3a]">
          <CheckCircle2 className="w-4 h-4 text-[#3fb52a]" /> Cancel anytime
        </span>
      </div>
    </section>
  );
}
