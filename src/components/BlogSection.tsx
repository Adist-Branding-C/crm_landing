import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPostSummary } from "@/types/content";

export function BlogSection() {
  const posts: BlogPostSummary[] = [
    {
      title: "10 Ways to Stop Losing Leads to Slow Follow-ups",
      excerpt:
        "Losing leads usually comes down to slow response times, missed reminders, and no visibility into who's overdue for a follow-up.",
      date: "Feb 10, 2026",
      readTime: "18 min read",
      href: "/blog",
    },
    {
      title: "The Complete Guide to Building a Sales Pipeline That Converts in 2026",
      excerpt:
        "Key pipeline strategies: 1. Define clear stages. 2. Automate follow-ups. 3. Track source performance. 4. Report on what matters. 5. Give every agent visibility.",
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
          Learn how to build a sales process that converts more leads into
          deals.
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
