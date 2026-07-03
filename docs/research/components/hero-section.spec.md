# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** mostly static, EXCEPT the animated subheading which is **time-driven** (word-cycler, ~2.5-3s interval per brand, JS-driven with CSS fade/gradient transition).

## DOM Structure
```
<div>                                        // heroContainer: flex col, align-center, justify-center, gap:32px, padding:120px 16px 0, max-width:1080px, margin:0 auto
  <div>                                       // taglineContainer: flex, align-items:center, gap:8px
    <SparkleIcon className="text-[#2462ff]" />  {/* custom icon, see below */}
    <p>Your customers are asking AI instead of Google</p>   {/* color:#2462ff (brand blue), font-size:16px */}
  </div>
  <h1>Track, measure, and improve how AI recommends your brand</h1>
  <AnimatedSubheading />                      // see below
  <div>                                       // input row: flex, gap:12px, align-items:center
    <div className="relative">                // input wrapper, width 388px, height 48px
      <GlobeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input placeholder="Enter your website url, e.g. vercel.com" />
    </div>
    <button>
      <GoogleIcon /> Get Free Report <ArrowRightIcon />
    </button>
  </div>
  <div>                                       // trust row: flex gap ~16px, font-size 14px, color #3a3a3a
    <span><CheckCircleIcon className="text-[#3fb52a]" /> 7 days free trial</span>
    <span><CheckCircleIcon className="text-[#3fb52a]" /> Cancel anytime</span>
  </div>
</div>
```

## AnimatedSubheading (time-driven word-cycler) — build as its own sub-component `src/components/AnimatedSubheading.tsx`

Structure:
```
<p className="subHeading">                   // color: var(--text-secondary) #5a5a5a; text-align:center; font-size:17px; line-height:24px
  See how often
  <span className="textContainer">           // width:104px; height:24px; margin-top:-4px; display:inline-block; position:relative; overflow:hidden; vertical-align:middle
    {/* only the ACTIVE brand's span is rendered/visible at a time, swapped every ~2.5s */}
    <span className="motionText">            // white-space:nowrap; display:inline-flex; align-items:center; justify-content:center; gap:4px; font-size:18px; line-height:24px; position:absolute; top:0; left:0; font-weight:600
      <img src="{brand.icon}" width={20} height={20} />
      <span style={{ backgroundImage: brand.gradient, backgroundSize: '200% 200%', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'gradientShift Ns ease-in-out infinite' }}>{brand.name}</span>
    </span>
  </span>
  mentions your brand, which sources it cites, and what to do to get mentioned more.
</p>
```

Brand cycle data (cycles in this exact order, looping):
```ts
const brands = [
  { name: "ChatGPT", icon: "/images/promptmonitor.io/llms/openai-icon.svg", gradient: "linear-gradient(135deg, #000, #333, #666)", duration: "3s" },
  { name: "Claude", icon: "/images/promptmonitor.io/llms/claude-icon.svg", gradient: "linear-gradient(135deg, #d77655, #e68a6a, #c96340)", duration: "4s" },
  { name: "Gemini", icon: "/images/promptmonitor.io/llms/gemini-icon.svg", gradient: "linear-gradient(135deg, #9168c0, #1ea0e2)", duration: "3.5s" },
  { name: "Grok", icon: "/images/promptmonitor.io/llms/grok-icon.svg", gradient: "linear-gradient(135deg, #000, #333, #666)", duration: "3s" },
];
```
- Each icon is 20x20px, `margin-left` on the text varies per brand in the original (4px/12px/10px/22px) — safe to just use a consistent `gap: 4px` in the flex row instead (the varying margins were likely compensating for different word widths in a fixed 104px box; use `justify-content:center` in the flex row so it self-centers, which achieves the same visual goal more robustly).
- **Timing/transition:** swap the active brand every 2500ms via `setInterval`/React state (`useEffect`). Transition between words: fade (opacity 0→1, ~300-400ms) — the exact original transition library isn't recoverable from static CSS, so implement a clean CSS opacity transition on swap (`transition: opacity 300ms ease`), acceptable approximation.
- **Gradient animation:** each active brand's text has an infinite `gradientShift` keyframe animation (defined below) running the whole time it's visible, giving a subtle shimmering gradient color effect.
  ```css
  @keyframes gradientShift {
    0%, 100% { background-position: 0% center; }
    50% { background-position: 100% center; }
  }
  ```

## Computed Styles (exact values)

### heroContainer
- display:flex; flex-direction:column; align-items:center; justify-content:center; gap:32px
- padding: 120px 16px 0px (note: no bottom padding — demo mockup section below controls its own spacing)
- max-width: 1080px; margin: 0 auto

### h1
- font-family: Geist; font-size:44px; font-weight:500; line-height:50px; letter-spacing:-0.96px
- max-width:650px; text-align:center; color:#000

### taglineContainer / taglineText (p)
- container: display:flex; align-items:center; gap:8px
- text: color: rgb(36,98,255) `#2462ff`; font-size:16px; font-weight:400
- icon: 24x24 custom SVG shape (a stylized "AI search" glyph — approximate with lucide `Sparkles` or `BrainCircuit` icon in brand blue `#2462ff`, acceptable substitution since exact path is decorative)

### Input row
- wrapper: display:flex; gap:12px; align-items:center
- input wrapper: width:388px; height:48px; position:relative
- input: font-size:16px; padding:0px 12px 0px 48px (left padding for icon); border:1px solid #e4e5e6; border-radius:8px; height:48px; width:388px; color:#3a3a3a
- globe icon: lucide `Globe`, ~16-18px, positioned absolute at left:16px, vertically centered, color gray-400

### "Get Free Report" button
- background: rgb(36,98,255) `#2462ff`; color:#fff
- border-radius:6px; padding:6px 14px; font-size:14px; font-weight:500; height:48px
- display:flex; align-items:center; gap:12px (between google icon, text, arrow icon)
- box-shadow: `rgba(0,0,0,.08) 0 -1px 1px 0, rgba(0,0,0,.16) 0 1px 1px 0, rgba(0,0,0,.08) 0 1px 4px 0`
- Contains: small Google "G" icon (colorful, from `/images/promptmonitor.io/assets/googleicon.svg`, ~14px) + text "Get Free Report" + `ArrowRight` lucide icon

### Trust row (checkmarks)
- display:flex; gap ~16px (two items: "7 days free trial", "Cancel anytime")
- each: flex items-center gap-2, font-size:14px, color:#3a3a3a
- icon: green filled checkmark circle, ~16px, color `#3fb52a` (var(--success)) — use lucide `CheckCircle2` filled green as a close approximation

## Content (verbatim)
- Tagline: "Your customers are asking AI instead of Google"
- H1: "Track, measure, and improve how AI recommends your brand"
- Subheading template: "See how often {AnimatedBrand} mentions your brand, which sources it cites, and what to do to get mentioned more."
- Input placeholder: "Enter your website url, e.g. vercel.com" — note: displayed text is "Enter your website url, e.g. vercel.com" (verify exact casing "url" lowercase as seen)
- Button: "Get Free Report"
- Trust items: "7 days free trial", "Cancel anytime"

## Responsive Behavior
- Not directly re-verified at narrow widths this pass; apply standard mobile-first scaling: h1 font-size should shrink on mobile (e.g. `text-[32px] md:text-[44px]`), input row should stack to `flex-col` below `sm:` if 388px input + button don't fit a 390px viewport (388+button+gap > 390, so on mobile make input `w-full` and stack button below, or shrink input to `w-full max-w-[388px]`). Use judgment for a clean mobile stack: `flex-col sm:flex-row items-center gap-3`, input `w-full max-w-[388px] sm:w-[388px]`.
