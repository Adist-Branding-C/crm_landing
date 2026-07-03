# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** static positioning (fixed) + standard hover transitions on links/logo. A `scrolled` state class is added by the live site after ~50px scroll but produces NO visible CSS change on the navbar itself (verified: background/box-shadow/border identical before and after) — do not implement any scroll-shrink/shadow behavior on the navbar.

## DOM Structure
```
<nav>                                   // fixed, full-width, z-50
  <div>                                 // navContainer: max-width 1080px, centered, bordered left/right
    <Link href="/">                     // logo
      <Image src="/images/promptmonitor.io/assets/promptmonitor-logo.svg" width={165} height={20} alt="Promptmonitor" />
    </Link>
    <div>                               // navLinks
      <Link href="/#features">Features</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/blog">Blog</Link>
    </div>
    <div>                               // actions
      <button>Log In</button>
      <Link href="#">                  // "View live demo" — real target was a shared-demo URL, out of scope; link to "#" or "/demo"
        <LinkIcon className="w-4 h-4" /> {/* lucide-react "Link" icon, 16x16 */}
        View live demo
      </Link>
    </div>
  </div>
</nav>
```

## Computed Styles (exact values)

### nav
- position: fixed; top: 0; left: 0; right: 0; z-index: 50
- background: #fafafa
- border-bottom: 1px solid #e4e5e6
- height: 77px (77px total incl. border, inner container is 76px)

### navContainer (inner div)
- max-width: 1080px; margin: 0 auto
- padding: 16px 24px
- display: flex; justify-content: space-between; align-items: center
- border-left: 1px solid #e4e5e6
- border-right: 1px solid #e4e5e6
- height: 76px

### logo link
- display: flex; align-items: center
- transition: opacity 0.2s
- `:hover { opacity: 0.8 }`
- logo image: width 165px, height 20px

### nav links (Features / Pricing / Blog)
- display: flex; align-items: center; gap: 32px (on the wrapping container)
- each link: color: #3a3a3a (var(--text-primary)); font-size: 15px; font-weight: 500; text-decoration: none
- transition: color 0.2s; hover color → darker (#1a1a1a) — reasonable inferred hover value

### Log In button
- background: #fff (lab(100 0 0) ~ white)
- color: #3a3a3a
- border: 1px solid #e4e5e6
- border-radius: 6px
- padding: 8px 16px
- font-size: 14px; font-weight: 500

### "View live demo" button/link
- background: #1a1a1a; color: #fff
- border-radius: 6px
- padding: 0 40px (fixed-height look via flex align-items:center, effective height ~36-40px — use `h-9 px-10` or similar to match visually)
- font-size: 14px; font-weight: 500
- icon: small link/chain icon (16x16) to the left of text, use lucide-react `Link` icon
- gap between icon and text: ~8px

## Content (verbatim)
- Nav links: "Features" → `/#features`, "Pricing" → `/pricing`, "Blog" → `/blog`
- "Log In" button (no real auth — style only, can be inert or link to `/login`)
- "View live demo" → external shared demo (use `href="#"` or a placeholder; out of scope to replicate the actual shared dashboard route)

## Responsive Behavior
- **Desktop (1440px):** full layout as above.
- **Tablet/Mobile:** not directly observed: infer that nav links collapse to a hamburger/mobile menu below `md` breakpoint (standard pattern) OR simply hide the middle nav links and show only logo + demo CTA — since this wasn't directly verified, implement the common pattern: hide `.navLinks` below `md:` and add a simple mobile menu button (hamburger, using lucide `Menu` icon) that need not be fully functional (can toggle a simple dropdown) — keep this minimal since it wasn't in the extraction sweep. Prioritize matching desktop pixel-for-pixel; mobile nav is a reasonable best-effort.
