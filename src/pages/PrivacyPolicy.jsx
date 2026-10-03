import React from 'react';
import { Sliders, ShieldCheck } from 'lucide-react';
import { useCookieConsent } from '../context/CookieConsentContext';

export default function PrivacyPolicy() {
  const { openPreferences } = useCookieConsent();

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto font-sans text-slate-900">
      {/* Top Header & Cookie Preferences Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Compliance & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            CliniLink Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs sm:text-sm text-slate-500 font-mono">
            <span>Effective Date: 28-Sep-2026</span>
            <span>•</span>
            <span>Last Updated: 28-Sep-2026</span>
          </div>
        </div>

        <button
          type="button"
          onClick={openPreferences}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold shadow-sm transition-all shrink-0"
        >
          <Sliders className="w-4 h-4 text-sky-400" />
          Manage Cookie Preferences
        </button>
      </div>

      {/* Main Website Privacy Policy - Paresh's Policy Word for Word */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
        <p className="lead text-base sm:text-lg text-slate-800 font-medium">
          CliniLink Corporation (&ldquo;CliniLink,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting personal information collected through our website,{' '}
          <a href="https://www.clinilinkhealth.com" className="text-sky-600 hover:underline">
            www.clinilinkhealth.com
          </a>{' '}
          (the &ldquo;Website&rdquo;).
        </p>

        <p>
          This Privacy Policy describes the types of information we may collect when you visit or interact with our Website, how we use and disclose that information, and the choices and rights that may be available to you.
        </p>

        <p>
          This Privacy Policy applies to information collected through the Website and related business communications. It does not govern personal information CliniLink processes on behalf of customers in connection with clinical trials or other contracted services, which may be subject to separate agreements, privacy notices, data-processing terms, or applicable laws.
        </p>

        {/* Section 1 */}
        <section className="space-y-4 pt-2">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">1. Information We Collect</h2>
          <p>We may collect information in the following ways.</p>

          <h3 className="text-lg font-bold text-slate-900 mt-4">Information You Provide to Us</h3>
          <p>
            When you contact us through the Website, request information, schedule a meeting, communicate with us by email, or otherwise interact with CliniLink, you may provide information such as:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Business email address</li>
            <li>Telephone number</li>
            <li>Company or organization</li>
            <li>Job title</li>
            <li>Information included in your message or inquiry</li>
            <li>Meeting or scheduling information</li>
            <li>Other information you choose to provide</li>
          </ul>
          <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-800 text-sm">
            Please do not submit protected health information, clinical-trial participant information, medical records, or other sensitive health information through the Website or its general contact forms.
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6">Information Collected Automatically</h3>
          <p>
            When you visit the Website, our service providers and we may automatically collect certain information about your visit, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Internet Protocol (IP) address</li>
            <li>Browser type and device information</li>
            <li>Operating system</li>
            <li>Referring website or page</li>
            <li>Pages viewed</li>
            <li>Date and time of visits</li>
            <li>Website interactions</li>
            <li>Cookies and similar identifiers</li>
            <li>General geographic information derived from IP address</li>
          </ul>
          <p>We may use cookies, pixels, scripts, and similar technologies to collect this information.</p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">2. Website Visitor Identification and Business Information</h2>
          <p>
            CliniLink may use third-party website visitor identification and business-intelligence services, including RB2B, to better understand which businesses and professional visitors are interested in CliniLink.
          </p>
          <p>
            These technologies may use cookies and similar technologies to associate activity on our Website with information that our service providers or other data providers possess about a visitor, including by association with your email or online profiles and to use that information for business-development and outreach activities.
          </p>
          <p>
            RB2B may collect information from you such as IP address, user agent, current page URL, referring URL, identifiers, and visit timestamps. For more information on how RB2B uses this information, please see:{' '}
            <a
              href="https://www.rb2b.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline break-all font-medium"
            >
              https://www.rb2b.com/privacy-policy
            </a>
            .
          </p>
          <p>Where a visitor can be identified, RB2B may provide professional or business-related information such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Job title</li>
            <li>Employer or company affiliation</li>
            <li>Company domain</li>
            <li>LinkedIn or other professional profile information</li>
            <li>Business email address, where available</li>
            <li>Business location information</li>
          </ul>
          <p>
            RB2B describes its identification and enrichment process as using professional and verified data sources to associate website activity with professional information.
          </p>
          <p>CliniLink may use this information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand interest in our products and services</li>
            <li>Identify organizations that may benefit from CliniLink</li>
            <li>Improve our Website and marketing activities</li>
            <li>Conduct business-to-business outreach</li>
            <li>Follow up with prospective business contacts</li>
            <li>Measure the effectiveness of marketing and outreach campaigns</li>
          </ul>
          <p>
            CliniLink does not use these technologies to identify clinical-trial participants or collect protected health information through the Website.
          </p>
          <p>
            You may opt out of receiving this advertising by visiting{' '}
            <a
              href="https://app.retention.com/optout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline break-all font-medium"
            >
              https://app.retention.com/optout
            </a>
            .
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">3. Cookies and Similar Technologies</h2>
          <p>
            We may use cookies and similar technologies to operate the Website, understand Website usage, remember preferences, measure engagement, and support business-development activities.
          </p>
          <p>
            These technologies may include cookies placed by CliniLink or third-party service providers.
          </p>
          <p>
            RB2B, for example, uses cookies to recognize returning visitors, maintain session continuity, retain attribution information, and support visitor identification.
          </p>
          <p>
            Depending on your location and applicable law, certain cookies or tracking technologies may be activated only after you provide consent through our cookie-consent mechanism.
          </p>
          <p>
            You may also adjust your browser settings to block or delete cookies. Doing so may affect certain Website functionality.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={openPreferences}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              <Sliders className="w-4 h-4" /> Open Cookie Preferences
            </button>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">4. How We Use Personal Information</h2>
          <p>We may use information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to inquiries and requests</li>
            <li>Schedule meetings and communications</li>
            <li>Provide information about CliniLink</li>
            <li>Develop and maintain business relationships</li>
            <li>Identify prospective customers, collaborators, or partners</li>
            <li>Conduct business-to-business marketing and outreach</li>
            <li>Improve the Website and user experience</li>
            <li>Analyze Website usage and engagement</li>
            <li>Maintain Website security</li>
            <li>Detect or prevent fraud, misuse, or unlawful activity</li>
            <li>Maintain business records</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Establish, exercise, or defend legal rights</li>
          </ul>
          <p>We may also use information for other purposes disclosed to you at the time the information is collected.</p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">5. Business and Marketing Communications</h2>
          <p>
            If you provide us with contact information or if we obtain professional business-contact information through lawful business-data sources, we may contact you regarding CliniLink products, services, research, events, industry discussions, or potential business opportunities.
          </p>
          <p>
            You may opt out of marketing emails at any time by using the unsubscribe mechanism included in the communication or by contacting us.
          </p>
          <p>
            Opting out of marketing communications will not prevent us from sending non-promotional messages where necessary, such as responses to an inquiry or communications concerning an existing business relationship.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">6. How We Disclose Information</h2>
          <p>
            We may disclose personal information with third parties that provide services to CliniLink, including providers of:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Website hosting</li>
            <li>Analytics</li>
            <li>Website visitor identification</li>
            <li>Customer relationship management</li>
            <li>Email and business communications</li>
            <li>Scheduling</li>
            <li>Information technology</li>
            <li>Cybersecurity</li>
            <li>Data enrichment</li>
            <li>Marketing and business-development support</li>
            <li>Professional services such as legal, accounting, and consulting services</li>
          </ul>
          <p>These providers may process information on our behalf or in connection with services they provide to us.</p>
          <p>We may also disclose information when necessary to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Comply with applicable law, regulation, subpoena, court order, or legal process</li>
            <li>Protect the rights, property, security, or safety of CliniLink, our users, or others</li>
            <li>Investigate suspected fraud, security incidents, or unlawful activity</li>
            <li>Enforce agreements or policies</li>
            <li>Complete a merger, financing, acquisition, restructuring, sale of assets, or similar corporate transaction</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">7. Data Retention</h2>
          <p>
            We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Maintaining business relationships</li>
            <li>Responding to inquiries</li>
            <li>Conduct legitimate business-development activities</li>
            <li>Maintaining appropriate business and legal records</li>
            <li>Complying with legal obligations</li>
            <li>Resolving disputes</li>
            <li>Enforcing agreements</li>
          </ul>
          <p>
            Retention periods may vary depending on the nature of the information and the reason it was collected.
          </p>
          <p>
            When information is no longer reasonably required, we may delete, anonymize, or securely dispose of it.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">8. Data Security</h2>
          <p>
            CliniLink uses reasonable administrative, technical, and organizational safeguards designed to protect information from unauthorized access, loss, misuse, alteration, or disclosure.
          </p>
          <p>
            However, no electronic transmission, storage system, or Internet-based service can be guaranteed to be completely secure. Accordingly, we cannot guarantee the absolute security of information transmitted to or through the Website.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">9. Clinical and Health Information</h2>
          <p>
            The public CliniLink Website is intended primarily for business, informational, and professional purposes.
          </p>
          <p>
            Do not submit patient-identifiable information, protected health information (&ldquo;PHI&rdquo;), medical records, clinical-trial participant data, or other sensitive health information through the Website&rsquo;s general contact forms, email links, or scheduling tools.
          </p>
          <p>
            Any processing of clinical-trial data or protected health information by CliniLink in connection with customer services will be governed by appropriate contractual, security, privacy, and regulatory arrangements separate from this Website Privacy Policy.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">10. Third-Party Websites and Services</h2>
          <p>
            The Website may contain links to third-party websites or services, including professional networking, scheduling, social-media, or other services.
          </p>
          <p>
            CliniLink is not responsible for the privacy practices, security, or content of third-party websites or services.
          </p>
          <p>
            We encourage you to review third-party privacy policies before providing them with personal information.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">11. Privacy Rights</h2>
          <p>
            Depending on where you reside, applicable law may provide you with certain rights relating to your personal information.
          </p>
          <p>These rights may include the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Request access to personal information we maintain about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of certain personal information</li>
            <li>Request information regarding categories of personal information collected or disclosed</li>
            <li>Obtain a copy of certain personal information</li>
            <li>Object to or restrict certain processing</li>
            <li>Opt out of certain marketing communications</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p>These rights are subject to applicable legal exceptions and verification requirements.</p>
          <p>To submit a privacy request, contact us using the information in the Contact Us section below.</p>
          <p>We will not discriminate against you for exercising privacy rights provided by applicable law.</p>
        </section>

        {/* Section 12 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">12. International Visitors</h2>
          <p>
            CliniLink is based in the United States, and we may process or store information collected through the Website in the United States or other countries where our service providers operate.
          </p>
          <p>
            If you access the Website from outside the United States, your information may therefore be transferred to jurisdictions whose privacy laws differ from those of your country.
          </p>
          <p>
            For visitors in jurisdictions requiring consent for non-essential tracking technologies, CliniLink intends to configure relevant technologies and consent mechanisms in accordance with applicable requirements.
          </p>
          <p>
            RB2B states that its person-level identification functionality is geographically restricted for certain international visitors and provides additional consent-management functionality for global tracking.
          </p>
        </section>

        {/* Section 13 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">13. Children&rsquo;s Privacy</h2>
          <p>The Website is intended for business and professional audiences and is not directed to children.</p>
          <p>CliniLink does not knowingly collect personal information through the Website from children under 13.</p>
          <p>
            If we learn that we improperly collected a child&rsquo;s personal information, we will take reasonable steps to delete it.
          </p>
        </section>

        {/* Section 14 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">14. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices, technologies, services, or legal requirements.
          </p>
          <p>
            When we make changes, we will revise the Last Updated date at the top of this Privacy Policy.
          </p>
          <p>
            We may also communicate material changes through the Website or other appropriate means required by law.
          </p>
        </section>

        {/* Section 15 */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight">15. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, our privacy practices, or wish to exercise a privacy right, please contact:
          </p>
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-1 font-sans text-sm">
            <p className="font-bold text-slate-950">CliniLink Corporation</p>
            <p>
              Website:{' '}
              <a href="https://www.clinilinkhealth.com" className="text-sky-600 hover:underline">
                www.clinilinkhealth.com
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:info@clinilinkhealth.com" className="text-sky-600 hover:underline font-medium">
                info@clinilinkhealth.com
              </a>
            </p>
          </div>
        </section>

        {/* Separate Section: HIPAA Notice of Privacy Practices */}
        <section id="hipaa-notice" className="mt-16 pt-12 border-t-2 border-slate-300 space-y-6">
          <div className="inline-block px-3 py-1 bg-slate-200 text-slate-800 text-xs font-mono font-semibold rounded-md uppercase tracking-wider">
            Clinical Trial Data Notice
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            HIPAA Notice of Privacy Practices
          </h2>
          <p className="italic text-slate-600">
            This notice applies to CliniLink Corporation in connection with data management and patient engagement services provided for clinical trials.
          </p>
          
          <p>
            CliniLink Corporation (&ldquo;Company&rdquo;) provides data management and patient engagement services to sponsors, clinical research organizations, or healthcare organizations that conduct clinical trials (Trials). This Notice of Privacy Practices (Notice) applies to the Company and describes (A) your rights regarding protected health information (PHI), as defined by the Health Insurance Portability and Accountability Act (HIPAA), that we receive, acquire, or process in connection with any Trials, (B) your choices regarding that PHI, (C) our uses and disclosures of that PHI, and (D) the Company’s responsibilities specific to PHI collected in connection with the Trials.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">1. PHI Defined</h3>
          <p>
            Your PHI is health information about you which can be used to identify you, and which we keep or transmit in electronic, oral, or written form. PHI includes information such as your name, contact information, past, present, or future physical or mental health or medical conditions, and prescriptions.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">2. Your Rights</h3>
          <p>You may:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Get an electronic or paper copy of your PHI or inspect such PHI that we retain about you;</li>
            <li>Request a copy or a summary of your PHI (for which we may charge a reasonable, cost-based fee);</li>
            <li>Ask us to correct or amend your PHI that we maintain about you that you think is incorrect or inaccurate, although we may refuse and provide an explanation in writing within 60 days;</li>
            <li>Request confidential communications or that we contact you in a specific way;</li>
            <li>Ask us to limit the PHI we use or share for treatment, payment or our operations, although we may refuse if it would affect your care;</li>
            <li>Ask us not to share information with your health insurer regarding particular services or health care items if you pay for them out-of-pocket (which we will agree to unless a law requires us to share that information);</li>
            <li>Ask for a list (accounting) of the times we have shared your PHI for six years prior to the date you ask, who we shared it with, and why (which we will provide without charge once each year, and subject to a reasonable, cost-based fee thereafter);</li>
            <li>Get a copy of this Notice;</li>
            <li>Choose someone to act for you, provided we can confirm that person has the necessary authority and documentation (such as a medical power of attorney) to act for you before we take any action.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">3. Your Choices</h3>
          <p>
            You may instruct us about who we share your PHI with and how much PHI we share. For example, you may tell us to share information with your family, close friends, or others in a disaster relief situation. Except as stated below, we do not share your PHI unless you instruct us to do so.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">4. Our Uses and Disclosures</h3>
          <p>We may use or share your PHI to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Trials:</strong> We may process your PHI to assist sponsors, clinical research organizations, or healthcare organizations in conducting Trials.</li>
            <li><strong>Trial Participation:</strong> We may process your PHI in order for you to participate in a Trial. We may also process your PHI to build up and maintain a database of potential participants for future studies.</li>
            <li><strong>Bill for services provided to you:</strong> We can use and share your PHI to bill and get payment from health plans or other entities.</li>
            <li><strong>Help with public health and safety issues:</strong> We can share your PHI for certain situations such as: preventing disease; helping with product recalls; reporting adverse reactions to medications; reporting suspected abuse, neglect, or domestic violence; and preventing or reducing a serious threat to anyone’s health or safety.</li>
            <li><strong>Conduct research:</strong> In certain cases, we may use and disclose your PHI for health related research.</li>
            <li><strong>Comply with the law:</strong> We will share your PHI if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we comply with federal privacy law.</li>
            <li><strong>Address workers’ compensation, law enforcement, and other government requests:</strong> We can use or share your PHI: For workers’ compensation claims; for law enforcement purposes or with a law enforcement official; with health oversight agencies for activities authorized by law; and for special government functions such as military, national security, and presidential protective services.</li>
            <li><strong>Respond to lawsuits and legal actions:</strong> We can share your PHI in response to a court or administrative order, or in response to a subpoena.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">5. Automated Decision-Making</h3>
          <p>
            If you participate in a Trial, you will be assigned a unique patient identification number. Depending on the Trial you participate in, this number may be used as part of an automatic process that randomly determines if you will receive the experimental drug substance or treatment that is being evaluated in the Trial, or if you will receive a different treatment. This type of automated decision-making is required in order to ensure that the Trial is conducted in an ethical way, and in accordance with good clinical practice standards. In addition, Company may also use an automatic process to evaluate if you should be included in a Trial or not. If and to the extent the Company uses such automated processes, the Company will conduct regular assessments to mitigate any risks, maintain use logs, and ensure meaningful human control and oversight.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">6. Our Responsibilities</h3>
          <p>
            The Company is required by law to maintain the privacy and security of your PHI. We will let you know promptly if a breach occurs that may have compromised the privacy or security of your PHI no later than 60 days after we confirm such a breach. We must follow the duties and privacy practices described in this notice and give you a copy of it. We will not use or share your PHI other than as described here unless you tell us we can in writing. If you tell us we can use or share your PHI in a particular way, you may change your mind at any time and can send us different written instructions at that time.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">7. Complaints &amp; Contact</h3>
          <p>
            You have the right to complain if you feel we have violated your rights. We will not retaliate against you for filing a complaint. If you believe your rights have been violated, you can file a complaint directly with us by contacting our Data Privacy Officer:
          </p>
          <div className="bg-slate-100 p-4 rounded-xl text-sm font-sans text-slate-800 space-y-1">
            <p><strong>Entity:</strong> CliniLink Corporation</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@clinilinkhealth.com" className="text-sky-600 hover:underline">
                info@clinilinkhealth.com
              </a>
            </p>
            <p><strong>Website:</strong> www.clinilinkhealth.com</p>
          </div>
          <p className="mt-4">
            You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting{' '}
            <a
              href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/"
              className="text-sky-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.hhs.gov/ocr/privacy/hipaa/complaints/
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
