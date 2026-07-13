import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. Eligibility and Account Registration",
    body: [
      "You must be at least 18 years old and able to form a binding contract to use the Service. When you register, you agree to provide accurate and complete information and to keep it up to date. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
    ],
  },
  {
    title: "2. Description of Service",
    body: [
      "Leadist CRM is a customer relationship management platform that helps businesses capture, organize, and follow up on sales leads, including leads submitted through connected Facebook and Instagram Lead Ads. Features, integrations, and pricing plans may change over time, and we will make reasonable efforts to notify you of material changes.",
    ],
  },
  {
    title: "3. Connecting Facebook, Instagram, and Other Third-Party Accounts",
    body: [
      "If you choose to connect a Facebook Page, ad account, or other third-party account to Leadist CRM, you authorize us to access and process the data made available through that connection (such as lead form submissions, Page details, and ad/campaign identifiers) solely to provide the Service to you. You represent that you have the necessary rights and permissions (for example, an \"Advertise\" role on the connected Page) to grant this access.",
      "Your use of Facebook, Instagram, and Meta's Platform through Leadist CRM is also subject to Meta's own terms and policies. We are not responsible for the availability, accuracy, or practices of third-party platforms, and a disruption, policy change, or access revocation on their end may affect your ability to use related features of the Service.",
    ],
  },
  {
    title: "4. Acceptable Use",
    body: ["You agree not to use the Service to:"],
    bullets: [
      "Violate any applicable law, regulation, or third-party right, including data protection and anti-spam laws.",
      "Upload or process personal data you are not authorized to collect or share (for example, leads obtained without proper consent).",
      "Reverse engineer, resell, sublicense, or misuse the Service outside the scope of your subscription.",
      "Introduce malware, attempt unauthorized access, or interfere with the Service's operation or security.",
    ],
    footer: [
      "We may suspend or terminate accounts that violate these Terms or that we reasonably believe pose a risk to the Service, other users, or third parties, including Meta's Platform requirements.",
    ],
  },
  {
    title: "5. Subscription, Fees, and Payment",
    body: [
      "Certain features of the Service may require a paid subscription. Fees, billing cycles, and payment methods will be presented to you at the time of purchase. Unless otherwise stated, fees are non-refundable, and we may change our pricing with reasonable advance notice for future billing periods. Failure to pay applicable fees may result in suspension or termination of access to paid features.",
    ],
  },
  {
    title: "6. Data Ownership and License",
    body: [
      "As between you and Leadist, you retain ownership of the customer, lead, and prospect data you upload to or generate within your account (\"Your Data\"). You grant us a limited license to host, store, process, and display Your Data solely to provide and improve the Service. We do not claim ownership of Your Data and will not use it for any purpose outside operating the Service, except as described in our Privacy Policy.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: [
      "The Service, including its software, design, trademarks, and content (excluding Your Data), is owned by Leadist CRM and protected by applicable intellectual property laws. Except for the limited right to use the Service as permitted by these Terms, no rights are granted to you in our intellectual property.",
    ],
  },
  {
    title: "8. Third-Party Services and Links",
    body: [
      "The Service may link to or integrate with third-party websites or services, including Meta/Facebook, that are not owned or controlled by Leadist CRM. We are not responsible for the content, privacy practices, or terms of any third-party service, and your use of them is at your own risk and subject to their respective terms.",
    ],
  },
  {
    title: "9. Disclaimers",
    body: [
      "The Service is provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or that lead data will be delivered instantly or without loss, including where such delays or losses result from third-party platforms such as Meta.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Leadist CRM and its officers, employees, and partners will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or business opportunities, arising out of or related to your use of the Service, even if advised of the possibility of such damages. Our total liability for any claim arising from the Service will not exceed the amount you paid us for the Service in the twelve (12) months preceding the claim.",
    ],
  },
  {
    title: "11. Indemnification",
    body: [
      "You agree to indemnify and hold harmless Leadist CRM from any claims, damages, losses, or expenses (including reasonable legal fees) arising out of your use of the Service, your violation of these Terms, or your violation of any third-party right, including rights related to data you upload or leads you collect.",
    ],
  },
  {
    title: "12. Termination",
    body: [
      "You may stop using the Service and close your account at any time. We may suspend or terminate your access to the Service if you breach these Terms, if required by law, or if we discontinue the Service, with notice where reasonably possible. Upon termination, your right to use the Service will cease, though certain provisions of these Terms (such as limitation of liability and indemnification) will survive.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website with a revised \"Last updated\" date. Your continued use of the Service after changes are posted constitutes your acceptance of the updated Terms.",
    ],
  },
  {
    title: "14. Governing Law",
    body: [
      "These Terms are governed by the laws of India, with courts in Kerala having exclusive jurisdiction.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[77px]">
        <section className="py-20 px-4">
          <div className="max-w-[720px] mx-auto">
            <div className="flex flex-col gap-2 mb-12">
              <h1 className="font-heading text-[36px] font-medium text-black">
                Terms and Conditions
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
                These Terms and Conditions (&quot;Terms&quot;) govern your
                access to and use of the Leadist CRM website, application,
                and services (together, the &quot;Service&quot;), operated by
                Leadist CRM (&quot;Leadist&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;). By creating an account,
                connecting a Facebook or Instagram Page, or otherwise using
                the Service, you agree to be bound by these Terms. If you do
                not agree, please do not use the Service.
              </p>
              <p>A few important points up front:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Any data you create, upload, or receive (including leads
                  captured through connected ad accounts) inside your Leadist
                  account is used solely within your account environment,
                  for your benefit, to operate the Service.
                </li>
                <li>
                  We do not share the information in your account with third
                  parties, except with your explicit consent, to provide the
                  Service through trusted subprocessors, or where legally
                  required.
                </li>
                <li>
                  Our contact details are at the end of these Terms — reach
                  out any time with questions.
                </li>
              </ul>
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
                15. Contact Us
              </h2>
              <p>
                If you have questions or concerns about these Terms, please
                contact us at:
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
