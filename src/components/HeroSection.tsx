import { CheckCircle2, Mail, Search } from "lucide-react";

import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-20 px-4 pb-10 max-w-[1080px] mx-auto border-x border-[#e4e5e6]">
      <div className="flex items-center gap-2">
        <Search className="w-6 h-6 text-[#2462ff]" />
        <p className="text-[#2462ff] text-base font-normal">
          The #1 CRM for fast-growing sales teams
        </p>
      </div>

      <h1
        className={cn(
          "font-heading text-[32px] md:text-[44px] font-medium leading-[1.14] md:leading-[50px] tracking-[-0.96px] max-w-[650px] text-center text-black"
        )}
      >
        Capture, follow up, and close every lead in one CRM
      </h1>

      <p className="text-[#5a5a5a] text-[17px] leading-6 text-center font-normal max-w-[600px]">
        Leadist gives your sales team one dashboard for leads, follow-ups,
        deals, and campaigns, so nothing gets lost in spreadsheets or
        forgotten chats.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full max-w-[388px] sm:w-[388px] h-12">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full h-12 text-[16px] px-[12px] pl-12 border border-[#e4e5e6] rounded-lg text-[#3a3a3a] bg-white outline-none focus:border-[#2462ff]"
          />
        </div>
        <button
          type="button"
          className="flex items-center gap-3 h-12 rounded-md bg-[#2462ff] text-white text-sm font-medium px-[14px] py-[6px] shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_4px_0_rgba(0,0,0,0.08)]"
        >
          Start Free Trial
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 text-sm text-[#3a3a3a]">
          <CheckCircle2 className="w-4 h-4 text-[#3fb52a]" />
          7 days free trial
        </span>
        <span className="flex items-center gap-2 text-sm text-[#3a3a3a]">
          <CheckCircle2 className="w-4 h-4 text-[#3fb52a]" />
          Cancel anytime
        </span>
      </div>
    </div>
  );
}
