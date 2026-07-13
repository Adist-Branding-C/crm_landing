import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const details = [
  {
    title: "Office Address",
    description:
      "1st Floor, Vattappara Tower, Sales Tax Office Rd, Eranhipaalam, Jawahar Nagar, Kozhikode, Kerala 673006",
    icon: MapPin,
  },
  {
    title: "Phone",
    description: "+91 7025529000",
    icon: Phone,
    href: "tel:+917025529000",
  },
  {
    title: "Email",
    description: "support@leadistcrm.com",
    icon: Mail,
    href: "mailto:support@leadistcrm.com",
  },
  {
    title: "Hours",
    description: "Mon – Sat, 9:30 AM – 6:30 PM IST",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[77px]">
        <section className="py-20 px-4">
          <div className="max-w-[1080px] mx-auto">
            <div className="flex flex-col items-center gap-2 text-center mb-16">
              <h1 className="font-heading text-[36px] font-medium text-black">
                Contact Us
              </h1>
              <p className="text-[17px] text-[#666] max-w-[600px]">
                Have a question or want to talk to our team? We&apos;d love
                to hear from you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto">
              {details.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#2462ff]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-medium text-[#1a1a1a]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </>
                );
                const cardClass =
                  "bg-white rounded-lg p-6 flex items-start gap-4 shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_4px_0_rgba(0,0,0,0.08)]";
                return item.href ? (
                  <a key={item.title} href={item.href} className={cardClass}>
                    {content}
                  </a>
                ) : (
                  <div key={item.title} className={cardClass}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
