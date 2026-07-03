# TestimonialSection + CallToActionSection Specification

Two small-to-medium static/time-driven sections bundled in one build task.

## 1. TestimonialSection
- **Target file:** `src/components/TestimonialSection.tsx`
- **Interaction model:** static.

### DOM structure
```tsx
<section className="py-20 flex justify-center">
  <div className="max-w-[800px] text-center flex flex-col items-center gap-6">
    <blockquote className="text-[32px] font-normal leading-[38.4px] text-[#1a1a1a]">
      Thanks to Promptmonitor, we quickly saw improvements in AI visibility for our clients. We&apos;ve been using it for over 2 months to track brand mentions in ChatGPT, and Perplexity and find AI citations, an absolute game changer for our agency.
    </blockquote>
    <div className="flex flex-col items-center gap-1.5">
      <Image src="/images/promptmonitor.io/assets/steve-lee.webp" alt="Steve Lee" width={40} height={40} className="rounded-full object-cover w-10 h-10" />
      <div className="text-lg font-semibold text-[#3a3a3a]">Steve Lee</div>
      <div className="text-base text-[#5a5a5a]">Founder SEO Aesthetic (Ex-Google, Microsoft)</div>
    </div>
  </div>
</section>
```

### Exact values
- Card max-width: 800px, centered.
- Blockquote: font-size 32px, font-weight 400, line-height 38.4px (1.2), color `#1a1a1a`, no italics.
- Author block: flex-col, items-center, gap 6px.
- Avatar: 40x40px, `border-radius:50%`, `object-fit:cover`, from `/images/promptmonitor.io/assets/steve-lee.webp` (already downloaded).
- Name: font-size 18px, font-weight 600, color `#3a3a3a`.
- Title: font-size 16px, color `#5a5a5a`.

### Content (verbatim)
- Quote: "Thanks to Promptmonitor, we quickly saw improvements in AI visibility for our clients. We've been using it for over 2 months to track brand mentions in ChatGPT, and Perplexity and find AI citations, an absolute game changer for our agency."
- Name: "Steve Lee"
- Title: "Founder SEO Aesthetic (Ex-Google, Microsoft)"

## 2. CallToActionSection
- **Target file:** `src/components/CallToActionSection.tsx`
- **Interaction model:** **time-driven** word-cycler in the heading (same mechanism as the Hero's `AnimatedSubheading`, but cycling through 6 brands instead of 4, with a "?" suffix per word) + two static decorative "sticky note" elements (Tailwind-only, no scroll/hover behavior, `hidden` below `lg:`).

### DOM structure
```tsx
<section className="relative flex flex-col items-center gap-8 py-10">
  {/* decorative sticky notes — Tailwind utility classes only, exactly as authored on the live site */}
  <span className="absolute z-[-1] text-primary bg-yellow-300 px-3 py-2 rounded-lg shadow-sm hidden lg:block rotate-[-6deg]" style={{ top: 110, left: 32 }}>
    What if your competitor ranks but not you?
  </span>
  <span className="absolute z-[-1] text-primary bg-yellow-300 px-3 py-2 rounded-lg shadow-sm hidden lg:block rotate-[-5deg]" style={{ top: 302, right: 25 }}>
    Your boss asked about GEO? Show him this report
  </span>

  <h2 className="font-heading text-[36px] font-medium leading-[46px] tracking-[-0.72px] text-center">
    Is your brand mentioned in <CtaAnimatedBrand />?
  </h2>
  <p className="text-lg text-[#5a5a5a] text-center max-w-[500px]">
    Enter your website and see how AI talks about your brand. Takes 2 minutes.
  </p>
  <div className="flex items-center gap-3">
    <div className="relative w-full max-w-[388px] h-12"> {/* same input as Hero */}
      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input placeholder="Enter your website url, e.g. vercel.com" />
    </div>
    <button className="bg-[#2462ff] text-white rounded-md h-12 px-4 flex items-center gap-3 text-sm font-medium shadow-[...]">
      <img src="/images/promptmonitor.io/assets/googleicon.svg" width={14} height={14} alt="" /> Get Free Report <ArrowRight className="w-4 h-4" />
    </button>
  </div>
  <a className="flex items-center gap-2 text-sm font-medium text-[#3a3a3a]" href="#">
    <Presentation className="w-4 h-4" /> Try live demo
  </a>
  <div className="flex items-center gap-4">
    <span className="flex items-center gap-2 text-sm text-[#3a3a3a]"><CheckCircle2 className="w-4 h-4 text-[#3fb52a]" /> 7 days free trial</span>
    <span className="flex items-center gap-2 text-sm text-[#3a3a3a]"><CheckCircle2 className="w-4 h-4 text-[#3fb52a]" /> Cancel anytime</span>
  </div>
</section>
```

Note: the original sticky-note `<span>` positions were measured with `top/left/right/bottom` all set simultaneously (an artifact of a resizable/draggable dev tool, not intentional) — just use `top` + `left` for the first, `top` + `right` for the second, as shown above; exact px values: note 1 `top:110px; left:32px`, note 2 `top:302px; right:25px`. Both use `bg-yellow-300` (Tailwind's actual yellow-300 token, not a custom color), `text-primary` (site's `--primary-main` `#1a1a1a`), `rounded-lg`, `shadow-sm`, `px-3 py-2`, `hidden lg:block` (desktop-only decorative flourish), and a slight rotation (`-6deg` / `-5deg`).

### CtaAnimatedBrand (word cycler, same mechanism as AnimatedSubheading but 6 brands + "?" suffix)
Reuse the exact same pattern as `src/components/AnimatedSubheading.tsx` (already built) — either import/reuse that component generically if it's easy to parameterize with a `brands` prop, OR duplicate the pattern into a new small component here (simpler, and safe from coupling). Cycle through, 2500ms interval:
```ts
const brands = [
  { name: "ChatGPT", icon: "/images/promptmonitor.io/llms/openai-icon.svg", gradient: "linear-gradient(135deg, #000, #333, #666)", duration: "3s" },
  { name: "Claude", icon: "/images/promptmonitor.io/llms/claude-icon.svg", gradient: "linear-gradient(135deg, #d77655, #e68a6a, #c96340)", duration: "4s" },
  { name: "Gemini", icon: "/images/promptmonitor.io/llms/gemini-icon.svg", gradient: "linear-gradient(135deg, #9168c0, #1ea0e2)", duration: "3.5s" },
  { name: "DeepSeek", icon: "/images/promptmonitor.io/llms/deepseek-icon-filled.svg", gradient: "linear-gradient(135deg, #4d6bfe, #0052cc, #003d99)", duration: "3s" },
  { name: "Grok", icon: "/images/promptmonitor.io/llms/grok-icon.svg", gradient: "linear-gradient(135deg, #000, #333, #666)", duration: "3s" },
  { name: "Perplexity", icon: "/images/promptmonitor.io/llms/perplexity-icon.svg", gradient: "linear-gradient(135deg, #25a5b8, #21b2aa, #1da39d)", duration: "3s" },
];
```
Same visual mechanism as the Hero's cycler: 20x20 icon + gradient-shimmer brand name, swapped every 2500ms with a fade transition, using the `gradientShift` keyframe already added to `globals.css`.

### Content (verbatim)
- Heading: "Is your brand mentioned in {cycler}?"
- Subtext: "Enter your website and see how AI talks about your brand. Takes 2 minutes."
- Input placeholder: "Enter your website url, e.g. vercel.com" (same as hero)
- Primary button: "Get Free Report" (same style as hero)
- Secondary link: "Try live demo" with a `lucide-react` `Presentation` icon
- Trust row: "7 days free trial", "Cancel anytime" (same as hero)
- Sticky notes: "What if your competitor ranks but not you?", "Your boss asked about GEO? Show him this report"

## Requirements for both
- `TestimonialSection` is static, no client directive needed.
- `CallToActionSection` needs `"use client"` for the word-cycler state.
