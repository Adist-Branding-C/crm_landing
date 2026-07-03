import Link from "next/link";
import { Mail } from "lucide-react";
import type { FooterLinkColumn } from "@/types/content";

export function Footer() {
  const columns: FooterLinkColumn[] = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[#e4e5e6] pt-16 pb-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[383px_192px_192px_192px] gap-6 max-w-[1080px] mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-heading text-xl font-semibold tracking-tight text-black">
            Leadist
          </span>
          <p className="text-sm text-[#5a5a5a] max-w-[280px]">
            The CRM built to capture, follow up, and close every lead.
          </p>
          <a
            href="mailto:support@leadist.com"
            className="flex items-center gap-2 text-sm text-[#5a5a5a]"
          >
            <Mail className="w-4 h-4" /> support@leadist.com
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
        © 2026 Leadist. All rights reserved.
      </div>
    </footer>
  );
}
