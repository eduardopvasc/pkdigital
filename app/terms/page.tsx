"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function TermsPage() {
  return (
    <LegalShell kicker="Legal" title="Terms of Service" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        These Terms of Service (the &ldquo;Terms&rdquo;) govern your use of this
        website and describe the general terms on which PK DIGITAL LLC
        (&ldquo;PK Digital&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides
        its services. The specific scope, fees, and deliverables of any
        engagement are set out in a separate statement of work or services
        agreement, which prevails over these Terms in the event of a conflict.
      </p>

      <LegalBlock n="01" title="Who we are">
        <p>
          PK Digital is the trading name of PK DIGITAL LLC, a limited liability
          company registered in the State of New Mexico, United States.
        </p>
        <p>
          Business address: 2335 E. Atlantic Blvd, STE 200, Pompano Beach, FL
          33062, United States.
        </p>
        <p>
          Registered address: 412 W 7th St, Clovis, NM 88101, United States.
        </p>
        <p>
          You can reach us at contact@pkdigitalllc.com or +1 (954) 676-1050.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="Scope of services">
        <p>
          We provide social media strategy, content strategy and production,
          creative direction, community management, organic growth, and
          analytics and reporting services. The
          precise services, deliverables, timelines, and fees for your
          engagement are defined in a statement of work (&ldquo;SOW&rdquo;)
          agreed in writing. Nothing on this website constitutes an offer or a
          commitment to provide services on particular terms.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="Engagement and fees">
        <p>
          Services are typically provided on a monthly retainer basis. Fees,
          billing frequency, and payment terms are specified in the applicable
          SOW. Unless stated otherwise, invoices are due within the period set
          out in the SOW, and late or non-payment may result in suspension of
          services. Fees are exclusive of any applicable taxes and of
          third-party media spend, which is billed or funded separately as
          agreed.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="Intellectual property">
        <p>
          Subject to full payment of the relevant fees, final deliverables
          produced specifically for you under an engagement are assigned to you
          upon payment. We retain ownership of our pre-existing materials,
          tools, methods, and know-how — including the PK Framework — and of any
          general skills and experience developed in the course of the work.
          You grant us the right to reference the engagement for our own
          portfolio and marketing unless agreed otherwise in writing.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="Confidentiality">
        <p>
          Each party may receive confidential information from the other. Both
          parties agree to keep such information confidential and to use it only
          for the purposes of the engagement, except where disclosure is
          required by law. This obligation survives termination of the
          engagement.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="Responsibilities of the parties">
        <p>
          We will perform our services with reasonable skill and care. You agree
          to provide timely access, approvals, brand assets, and information
          reasonably required for us to perform, and you are responsible for the
          accuracy of materials you supply and for ensuring you hold the rights
          to them. Delays in providing inputs or approvals may affect timelines.
        </p>
      </LegalBlock>

      <LegalBlock n="07" title="Limitation of liability">
        <p>
          We do not guarantee specific outcomes, reach, engagement, or growth
          results, as these depend on factors outside our control, including
          third-party platforms. To the maximum extent permitted by law, our
          total aggregate liability arising out of or relating to an engagement
          is limited to the fees paid by you to us for the services giving rise
          to the claim in the three months preceding the event, and neither
          party is liable for indirect or consequential losses.
        </p>
      </LegalBlock>

      <LegalBlock n="08" title="Termination">
        <p>
          Either party may terminate an engagement on the written notice period
          set out in the SOW. On termination, you remain responsible for fees
          for services performed up to the termination date, and we will deliver
          paid-for work in progress as reasonably practicable. We may suspend or
          terminate services for material breach, including non-payment.
        </p>
      </LegalBlock>

      <LegalBlock n="09" title="Governing law">
        <p>
          These Terms and any engagement are governed by the laws of the State
          of New Mexico, United States, without regard to its conflict-of-laws
          rules, unless the applicable SOW specifies otherwise. The courts
          located in that jurisdiction will have exclusive jurisdiction, subject
          to any dispute-resolution process agreed in the SOW.
        </p>
      </LegalBlock>

      <LegalBlock n="10" title="Contact">
        <p>
          Questions about these Terms can be sent to contact@pkdigitalllc.com,
          by phone at +1 (954) 676-1050, or by mail to PK DIGITAL LLC, 2335 E.
          Atlantic Blvd, STE 200, Pompano Beach, FL 33062, United States.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
