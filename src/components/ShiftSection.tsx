"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ScrollRevealTextProps {
  text: string;
}

function ScrollRevealText({ text }: ScrollRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative text-center max-w-[848px] mx-auto font-heading text-[36px] font-medium leading-[46px] tracking-[-0.72px]"
    >
      <span className="text-[#7a7a7a]">{text}</span>
      <span
        className="absolute inset-0 text-[#1a1a1a] transition-[clip-path] duration-[1200ms] ease-out"
        style={{ clipPath: revealed ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
      >
        {text}
      </span>
    </div>
  );
}

interface MauBar {
  icon: string;
  value: string;
  color: string;
  pct: number;
}

const bars: MauBar[] = [
  {
    icon: "/images/promptmonitor.io/llms/openai-wbg-icon.svg",
    value: "600M",
    color: "#10A37F",
    pct: 100,
  },
  {
    icon: "/images/promptmonitor.io/llms/gemini-icon-filled.svg",
    value: "400M",
    color: "#4285F4",
    pct: 66.7,
  },
  {
    icon: "/images/promptmonitor.io/llms/deepseek-icon-wfilled.svg",
    value: "97M",
    color: "#4D6BFE",
    pct: 16.2,
  },
  {
    icon: "/images/promptmonitor.io/llms/grok-icon.svg",
    value: "35M",
    color: "#343434",
    pct: 5.8,
  },
  {
    icon: "/images/promptmonitor.io/llms/claude-icon-wfilled.svg",
    value: "19M",
    color: "#D97706",
    pct: 3.2,
  },
  {
    icon: "/images/promptmonitor.io/llms/perplexity-icon.svg",
    value: "15M",
    color: "#20B2AA",
    pct: 2.5,
  },
];

function MauBarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-4 w-full mt-10">
      {bars.map((bar, index) => (
        <div
          key={bar.value}
          className="h-20 w-full border-t border-b border-[#e4e5e6] relative"
        >
          <div
            className="absolute top-0 left-0 h-full z-[1]"
            style={{
              background: `linear-gradient(to right, ${bar.color}, ${bar.color})`,
              width: filled ? `${bar.pct}%` : "0%",
              transition: "width 1000ms ease-out",
              transitionDelay: `${index * 100}ms`,
            }}
          />
          <Image
            src={bar.icon}
            alt=""
            width={28}
            height={28}
            className="absolute top-[26px] left-5 z-[3]"
          />
          <span className="absolute top-[30px] right-5 z-[3] font-heading text-sm font-medium text-[#3a3a3a]">
            {bar.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ShiftSection() {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-10 mb-10 px-[30px]">
        <ScrollRevealText text="Sales teams are drowning in spreadsheets and missed follow-ups." />
        {/* TODO: replace with a real, sourced statistic before publishing — do not ship an invented number */}
        <ScrollRevealText text="Businesses lose a significant share of qualified leads every year to slow or missed follow-ups." />
      </div>
      <MauBarChart />
    </div>
  );
}
