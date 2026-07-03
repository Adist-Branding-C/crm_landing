# FeaturesSection Specification

## Overview
- **Target file:** `src/components/FeaturesSection.tsx`
- **Screenshot:** `docs/design-references/promptmonitor.io/features-section.png` (not saved to disk yet — use description below; layout is simple enough to build from spec)
- **Interaction model:** static (no scroll/click/hover behaviors beyond default link/hover color if any — treat links as plain `<a>` with `text-decoration: underline` on hover, standard)

## DOM Structure
```
<section class="featuresSection">
  <div class="featuresContainerWrapper">      // outer border-left/right: 1px solid #e4e5e6, max-width: 1080px, margin: 0 auto
    <div class="featuresContainer">           // CSS grid, 2 columns, 539px each (grid-template-columns: 1fr 1fr, no gap)
      <FeatureCard {...items[0]} />
      <FeatureCard {...items[1]} />
      ... 10 total, filled row by row (2 per row, 5 rows)
    </div>
  </div>
</section>
```

Each `FeatureCard`:
```
<div class="featureCard">                    // flex column, border-right + border-bottom on grid lines (see below)
  <div class="featureContent">                // padding: 28px 32px; display:flex; flex-direction:column; gap:14px
    <h2 class="featureTitle">{title}</h2>
    <p class="featureDescription">{description}</p>
    {linkText && <a href="#" class="featureLink">{linkText}</a>}
  </div>
  <div class="featureImageContainer">         // height:320px; display:flex; justify-content:center; align-items:center
    <img class="featureImage" src={image} alt={imageAlt} width={540} height={320} />
  </div>
</div>
```

## Computed Styles (exact values)

### featuresContainerWrapper
- max-width: 1080px
- margin: 0 auto
- border-left: 1px solid #e4e5e6
- border-right: 1px solid #e4e5e6

### featuresContainer (grid)
- display: grid
- grid-template-columns: 1fr 1fr (rendered 539px 539px at 1080px container)
- gap: 0 (no gap — borders create the grid-line look)

### featureCard
- display: flex; flex-direction: column
- Left-column cards (even index 0,2,4,6,8): border-right: 1px solid #e4e5e6
- Right-column cards (odd index 1,3,5,7,9): no border-right (they're the outer edge)
- All cards except the LAST ROW (index 8, 9): border-bottom: 1px solid #e4e5e6
- Last row cards (index 8, 9): no border-bottom
- background: transparent

### featureContent
- padding: 28px 32px
- display: flex; flex-direction: column; gap: 14px

### featureTitle (h2)
- font-family: Geist, "Geist Fallback"
- font-size: 22px; font-weight: 600; line-height: 28px; letter-spacing: -0.4px
- color: #000

### featureDescription (p)
- font-family: Inter
- font-size: 15px; font-weight: 400; line-height: 24.75px (1.65)
- color: rgb(75, 85, 99) — i.e. Tailwind `text-gray-600` (#4b5563)

### featureLink (a, when present — "Learn more" / "View live demo")
- Style like a plain text link with blue/brand color and underline on hover (exact color not captured — use `--brand-blue` #2462ff, `text-decoration: underline` on hover, `font-size: 14px; font-weight: 500`). This is a reasonable inferred value — not pixel-verified.

### featureImageContainer
- height: 320px
- display: flex; align-items: center; justify-content: center
- overflow: hidden (images are exactly 540x320, essentially fill the box)

## States & Behaviors
N/A — fully static section. No hover-scale or transition observed on cards themselves. Standard link hover (underline/color) may apply to "Learn more"/"View live demo" links — implement simple `hover:underline` for safety.

## Content Data (verbatim, all 10 cards in order — this is real copy, use exactly)

```ts
const features = [
  {
    title: "Track your AI Visibility",
    description: "One dashboard shows how often ChatGPT, Claude, Gemini, and Perplexity mention your brand. Tracked daily so you catch changes fast.",
    image: "/images/promptmonitor.io/assets/features-img/track-ai-visibility.png",
    imageAlt: "AI Search Visibility Analytics",
  },
  {
    title: "Find the sources AI cites that don't mention you",
    description: "AI models pull from specific articles and websites when answering. See every source, who wrote it, and whether they mention your brand.",
    image: "/images/promptmonitor.io/assets/features-img/find-ai-sources.png",
    imageAlt: "Source list with mention status",
  },
  {
    title: "See when AI crawl your site",
    description: "Track AI bots visiting your website in real-time. Know which pages they read and how often they come back so you know your content is being indexed.",
    image: "/images/promptmonitor.io/assets/features-img/ai-bot-analytics.png",
    imageAlt: "AI Bot Analytics Dashboard",
    ctaLabel: "Learn more",
  },
  {
    title: "Website analytics, without the cookie banners",
    description: "Simple, GDPR-compliant analytics built in. See visitors, page views, and traffic sources. No cookies, no consent popups, no extra tools needed.",
    image: "/images/promptmonitor.io/assets/features-img/web-analytics.png",
    imageAlt: "Privacy-First Web Analytics",
  },
  {
    title: "Get contact details for every source",
    description: "We extract author emails and social profiles from every source so you can pitch publishers to mention your brand.",
    image: "/images/promptmonitor.io/assets/features-img/publishers-contacts.png",
    imageAlt: "Contact information for sources",
  },
  {
    title: "Outreach or outrank? We help you decide.",
    description: "Every source comes with domain rating, backlinks, and content structure. Low authority? Create better content. High authority? Pitch the author.",
    image: "/images/promptmonitor.io/assets/features-img/know-when-to-outreach-outrank.png",
    imageAlt: "SEO metrics and content outline",
  },
  {
    title: "Compare your AI visibility against competitors",
    description: "See which competitors AI mentions for your target queries. Track their visibility score alongside yours and spot the gaps.",
    image: "/images/promptmonitor.io/assets/features-img/discover-competitors.png",
    imageAlt: "Competitor Analysis Dashboard",
    ctaLabel: "View live demo",
  },
  {
    title: "Read every word AI says about your brand",
    description: "Most businesses have no idea what AI says about them. Track every mention, read the full response, and understand the sentiment.",
    image: "/images/promptmonitor.io/assets/features-img/brand-monitor.png",
    imageAlt: "Brand Mentions Tracking",
    ctaLabel: "View live demo",
  },
  {
    title: "Discover the keywords AI actually searches",
    description: "When AI answers questions, it searches the web with specific queries. We capture those exact keywords so you can create content AI will find and cite.",
    image: "/images/promptmonitor.io/assets/features-img/search-queries.png",
    imageAlt: "AI Search Queries Analytics",
  },
  {
    title: "Track AI visibility by location",
    description: "AI gives different answers in different places. Set your target markets by country, state, or city and see how your visibility changes.",
    image: "/images/promptmonitor.io/assets/features-img/localization.png",
    imageAlt: "Geographic AI visibility targeting",
  },
];
```

All 10 images already downloaded to `public/images/promptmonitor.io/assets/features-img/*.png` at native 540x320 (use `width={540} height={320}` on `next/image`, `className="w-full h-full object-cover"`).

Use the `FeatureItem` interface already defined in `src/types/content.ts` (fields: title, description, image, imageAlt, ctaLabel, ctaHref — ctaHref can be omitted/`"#"` since real backend is out of scope).

## Responsive Behavior
- **Desktop (1440px):** 2-column grid as described, 539px columns.
- **Tablet (768px):** not verified directly — infer a graceful 2-column layout continues down to ~768px since cards are already only 539px; below that, stack to 1 column (`grid-template-columns: 1fr` under `md:`).
- **Mobile (390px):** stack to single column, full width, image container height should scale to maintain aspect ratio (`h-auto` with `aspect-[540/320]` instead of fixed 320px).
- **Breakpoint:** use Tailwind `md:grid-cols-2 grid-cols-1` (assume `md` = 768px breakpoint, matching the rest of the site's `hidden md:block` pattern already observed in the hero).

## Assets
- 10 PNGs listed above, already in `public/images/promptmonitor.io/assets/features-img/`.
