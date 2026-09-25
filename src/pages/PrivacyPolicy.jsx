import React from 'react';
import { Sliders, Cookie, ShieldCheck } from 'lucide-react';
import { useCookieConsent } from '../context/CookieConsentContext';

export default function PrivacyPolicy() {
  const { openPreferences } = useCookieConsent();

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto font-sans text-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Compliance & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Privacy & Cookie Policy
          </h1>
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

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
        {/* Section: Website Cookie & Tracking Policy */}
        <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 text-slate-950 font-bold text-xl">
            <Cookie className="w-5 h-5 text-sky-600" />
            <h2>Cookie & Tracking Technologies Policy</h2>
          </div>
          
          <p>
            Clinilink Corporation (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to transparent data practices. This section explains how we use cookies, pixels, web beacons, and related tracking technologies across our website, and describes your rights under applicable privacy and wiretap statutes.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-4">1. True Opt-In Standard</h3>
          <p>
            In strict compliance with modern privacy regulations and data protection guidance, CliniLink adheres to a <strong>true opt-in standard</strong>. We do not drop or load any non-essential cookies, tracking pixels, session measurement technologies, or visitor identification scripts unless and until you affirmatively provide explicit consent.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-4">2. Cookie Categories We Use</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential Cookies (Strictly Necessary):</strong> These cookies are required for fundamental website operations, including session navigation, security, network routing, and storing your consent preferences. Because the website cannot function properly without them, they cannot be turned off.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These cookies collect aggregated information regarding how visitors arrive at and interact with our website, pages viewed, time spent per page, and general navigation flows. This helps us optimize site performance and design. They are disabled by default and only activated upon your explicit consent.
            </li>
            <li>
              <strong>Marketing &amp; Identification Technologies (including RB2B):</strong> We may utilize business-to-business identification technologies (such as RB2B) and marketing pixels to recognize organizations that visit our site and tailor relevant research operations communications. Consistent with our legal guidelines, these technologies are considered non-essential, are disabled by default, and are never loaded without affirmative opt-in consent.
            </li>
            <li>
              <strong>Video &amp; Media Player Cookies:</strong> Certain pages may embed educational or product videos hosted through third-party platforms such as Vimeo or YouTube. Enabling these cookies allows third-party platforms to track viewing activity and deliver tailored video experiences.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 mt-4">3. Withdrawing or Changing Your Consent</h3>
          <p>
            You have the right to withdraw or modify your consent preferences at any time. In accordance with legal standards, withdrawing consent is just as easy as giving it:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Persistent Bottom-Left Trigger:</strong> A persistent &ldquo;Cookie Settings&rdquo; button is available at the bottom-left corner of every page on our website.
            </li>
            <li>
              <strong>Footer Link:</strong> You can click the &ldquo;Cookie Preferences&rdquo; link in the footer of any page.
            </li>
            <li>
              <strong>Direct Button:</strong> You can click the button below at any time to open your preference panel:
            </li>
          </ul>
          <div className="pt-2">
            <button
              type="button"
              onClick={openPreferences}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              <Sliders className="w-4 h-4" /> Open Preference Center
            </button>
          </div>
        </section>

        {/* Section: HIPAA Notice of Privacy Practices */}
        <section className="space-y-6 pt-4">
          <p className="font-bold text-xl text-slate-950">HIPAA Notice of Privacy Practices</p>
          
          <p>
            Clinilink Corporation (Company) provides data management and patient engagement services to sponsors, clinical research organizations, or healthcare organizations that conduct clinical trials (Trials). This Notice of Privacy Practices (Notice) applies to the Company and describes (A) your rights regarding protected health information (PHI), as defined by the Health Insurance Portability and Accountability Act (HIPAA), that we receive, acquire, or process in connection with any Trials, (B) your choices regarding that PHI, (C) our uses and disclosures of that PHI, and (D) the Company’s responsibilities specific to PHI collected in connection with the Trials.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">1. PHI Defined</h2>
          <p>
            Your PHI is health information about you which can be used to identify you, and which we keep or transmit in electronic, oral, or written form. PHI includes information such as your name, contact information, past, present, or future physical or mental health or medical conditions, and prescriptions.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">2. Your Rights</h2>
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

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">3. Your Choices</h2>
          <p>
            You may instruct us about who we share your PHI with and how much PHI we share. For example, you may tell us to share information with your family, close friends, or others in a disaster relief situation. Except as stated below, we do not share your PHI unless you instruct us to do so.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">4. Our Uses and Disclosures</h2>
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

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">5. Automated Decision-Making</h2>
          <p>
            If you participate in a Trial, you will be assigned a unique patient identification number. Depending on the Trial you participate in, this number may be used as part of an automatic process that randomly determines if you will receive the experimental drug substance or treatment that is being evaluated in the Trial, or if you will receive a different treatment. This type of automated decision-making is required in order to ensure that the Trial is conducted in an ethical way, and in accordance with good clinical practice standards. In addition, Company may also use an automatic process to evaluate if you should be included in a Trial or not. If and to the extent the Company uses such automated processes, the Company will conduct regular assessments to mitigate any risks, maintain use logs, and ensure meaningful human control and oversight.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">6. Our Responsibilities</h2>
          <p>
            The Company is required by law to maintain the privacy and security of your PHI. We will let you know promptly if a breach occurs that may have compromised the privacy or security of your PHI no later than 60 days after we confirm such a breach. We must follow the duties and privacy practices described in this notice and give you a copy of it. We will not use or share your PHI other than as described here unless you tell us we can in writing. If you tell us we can use or share your PHI in a particular way, you may change your mind at any time and can send us different written instructions at that time.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">7. Complaints &amp; Contact</h2>
          <p>
            You have the right to complain if you feel we have violated your rights. We will not retaliate against you for filing a complaint. If you believe your rights have been violated, you can file a complaint directly with us by contacting our Data Privacy Officer:
          </p>
          <div className="bg-slate-100 p-4 rounded-xl text-sm font-mono text-slate-800 space-y-1">
            <p><strong>Email:</strong> privacy@clinilink-os.app</p>
            <p><strong>Entity:</strong> Clinilink Corporation</p>
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
