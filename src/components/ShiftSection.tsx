"use client";

import { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";

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

interface ResponseDelayBar {
  label: string;
  value: string;
  color: string;
  pct: number;
}

// Illustrative placeholder figures, not sourced statistics — swap in real
// data (e.g. from Leadist's own conversionRate/todayFollowUp analytics) or
// a cited study before publishing.
const delayBars: ResponseDelayBar[] = [
  { label: "Within 5 min", value: "2% lost", color: "#22C55E", pct: 2.44 },
  { label: "Within 30 min", value: "12% lost", color: "#84CC16", pct: 14.63 },
  { label: "Within 1 hour", value: "21% lost", color: "#EAB308", pct: 25.61 },
  { label: "Within 24 hours", value: "45% lost", color: "#F97316", pct: 54.88 },
  { label: "After 3 days", value: "68% lost", color: "#EF4444", pct: 82.93 },
  { label: "After 1 week", value: "82% lost", color: "#B91C1C", pct: 100 },
];

function ResponseDelayChart() {
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
      {delayBars.map((bar, index) => (
        <div
          key={bar.label}
          className="h-20 w-full border-t border-b border-[#e4e5e6] relative"
        >
          <div
            className="absolute top-0 left-0 h-full z-[1]"
            style={{
              backgroundColor: bar.color,
              opacity: 0.14,
              width: filled ? `${bar.pct}%` : "0%",
              transition: "width 1000ms ease-out",
              transitionDelay: `${index * 100}ms`,
            }}
          />
          <Clock
            className="absolute top-1/2 left-5 z-[3] h-6 w-6 -translate-y-1/2"
            style={{ color: bar.color }}
          />
          <span className="absolute top-1/2 left-14 z-[3] -translate-y-1/2 font-heading text-sm font-medium text-[#3a3a3a]">
            {bar.label}
          </span>
          <span className="absolute top-1/2 right-5 z-[3] -translate-y-1/2 font-heading text-sm font-semibold text-[#1a1a1a]">
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
      <ResponseDelayChart />
    </div>
  );
}
