# promptmonitor.io — Design Tokens

## Fonts
- Headings (h1-h3, big numbers): **Geist** — `font-family: Geist, "Geist Fallback"`. Used at weight 500 (hero h1: 44px/50px, letter-spacing -0.96px).
- Body / UI / nav: **Inter** — `font-family: Inter, "Inter Fallback"`. Base body: 14px/22px, letter-spacing -0.14px, weight 400. Nav links: 15px, weight 500.
- Load both via `next/font/google` (`Geist`, `Inter`) with CSS variables `--font-geist` / `--font-inter`.

## Colors (extracted CSS custom properties — these are the real, non-shadcn-default brand tokens)
```css
--background-secondary: #f5f5f5;
--background-tertiary: #f0f0f0;
--background-superlight: #fafafa;   /* page background (html bg = rgb(250,250,250)) */
--background-z: #e4e5e6;

--primary-main: #1a1a1a;            /* black CTA buttons e.g. "View live demo" */
--primary-main-hover: #333;
--primary-contrast: #fff;

--text-heading: #1a1a1a;
--text-primary: #3a3a3a;            /* base body text color */
--text-secondary: #5a5a5a;
--text-tertiary: #7a7a7a;

--border-primary: #e4e5e6;          /* nav border-bottom, dividers */
--border-secondary: #f5f5f5;
--border-darker: #d9dadb;

--positive: #007c65;
--negative: #d1002f;
--success: #3fb52a;
--success-text: #237f12;
--success-text-default: #359923;
--error: #ea4335;
--danger-primary: #f21f1f;
--danger-primary-hover: #d1002f;

--brand-primary: #fe4a23;           /* orange accent (logo dot / accents) */
--brand-blue: #2462ff;              /* primary CTA blue, e.g. "Get Free Report" button = rgb(36,98,255) */
--brand-blue-hover: #1a47c4;
--brand-blue-light: #1a72f5;

--card-shadow-sm: 0px 1px 1px 0px #0000000f, 0px 1px 3px 0px #0000000f;
--card-shadow: 0px 1px 1px 0px #0000001a, 0px 1px 4px 0px #0000000f;
--new-card-shadow: #0000000d 0px 4px 16px;
--radius: .625rem;
```

Body background (`html`/`body`): `rgb(250, 250, 250)` i.e. `#fafafa`.

## Buttons (exact computed values)
- **Primary blue CTA** ("Get Free Report"): bg `rgb(36,98,255)` (#2462ff), color white, border-radius 6px, font 14px/500, padding `6px 14px`, box-shadow `rgba(0,0,0,.08) 0 -1px 1px 0, rgba(0,0,0,.16) 0 1px 1px 0, rgba(0,0,0,.08) 0 1px 4px 0`.
- **Black CTA** ("View live demo"): bg `rgb(26,26,26)` (#1a1a1a), color white, border-radius 6px, font 14px/500, padding `0 40px` (fixed height via flex/line-height).
- **Log In** (outline/secondary): white bg, border, black text.

## Nav
- `position: fixed; top:0; left:0; right:0; z-index:50`
- Height 77px (inner container height 76px + border)
- `background: rgb(250,250,250)`
- `border-bottom: 1px solid var(--border-primary)` (#e4e5e6)
- Inner container: `max-width:1080px; margin:0 auto; padding:16px 24px; display:flex; justify-content:space-between; align-items:center` with `border-left/right: 1px solid var(--border-primary)` (the framed-container look repeats site-wide — see Layout Architecture)
- Nav gains a `.scrolled` class after scroll but it produces **no visible style change on the nav itself** — the same `scrolled` class name is reused by the hero screenshot/iframe wrapper (see BEHAVIORS.md) to shrink the hero mockup, not the nav bar.
- Logo: 165x20px SVG/wordmark, link has `transition: opacity .2s` and `:hover { opacity: .8 }`.
- Nav link: `color: var(--text-primary); font-size:15px; font-weight:500; transition: color .2s`.

## Framed container motif
Many sections use a "bordered container" look: `border-left/right: 1px solid var(--border-primary)` on a `max-width` wrapper, plus full-bleed `DividerSection` bands (80px tall) between major sections — likely a subtle diagonal-stripe or dot pattern divider. Re-check exact divider background during per-section extraction.

## Favicons / Meta
- `https://promptmonitor.io/favicon.ico` (shortcut icon, apple-touch-icon, sizes any/512)
- `https://promptmonitor.io/assets/favicon.svg` (icon, vector)
- OG image: `https://bvatwanklwlvzlcxrcxn.supabase.co/storage/v1/object/public/assets//promptmonitor-og-img.png`
- Title: "Promptmonitor - Best AI Visibility Optimization / GEO Tool"
- Description: "Promptmonitor helps you track and optimize your company's visibility across ChatGPT, Perplexity, and other AI/LLMs. Get mentioned in AI with Promptmonitor."

## Tech stack notes
- Next.js with CSS Modules (`ComponentName-module__hash__className`) **and** Tailwind utility classes mixed together (hybrid approach).
- Uses shadcn/ui underneath (full standard shadcn CSS variable set present: `--card`, `--popover`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--chart-1..5`, `--sidebar*` — all present as oklch/lab values). This matches our own template's stack closely.
- Live product demo in hero is a real embedded `<iframe>` pointing to a public shared dashboard view: `https://promptmonitor.io/share/c6975337-08aa-4ea6-8eb3-beb9e73fd074/prompts/1cc56cbe-f62a-476c-b387-36334ff176fe` — wrapped in a fake macOS-style browser chrome (traffic-light dots + fake URL bar showing "promptmonitor.io/demo").
