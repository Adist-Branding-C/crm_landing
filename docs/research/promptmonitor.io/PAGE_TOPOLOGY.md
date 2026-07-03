# promptmonitor.io — Page Topology (single page, desktop 1440px)

Total scroll height at 1440px: **10,948px**. All top-level sections are direct children of one container div (`page-module__container`), stacked vertically, standard document flow (no scroll-snap detected). 80px-tall `DividerSection` bands separate every major section (full-bleed, likely a subtle pattern/gradient — confirm exact bg in extraction).

| # | Section (working name) | Top (px) | Height (px) | Notes |
|---|---|---|---|---|
| 0 | **Navbar** | 0 | 77 | `position: fixed`, overlays everything, z-index 50 |
| 1 | **Hero** | 0 | 486 | Badge, H1, animated subheading (word-cycler), URL input + "Get Free Report" CTA, trust checkmarks |
| 2 | **Hero Demo Mockup (desktop)** | 486 | 750 | `hidden md:block` — fake browser chrome + live iframe embed of dashboard. Shrinks on scroll (`.scrolled` class changes max-width/height/transform scale). |
| 3 | **Hero Demo Mockup (mobile)** | 0 | 0 (at 1440px) | `block md:hidden` counterpart, hidden at desktop width |
| 4 | Divider | 1279 | 80 | |
| 5 | **Features Section** | 1403 | 2573 | Large section, multiple feature cards/rows (visibility tracking, source discovery, AI crawler tracking, competitor comparison, sentiment reading, keyword discovery, geo-targeting). Likely 3+ sub-components — split across multiple builders. |
| 6 | Divider | 4021 | 80 | |
| 7 | **LLM Logos Section** | 4145 | 275 | "Over 1450 Companies Signed Up, Trusted by" + logo row |
| 8 | Divider | 4464 | 80 | |
| 9 | **Two-column analytics section** | 4588 | 1464 | `flex-col md:flex-row` — "Track your AI Visibility", "Website analytics, without the cookie [banners]" type content; responsive stack on mobile |
| 10 | Divider | 6096 | 80 | |
| 11 | **Testimonial Section** | 6220 | 480 | Single large quote, Steve Lee / SEO Aesthetic |
| 12 | Divider | 6744 | 80 | |
| 13 | **Pricing Section** | 6868 | 1401 | 4 plans: Starter $29/49, Growth $39/66 (badge "79% pick this option"), Pro $129/219, Agency (custom, "Email us") |
| 14 | Divider | 8313 | 80 | |
| 15 | **CTA Section** | 8437 | 368 | "What if your competitor ranks but not you?" + LLM checklist + URL input + CTA repeat |
| 16 | Divider | 8849 | 80 | |
| 17 | **Blog Section** | 8973 | 452 | "Latest from our blog" + post cards (real blog posts, e.g. "10 Proven Ways to Get Your Brand Mentioned in AI Answers") |
| 18 | Divider | 9469 | 80 | |
| 19 | **FAQ Section** | 9593 | 804 | Accordion-style Q&A (9 questions found in text sweep) |
| 20 | Divider | 10441 | 80 | |
| 21 | **Footer** | 10565 | 383 | Tagline, contact email, Product/Resources/Legal link columns, copyright |

## Layout architecture
- Global page background `#fafafa`.
- Content is column-stacked, no CSS grid at the page level; individual sections use flex/grid internally.
- Recurring "framed container" motif: `max-width: 1080px` wrapper with `border-left/right: 1px solid #e4e5e6`, giving the whole page a boxed/ruled-paper look (visible in nav, and likely continues through content sections — confirm per-section).
- Nav is the only fixed/sticky element; no sticky sidebar detected on this page.
- z-index: nav = 50; no modals observed on initial load.

## Interaction model per section (to confirm/expand during per-section extraction)
- Hero: **scroll-driven** shrink of the demo mockup (confirmed: `.scrolled` class toggles CSS on `iframeScaler`/`heroImage`, transitions max-width/height and a `transform: scale(0.694)` on the iframe).
- Hero subheading: **time-driven** word cycler (ChatGPT → Claude → Gemini → Grok), gradient text per brand, absolute-positioned stacked spans inside a fixed-width/height overflow-hidden container (`AnimatedSubheading` component) — implies fade/slide cross-transition, ~3s interval (cycles through 4 brand names).
- FAQ: likely **click-driven** accordion (to verify by clicking during extraction).
- Pricing: static cards, "Growth" plan has a highlighted/badge state.
- Everything else observed so far: static content, standard hover states expected on buttons/links/cards (to verify per-section).

## Known asset
- Hero product mockup is a **real embedded iframe** (public shared demo URL), not a static image — plan to reuse the same iframe embed for fidelity rather than rebuilding the dashboard UI from scratch.
