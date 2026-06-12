"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function RefundPolicyPage() {
  return (
    <LegalShell kicker="Legal" title="Refund Policy" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        This Refund Policy explains how fees, cancellations, and refunds are
        handled for services provided by PK DIGITAL LLC, operating as NOREN Agency (&ldquo;NOREN Agency&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). It should be read alongside our Terms
        of Service and the statement of work for your engagement, which prevails
        in the event of a conflict.
      </p>

      <LegalBlock n="01" title="Nature of our services">
        <p>
          NOREN Agency provides professional social media services — strategy,
          content and creative production, community management, organic growth,
          and analytics and reporting — typically on a monthly retainer. Because
          the work is bespoke and delivered as time and creative output, fees
          reflect work performed rather than a returnable product.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="Retainer fees and billing cycles">
        <p>
          Retainers are billed in advance for each cycle as set out in the
          statement of work. Once a cycle has begun and work has commenced, fees
          for that cycle are generally non-refundable, as resources and time are
          allocated to your account at the start of the period.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="Cancellations">
        <p>
          You may cancel an ongoing engagement on the written notice period set
          out in the statement of work. Cancellation stops future billing cycles;
          it does not retroactively refund a cycle already in progress. We will
          deliver paid-for work in progress as reasonably practicable up to the
          end of the notice period.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="When a refund may apply">
        <p>
          Where we have invoiced for work that has not been started, or where a
          duplicate or incorrect charge has occurred, we will refund the affected
          amount. If a dispute arises about delivered work, we will review it in
          good faith and aim for a fair resolution consistent with the statement
          of work.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="How to request a refund">
        <p>
          To raise a billing question or request a refund, contact us at
          contact@norenagency.com or call +1 (954) 676-1050. Please include your
          company name, the invoice or charge in question, and a short
          description. We aim to respond within two business days.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="Contact">
        <p>
          PK DIGITAL LLC — Business address: 2335 E. Atlantic Blvd, STE 200,
          Pompano Beach, FL 33062, United States. Email:
          contact@norenagency.com. Phone: +1 (954) 676-1050.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
