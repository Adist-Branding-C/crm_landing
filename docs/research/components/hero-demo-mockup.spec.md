# HeroDemoMockup Specification

## Overview
- **Target file:** `src/components/HeroDemoMockup.tsx`
- **Interaction model:** **scroll-driven**. A fake macOS browser-chrome window containing a real embedded iframe shrinks slightly when the user scrolls past a small threshold near the top of the page.
- Renders only on desktop (`hidden md:block` on live site — mobile has a separate, simpler variant that we are treating as out of scope for pixel-parity this pass; render this component only at `md:` and above, or make it responsive to look reasonable — use your judgment, but desktop fidelity is the priority).

## DOM Structure
```
<div>                                    // heroImageSection: border-left/right 1px solid #e4e5e6, flex-col, justify-center, items-center, width:100%, max-width:1080px, margin:0 auto, padding-bottom:48px, position:relative
  <div>                                  // heroImageContainer: flex justify-center items-center, width:100%, padding: 0 12px (12px 12px bottom when NOT containing the scaler... simplify: just use padding: 0 12px 12px)
    <div className={cn("iframeScaler", scrolled && "scrolled")}>   {/* see scroll behavior below */}
      <div className="browserChrome">                {/* absolute positioned bar, z-10, top:0 left:0 right:0 */}
        <div className="trafficLights">               {/* flex gap-2 */}
          <span className="trafficLight red" />       {/* 12x12 circle, bg #ff5f57, border 0.5px rgba(0,0,0,.1) */}
          <span className="trafficLight yellow" />     {/* bg #ffbd2e */}
          <span className="trafficLight green" />      {/* bg #28ca42 */}
        </div>
        <a className="urlBar">
          <LockIcon className="w-3 h-3" />             {/* lucide "Lock", color #666 */}
          <span className="urlText">promptmonitor.io/demo</span>
        </a>
      </div>
      <iframe
        src="https://promptmonitor.io/share/c6975337-08aa-4ea6-8eb3-beb9e73fd074/prompts/1cc56cbe-f62a-476c-b387-36334ff176fe"
        className="heroIframe"
      />
      <a className="expandButton" href="..." target="_blank">
        <ExpandIcon className="w-4 h-4" /> Expand
      </a>
    </div>
    {/* decorative: a small red hand-drawn-style arrow + "Interactive demo, Try it!" label positioned near top-left of the mockup, color #3a3a3a, font-size 14px — nice-to-have flourish, low priority, can be a simple text label with a curved-arrow icon (lucide `CornerLeftUp` or similar) if time allows */}
  </div>
</div>
```

## Computed Styles (exact values)

### heroImageSection
- border-left: 1px solid #e4e5e6; border-right: 1px solid #e4e5e6
- display:flex; flex-direction:column; justify-content:center; align-items:center
- width:100%; max-width:1080px; margin:0 auto; padding-bottom:48px
- position: relative

### heroImageContainer
- display:flex; justify-content:center; align-items:center; width:100%; margin:0 auto
- padding: 0px 12px 12px (0 12px when a scaler child is present, per a `:has()` rule — simplify to `padding: 0 12px 12px` unconditionally, close enough)
- position: relative

### iframeScaler (the shrinking window) — THIS IS THE SCROLL-DRIVEN ELEMENT
- border-radius: 8px
- width: 100%
- position: relative; overflow: hidden
- box-shadow: `0 0 0 1px rgba(0,0,0,.04), 0 1px 1px -0.5px rgba(0,0,0,.04), 0 3px 3px -1.5px rgba(0,0,0,.04), 0 6px 6px -3px rgba(0,0,0,.04), 0 12px 12px -6px rgba(0,0,0,.02), 0 24px 24px -12px rgba(0,0,0,.02), 0 24px 24px 2px rgba(0,0,0,.05)`
- transition: `max-width 0.8s cubic-bezier(0.34, 1.5, 0.64, 1), margin-bottom 0.8s cubic-bezier(0.34, 1.5, 0.64, 1)` — a springy/bouncy ease-out
- **Default (not scrolled) state:** `max-width: 1080px; height: 629px; margin-bottom: 0`
- **Scrolled state** (after the page scrolls down past a small threshold — use `window.scrollY > 50` with a scroll event listener, or simpler: trigger as soon as any scroll happens away from top): `max-width: 1000px; height: 581px; margin-bottom: 36px`
- The child `<iframe>` ALSO changes its `transform: scale()` in lockstep (see below).

### browserChrome
- position: absolute; top:0; left:0; right:0; z-index:10
- background:#fff; border-bottom:1px solid rgba(0,0,0,.1); border-radius: 8px 8px 0 0
- display:flex; align-items:center; gap:12px; height:40px; padding:0 12px

### trafficLights
- display:flex; align-items:center; gap:8px
- each dot: 12x12px, border-radius:50%, border 0.5px solid rgba(0,0,0,.1)
- colors: red `#ff5f57`, yellow `#ffbd2e`, green `#28ca42`

### urlBar
- flex:1; display:flex; align-items:center; gap:6px; height:24px; padding:0 10px
- border:1px solid var(--border-secondary) `#f5f5f5`; border-radius:6px
- color:#666; font-size:12px; cursor:pointer; transition:color .2s
- hover: url text color → brand blue `#2462ff`
- lock icon: 12px (`w-3 h-3`), color #666
- text: "promptmonitor.io/demo"

### heroIframe (the actual embedded iframe)
- Natural/base size: width:1440px; height:838px (i.e. it renders the real app at full desktop resolution then gets scaled down to fit the window chrome)
- position:absolute; top:40px (below the 40px chrome bar); left:0
- transform-origin: 0 0 (top left)
- transition: `transform 0.8s cubic-bezier(0.34, 1.5, 0.64, 1)` (same spring easing as the container)
- **Default scale:** `scale(0.75)`
- **Scrolled scale:** `scale(0.694)`
- border: none
- src: `https://promptmonitor.io/share/c6975337-08aa-4ea6-8eb3-beb9e73fd074/prompts/1cc56cbe-f62a-476c-b387-36334ff176fe` (this is a real public shared-demo URL from the live product — embed it directly for authentic content, this is NOT something to fake/rebuild)

### expandButton ("Expand" pill, bottom-right of the window)
- position:absolute; bottom:12px; right:12px; z-index:10
- background: rgba(0,0,0,.96); color: rgba(255,255,255,.9); border:1px solid rgba(255,255,255,.1)
- border-radius:100px (pill); height:36px; padding:8px 16px
- font-size:14px; font-weight:500; display:flex; align-items:center; justify-content:center; gap:6px
- box-shadow: 0 2px 8px rgba(0,0,0,.3)
- transition: 0.2s (hover state — infer a slight opacity/background lighten on hover)
- icon: small expand/maximize icon (lucide `Maximize2` or `Expand`, 16px), text "Expand"
- href: link to the same shared demo URL, opening in a new tab (`target="_blank" rel="noopener noreferrer"`)

## States & Behaviors

### Scroll-driven shrink (the main behavior of this component)
- **Trigger:** page scroll position — the live site adds a `scrolled` class once the user scrolls down from the very top (small threshold, ~20-50px is a safe approximation; exact px not perfectly recoverable but the effect is a one-time toggle, not a gradual/proportional scroll-tied animation).
- **Implementation:** `"use client"` component with a `useEffect` scroll listener (`window.addEventListener('scroll', ...)`, passive, with cleanup) setting a boolean `scrolled` state when `window.scrollY > 20`, reverting to `false` if scrolled back to the top. Apply conditional classes/inline styles for the two states described above.
- **Transition:** both the container (`max-width`, `margin-bottom`) and the iframe (`transform: scale()`) animate together over 0.8s with the same bouncy cubic-bezier easing — this creates a satisfying subtle "settle" effect as you start scrolling past the hero.

### Hover
- urlBar hover: text color → brand blue, 0.2s transition.
- expandButton hover: infer subtle lightening (e.g. `hover:bg-black/80` or slight scale) — not pixel-verified, reasonable default.

## Responsive Behavior
- This entire component is `hidden` below the `md:` breakpoint on the live site (a separate simplified mobile version exists there, which is out of scope for this pass). Wrap the component's root in `className="hidden md:block"` OR only render it via the parent page composition at `md:`+ — implement the `hidden md:block` wrapper class directly in this component for simplicity.

## Assets
- No static images — this is a live iframe embed, nothing to download.
