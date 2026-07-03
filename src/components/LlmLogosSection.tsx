import Image from "next/image";
import { Phone, Webhook } from "lucide-react";
import { cn } from "@/lib/utils";

type IntegrationLogo =
  | { alt: string; src: string; icon?: never }
  | { alt: string; icon: typeof Phone; src?: never };

const logos: IntegrationLogo[] = [
  { src: "/images/brand-logos/whatsapp.svg", alt: "WhatsApp" },
  { src: "/images/brand-logos/facebook.svg", alt: "Facebook" },
  { src: "/images/brand-logos/gmail.svg", alt: "Gmail" },
  { src: "/images/brand-logos/googlesheets.svg", alt: "Google Sheets" },
  { icon: Phone, alt: "Phone Dialer" },
  { src: "/images/brand-logos/googlecalendar.svg", alt: "Google Calendar" },
  { icon: Webhook, alt: "Webhooks" },
  { src: "/images/brand-logos/microsoft.svg", alt: "Microsoft" },
];

export function LlmLogosSection() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-8 px-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-xl font-medium text-black">
            Works the way your sales team already works
          </h2>
          <p className="text-[15px] text-[#5a5a5a]">
            Leadist connects with the tools your sales team already relies on
            every day.
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
              className="flex h-[78px] items-center justify-center gap-2.5 border-b border-r border-[#e4e5e6] p-6"
            >
              {logo.icon ? (
                <logo.icon className="h-6 w-6 shrink-0 text-[#3a3a3a]" />
              ) : (
                <Image
                  src={logo.src}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 shrink-0 object-contain"
                />
              )}
              <span className="text-sm font-medium text-[#3a3a3a]">
                {logo.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
