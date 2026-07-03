import Image from "next/image";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types/content";

const features: FeatureItem[] = [
  {
    title: "Track your AI Visibility",
    description:
      "One dashboard shows how often ChatGPT, Claude, Gemini, and Perplexity mention your brand. Tracked daily so you catch changes fast.",
    image: "/images/promptmonitor.io/assets/features-img/track-ai-visibility.png",
    imageAlt: "AI Search Visibility Analytics",
  },
  {
    title: "Find the sources AI cites that don't mention you",
    description:
      "AI models pull from specific articles and websites when answering. See every source, who wrote it, and whether they mention your brand.",
    image: "/images/promptmonitor.io/assets/features-img/find-ai-sources.png",
    imageAlt: "Source list with mention status",
  },
  {
    title: "See when AI crawl your site",
    description:
      "Track AI bots visiting your website in real-time. Know which pages they read and how often they come back so you know your content is being indexed.",
    image: "/images/promptmonitor.io/assets/features-img/ai-bot-analytics.png",
    imageAlt: "AI Bot Analytics Dashboard",
    ctaLabel: "Learn more",
  },
  {
    title: "Website analytics, without the cookie banners",
    description:
      "Simple, GDPR-compliant analytics built in. See visitors, page views, and traffic sources. No cookies, no consent popups, no extra tools needed.",
    image: "/images/promptmonitor.io/assets/features-img/web-analytics.png",
    imageAlt: "Privacy-First Web Analytics",
  },
  {
    title: "Get contact details for every source",
    description:
      "We extract author emails and social profiles from every source so you can pitch publishers to mention your brand.",
    image: "/images/promptmonitor.io/assets/features-img/publishers-contacts.png",
    imageAlt: "Contact information for sources",
  },
  {
    title: "Outreach or outrank? We help you decide.",
    description:
      "Every source comes with domain rating, backlinks, and content structure. Low authority? Create better content. High authority? Pitch the author.",
    image:
      "/images/promptmonitor.io/assets/features-img/know-when-to-outreach-outrank.png",
    imageAlt: "SEO metrics and content outline",
  },
  {
    title: "Compare your AI visibility against competitors",
    description:
      "See which competitors AI mentions for your target queries. Track their visibility score alongside yours and spot the gaps.",
    image: "/images/promptmonitor.io/assets/features-img/discover-competitors.png",
    imageAlt: "Competitor Analysis Dashboard",
    ctaLabel: "View live demo",
  },
  {
    title: "Read every word AI says about your brand",
    description:
      "Most businesses have no idea what AI says about them. Track every mention, read the full response, and understand the sentiment.",
    image: "/images/promptmonitor.io/assets/features-img/brand-monitor.png",
    imageAlt: "Brand Mentions Tracking",
    ctaLabel: "View live demo",
  },
  {
    title: "Discover the keywords AI actually searches",
    description:
      "When AI answers questions, it searches the web with specific queries. We capture those exact keywords so you can create content AI will find and cite.",
    image: "/images/promptmonitor.io/assets/features-img/search-queries.png",
    imageAlt: "AI Search Queries Analytics",
  },
  {
    title: "Track AI visibility by location",
    description:
      "AI gives different answers in different places. Set your target markets by country, state, or city and see how your visibility changes.",
    image: "/images/promptmonitor.io/assets/features-img/localization.png",
    imageAlt: "Geographic AI visibility targeting",
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
