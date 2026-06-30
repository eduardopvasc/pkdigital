"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function RefundPolicyPage() {
  return (
    <LegalShell kicker="Legal" title="Refund Policy" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        This Refund Policy explains how payments and refunds are handled for the
        digital services provided by PK DIGITAL LLC, operating as NOREN Agency
        (&ldquo;NOREN Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). It
        should be read alongside our Terms of Service, our Digital Delivery
        Policy, and any plan, private proposal, or statement of work for your
        engagement, which prevails in the event of a conflict.
      </p>

      <LegalBlock n="01" title="Nature of our services">
        <p>
          NOREN Agency provides digital growth and advisory services — strategy
          and positioning, content and creative direction, community and
          distribution support, organic growth, implementation guidance, and
          analytics and reporting. Engagements are delivered digitally as
          professional work, advisory, and access. There is no physical product
          and nothing is shipped. Fees reflect strategic work, time, and digital
          deliverables rather than a returnable good.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="Payment and when it becomes final">
        <p>
          Engagements are purchased as a one-time, upfront payment through an
          approved checkout provider (for example, Whop), by invoice, or as set
          out in the applicable plan or private proposal. Payment confirms your
          engagement tier or custom scope and authorizes us to begin. Once
          onboarding or work has commenced, payment is generally considered
          final, because resources, time, and strategic work are committed to
          your account from the start.
        </p>
        <p>
          Payments are processed securely through Whop. checkout-atroyale.com is
          used solely as the operational checkout domain for selected NOREN
          Agency transactions, operated on behalf of NOREN Agency (PK DIGITAL
          LLC).
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="Digital delivery">
        <p>
          All services, deliverables, access, and assets are provided digitally —
          by document, workspace, client portal, call, or email. No physical
          goods are sold or shipped. Delivery is considered made when the
          relevant work, access, or materials are provided to you.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="When a refund may apply">
        <p>
          Where a duplicate or incorrect charge has occurred, or where you have
          paid for an engagement that has not yet started and no onboarding,
          strategic work, or setup has taken place, we will refund the affected
          amount. At our discretion, we may offer a partial or goodwill refund
          for clearly unstarted portions of a scope. Work already delivered —
          including strategy, consulting and advisory time, setup and onboarding,
          custom work, and digital assets or access already provided — is
          non-refundable.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="Disputes and chargebacks">
        <p>
          If you have a concern about a charge or about the work, please contact
          NOREN Agency first so we can review it in good faith and aim for a fair
          resolution consistent with your plan, proposal, or statement of work.
          We ask that you raise any dispute with us before initiating a
          chargeback. Chargebacks or payment disputes filed without first
          contacting us may be treated as a breach and may result in suspension
          of services and access.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="How to request a refund">
        <p>
          To raise a billing question or request a refund, contact us at
          contact@norenagency.com or call +1 (954) 676-1050. Please include your
          company name, the order, invoice, or charge in question, and a short
          description. We aim to respond within two business days.
        </p>
      </LegalBlock>

      <LegalBlock n="07" title="Contact">
        <p>
          PK DIGITAL LLC — Business address: 2335 E. Atlantic Blvd, STE 200,
          Pompano Beach, FL 33062, United States. Email:
          contact@norenagency.com. Phone: +1 (954) 676-1050.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
