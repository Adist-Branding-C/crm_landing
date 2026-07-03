"use client";

import { useState } from "react";
import { CircleHelp, CirclePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

const faqs: FaqItem[] = [
  {
    question: "What is Leadist?",
    answer:
      "Leadist is an all-in-one CRM for capturing leads, assigning follow-ups, running campaigns, and tracking deals through a visual pipeline, with reporting built in.",
  },
  {
    question: "How is Leadist different from a spreadsheet?",
    answer:
      "Automatic follow-up reminders, full activity logs, role-based access, and 30+ ready-made reports, with no manual upkeep.",
  },
  {
    question: "Where can leads come from?",
    answer:
      "Manual entry, bulk import, or API. Sources like Facebook, referral, or walk-in are fully customizable in settings.",
  },
  {
    question: "Can I customize my sales pipeline?",
    answer:
      "Yes. Add, reorder, and color-code pipeline stages to match how your team actually sells.",
  },
  {
    question: "Does Leadist support multiple staff, roles, and branches?",
    answer:
      "Yes. Staff, Roles & Permissions, Departments, Branches, and Work Modes are all built in.",
  },
  {
    question: "Can I send emails and WhatsApp messages from Leadist?",
    answer:
      "Yes, via your own mail configuration, saved email templates, and WhatsApp templates.",
  },
  {
    question: "What reports does Leadist provide?",
    answer:
      "Lead status, source-wise, call activity, staff attendance, deal-by-stage, and conversion reports, all exportable to Excel.",
  },
  {
    question: "Is my data secure, and can I recover deleted records?",
    answer:
      "Role-based permissions control who sees what, and deleted leads/deals can be recovered from the audit trail.",
  },
];

function FaqAccordionItem({ faq }: { faq: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-r border-b border-black/[0.08]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-6 py-4 text-left"
      >
        <span className="flex items-center gap-2 text-base font-medium text-[#1a72f5]">
          <CircleHelp className="h-4 w-4 shrink-0 text-[#278eff]" />
          {faq.question}
        </span>
        <CirclePlus
          className={cn(
            "h-6 w-6 shrink-0 text-[#fe4a23] transition-transform duration-300",
            open && "rotate-45"
          )}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-4 text-sm leading-6 text-[#3a3a3a]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="bg-[#e6f4ff] px-4 pb-20 pt-20">
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <h2 className="font-heading text-[36px] font-medium text-black">
          Have any questions?
        </h2>
        <p className="mx-auto max-w-[500px] text-[17px] text-[#666]">
          Everything you need to know about running your sales pipeline in
          Leadist.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 border-l border-t border-black/[0.08] md:grid-cols-2">
        {faqs.map((faq) => (
          <FaqAccordionItem key={faq.question} faq={faq} />
        ))}
      </div>
    </section>
  );
}
