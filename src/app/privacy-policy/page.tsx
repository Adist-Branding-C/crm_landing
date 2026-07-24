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
      "Agent work tracking data: if you are added to a CRM organization as a team member, we collect check-in and check-out (attendance) timestamps, call activity metrics (such as call duration and outcome), task and follow-up completion status, and related performance analytics generated as you use the app, so your organization can monitor and report on team activity.",
      "Mobile application data: when you use the Leadist CRM mobile app, we additionally collect a device push-notification token (via Firebase Cloud Messaging), used only to deliver follow-up, task, and campaign alerts, and diagnostic or crash data (device model, OS version, app version, crash logs, via Firebase Crashlytics), used only to identify and fix bugs. The mobile app does not access your device's call log, contacts, camera, microphone, or location.",
      "Call and activity records: call outcomes, remarks, and follow-up dates that you or your team log against a lead within the app are entered manually by you — they are not sourced from your device's call log.",
      "Network access: our website and mobile app require an active internet connection to make secure API calls to our servers — this is how your leads, deals, attendance, and account data are synced and kept up to date. We do not use this connection to access data outside of what is described in this Privacy Policy.",
      "Advertising: we do not use advertising identifiers (such as the Android Advertising ID) and the app does not integrate any third-party advertising SDKs.",
    ],
    footer: [
      "This Privacy Policy is designed to meet the requirements of the data protection laws applicable to our users, including India's Digital Personal Data Protection Act, 2023, the UAE's Federal Personal Data Protection Law, Saudi Arabia's Personal Data Protection Law, and, for our EU and UK users, the GDPR and UK GDPR.",
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
      "International data transfers: some of our service providers — including Google Firebase / Google Cloud, which we use for app messaging, crash diagnostics, and hosting — may process or store data outside your country of residence, including in India, the United States, or other countries where those providers operate data centers. Where applicable law restricts such transfers (including India's DPDP Act, the UAE PDPL, Saudi Arabia's PDPL, or the GDPR/UK GDPR), we rely on approved safeguards — such as an adequacy finding or standard contractual clauses — before transferring your data internationally.",
      "Data breach notification: in the event of a personal data breach that affects you, we will notify the relevant data protection authority (for example, India's Data Protection Board, Saudi Arabia's SDAIA within 72 hours, the UAE's data protection authority, or, for EU/UK residents, the applicable supervisory authority) and affected users, within the timelines required under applicable law.",
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
      "Leadist CRM is used by organizations and individuals primarily in India and the GCC (including the UAE and Saudi Arabia), and occasionally in the EU, UK, and elsewhere. Regardless of where you are located, we offer you the following rights over your personal data; if the law that applies to you provides additional or stronger rights, those apply too.",
      "Leadist CRM is used in two ways: by an organization that subscribes to our service (\"Account Holder\"), and by staff the Account Holder invites to use the app on the organization's behalf (\"Authorized Users\").",
    ],
    bullets: [
      "Right to access — request confirmation of whether we process your personal data, and obtain a copy of it.",
      "Right to correction (rectification) — request that we correct inaccurate or incomplete personal data, by contacting support@leadistcrm.com.",
      "Right to erasure (deletion) — request deletion of your personal data, as described below.",
      "Right to restrict or object to processing — ask us to limit certain processing, or object to processing based on legitimate interests or for direct marketing.",
      "Right to data portability — request your personal data in a structured, commonly used, machine-readable format.",
      "Right to withdraw consent — where processing is based on your consent, withdraw it at any time without affecting processing already carried out.",
      "Right to lodge a complaint — with your local data protection authority (for example, India's Data Protection Board, the UAE's data protection authority, Saudi Arabia's SDAIA, or, for EU/UK residents, your local supervisory authority or the ICO), in addition to contacting us directly.",
      "Account and data deletion: any user — Account Holder or Authorized User — can request deletion of their personal account and personal data at any time: in the app (Settings → Delete Account & Data), on the web at leadistcrm.com/account-deletion, or by emailing support@leadistcrm.com.",
      "Because Authorized User accounts are provisioned by their organization, deletion requests from an Authorized User are reviewed and completed in coordination with their Account Holder's administrator.",
      "Deletion timeline: once we have verified a request, we complete deletion of the associated personal data within 30 days and will confirm with you once it is done.",
      "Response timeline: we will acknowledge and respond to access, correction, and other rights requests within 30 days (the response window specified under both the DPDP Rules and the UAE PDPL), or sooner where local law requires a shorter period.",
      "Right to nominate (India): under the DPDP Act, users in India may nominate another individual to exercise their rights under this policy on their behalf in the event of their death or incapacity, by writing to our Grievance Officer (see Section 12).",
      "Right to compensation and complaint (Saudi Arabia): residents of Saudi Arabia may seek compensation through the competent courts for damage resulting from a violation of the PDPL, and may file a complaint with SDAIA within 90 days of becoming aware of a violation.",
      "Deleting an individual's personal account removes their personal data and login access. It does not delete business records owned by the Account Holder's organization (for example, lead, deal, or call records created while using the CRM) — those remain part of the organization's business data unless the Account Holder separately requests their deletion.",
      "We may retain limited data where required for security, fraud prevention, dispute resolution, or legal/regulatory compliance, as described in Section 5.",
    ],
    footer: [
      "If you disconnect your Facebook Page from Leadist CRM, we will stop receiving new lead notifications for that Page, and you may request deletion of previously stored data at any time. If Meta notifies us that a user has removed our app's permissions, or requests deletion of their data under Facebook's Data Deletion Callback process, we will process that request and delete the relevant data within a reasonable time.",
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
      "Leadist CRM is intended for business use and is not directed at children. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have inadvertently collected personal data from a child without appropriate parental or guardian consent, we will take steps to delete that data promptly.",
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
                Last updated: July 24, 2026
              </p>
            </div>
            <div className="text-[17px] text-[#5a5a5a] leading-relaxed space-y-4 mb-10">
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">
                Overview
              </h2>
              <p>
                Leadist CRM (&quot;Leadist&quot;) is a product and brand of
                [INSERT FULL REGISTERED LEGAL NAME, e.g. Adist Branding
                Consultancy Pvt. Ltd.] (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;). Your privacy is important to us. This
                Privacy Policy explains how we collect, use, protect, and
                share information when you visit our website at
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
                Leadist CRM, a product of [INSERT FULL REGISTERED LEGAL NAME]
                <br />
                Registered Address: [INSERT REGISTERED BUSINESS ADDRESS]
                <br />
                Email: info@leadist.com
                <br />
                Phone: +91 7025529000
              </p>
            </div>
            <div className="text-[17px] text-[#5a5a5a] leading-relaxed space-y-4 mt-10">
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-2">
                12. Grievance Officer
              </h2>
              <p>
                In accordance with India&apos;s Digital Personal Data
                Protection Act, 2023 and applicable rules, the Grievance
                Officer for data-related complaints and grievances is:
              </p>
              <p>
                [INSERT GRIEVANCE OFFICER NAME]
                <br />
                [INSERT TITLE, e.g. Founder / Director]
                <br />
                Email: [INSERT GRIEVANCE OFFICER EMAIL]
                <br />
                Phone: [INSERT GRIEVANCE OFFICER PHONE]
              </p>
              <p>
                We will acknowledge grievances and respond within the
                timelines prescribed under the DPDP Rules, and in any case
                within 30 days of receipt.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
