import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { TrustedByBar } from "@/components/TrustedByBar";
import type { PricingPlan } from "@/types/content";

/**
 * TODO product decision: the subscription API prices per staff/month
 * (staffCount, perStaffPrice), which may fit better than these flat tiers.
 * Keeping flat pricing for now (Option A from the content plan) — revisit
 * if per-staff pricing (Option B) is preferred.
 */
const plans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "Essentials for small businesses",
    priceMonthly: 29,
    priceMonthlyStruck: 49,
    ctaLabel: "Start Free Trial",
    ctaHref: "#",
    icon: "/images/promptmonitor.io/pricing-startup-icon.svg",
    features: [
      "Up to 3 staff",
      "Unlimited leads",
      "Follow-up reminders & tasks",
      "Lead status & call activity reports",
      "Excel export",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "Perfect for growing startups and SMBs",
    priceMonthly: 39,
    priceMonthlyStruck: 66,
    badge: "79% pick this option",
    highlighted: true,
    ctaLabel: "Start Free Trial",
    ctaHref: "#",
    icon: "/images/promptmonitor.io/pricing-pro-icon.svg",
    features: [
      "Everything in Starter",
      "Deals & sales pipeline",
      "Email & WhatsApp campaigns",
      "Advanced reports & exports",
      "Up to 10 staff",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For SMEs and agencies",
    priceMonthly: 129,
    priceMonthlyStruck: 219,
    ctaLabel: "Talk to Sales",
    ctaHref: "#",
    icon: "/images/promptmonitor.io/pricing-pro-icon.svg",
    features: [
      "Everything in Growth",
      "Roles & permissions",
      "Departments & branches",
      "Multi-company admin",
      "API access",
      "Unlimited staff",
      "Priority phone & chat support",
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

// TODO: decide whether to keep this free row at all
function FreePricingCard() {
  const features = [
    "1 staff",
    "Limited leads (50/month)",
    "Basic follow-up reminders",
    "Community support",
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10 bg-white rounded-lg p-8 max-w-[1080px] mx-auto mt-2">
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex items-baseline gap-1">
          <div className="text-[32px] font-medium text-[#1a1a1a]">$0</div>
          <div className="text-xl text-[#7a7a7a]">/mo</div>
        </div>
        <div>
          <div className="font-medium text-[#5a5a5a]">Free</div>
          <p className="text-[#5a5a5a]">
            Try Leadist with a single staff account before you commit to a
            paid plan.
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
          Start Free Trial
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

      <FreePricingCard />

      <p className="text-center text-[17px] text-[#666] mt-10">
        Enterprises can contact us at sales@leadist.com for custom plans
        and features.
      </p>

      <div className="mt-10">
        <TrustedByBar />
      </div>
    </section>
  );
}
