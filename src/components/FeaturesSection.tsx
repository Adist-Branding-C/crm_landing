import Image from "next/image";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types/content";

const features: FeatureItem[] = [
  {
    title: "Track every lead in real time",
    description:
      "See today's leads, hot leads, conversion rate, and pipeline value the moment you log in.",
    image: "/images/promptmonitor.io/assets/features-img/track-ai-visibility.png",
    imageAlt: "Real-time lead tracking dashboard",
  },
  {
    title: "Spot leads slipping through the cracks",
    description:
      "Surface leads with no follow-up added or a missed next-follow-up date before they go cold.",
    image: "/images/promptmonitor.io/assets/features-img/find-ai-sources.png",
    imageAlt: "Leads with missed follow-ups",
  },
  {
    title: "Get notified the moment something happens",
    description:
      "Every call, remark, status change, and task update lands in a live activity feed.",
    image: "/images/promptmonitor.io/assets/features-img/ai-bot-analytics.png",
    imageAlt: "Live activity feed",
    ctaLabel: "Learn more",
  },
  {
    title: "Reports, without the spreadsheet chaos",
    description:
      "30+ built-in reports — lead status, source-wise, call feedback, staff attendance — exportable to Excel in one click.",
    image: "/images/promptmonitor.io/assets/features-img/web-analytics.png",
    imageAlt: "Built-in CRM reports",
  },
  {
    title: "Every lead's full contact card in one place",
    description:
      "Name, phone, location, purpose, source, assigned agent, next follow-up — one click away.",
    image: "/images/promptmonitor.io/assets/features-img/publishers-contacts.png",
    imageAlt: "Lead contact card",
  },
  {
    title: "Outreach at scale, on autopilot",
    description:
      "Build a campaign from any lead filter, then reach every lead by email or WhatsApp using saved templates.",
    image:
      "/images/promptmonitor.io/assets/features-img/know-when-to-outreach-outrank.png",
    imageAlt: "Email and WhatsApp campaign builder",
  },
  {
    title: "See how every agent stacks up",
    description:
      "Compare conversion rate, deals closed, and revenue per staff member side by side.",
    image: "/images/promptmonitor.io/assets/features-img/discover-competitors.png",
    imageAlt: "Staff performance comparison",
    ctaLabel: "View live demo",
  },
  {
    title: "Never lose a remark or note again",
    description:
      "Every call note and status update is logged against the lead, with who added it and when.",
    image: "/images/promptmonitor.io/assets/features-img/brand-monitor.png",
    imageAlt: "Lead activity and notes log",
    ctaLabel: "View live demo",
  },
  {
    title: "Know which sources actually convert",
    description:
      "See which channel — Facebook, referral, walk-in — is really turning into won deals, not just raw leads.",
    image: "/images/promptmonitor.io/assets/features-img/search-queries.png",
    imageAlt: "Lead source conversion analytics",
  },
  {
    title: "Track leads and field staff by location",
    description:
      "See where your leads are concentrated and where field agents checked in today.",
    image: "/images/promptmonitor.io/assets/features-img/localization.png",
    imageAlt: "Lead and field-staff location map",
  },
];

function FeatureCard({
  feature,
  index,
  total,
}: {
  feature: FeatureItem;
  index: number;
  total: number;
}) {
  const isLeftColumn = index % 2 === 0;
  const isLastRow = index >= total - 2;
  const isLastMobile = index === total - 1;

  return (
    <div
      className={cn(
        "flex flex-col",
        isLeftColumn && "md:border-r md:border-r-[#e4e5e6]",
        !isLastRow && "md:border-b md:border-b-[#e4e5e6]",
        !isLastMobile && "border-b border-b-[#e4e5e6] md:border-b-0"
      )}
    >
      <div className="flex flex-col gap-[14px] px-8 py-7">
        <h2 className="font-[Geist] text-[22px] font-semibold leading-[28px] tracking-[-0.4px] text-black">
          {feature.title}
        </h2>
        <p className="font-[Inter] text-[15px] font-normal leading-[24.75px] text-gray-600">
          {feature.description}
        </p>
        {feature.ctaLabel && (
          <a
            href={feature.ctaHref ?? "#"}
            className="text-sm font-medium text-[#2462ff] hover:underline"
          >
            {feature.ctaLabel}
          </a>
        )}
      </div>
      <div className="flex aspect-[540/320] h-auto w-full items-center justify-center overflow-hidden md:aspect-auto md:h-[320px]">
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          width={540}
          height={320}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1080px] border-l border-r border-[#e4e5e6]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              total={features.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
