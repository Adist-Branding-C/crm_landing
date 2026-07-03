import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  { src: "/images/promptmonitor.io/llms/openai-logo.svg", alt: "OpenAI" },
  { src: "/images/promptmonitor.io/llms/claude-logo.svg", alt: "Anthropic" },
  { src: "/images/promptmonitor.io/llms/gemini-logo.svg", alt: "Gemini" },
  { src: "/images/promptmonitor.io/llms/deepseek-logo.svg", alt: "DeepSeek" },
  { src: "/images/promptmonitor.io/llms/grok-logo.svg", alt: "Grok" },
  { src: "/images/promptmonitor.io/llms/perplexity-logo.svg", alt: "Perplexity" },
  { src: "/images/promptmonitor.io/llms/ai_mode-logo.svg", alt: "AI Mode" },
  { src: "/images/promptmonitor.io/llms/ai_overview-logo.svg", alt: "AI Overview" },
] as const;

export function LlmLogosSection() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-8 px-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-xl font-medium text-black">
            We track all AI models that matter
          </h2>
          <p className="text-[15px] text-[#5a5a5a]">
            Promptmonitor tracks ChatGPT, Claude, Gemini, Deepseek, Grok,
            Perplexity, Google AI Overview and AI Mode for AI visibility
          </p>
        </div>
        <div
          className={cn(
            "grid grid-cols-2 border-l border-t border-[#e4e5e6] sm:grid-cols-4"
          )}
        >
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-[78px] items-center justify-center border-b border-r border-[#e4e5e6] p-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={30}
                className="h-auto w-auto max-h-[30px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
