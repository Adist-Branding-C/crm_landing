import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Users, Rocket, Shield } from "lucide-react";

const values = [
  {
    title: "Our Mission",
    description:
      "To empower every sales team with a CRM that's powerful enough to close deals yet simple enough to actually enjoy using every day.",
    icon: Target,
  },
  {
    title: "Our Team",
    description:
      "We're a distributed team of engineers, designers, and sales veterans who experienced the pain of bloated CRMs firsthand and decided to build a better way.",
    icon: Users,
  },
  {
    title: "Our Approach",
    description:
      "We believe in continuous improvement. Every feature we ship is driven by real feedback from real sales teams, not guesswork.",
    icon: Rocket,
  },
  {
    title: "Our Promise",
    description:
      "Your data is yours. We prioritize security, privacy, and reliability above all else. Enterprise-grade protection for teams of every size.",
    icon: Shield,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[77px]">
        <section className="py-20 px-4">
          <div className="max-w-[1080px] mx-auto">
            <div className="flex flex-col items-center gap-2 text-center mb-16">
              <h1 className="font-heading text-[36px] font-medium text-black">
                About Leadist
              </h1>
              <p className="text-[17px] text-[#666] max-w-[600px]">
                Every lead. Every deal. One CRM.
              </p>
            </div>
            <div className="max-w-[720px] mx-auto text-[17px] text-[#5a5a5a] leading-relaxed mb-16 space-y-4">
              <p>
                Leadist was built for one reason: sales teams deserve better
                software. Most CRMs are either too complicated or too limited.
                We set out to build the Goldilocks solution — the right features,
                none of the bloat.
              </p>
              <p>
                Founded in 2024, Leadist has grown from a two-person operation
                into a platform trusted by hundreds of businesses across the
                globe. We help sales teams capture leads, automate follow-ups,
                manage pipelines, and close deals — all from one place.
              </p>
              <p>
                Whether you are a solo entrepreneur or a growing agency, Leadist
                scales with you. No hidden fees, no surprise upgrades, just a
                CRM that works the way you do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-lg p-6 flex items-start gap-4 shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_4px_0_rgba(0,0,0,0.08)]"
                  >
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
