import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect the following categories of information:",
    ],
    bullets: [
      "Account information: your name, email address, phone number, company name, and login credentials or third-party account details (such as when you sign in using Facebook Login).",
      "Payment information: billing details needed to process subscription payments, where applicable.",
      "Facebook Page and Business information: when you connect a Facebook Page to Leadist CRM, we receive the Page name, Page ID, and a Page Access Token that authorizes us to act on your behalf for the permissions you approve.",
      "Lead data from Facebook and Instagram Lead Ads: when a person submits a Lead Ad form connected to your Page, we receive the data they submitted — for example their name, email address, phone number, and answers to custom questions on the form — together with identifiers such as the lead ID, form ID, ad ID, and campaign ID.",
      "Usage data: information about how you interact with our application, such as pages visited, features used, and log data (IP address, browser type, access times).",
      "Customer, user, and prospect data that you or your team members enter directly into Leadist CRM to manage your sales pipeline.",
    ],
    footer: [
      "Some provisions apply only to individuals in certain jurisdictions, such as those protected under the GDPR or India's Digital Personal Data Protection Act.",
    ],
  },
  {
    title: "2. How We Use Facebook Platform Data",
    body: [
      "Where you connect a Facebook Page and grant the relevant permissions (such as pages_show_list, pages_read_engagement, pages_manage_metadata, leads_retrieval, and ads_management), Leadist CRM uses this access solely to:",
    ],
    bullets: [
      "Receive real-time lead notifications from Meta's Webhooks for Lead Ads whenever someone submits a connected lead form.",
      "Retrieve the full details of a submitted lead using the leadgen_id provided by Meta, so the lead can be stored and actioned in your CRM.",
      "Display basic Page and ad/campaign information (Page name, form name, ad name) inside your CRM dashboard for context.",
    ],
    footer: [
      "We do not use data obtained through Facebook Platform for any purpose other than operating the lead-capture and CRM features you have enabled, and we do not sell this data. Access to Facebook and Instagram lead data is limited to what is required to provide the CRM service to the business that owns the connected Page.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: ["We use the information we collect to:"],
    bullets: [
      "Provide, operate, and maintain the Leadist CRM application, including syncing leads from connected ad accounts.",
      "Communicate with you about your account, customer support requests, and service updates.",
      "Improve and personalize our services, and develop new features.",
      "Send promotional materials, where you have not opted out.",
      "Detect, prevent, and address technical issues, fraud, or misuse of our services.",
    ],
  },
  {
    title: "4. Cookies",
    body: [
      "We use cookies on our website to collect information about your visit and to improve your experience. Cookies are small data files stored by your browser. You can instruct your browser to refuse or delete cookies, though this may affect your ability to use certain features of our website.",
    ],
  },
  {
    title: "5. Data Storage and Security",
    body: [
      "We are committed to protecting your personal information and the lead data entrusted to us, and we take reasonable technical and organizational measures to secure it, including encrypted data transmission (HTTPS/TLS) and access controls limiting who can view stored data. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
      "We retain lead data and account information for as long as your account is active or as needed to provide our services, and will delete or anonymize it upon a valid deletion request or account closure, except where we are required to retain it to comply with legal obligations.",
    ],
  },
  {
    title: "6. Information Sharing",
    body: ["We may share information with:"],
    bullets: [
      "Companies within our group, for the purposes described in this Privacy Policy.",
      "Service providers and subcontractors who support our operations, such as hosting, storage, analytics, identity verification, and technical support — bound by confidentiality obligations.",
      "A successor entity in connection with a merger, acquisition, sale of assets, or similar transaction, in which case this Privacy Policy would continue to apply to your information.",
      "Authorities, where we are legally required to disclose information.",
    ],
    footer: [
      "We do not sell your personal information or your leads' personal information to third parties.",
    ],
  },
  {
    title: "7. Your Rights and Data Deletion",
    body: [
      "You may request access to, correction of, or deletion of your personal information, or the lead data associated with your account, by contacting us at info@leadist.com. If you disconnect your Facebook Page from Leadist CRM, we will stop receiving new lead notifications for that Page, and you may request deletion of previously stored data at any time.",
      "If Meta notifies us that a user has removed our app's permissions, or requests deletion of their data under Facebook's Data Deletion Callback process, we will process that request and delete the relevant data within a reasonable time.",
    ],
  },
  {
    title: "8. Third-Party Services",
    body: [
      "Our website and application may contain links to, or integrations with, third-party services (including Meta/Facebook) that are not owned or controlled by Leadist CRM. We are not responsible for the content, privacy policies, or practices of any third-party services. We encourage you to review the privacy policies of any third-party services you connect to our platform, including Meta's Data Policy.",
    ],
  },
  {
    title: "9. Children's Privacy",
    body: [
      "Leadist CRM is intended for business use and is not directed at children. We do not knowingly collect personal information from individuals under the age of 18.",
    ],
  },
  {
    title: "10. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website with a revised \"Last updated\" date. Your continued use of our website and services after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[77px]">
        <section className="py-20 px-4">
          <div className="max-w-[720px] mx-auto">
            <div className="flex flex-col gap-2 mb-12">
              <h1 className="font-heading text-[36px] font-medium text-black">
                Privacy Policy
              </h1>
              <p className="text-sm text-[#5a5a5a]">
                Last updated: July 13, 2026
              </p>
            </div>

            <div className="text-[17px] text-[#5a5a5a] leading-relaxed space-y-4 mb-10">
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">
                Overview
              </h2>
              <p>
                At Leadist CRM (&quot;Leadist&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;), your privacy is important
                to us. This Privacy Policy explains how we collect, use,
                protect, and share information when you visit our website at
                leadistcrm.com, use the Leadist CRM application, or connect
                third-party accounts — including Facebook and Instagram — to
                our services.
              </p>
              <p>
                By using our website, application, and services, you agree to
                the collection and use of information in accordance with this
                Privacy Policy.
              </p>
            </div>

            {sections.map((section) => (
              <div
                key={section.title}
                className="text-[17px] text-[#5a5a5a] leading-relaxed space-y-4 mb-10"
              >
                <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">
                  {section.title}
                </h2>
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {section.footer?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            <div className="text-[17px] text-[#5a5a5a] leading-relaxed space-y-4">
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">
                11. Contact Us
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy,
                or wish to exercise your data rights, please contact us at:
              </p>
              <p>
                Leadist CRM
                <br />
                Email: info@leadist.com
                <br />
                Phone: +91 7025529000
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
