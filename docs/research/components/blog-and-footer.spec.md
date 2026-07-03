# BlogSection + Footer Specification

## 1. BlogSection
- **Target file:** `src/components/BlogSection.tsx`
- **Interaction model:** static (cards are links).

### Structure
```tsx
<section className="py-20 px-4">
  <div className="flex flex-col items-center gap-2 text-center mb-10">
    <h2 className="font-heading text-[36px] font-medium text-black">Latest from our blog</h2>
    <p className="text-[17px] text-[#666]">Learn how to improve your AI visibility and dominate AI search results</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[1080px] mx-auto">
    {posts.map((post) => (
      <a key={post.href} href={post.href} className="block border border-[#e4e5e6] rounded-md p-6 hover:border-[#2462ff] transition-colors">
        <article className="flex flex-col gap-3">
          <h3 className="text-[22px] font-medium leading-[30.8px] text-[#1a1a1a]">{post.title}</h3>
          <p className="text-base text-[#5a5a5a] leading-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-[#1a1a1a]">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
            <ArrowRight className="w-4 h-4 ml-auto" />
          </div>
        </article>
      </a>
    ))}
  </div>
</section>
```
Note: the "meta" row (`Calendar`/`Clock`) and the trailing arrow are on the same row per the reference screenshot (date · read-time on the left, arrow icon on the right). Icons are `lucide-react` `Calendar`, `Clock`, `ArrowRight` (verified as the actual icons used on the live site — classes `lucide-calendar`, `lucide-clock`, `lucide-arrow-right` were found in the DOM).

### Exact values
- Card: `border:1px solid #e4e5e6; border-radius:6px` (grid has `gap:8px`, 2 cards side by side, 527px each at desktop, in a 2-col grid — only 2 posts exist, so `grid-cols-2` is correct, no need for a 3rd empty column).
- Title (h3): font-size 22px, font-weight 500, line-height 30.8px, color `#1a1a1a`.
- Description (p): font-size 16px, color `#5a5a5a`, line-height 24px.
- Meta row: font-size 14px, color `#1a1a1a`.
- Section heading: "Latest from our blog" — 36px/500/black. Subtitle: "Learn how to improve your AI visibility and dominate AI search results" — 17px/#666.

### Content (verbatim, both real posts)
```ts
const posts: BlogPostSummary[] = [
  {
    title: "10 Proven Ways to Get Your Brand Mentioned in AI Answers",
    excerpt: "Getting your brand mentioned in AI comes down to being present in high-ranking content, Reddit discussions, YouTube videos, and authoritative publications.",
    date: "Feb 10, 2026",
    readTime: "18 min read",
    href: "/blog",
  },
  {
    title: "Complete Guide to Generative Engine Optimization (GEO) in 2026",
    excerpt: "Key GEO Strategies: 1. Master SEO First. 2. Build External Brand Mentions. 3. Optimize Content Structure. 4. Implement Schema Markup. 5. Multi-Channel Content Strategy",
    date: "Feb 10, 2026",
    readTime: "15 min read",
    href: "/blog",
  },
];
```
Use the `BlogPostSummary` type already defined in `src/types/content.ts`. No cover images on these cards (verified — text-only cards).

## 2. Footer
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static.

### Structure
```tsx
<footer className="border-t border-[#e4e5e6] pt-16 pb-8 px-4">
  <div className="grid grid-cols-1 md:grid-cols-[383px_192px_192px_192px] gap-6 max-w-[1080px] mx-auto">
    <div className="flex flex-col gap-4">
      <Image src="/images/promptmonitor.io/assets/promptmonitor-logo.svg" width={165} height={20} alt="Promptmonitor" />
      <p className="text-sm text-[#5a5a5a] max-w-[280px]">
        Track and improve your brand&apos;s visibility across ChatGPT, Perplexity, Gemini, and other AI search engines.
      </p>
      <a href="mailto:support@promptmonitor.io" className="flex items-center gap-2 text-sm text-[#5a5a5a]">
        <Mail className="w-4 h-4" /> support@promptmonitor.io
      </a>
    </div>
    {columns.map((col) => (
      <div key={col.title} className="flex flex-col gap-3">
        <h3 className="text-base font-bold text-[#3a3a3a]">{col.title}</h3>
        {col.links.map((l) => (
          <a key={l.label} href={l.href} className="text-sm text-[#5a5a5a] hover:text-[#2462ff] transition-colors">{l.label}</a>
        ))}
      </div>
    ))}
  </div>
  <div className="max-w-[1080px] mx-auto mt-12 pt-6 border-t border-[#e4e5e6] text-sm text-[#5a5a5a]">
    © 2026 Promptmonitor, Stackdirectory LLC. All rights reserved.
  </div>
</footer>
```

### Exact values
- Grid columns: `383px 192px 192px 192px` desktop (company info wider, 3 equal link columns), `gap:24px`, stacks to single column on mobile.
- Column heading: font-size 16px, font-weight 700, color `#3a3a3a`.
- Links: font-size 14px, color `#5a5a5a`, `text-decoration:none`; add a reasonable `hover:text-[#2462ff]` (not pixel-verified but consistent with the site's link hover pattern elsewhere).
- Company description: font-size 14px, color `#5a5a5a`, max-width 280px.
- Bottom copyright bar: separated by a top border, small text, `#5a5a5a`.
- Logo: reuse `/images/promptmonitor.io/assets/promptmonitor-logo.svg`, 165x20 (same as Navbar).
- Email link: `Mail` lucide icon + "support@promptmonitor.io", `mailto:` link.

### Content (verbatim)
```ts
const columns: FooterLinkColumn[] = [
  { title: "Product", links: [
    { label: "AI Search Analytics", href: "#" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Feature Requests", href: "#" },
  ]},
  { title: "Resources", links: [
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "#" },
    { label: "LLMs.txt", href: "#" },
    { label: "Sitemap", href: "#" },
  ]},
  { title: "Legal", links: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ]},
];
```
Company tagline: "Track and improve your brand's visibility across ChatGPT, Perplexity, Gemini, and other AI search engines."
Email: support@promptmonitor.io
Copyright: "© 2026 Promptmonitor, Stackdirectory LLC. All rights reserved."

Use the `FooterLinkColumn` type already defined in `src/types/content.ts`.
