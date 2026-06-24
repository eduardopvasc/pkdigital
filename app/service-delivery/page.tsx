"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function ServiceDeliveryPage() {
  return (
    <LegalShell kicker="Legal" title="Service Delivery" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        This page explains, in practical terms, how a NOREN Agency engagement is
        delivered — from purchase through onboarding to ongoing work — so you know
        what to expect. NOREN Agency is operated by PK DIGITAL LLC. This
        information complements our Digital Delivery Policy and Terms of Service.
      </p>

      <LegalBlock n="01" title="Choosing an engagement">
        <p>
          You can purchase a published engagement tier from our Plans page, or
          agree a custom scope through a private proposal. Pricing for published
          tiers is listed in GBP on the Plans page; custom scopes are quoted in a
          proposal.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="Purchase and confirmation">
        <p>
          Engagements are purchased as a one-time, upfront payment through an
          approved checkout provider (for example, Whop) or by invoice. Once
          payment is confirmed, we begin onboarding.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="Onboarding">
        <p>
          After purchase, we start onboarding: an intake of your goals, brand
          assets, and access; a kickoff to align on scope and priorities; and
          setup of any workspace or client portal provided for your engagement.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="What you receive">
        <p>
          Depending on your tier or scope, deliverables may include strategy and
          positioning, content and creative direction, distribution and growth
          support, implementation guidance, reporting, and advisory calls — all
          provided digitally. The specific deliverables for your engagement are
          confirmed during onboarding or in your proposal.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="Cadence and communication">
        <p>
          Work proceeds on an agreed cadence with a single point of contact. Some
          deliverables are one-off; others are iterative within the scope. Reviews
          and reporting follow the rhythm set for your engagement.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="What we need from you">
        <p>
          Timely delivery depends on your cooperation — providing access,
          approvals, brand assets, and feedback when needed. Delays in inputs may
          affect timing.
        </p>
      </LegalBlock>

      <LegalBlock n="07" title="No physical delivery">
        <p>
          All delivery is digital. There is no physical product and nothing is
          shipped.
        </p>
      </LegalBlock>

      <LegalBlock n="08" title="Custom proposals">
        <p>
          Custom scopes may vary in deliverables, timing, and structure, as
          described in your proposal or statement of work.
        </p>
      </LegalBlock>

      <LegalBlock n="09" title="Contact">
        <p>
          Questions about how an engagement is delivered can be sent to
          contact@norenagency.com or call +1 (954) 676-1050.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
