"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function AcceptableUsePage() {
  return (
    <LegalShell kicker="Legal" title="Acceptable Use Policy" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        This Acceptable Use Policy (the &ldquo;Policy&rdquo;) sets out the
        standards that apply when you use the pkdigitalllc.com website and when
        you engage PK DIGITAL LLC (&ldquo;PK Digital&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;) for services. By using the site or working with us, you
        agree to this Policy and to our Terms of Service.
      </p>

      <LegalBlock n="01" title="Prohibited use of the website">
        <p>
          You agree not to misuse this website. In particular, you must not
          attempt to gain unauthorized access to the site or its systems,
          interfere with its normal operation, introduce malicious code, scrape
          or harvest data without permission, or use the site to transmit
          unsolicited communications.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="Lawful and accurate information">
        <p>
          Information you submit through our contact form or during an engagement
          must be accurate, lawful, and your own to share. You must not submit
          content that is unlawful, infringing, defamatory, or that violates the
          rights or privacy of any third party.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="Use of our services">
        <p>
          Our services must not be used to promote illegal activity, to publish
          content that is hateful, harassing, deceptive, or infringing, or to
          engage in artificial or manipulative growth tactics — such as bought
          followers, engagement, or bot activity — that breach platform rules. We
          work to the policies of the platforms we operate on.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="Brand assets and third-party rights">
        <p>
          You are responsible for ensuring that the brand assets, materials, and
          information you provide to us are accurate and that you hold the rights
          necessary for us to use them in the agreed work. You must not ask us to
          produce or publish anything that infringes the intellectual property or
          other rights of others.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="Consequences of breach">
        <p>
          We may suspend or terminate access to the website, or an engagement,
          where this Policy is breached, and we may report unlawful activity to
          the relevant authorities. Termination for breach does not relieve you
          of fees due for work already performed.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="Contact">
        <p>
          To report misuse or ask a question about this Policy, contact
          contact@pkdigitalllc.com or call +1 (954) 676-1050. You can also write
          to PK DIGITAL LLC, 2335 E. Atlantic Blvd, STE 200, Pompano Beach, FL
          33062, United States.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
