import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import type { FooterLinkColumn } from "@/types/content";

export function Footer() {
  const columns: FooterLinkColumn[] = [
    {
      title: "Product",
      links: [
        { label: "AI Search Analytics", href: "#" },
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "#" },
        { label: "Roadmap", href: "#" },
        { label: "Feature Requests", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Docs", href: "#" },
        { label: "LLMs.txt", href: "#" },
        { label: "Sitemap", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[#e4e5e6] pt-16 pb-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[383px_192px_192px_192px] gap-6 max-w-[1080px] mx-auto">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/promptmonitor.io/assets/promptmonitor-logo.svg"
            width={165}
            height={20}
            alt="Promptmonitor"
          />
          <p className="text-sm text-[#5a5a5a] max-w-[280px]">
            Track and improve your brand&apos;s visibility across ChatGPT,
            Perplexity, Gemini, and other AI search engines.
          </p>
          <a
            href="mailto:support@promptmonitor.io"
            className="flex items-center gap-2 text-sm text-[#5a5a5a]"
          >
            <Mail className="w-4 h-4" /> support@promptmonitor.io
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-[#3a3a3a]">{col.title}</h3>
            {col.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-[#5a5a5a] hover:text-[#2462ff] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-[1080px] mx-auto mt-12 pt-6 border-t border-[#e4e5e6] text-sm text-[#5a5a5a]">
        © 2026 Promptmonitor, Stackdirectory LLC. All rights reserved.
      </div>
    </footer>
  );
}
