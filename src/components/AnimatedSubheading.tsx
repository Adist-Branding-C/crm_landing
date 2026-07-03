"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Brand {
  name: string;
  icon: string;
  gradient: string;
  duration: string;
}

const brands: Brand[] = [
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
    name: "Grok",
    icon: "/images/promptmonitor.io/llms/grok-icon.svg",
    gradient: "linear-gradient(135deg, #000, #333, #666)",
    duration: "3s",
  },
];

export function AnimatedSubheading() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % brands.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const brand = brands[activeIndex];

  return (
    <span className="relative inline-flex w-[104px] h-6 -mt-1 overflow-hidden align-middle">
      <span
        key={activeIndex}
        className="absolute inset-0 inline-flex items-center justify-center gap-1 whitespace-nowrap text-lg leading-6 font-semibold transition-opacity duration-300 animate-[fadeIn_300ms_ease-in]"
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
