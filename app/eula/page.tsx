"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function EulaPage() {
  return (
    <LegalShell
      kicker="Legal"
      title="End User License Agreement"
      updated="June 2026"
    >
      <p className="text-[15px] leading-relaxed text-muted">
        This End User License Agreement (the &ldquo;EULA&rdquo;) governs your
        access to and use of the digital materials, client portal, and workspace
        tools made available by PK DIGITAL LLC, operating as NOREN Agency
        (&ldquo;NOREN Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) as part
        of an engagement. It supplements our Terms of Service, which prevails in
        the event of a conflict.
      </p>

      <LegalBlock n="01" title="What this covers">
        <p>
          This EULA applies to the materials and access we provide in connection
          with an engagement, which may include the client portal or workspace,
          dashboards and reports, strategic documents and playbooks, templates,
          files, and downloadable or licensed deliverables (together, the
          &ldquo;Materials&rdquo;).
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="License we grant">
        <p>
          Subject to these terms and to full payment of the applicable fees, we
          grant you a limited, non-exclusive, non-transferable, revocable license
          to access and use the Materials for your own internal business purposes,
          for the duration of your engagement and any access period we provide.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="Ownership">
        <p>
          Except for final deliverables that are assigned to you under our Terms
          of Service upon payment, all Materials — including our pre-existing
          materials, frameworks (such as the NOREN Framework), templates, tools,
          methods, and know-how — remain the property of PK DIGITAL LLC or its
          licensors. Access alone transfers no ownership.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="Restrictions">
        <p>
          You may not resell, redistribute, sublicense, rent, or publicly share
          the Materials; remove or alter proprietary notices; use the Materials to
          build or support a competing service; or share client portal or
          workspace access with anyone outside your organization without our
          written consent. You must not misuse, probe, or attempt to circumvent
          any access controls or security measures.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="Your materials">
        <p>
          You retain ownership of the brand assets, content, and information you
          provide, and you grant us the rights necessary to use them to deliver
          the engagement. You are responsible for ensuring you hold the rights to
          the materials you supply.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="Access and revocation">
        <p>
          Access to the client portal and workspace is provided on a
          discretionary, revocable basis and may be limited to active engagements
          or invited accounts. We may suspend or revoke access for breach of this
          EULA or our Terms of Service, non-payment, fraud, abuse, or a chargeback
          or payment dispute raised without first contacting us.
        </p>
      </LegalBlock>

      <LegalBlock n="07" title="Availability and no standalone product">
        <p>
          Any portal or workspace is provided to support your engagement, on an
          &ldquo;as available&rdquo; basis; we do not warrant uninterrupted
          availability, and we are not selling a standalone software product.
          Third-party tools used to provide access are subject to their own terms,
          and their availability is outside our control.
        </p>
      </LegalBlock>

      <LegalBlock n="08" title="Termination of the license">
        <p>
          This license ends when your engagement or access period ends, or earlier
          on breach. On termination you must stop using the Materials and, if we
          ask, delete copies that are not final deliverables owned by you.
          Provisions on ownership, restrictions, and liability survive
          termination.
        </p>
      </LegalBlock>

      <LegalBlock n="09" title="Contact">
        <p>
          Questions about this EULA can be sent to contact@norenagency.com or to
          PK DIGITAL LLC, 2335 E. Atlantic Blvd, STE 200, Pompano Beach, FL 33062,
          United States.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
