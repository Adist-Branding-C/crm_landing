import { ArrowRight, CheckCircle2, Globe, Presentation } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="relative flex flex-col items-center gap-8 py-10 px-4">
      <span
        className="absolute z-[-1] text-primary bg-yellow-300 px-3 py-2 rounded-lg shadow-sm hidden lg:block rotate-[-6deg]"
        style={{ top: 110, left: 32 }}
      >
        Losing leads to slow follow-up?
      </span>
      <span
        className="absolute z-[-1] text-primary bg-yellow-300 px-3 py-2 rounded-lg shadow-sm hidden lg:block rotate-[-5deg]"
        style={{ top: 302, right: 25 }}
      >
        Show your boss this pipeline report
      </span>

      <h2 className="font-heading text-[28px] md:text-[36px] font-medium leading-[46px] tracking-[-0.72px] text-center">
        How many leads is your team losing right now?
      </h2>
      <p className="text-lg text-[#5a5a5a] text-center max-w-[500px]">
        Enter your work email and get a free pipeline audit in minutes.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full max-w-[388px] sm:w-[388px] h-12">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full h-12 pl-12 pr-3 text-base border border-[#e4e5e6] rounded-lg text-[#3a3a3a]"
          />
        </div>
        <button
          type="button"
          className="bg-[#2462ff] text-white rounded-md h-12 px-4 flex items-center gap-3 text-sm font-medium shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_4px_0_rgba(0,0,0,0.08)]"
        >
          Get a Free Pipeline Audit
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <a className="flex items-center gap-2 text-sm font-medium text-[#3a3a3a]" href="#">
        <Presentation className="w-4 h-4" /> Try live demo
      </a>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 text-sm text-[#3a3a3a]">
          <CheckCircle2 className="w-4 h-4 text-[#3fb52a]" /> 7 days free
          trial
        </span>
        <span className="flex items-center gap-2 text-sm text-[#3a3a3a]">
          <CheckCircle2 className="w-4 h-4 text-[#3fb52a]" /> Cancel anytime
        </span>
      </div>
    </section>
  );
}
