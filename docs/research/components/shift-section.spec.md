# ShiftSection (2-column: search-shift narrative + GEO dark panel) Specification

## Overview
- **Target files:** `src/components/ShiftSection.tsx` (left column, light, MAU bar chart) and `src/components/GeoShiftSection.tsx` (right column, dark panel) — plus a thin wrapper `src/components/ShiftSectionRow.tsx` that lays them out side by side. Build all three in this one task (they're a tightly-coupled pair, still within complexity budget).
- **Interaction model:** **scroll-driven text reveal** on the left column's two headings (gray base text with a dark overlay that "wipes in" left-to-right as the section scrolls into view). The right column is static (no scroll animation observed beyond standard page flow).

## Layout wrapper (ShiftSectionRow)
```
<div className="max-w-[1080px] w-[95%] mx-auto flex flex-col md:flex-row gap-5">
  <ShiftSection />      {/* flex-1, ~530px on desktop */}
  <GeoShiftSection />   {/* flex-1, ~530px on desktop */}
</div>
```
- `gap: 20px` (`gap-5`), `max-width: 1080px`, both columns equal width (`flex-1` each), stack vertically on mobile (`flex-col md:flex-row`).

## ShiftSection (left, light)

### DOM structure
```
<div>                                          // shiftContent
  <div className="flex flex-col gap-10 mb-10 px-[30px]">   {/* shiftHeadingContainer: gap 40px, margin-bottom 40px, padding 0 30px */}
    <ScrollRevealText text="Search is Shifting from Search Engines to AI." />
    <ScrollRevealText text="The monthly active users of AI / LLMs has grown to over 1 billion by June 2025." />
  </div>
  <MauBarChart />
</div>
```

### ScrollRevealText (shared sub-component, used twice here)
- Renders the SAME text twice, stacked: a base gray copy behind an absolutely-positioned dark copy that is clipped by `clip-path: inset(0 X% 0 0)`, where X animates from 100 (fully hidden) to 0 (fully revealed) as the element scrolls into the viewport.
- Base text: `color:#7a7a7a` (rgb(122,122,122)); dark overlay text: `color:#1a1a1a` (rgb(26,26,26)), `position:absolute; inset:0`.
- Typography (both copies): `font-family:Geist; font-size:36px; font-weight:500; line-height:46px; letter-spacing:-0.72px; text-align:center; max-width:848px` (center this within its column — note: in the 530px-wide column, text will wrap; the 848px max-width just means it won't be artificially constrained narrower than the column).
- **Implementation:** `"use client"`. Use an `IntersectionObserver` (threshold array e.g. `[0, 0.25, 0.5, 0.75, 1]`) or a scroll listener computing how far the element's top has crossed a reference point (e.g. viewport center) to derive a 0-100 reveal progress, then set the overlay's `clip-path: inset(0 ${100 - progress}% 0 0)` inline style. A simpler, still-faithful approximation: trigger via IntersectionObserver `isIntersecting` (once true) and CSS-transition the clip-path from `inset(0 100% 0 0)` to `inset(0 0% 0 0)` over ~1.2s ease-out — this captures the "reveal as you scroll to it" spirit without requiring exact scroll-scrubbing math. Prefer this simpler approach.

### MauBarChart
Horizontal bar chart, 6 rows, each row = one AI platform's monthly active users (MAU), sorted descending:
```ts
const bars = [
  { icon: "/images/promptmonitor.io/llms/openai-wbg-icon.svg", value: "600M", color: "#10A37F", pct: 100 },
  { icon: "/images/promptmonitor.io/llms/gemini-icon-filled.svg", value: "400M", color: "#4285F4", pct: 66.7 },
  { icon: "/images/promptmonitor.io/llms/deepseek-icon-wfilled.svg", value: "97M", color: "#4D6BFE", pct: 16.2 },
  { icon: "/images/promptmonitor.io/llms/grok-icon.svg", value: "35M", color: "#343434", pct: 5.8 },
  { icon: "/images/promptmonitor.io/llms/claude-icon-wfilled.svg", value: "19M", color: "#D97706", pct: 3.2 },
  { icon: "/images/promptmonitor.io/llms/perplexity-icon.svg", value: "15M", color: "#20B2AA", pct: 2.5 },
];
```
- Wrapper: `display:flex; flex-direction:column; gap:16px; width:100%; margin-top:40px`.
- Each row: `height:80px; width:100%; border-top:1px solid #e4e5e6; border-bottom:1px solid #e4e5e6; position:relative` (adjacent rows share borders — fine to just put border-top+bottom on every row, visually equivalent to a bordered list).
- Inside each row: an absolutely-positioned background fill bar (`position:absolute; top:0; left:0; height:100%; z-index:1; background: linear-gradient(to right, {color}, {color})`) whose `width` animates from `0%` to `{pct}%` when the chart scrolls into view (same IntersectionObserver-on-mount-transition approach as above; `transition: width 1s ease-out`, stagger each row by `index * 100ms` for a nice cascading fill effect — optional but recommended).
- Icon: `position:absolute; top:26px; left:20px; z-index:3`, ~28x28px, using the brand icon image for that row.
- Value text: `position:absolute; top:30px; right:20px; z-index:3; font-family:Geist; font-size:14px; font-weight:500; color:#3a3a3a`.
- All 6 icon assets already exist in `public/images/promptmonitor.io/llms/`.

## GeoShiftSection (right, dark panel)

### DOM structure
```
<div className="bg-[#343434] py-[120px] flex flex-col items-center gap-8 px-8 text-center">
  <h2 className="text-2xl md:text-[36px] font-medium leading-[46px] tracking-[-0.72px] text-white max-w-[500px]">
    Your customers aren&apos;t <GoogleColoredWord /> anymore. They&apos;re asking AI for purchase decisions.
  </h2>
  <div className="bg-[#007AFF] text-white text-base rounded-[18px_18px_4px_18px] px-4 py-3 inline-block">
    best GEO tool for marketers
  </div>
  <h2 className="text-2xl md:text-[36px] font-medium leading-[46px] tracking-[-0.72px] text-white max-w-[500px]">
    Generative Engine Optimization puts you at the center of every buying decision.
  </h2>
  <p className="text-lg text-white max-w-[440px]">
    Either you get mentioned in AI answers or lose the sale to your competitors.
  </p>
</div>
```
- Background: `#343434` (rgb(52,52,52)), padding `120px 0` vertically, flex column centered, no border-radius (measured as square — if it looks visually odd without rounding when assembled, a subtle `rounded-2xl` on the outer column wrapper is a reasonable adjustment call, but the raw measurement was 0).
- Both headings: 36px/500/46px line-height, `-0.72px` letter-spacing, white, centered, Geist font.
- **GoogleColoredWord**: the word "Googling" rendered letter-by-letter, each `<span>` colored in a repeating 4-color cycle matching Google's brand palette:
  ```ts
  const googleColors = ["#4186F3", "#EB4235", "#FBBF04", "#34A521"]; // blue, red, yellow, green — repeats
  // "Googling" → G(blue) o(red) o(yellow) g(green) l(blue) i(red) n(yellow) g(green)
  ```
  Render as `{"Googling".split("").map((ch, i) => <span key={i} style={{ color: googleColors[i % 4] }}>{ch}</span>)}`.
- Chat-bubble badge ("best GEO tool for marketers"): `background:#007AFF` (iOS-blue, distinct from the site's own brand-blue `#2462ff` — this is intentionally an iMessage-style chat bubble to reinforce the "asking AI" visual theme), white text, `font-size:16px`, `padding:12px 16px`, `border-radius: 18px 18px 4px 18px` (speech-bubble shape — sharp corner bottom-left... actually bottom-right per the CSS `18px 18px 4px` shorthand which is top-left/top-right/bottom-right, with bottom-left inheriting top-left's 18px — reproduce exactly as `rounded-tl-[18px] rounded-tr-[18px] rounded-br-[4px] rounded-bl-[18px]`).
- Final paragraph: `font-size:18px; color:#fff; font-weight:400`.

### Content (verbatim)
- Heading 1: "Your customers aren't Googling anymore. They're asking AI for purchase decisions."
- Badge: "best GEO tool for marketers"
- Heading 2: "Generative Engine Optimization puts you at the center of every buying decision."
- Paragraph: "Either you get mentioned in AI answers or lose the sale to your competitors."

## Responsive Behavior
- Columns stack vertically on mobile (`flex-col md:flex-row`), each full width.
- Font sizes can shrink slightly on mobile if 36px feels large in a narrow column (use judgment, e.g. `text-[28px] md:text-[36px]`).
