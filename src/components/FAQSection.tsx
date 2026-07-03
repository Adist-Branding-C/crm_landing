"use client";

import { useState } from "react";
import { CircleHelp, CirclePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

const faqs: FaqItem[] = [
  {
    question: "What does Promptmonitor actually do?",
    answer:
      "Promptmonitor shows you if your company gets mentioned in AI answers when people ask AI assistants like ChatGPT, Claude, Gemini and more for recommendations. It shows you gaps and opportunities to improve your AI visibility. Think of it sort of like Ahrefs, but for AI answers.",
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer:
      "GEO (Generative Engine Optimization) is the process of optimizing your content and strategy so AI platforms like ChatGPT, Claude, and Gemini mention your business when people ask for recommendations. Just like SEO helps you rank higher on Google, GEO helps you get recommended more often by AI/LLMs.",
  },
  {
    question: "What is a response in Promptmonitor?",
    answer:
      "Each time we generate an AI answer from any model (ChatGPT, Claude, Gemini, etc.), it counts as 1 response. All models use the same amount - 1 response per query, making it simple to track your usage.",
  },
  {
    question: "Why should I care about AI mentions?",
    answer:
      "More people are asking AI for recommendations instead of using Google. If your competitors get mentioned by AI and you don't, you're losing potential customers every day. We have seen the analytics, people coming from AI referrals are more likely to buy from you than from Google. Promptmonitor helps you track and improve your AI visibility.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "You'll get your first AI visibility report within 2 minutes of signing up. Just enter your website URL and we'll analyze how often AI assistants currently mention your business.",
  },
  {
    question: "Which AI platforms do you monitor?",
    answer:
      "Promptmonitor tracks brand mentions across OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini, AI Overview, AI Mode), DeepSeek, Grok and Perplexity - the most popular AI assistants. We're constantly adding new platforms as they gain popularity.",
  },
  {
    question: "Is this just for tech companies?",
    answer:
      "Not at all! Any business can benefit - restaurants, law firms, consultants, e-commerce stores, you name it. If potential customers might ask AI for recommendations in your industry, you need to track your presence.",
  },
  {
    question: "What if AI never mentions my business?",
    answer:
      "That's exactly why you need Promptmonitor! We'll show you what sources ai is using to answer questions. Then you can outreach to them to mention your company with contact information we extract from each source. We also provide you SEO metrics to help you decide whether to outreach or create better content to outrank them and get mentioned in AI.",
  },
  {
    question: "Can I track keywords like in SEO tools?",
    answer:
      'Absolutely! Just like you track specific keywords in SEO, you can track specific prompts or questions in AI optimization. For example, track "best marketing agencies in NYC" or "top accounting software for small business" to see if your business gets mentioned.',
  },
  {
    question: "Do I need to install anything or change my website?",
    answer:
      "Nope! No code, no plugins, no website changes needed. Just enter your URL and start tracking. You only need to add script to your website if you want to track web analytics and AI bot visits.",
  },
  {
    question: "What is a Visibility Score?",
    answer:
      "It's your report card for AI visibility - a simple 0-100% score that shows how well your brand performs when AI assistants answer questions in your industry. The higher your score, the more often you get mentioned and in better positions.",
  },
  {
    question: "How do you calculate my Visibility Score?",
    answer:
      "We use a simple formula that focuses on two things that matter most: Visibility Score = (Presence Rate × 80%) + (Cross-Model Consistency × 20%). Presence Rate is how often you get mentioned across all AI responses - this is the biggest factor because getting mentioned at all is what counts most. Cross-Model Consistency measures how many different AI models mention you. If ChatGPT, Claude, and Gemini all mention your brand, that's better than just one of them doing it.",
  },
  {
    question: "What's a good Visibility Score?",
    answer:
      "Here's how to interpret your Visibility Score: 80-100%: Excellent - Your brand dominates AI responses. 60-79%: Good - Strong presence with room for improvement. 40-59%: Fair - Your brand appears regularly but not prominently. 20-39%: Poor - Limited AI visibility. 0-19%: Critical - Your brand rarely appears in AI responses.",
  },
  {
    question: "How often do you update the data?",
    answer:
      "Promptmonitor refreshes your AI visibility data daily on all plans. You'll always have fresh insights into how AI assistants are talking about your industry.",
  },
  {
    question: "How do Promptmonitor get the AI response data?",
    answer:
      "We use a combination of scraping actual AI chats apps and APIs to fetch the data. This ensures we capture actual AI responses and give you accurate insights into how AI assistants are mentioning your brand.",
  },
  {
    question:
      "Do you support geographic targeting for different regions?",
    answer:
      "Yes! Promptmonitor supports geographic targeting across over 200 countries including the US, Europe, Asia, and more. You can monitor how AI assistants respond to queries from different locations. Check out our supported countries documentation for the full list of available regions.",
  },
  {
    question:
      "Can you track Prompt Volume like keyword volume in SEO tools?",
    answer:
      "No, unlike traditional SEO tools that show search volumes, AI chat platforms don't publicly share how often specific prompts or questions are asked. Promptmonitor queries the prompts you track and shows you insights on how AI assistants respond.",
  },
  {
    question: "Can you see what users are typing in AI chats?",
    answer:
      "No, we can't see what individual users type in their private AI conversations. Promptmonitor runs test prompts that you define to check how AI assistants respond.",
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
          AI SEO / GEO is new, but we got you covered. Here are some
          frequently asked questions
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
