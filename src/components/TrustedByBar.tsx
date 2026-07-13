import Image from "next/image";
import { Asterisk } from "lucide-react";

export function TrustedByBar() {
  return (
    <div>
      <p className="mt-0 text-center text-base text-[#5a5a5a]">
        Trusted by sales and field teams at
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
        <div className="flex items-center gap-1 text-lg font-bold text-black">
          SEOAesthetic <Asterisk className="h-4 w-4 text-[#fe4a23]" />
        </div>
        <Image
          src="/images/leadistcrm/assets/media-ai-logo.avif"
          alt="Media AI"
          width={100}
          height={28}
          className="h-7 w-auto object-contain"
        />
      </div>
    </div>
  );
}
