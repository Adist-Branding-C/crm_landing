# TrustedByBar + LlmLogosSection Specification

Two small, static, logo-grid components bundled in one build task (both simple, same complexity tier).

## 1. TrustedByBar
- **Target file:** `src/components/TrustedByBar.tsx`
- **Where it's used:** appears directly below the hero demo mockup, inside the same bordered column (it is NOT a separate full-width section — it's the tail end of the hero area). Export it standalone; the page-assembly step will place it right after `<HeroDemoMockup />`.
- **Interaction model:** static.

### DOM structure
```
<p className="text-base text-[#5a5a5a] text-center mt-0">Over 1450 Companies Signed Up, Trusted by</p>
<div className="flex gap-6 mt-6 items-center justify-center">
  <LogoMark1 />  {/* "SEOAesthetic" wordmark + orange asterisk glyph — real company logo, approximate as styled text since exact SVG is a complex third-party mark */}
  <img src="/images/promptmonitor.io/assets/media-ai-logo.avif" alt="Media AI" />
</div>
```
- Text: font-size 16px, color `#5a5a5a` (var(--text-secondary)), text-align center.
- Row: `display:flex; gap:24px; margin-top:24px; align-items:center; justify-content:center`.
- Logo 1 ("SEOAesthetic"): a real third-party logo rendered as inline SVG on the live site (too complex to extract exact vector path — approximate visually as styled text: serif/script-ish bold wordmark "SEOAesthetic" in black, with a small orange 4-point-star/asterisk glyph after it, ~20-24px tall). Use a `lucide-react` `Asterisk` or `Sparkle` icon in `#fe4a23` (brand-primary orange) next to bold text "SEOAesthetic" as a reasonable stand-in.
- Logo 2: real downloaded asset `/images/promptmonitor.io/assets/media-ai-logo.avif` (a blue star + "media" wordmark), use `next/image`, roughly 100x28 (infer natural aspect, don't stretch).

## 2. LlmLogosSection
- **Target file:** `src/components/LlmLogosSection.tsx`
- **Interaction model:** static.

### DOM structure
```
<div>                                          // llmLogosSection: full-bleed wrapper, centered content
  <div className="flex flex-col gap-8 max-w-[1080px] mx-auto">   {/* llmLogosContainer */}
    <div className="flex flex-col items-center gap-2 text-center">
      <h2>We track all AI models that matter</h2>
      <p>Promptmonitor tracks ChatGPT, Claude, Gemini, Deepseek, Grok, Perplexity, Google AI Overview and AI Mode for AI visibility</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4">   {/* llmLogos: 4 cols x 2 rows desktop, 269.5px cells measured (i.e. evenly divided, use grid-cols-4 w-full) */}
      {logos.map((logo, i) => (
        <div key={logo.alt} className={cn("flex items-center justify-center p-6 h-[78px] border-[#e4e5e6]",
          "border-r border-b", // every cell gets right+bottom border...
          (i % 4 === 3) && "border-r-0",       // ...except last column (no right border)
          (i >= 4) && "border-b-0"              // ...and last row (no bottom border) — adjust index math if grid-cols differs on mobile
        )}>
          <Image src={logo.src} alt={logo.alt} width={111} height={30} className="h-auto w-auto max-h-[30px]" />
        </div>
      ))}
    </div>
  </div>
</div>
```

### Computed styles (exact values)
- Container: max-width 1080px, mx-auto, flex-col, gap:32px
- Heading block: flex-col items-center gap:8px text-center
- h2: font-family Geist, font-size:20px, font-weight:500, color:#000
- p (description): font-size:15px, color:#5a5a5a
- Logo grid: 4 equal columns (269.5px measured at 1078px container ≈ `grid-cols-4` with no gap, borders create the grid-line look — same "framed container" motif as FeaturesSection)
- Each grid cell: flex items-center justify-center, padding:24px, height:78px, border-right + border-bottom `1px solid #e4e5e6` (omit border-right on the last column, omit border-bottom on the last row — 2 rows of 4)
- Logo images: natural sizes vary per brand logo (roughly 100-140px wide x ~28-32px tall) — render with `next/image`, `width={120} height={30}` container, `className="h-auto w-auto max-h-[30px] object-contain"` so each logo keeps its own aspect ratio inside a consistent-height row.

### Content (verbatim)
- Heading: "We track all AI models that matter"
- Description: "Promptmonitor tracks ChatGPT, Claude, Gemini, Deepseek, Grok, Perplexity, Google AI Overview and AI Mode for AI visibility"
- 8 logos in order, all already downloaded to `public/images/promptmonitor.io/llms/`:
  1. `openai-logo.svg` — alt "OpenAI"
  2. `claude-logo.svg` — alt "Anthropic"
  3. `gemini-logo.svg` — alt "Gemini"
  4. `deepseek-logo.svg` — alt "DeepSeek"
  5. `grok-logo.svg` — alt "Grok"
  6. `perplexity-logo.svg` — alt "Perplexity"
  7. `ai_mode-logo.svg` — alt "AI Mode"
  8. `ai_overview-logo.svg` — alt "AI Overview"

## Responsive Behavior
- **TrustedByBar:** stays centered, logos may wrap to 2 lines on very narrow screens (`flex-wrap`).
- **LlmLogosSection:** grid goes from `grid-cols-4` (desktop) to `grid-cols-2` (mobile, `sm:` and below) — 4 rows of 2 instead of 2 rows of 4. Recompute border logic for mobile using Tailwind's `[&>*:nth-child(2n)]:border-r-0` (last column) and `[&>*:nth-last-child(-n+2)]:border-b-0` (last row) or simplest: just accept borders may look slightly different at 2-col and don't over-engineer — visual consistency of the grid-line motif matters more than perfect border-removal on every breakpoint.
