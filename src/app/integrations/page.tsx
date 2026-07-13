import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageSquare, MessageCircle, Mail, Table, Phone, Calendar, Webhook, Monitor } from "lucide-react";

const integrations = [
  {
    name: "WhatsApp",
    description:
      "Send and receive messages, share media, and automate follow-ups directly through WhatsApp. Keep your conversations synced with your CRM in real time.",
    icon: MessageSquare,
  },
  {
    name: "Facebook",
    description:
      "Capture leads from Facebook Messenger and Ads automatically. Engage with prospects and manage conversations without leaving your dashboard.",
    icon: MessageCircle,
  },
  {
    name: "Gmail",
    description:
      "Sync your Gmail inbox with Leadist to track email conversations, log communications, and never miss a follow-up. Works with Google Workspace.",
    icon: Mail,
  },
  {
    name: "Google Sheets",
    description:
      "Import and export your data seamlessly between Leadist and Google Sheets. Perfect for bulk updates, reporting, and data analysis.",
    icon: Table,
  },
  {
    name: "Phone Dialer",
    description:
      "Make and receive calls directly from Leadist with our built-in dialer. Auto-log call details, record conversations, and track call outcomes.",
    icon: Phone,
  },
  {
    name: "Google Calendar",
    description:
      "Two-way sync with Google Calendar to schedule meetings, set reminders, and block time. View your calendar alongside your leads and deals.",
    icon: Calendar,
  },
  {
    name: "Webhooks",
    description:
      "Connect Leadist to any custom workflow or third-party service via webhooks. Trigger actions, send data, and automate processes in real time.",
    icon: Webhook,
  },
  {
    name: "Microsoft",
    description:
      "Integrate with Microsoft 365, Outlook, Teams, and Dynamics. Sync emails, calendar events, and contacts across the Microsoft ecosystem.",
    icon: Monitor,
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[77px]">
        <section className="py-20 px-4">
          <div className="max-w-[1080px] mx-auto">
            <div className="flex flex-col items-center gap-2 text-center mb-16">
              <h1 className="font-heading text-[36px] font-medium text-black">
                Integrations
              </h1>
              <p className="text-[17px] text-[#666] max-w-[600px]">
                Connect the tools you already use and streamline your sales workflow
                from lead capture to close.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrations.map((integration) => {
                const Icon = integration.icon;
                return (
                  <div
                    key={integration.name}
                    className="bg-white rounded-lg p-6 flex items-start gap-4 shadow-[0_-1px_1px_0_rgba(0,0,0,0.08),0_1px_1px_0_rgba(0,0,0,0.16),0_1px_4px_0_rgba(0,0,0,0.08)]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#2462ff]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-medium text-[#1a1a1a]">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">
                        {integration.description}
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
