import Image from "next/image";

/**
 * TODO: swap in a real client quote, name, title, and company before
 * publishing — the attribution below is an intentional placeholder, not a
 * real customer.
 */
export function TestimonialSection() {
  return (
    <section className="py-20 flex justify-center">
      <div className="max-w-[800px] text-center flex flex-col items-center gap-6 px-4">
        <blockquote className="text-[32px] font-normal leading-[38.4px] text-[#1a1a1a]">
          Since switching to Leadist, we stopped losing leads in
          spreadsheets. Our follow-up rate went up in the first month, and
          our whole team finally works off one pipeline, a game changer for
          our agency.
        </blockquote>
        <div className="flex flex-col items-center gap-1.5">
          <Image
            src="/images/leadistcrm/assets/huzair.png"
            alt="[Client Name]"
            width={100}
            height={100}
            className="rounded-full object-cover w-25 h-25"
          />
          <div className="text-lg font-semibold text-[#3a3a3a]">
          Dr Huzair
          </div>
          <div className="text-base text-[#5a5a5a]">
          Dr Huzair - Founder & MD - Dr Expert Edulinks
          </div>
        </div>
      </div>
    </section>
  );
}
