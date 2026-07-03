import { ShiftSection } from "@/components/ShiftSection";
import { GeoShiftSection } from "@/components/GeoShiftSection";

export function ShiftSectionRow() {
  return (
    <div className="max-w-[1080px] w-[95%] mx-auto flex flex-col md:flex-row gap-5">
      <ShiftSection />
      <GeoShiftSection />
    </div>
  );
}
