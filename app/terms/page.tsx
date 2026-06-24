"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function TermsPage() {
  return (
    <LegalShell kicker="Legal" title="Terms of Service" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        These Terms of Service (the &ldquo;Terms&rdquo;) govern your use of this
        website and describe the general terms on which PK DIGITAL LLC,
        operating as NOREN Agency (&ldquo;NOREN Agency&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;) provides its services. The specific scope, fees, and
        deliverables of any engagement are set out in the applicable plan, a
        private proposal, or a separate statement of work or services agreement,
        which prevails over these Terms in the event of a conflict.
      </p>

      <LegalBlock n="01" title="Who we are">
        <p>
          NOREN Agency is a brand operated by PK DIGITAL LLC, a limited
          liability company registered in the State of New Mexico, United
          States.
        </p>
        <p>
          Business address: 2335 E. Atlantic Blvd, STE 200, Pompano Beach, FL
          33062, United States.
        </p>
        <p>
          Registered address: 412 W 7th St, Clovis, NM 88101, United States.
        </p>
        <p>
          You can reach us at contact@norenagency.com or +1 (954) 676-1050.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="Scope of services">
        <p>
          We provide digital growth and advisory services — strategy and
          positioning, content strategy and creative direction, community and
          distribution support, organic growth, implementation guidance, and
          analytics and reporting. The precise services, deliverables, and scope
          vary by engagement tier (see our Plans page) or by a custom private
          proposal or statement of work (&ldquo;SOW&rdquo;) agreed in writing.
          Nothing on this website constitutes an offer or a commitment to provide
          services on particular terms.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="Engagement and fees">
        <p>
          Engagements are purchased as a one-time, upfront payment through an
          approved checkout provider (for example, Whop), by invoice, or as set
          out in the applicable plan or private proposal. Unless stated
          otherwise, payment is due at or before commencement, and access or work
          begins once payment is confirmed. Fees are exclusive of any applicable
          taxes and of any third-party media spend or third-party tool costs,
          which are funded separately as agreed. Custom scopes and alternative
          structures are arranged through a private proposal.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="Digital delivery and third-party platforms">
        <p>
          Our services are delivered digitally — there is no physical product and
          nothing is shipped. We rely on third-party platforms to deliver and
          operate an engagement, which may include checkout and access providers
          (for example, Whop), email, analytics, scheduling, and workspace or
          client-portal tools. Your use of those platforms may be subject to
          their own terms, and their availability is outside our control.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="Intellectual property">
        <p>
          Subject to full payment of the relevant fees, final deliverables
          produced specifically for you under an engagement are assigned to you
          upon payment. We retain ownership of our pre-existing materials,
          tools, methods, and know-how — including the NOREN Framework — and of any
          general skills and experience developed in the course of the work.
          You grant us the right to reference the engagement for our own
          portfolio and marketing unless agreed otherwise in writing.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="Confidentiality">
        <p>
          Each party may receive confidential information from the other. Both
          parties agree to keep such information confidential and to use it only
          for the purposes of the engagement, except where disclosure is
          required by law. This obligation survives completion of the
          engagement.
        </p>
      </LegalBlock>

      <LegalBlock n="07" title="Responsibilities of the parties">
        <p>
          We will perform our services with reasonable skill and care. You agree
          to provide timely access, approvals, brand assets, and information
          reasonably required for us to perform, and you are responsible for the
          accuracy of materials you supply and for ensuring you hold the rights
          to them. Delays in providing inputs or approvals may affect timelines.
        </p>
      </LegalBlock>

      <LegalBlock n="08" title="Limitation of liability">
        <p>
          We do not guarantee specific outcomes, reach, engagement, or growth
          results, as these depend on factors outside our control, including
          third-party platforms. To the maximum extent permitted by law, our
          total aggregate liability arising out of or relating to an engagement
          is limited to the total fees paid by you to us for the services giving
          rise to the claim, and neither party is liable for indirect or
          consequential losses.
        </p>
      </LegalBlock>

      <LegalBlock n="09" title="Suspension and termination">
        <p>
          We may suspend or terminate services and access for material breach,
          including non-payment, fraud, abuse, or a chargeback or payment dispute
          raised without first contacting us. Where an engagement is ended, you
          remain responsible for fees for services performed and work delivered
          up to that point, and we will make paid-for work in progress available
          as reasonably practicable. Termination does not entitle you to a refund
          of fees for work already delivered (see our Refund Policy).
        </p>
      </LegalBlock>

      <LegalBlock n="10" title="Governing law">
        <p>
          These Terms and any engagement are governed by the laws of the State
          of New Mexico, United States, without regard to its conflict-of-laws
          rules, unless the applicable SOW specifies otherwise. The courts
          located in that jurisdiction will have exclusive jurisdiction, subject
          to any dispute-resolution process agreed in the SOW.
        </p>
      </LegalBlock>

      <LegalBlock n="11" title="Contact">
        <p>
          Questions about these Terms can be sent to contact@norenagency.com,
          by phone at +1 (954) 676-1050, or by mail to PK DIGITAL LLC, 2335 E.
          Atlantic Blvd, STE 200, Pompano Beach, FL 33062, United States.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
