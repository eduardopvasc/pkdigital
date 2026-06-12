"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function DisclaimerPage() {
  return (
    <LegalShell kicker="Legal" title="Disclaimer" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        This Disclaimer governs your use of the norenagency.com website and the
        information it contains. By using this website, you accept this
        Disclaimer in full. It should be read alongside our Terms of Service and
        Privacy Policy.
      </p>

      <LegalBlock n="01" title="No guarantee of results">
        <p>
          PK DIGITAL LLC, operating as NOREN Agency (&ldquo;NOREN Agency&rdquo;) provides social media
          services that depend on factors outside our control, including
          third-party platforms, algorithms, and audience behavior. Nothing on
          this website is a promise or guarantee of specific reach, engagement,
          growth, revenue, or other results. Past or illustrative work does not
          guarantee future outcomes.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="Informational content only">
        <p>
          The content on this website is provided for general information about
          NOREN Agency and its services. It does not constitute professional,
          legal, financial, or marketing advice, and should not be relied upon as
          such. The formats and systems shown are illustrative of our work and
          are not client case studies; no metrics or results are claimed.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="External links and third parties">
        <p>
          This website may reference or link to third-party platforms and
          services. We do not control and are not responsible for the content,
          policies, or availability of those third parties. References to social
          platforms do not imply any endorsement or partnership unless expressly
          stated.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, NOREN Agency is not liable for
          any loss or damage arising from reliance on information on this website
          or from your use of it. The terms governing any engagement, including
          liability, are set out in the applicable statement of work and our
          Terms of Service.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="Company details">
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
      </LegalBlock>

      <LegalBlock n="06" title="Contact">
        <p>
          Questions about this Disclaimer can be sent to
          contact@norenagency.com or by phone at +1 (954) 676-1050.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
