# PricingSection Specification

## Overview
- **Target file:** `src/components/PricingSection.tsx` (also create a small `PricingCard` sub-component and `AgencyPricingCard` sub-component, either inline in the same file or as siblings — your choice, keep it clean)
- **Interaction model:** static.

## DOM Structure
```
<section id="pricing">                                {/* note: nav links to /pricing as its own page; on the homepage this same section is embedded — just build the section component */}
  <div className="flex flex-col items-center gap-2 text-center mb-10">     {/* headingContainer */}
    <h2>Pricing</h2>
    <p>Start with a 7-day free trial on any plan</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-[1080px] mx-auto justify-center">  {/* plansContainer */}
    {plans.map(plan => <PricingCard key={plan.name} {...plan} />)}
  </div>

  <AgencyPricingCard />

  <p className="text-center text-[17px] text-[#666] mt-10">
    Enterprises can contact us at sales@promptmonitor.io for custom plans and features.
  </p>

  <div className="flex flex-col items-center gap-4 mt-4">
    {/* "Trusted by" repeat — reuse the same content/logos as TrustedByBar (already built as its own component) */}
    <p className="text-base text-[#5a5a5a]">Trusted by</p>
  </div>
</section>
```

## PricingCard (repeated 3x — Starter, Growth, Pro)

### Structure
```tsx
<div className={cn(
  "bg-white rounded-lg pt-6 px-6 pb-12 flex flex-col gap-4 shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_4px_0_rgba(0,0,0,0.08)]",
  plan.highlighted && "shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_20px_3px_rgba(0,0,0,0.06),0_1px_4px_0_rgba(0,0,0,0.08)]"
)}>
  <Image src={plan.icon} width={40} height={40} alt="" />
  <div>
    <div className="flex items-center gap-2 text-[#5a5a5a] font-medium">
      {plan.name}
      {plan.badge && (
        <span className="bg-[#2462ff] text-white text-xs rounded-full px-2 py-px">{plan.badge}</span>
      )}
    </div>
    <p className="text-[#5a5a5a]">{plan.tagline}</p>
  </div>
  <div className="flex items-baseline gap-1">
    <div className="text-[32px] font-medium text-[#1a1a1a]">${plan.priceMonthly}</div>
    <div className="text-xl text-[#7a7a7a]">/mo<span className="line-through">${plan.priceMonthlyStruck}/mo</span></div>
  </div>
  <button className="button-primary w-full">{plan.ctaLabel}</button>
  <div className="flex flex-col gap-3">
    {plan.features.map(f => (
      <div key={f} className="flex items-start gap-2 text-sm text-[#3a3a3a]">
        <CheckCircle2 className="w-[18px] h-[18px] text-[#3fb52a] shrink-0 mt-0.5" />
        {f}
      </div>
    ))}
  </div>
</div>
```
- Card: white bg, `border-radius: 8px`, `padding: 24px 24px 48px`, width ~343px in a 3-col grid (`grid-cols-3` at desktop, `grid-cols-1` mobile), `gap: 8px` between cards.
- Base shadow: `0 -1px 1px 0 rgba(0,0,0,.08), 0 1px 1px 0 rgba(0,0,0,.16), 0 1px 4px 0 rgba(0,0,0,.08)`.
- Highlighted (Growth) card ADDS an extra glow layer: `0 1px 20px 3px rgba(0,0,0,.06)` on top of the base shadow (see combined value above).
- Plan icon: 40x40 image (`pricing-pro-icon.svg` / `pricing-startup-icon.svg` — the live site reuses just 2 icon graphics across 3 cards, not one per plan; use `pricing-startup-icon.svg` for Starter, `pricing-pro-icon.svg` for Growth and Pro).
- Plan name: `color:#5a5a5a; font-weight:500`.
- Badge (Growth only): `background:#2462ff; color:#fff; font-size:12px; padding:1px 8px; border-radius:39px` (pill).
- Tagline: `color:#5a5a5a`.
- Price: `font-size:32px; font-weight:500; color:#1a1a1a`. Price unit/struck-through original: `font-size:20px; color:#7a7a7a`, struck-through part has `text-decoration:line-through`.
- Button: reuse the site's `button-primary` treatment (black/dark button matching "View live demo" style is NOT right here — check: this is a distinct "Try free for 7 days" button per card, style it consistently with the rest of the site's primary black button `bg-[#1a1a1a] text-white`, full width, rounded, centered text, comfortable padding e.g. `h-11`).
- Feature checkmark: `lucide-react` `CheckCircle2`, 18px, color `#3fb52a` (var(--success)).

### Data (verbatim — all 3 plans)
```ts
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
```
Use the `PricingPlan` interface already defined in `src/types/content.ts`.

## AgencyPricingCard (wide horizontal card, below the 3-col grid)

### Structure
```tsx
<div className="flex flex-col md:flex-row gap-10 bg-white rounded-lg p-8 max-w-[1080px] mx-auto mt-2">
  <div className="flex flex-col gap-6 flex-1">
    <div className="flex items-baseline gap-1">
      <div className="text-[32px] font-medium text-[#1a1a1a]">$0</div>
      <div className="text-xl text-[#7a7a7a]">/mo</div>
    </div>
    <div>
      <div className="font-medium text-[#5a5a5a]">Agency Plan</div>
      <p className="text-[#5a5a5a]">For agencies managing multiple clients. Free to pitch to clients, affordable pricing, and revenue sharing.</p>
    </div>
  </div>
  <div className="flex flex-col gap-6 flex-1">
    <div className="flex flex-col gap-3">
      {["Unlimited projects", "Unlimited team seats", "Daily refresh", "Track all 8 AI Models", "Website and AI bot Analytics", "Priority support"].map(f => (
        <div key={f} className="flex items-start gap-2 text-sm text-[#3a3a3a]">
          <CheckCircle2 className="w-[18px] h-[18px] text-[#3fb52a] shrink-0 mt-0.5" />
          {f}
        </div>
      ))}
    </div>
    <button className="button-primary self-start px-8">Email us</button>
  </div>
</div>
```
- Card: white bg, `border-radius:8px`, `padding:32px`, `gap:40px` between the two columns (each ~471px / flex-1), stacks vertically on mobile.
- "$0/mo" is displayed exactly as-is on the live site (verbatim, even though it reads a little oddly for a "contact us" plan — reproduce faithfully).

## Section-level styles
- Heading: h2 "Pricing" — font-size 36px, font-weight 500, color black. Subtitle "Start with a 7-day free trial on any plan" — font-size 17px, color `#666`.
- Bottom note: "Enterprises can contact us at sales@promptmonitor.io for custom plans and features." — font-size 17px, color `#666`, centered.
- "Trusted by" repeat at the very bottom: this duplicates the same social-proof logos already built in `src/components/TrustedByBar.tsx` — just render `<TrustedByBar />` again here (import it) instead of rebuilding, but note the live site shows only the "Trusted by" label + logos here, WITHOUT the "Over 1450 Companies..." line — if `TrustedByBar` only exports the whole block with that line included, that's an acceptable minor duplication for this pass (don't over-engineer a variant prop unless it's trivial to add).

## Responsive Behavior
- `plansContainer`: `grid-cols-3` desktop → `grid-cols-1` mobile.
- `AgencyPricingCard`: `flex-row` desktop → `flex-col` mobile.
