import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPostSummary } from "@/types/content";

export function BlogSection() {
  const posts: BlogPostSummary[] = [
    {
      title: "10 Proven Ways to Get Your Brand Mentioned in AI Answers",
      excerpt:
        "Getting your brand mentioned in AI comes down to being present in high-ranking content, Reddit discussions, YouTube videos, and authoritative publications.",
      date: "Feb 10, 2026",
      readTime: "18 min read",
      href: "/blog",
    },
    {
      title: "Complete Guide to Generative Engine Optimization (GEO) in 2026",
      excerpt:
        "Key GEO Strategies: 1. Master SEO First. 2. Build External Brand Mentions. 3. Optimize Content Structure. 4. Implement Schema Markup. 5. Multi-Channel Content Strategy",
      date: "Feb 10, 2026",
      readTime: "15 min read",
      href: "/blog",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="flex flex-col items-center gap-2 text-center mb-10">
        <h2 className="font-heading text-[36px] font-medium text-black">
          Latest from our blog
        </h2>
        <p className="text-[17px] text-[#666]">
          Learn how to improve your AI visibility and dominate AI search results
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[1080px] mx-auto">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={post.href}
            className="block border border-[#e4e5e6] rounded-md p-6 hover:border-[#2462ff] transition-colors"
          >
            <article className="flex flex-col gap-3">
              <h3 className="text-[22px] font-medium leading-[30.8px] text-[#1a1a1a]">
                {post.title}
              </h3>
              <p className="text-base text-[#5a5a5a] leading-6">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-[#1a1a1a]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
