"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function PrivacyPage() {
  return (
    <LegalShell kicker="Legal" title="Privacy Policy" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        This Privacy Policy explains how PK DIGITAL LLC, operating as NOREN Agency
        (&ldquo;NOREN Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects,
        uses, and protects personal information when you visit norenagency.com,
        contact us, or engage our services. We aim to be clear about what we
        collect and why.
      </p>

      <LegalBlock n="01" title="Who is responsible for your data">
        <p>
          PK DIGITAL LLC is the controller of personal information collected
          through this website and in the course of an engagement. Business
          address: 2335 E. Atlantic Blvd, STE 200, Pompano Beach, FL 33062,
          United States. Registered address: 412 W 7th St, Clovis, NM 88101,
          United States. Contact: contact@norenagency.com or +1 (954) 676-1050.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="Information we collect">
        <p>
          We collect information you provide directly — such as your name,
          company, email address, website, and the contents of your message when
          you submit our contact form, and the account, brand, and project
          information you share if you engage us or use a client portal or
          workspace we provide.
        </p>
        <p>
          We also collect limited technical and usage data automatically — such as
          IP address, browser type, pages viewed, and referring source — through
          server logs and, where analytics are used, cookies and similar
          technologies (see our Cookie Policy).
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="How we use it, and our legal basis">
        <p>
          We use your information to respond to enquiries and provide proposals;
          to deliver, administer, and support our services and any client portal
          or workspace; to process payments through our checkout provider; to
          operate, secure, and improve the website; and to comply with legal
          obligations. Where the GDPR applies, we rely on legitimate interests
          (responding to and managing enquiries), steps necessary to enter into or
          perform a contract, your consent (for non-essential cookies), and legal
          obligation, as applicable.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="Service providers we share with">
        <p>
          We do not sell your personal information. We share it only with service
          providers that help us operate, who process it on our behalf under
          appropriate safeguards — for example, website hosting, email, analytics
          (where used), our payment and checkout provider (for example, Whop), and
          workspace or client-portal tools — and with authorities or advisers
          where required by law or to protect our rights.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="International transfers">
        <p>
          Some of our service providers may process personal information in
          countries other than your own. Where we transfer personal information
          internationally, we take steps to ensure it is protected by appropriate
          safeguards consistent with applicable law.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="Retention">
        <p>
          We keep personal information only as long as necessary for the purposes
          described here — to handle your enquiry, deliver and administer an
          engagement, maintain our business relationship, and meet legal or
          accounting requirements — after which it is deleted or anonymized.
        </p>
      </LegalBlock>

      <LegalBlock n="07" title="Security">
        <p>
          We use reasonable technical and organizational measures to protect
          personal information against unauthorized access, loss, or misuse. No
          method of transmission or storage is completely secure, but we work to
          protect your information and to limit access to those who need it to
          perform their role.
        </p>
      </LegalBlock>

      <LegalBlock n="08" title="Your rights">
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or port your personal information, to object to or restrict
          certain processing, and to withdraw consent. Residents of California and
          certain other US states, and individuals in the EU/UK, have specific
          statutory rights. To exercise any right, contact us at
          contact@norenagency.com; we will respond as required by applicable law.
        </p>
      </LegalBlock>

      <LegalBlock n="09" title="Cookies">
        <p>
          We use cookies and similar technologies as described in our Cookie
          Policy, where you can also manage your preferences.
        </p>
      </LegalBlock>

      <LegalBlock n="10" title="Contact">
        <p>
          For any privacy question or request, contact contact@norenagency.com,
          call +1 (954) 676-1050, or write to PK DIGITAL LLC, 2335 E. Atlantic
          Blvd, STE 200, Pompano Beach, FL 33062, United States. We may update
          this policy from time to time; the date above reflects the latest
          revision.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
