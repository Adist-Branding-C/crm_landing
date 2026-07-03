const GOOGLE_COLORS = ["#4186F3", "#EB4235", "#FBBF04", "#34A521"];

export function GeoShiftSection() {
  return (
    <div className="flex-1 bg-[#343434] py-[120px] px-8 flex flex-col items-center gap-8 text-center rounded-2xl">
      <h2 className="font-heading text-[28px] md:text-[36px] font-medium leading-[46px] tracking-[-0.72px] text-white max-w-[500px]">
        Your customers aren&apos;t{" "}
        {"Googling".split("").map((ch, i) => (
          <span key={i} style={{ color: GOOGLE_COLORS[i % GOOGLE_COLORS.length] }}>
            {ch}
          </span>
        ))}{" "}
        anymore. They&apos;re asking AI for purchase decisions.
      </h2>
      <div className="bg-[#007AFF] text-white text-base px-4 py-3 inline-block rounded-tl-[18px] rounded-tr-[18px] rounded-br-[4px] rounded-bl-[18px]">
        best GEO tool for marketers
      </div>
      <h2 className="font-heading text-[28px] md:text-[36px] font-medium leading-[46px] tracking-[-0.72px] text-white max-w-[500px]">
        Generative Engine Optimization puts you at the center of every buying decision.
      </h2>
      <p className="text-lg text-white max-w-[440px]">
        Either you get mentioned in AI answers or lose the sale to your competitors.
      </p>
    </div>
  );
}
