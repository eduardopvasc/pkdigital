"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function DigitalDeliveryPolicyPage() {
  return (
    <LegalShell
      kicker="Legal"
      title="Digital Delivery Policy"
      updated="June 2026"
    >
      <p className="text-[15px] leading-relaxed text-muted">
        This Digital Delivery Policy explains how PK DIGITAL LLC, operating as
        NOREN Agency (&ldquo;NOREN Agency&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;), delivers its services and deliverables. It should be
        read alongside our Service Delivery information, Terms of Service, and
        Refund Policy.
      </p>

      <LegalBlock n="01" title="Digital services only">
        <p>
          All NOREN Agency engagements are digital services. There is no physical
          product, and nothing is shipped. We do not sell, deliver, or post any
          physical goods.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="How delivery happens">
        <p>
          Deliverables, access, and materials are provided digitally — through a
          client portal or workspace, shared documents and files, email, video
          calls, and similar means agreed for your engagement.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="When delivery is made">
        <p>
          Delivery is considered made when the relevant work, access, document, or
          material is provided or made available to you. Where a client portal or
          workspace is provided, access is treated as delivered when access is
          granted.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="Delivery timing">
        <p>
          Because our work is bespoke, delivery timing depends on the engagement
          scope, the kickoff date, and your timely provision of access, approvals,
          and inputs. We will share indicative timing for your engagement; this is
          not a guaranteed delivery date unless expressly agreed in writing.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="One-time purchase, iterative work">
        <p>
          Your purchase is a one-time, upfront payment for the engagement tier or
          scope you select. Some work is ongoing or iterative in nature — for
          example, strategy refinement, content, or reporting within the agreed
          scope — but this does not constitute a subscription or a recurring
          charge unless separately agreed in writing.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="Custom scopes">
        <p>
          Custom proposals and alternative scopes may have different delivery
          arrangements, which are described in the relevant proposal or statement
          of work.
        </p>
      </LegalBlock>

      <LegalBlock n="07" title="Contact">
        <p>
          Questions about digital delivery can be sent to contact@norenagency.com
          or to PK DIGITAL LLC, 2335 E. Atlantic Blvd, STE 200, Pompano Beach, FL
          33062, United States.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
