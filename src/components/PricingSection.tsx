import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { TrustedByBar } from "@/components/TrustedByBar";
import type { PricingPlan } from "@/types/content";

const plans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "Essentials for small businesses",
    priceMonthly: 29,
    priceMonthlyStruck: 49,
    ctaLabel: "Try free for 7 days",
    ctaHref: "#",
    icon: "/images/promptmonitor.io/pricing-startup-icon.svg",
    features: [
      "1 project",
      "25 prompts",
      "2250 responses per month",
      "Twice a week refresh",
      "ChatGPT (Open AI), Claude, Gemini, DeepSeek, Grok, Perplexity",
      "Website Analytics",
      "AI Search Bot and Crawler Analytics",
      "Export to CSV",
      "1 team seat",
      "Weekly email reports",
      "Email + Live chat support",
    ],
  },
  {
    name: "Growth",
    tagline: "Perfect for growing startups and SMBs",
    priceMonthly: 39,
    priceMonthlyStruck: 66,
    badge: "79% pick this option",
    highlighted: true,
    ctaLabel: "Try free for 7 days",
    ctaHref: "#",
    icon: "/images/promptmonitor.io/pricing-pro-icon.svg",
    features: [
      "2 projects",
      "50 prompts",
      "4500 responses per month",
      "Daily refresh",
      "All models in Starter",
      "Website Analytics",
      "AI Search Bot and Crawler Analytics",
      "Export to CSV",
      "Unlimited team seats",
      "Weekly email reports",
      "Email + Live chat support",
    ],
  },
  {
    name: "Pro",
    tagline: "For SMEs and Agencies",
    priceMonthly: 129,
    priceMonthlyStruck: 219,
    ctaLabel: "Try free for 7 days",
    ctaHref: "#",
    icon: "/images/promptmonitor.io/pricing-pro-icon.svg",
    features: [
      "5 projects",
      "150 prompts",
      "14000 responses per month",
      "Daily refresh",
      "All models in Lite + AI Mode, AI Overview",
      "Website Analytics",
      "AI Search Bot and Crawler Analytics",
      "Export to CSV",
      "Unlimited team seats",
      "Weekly email reports",
      "Email + Live chat support",
    ],
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg pt-6 px-6 pb-12 flex flex-col gap-4",
        "shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_4px_0_rgba(0,0,0,0.08)]",
        plan.highlighted &&
          "shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_20px_3px_rgba(0,0,0,0.06),0_1px_4px_0_rgba(0,0,0,0.08)]"
      )}
    >
      {plan.icon && <Image src={plan.icon} width={40} height={40} alt="" />}
      <div>
        <div className="flex items-center gap-2 text-[#5a5a5a] font-medium">
          {plan.name}
          {plan.badge && (
            <span className="bg-[#2462ff] text-white text-xs rounded-full px-2 py-px">
              {plan.badge}
            </span>
          )}
        </div>
        <p className="text-[#5a5a5a]">{plan.tagline}</p>
      </div>
      <div className="flex items-baseline gap-1">
        <div className="text-[32px] font-medium text-[#1a1a1a]">
          ${plan.priceMonthly}
        </div>
        <div className="text-xl text-[#7a7a7a]">
          /mo{" "}
          {plan.priceMonthlyStruck !== undefined && (
            <span className="line-through">${plan.priceMonthlyStruck}/mo</span>
          )}
        </div>
      </div>
      <button className="w-full h-11 rounded-md bg-[#1a1a1a] text-white font-medium text-sm">
        {plan.ctaLabel}
      </button>
      <div className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <div key={f} className="flex items-start gap-2 text-sm text-[#3a3a3a]">
            <CheckCircle2 className="w-[18px] h-[18px] text-[#3fb52a] shrink-0 mt-0.5" />
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

function AgencyPricingCard() {
  const features = [
    "Unlimited projects",
    "Unlimited team seats",
    "Daily refresh",
    "Track all 8 AI Models",
    "Website and AI bot Analytics",
    "Priority support",
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10 bg-white rounded-lg p-8 max-w-[1080px] mx-auto mt-2">
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex items-baseline gap-1">
          <div className="text-[32px] font-medium text-[#1a1a1a]">$0</div>
          <div className="text-xl text-[#7a7a7a]">/mo</div>
        </div>
        <div>
          <div className="font-medium text-[#5a5a5a]">Agency Plan</div>
          <p className="text-[#5a5a5a]">
            For agencies managing multiple clients. Free to pitch to clients,
            affordable pricing, and revenue sharing.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-3">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-2 text-sm text-[#3a3a3a]">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#3fb52a] shrink-0 mt-0.5" />
              {f}
            </div>
          ))}
        </div>
        <button className="self-start px-8 h-11 rounded-md bg-[#1a1a1a] text-white font-medium text-sm">
          Email us
        </button>
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="py-20 px-4">
      <div className="flex flex-col items-center gap-2 text-center mb-10">
        <h2 className="font-heading text-[36px] font-medium text-black">
          Pricing
        </h2>
        <p className="text-[17px] text-[#666]">
          Start with a 7-day free trial on any plan
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-[1080px] mx-auto">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      <AgencyPricingCard />

      <p className="text-center text-[17px] text-[#666] mt-10">
        Enterprises can contact us at sales@promptmonitor.io for custom plans
        and features.
      </p>

      <div className="mt-10">
        <TrustedByBar />
      </div>
    </section>
  );
}
