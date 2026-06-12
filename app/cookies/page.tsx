"use client";

import { LegalShell, LegalBlock } from "@/components/site";

export default function CookiesPage() {
  return (
    <LegalShell kicker="Legal" title="Cookie Policy" updated="June 2026">
      <p className="text-[15px] leading-relaxed text-muted">
        This Cookie Policy explains how PK DIGITAL LLC (&ldquo;PK Digital&rdquo;)
        uses cookies and similar technologies on pkdigitalllc.com, and how you
        can control them. It should be read alongside our Privacy Policy.
      </p>

      <LegalBlock n="01" title="What cookies are">
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They are widely used to make websites work, to remember your
          preferences, and to provide information about how a site is used.
          Similar technologies such as pixels and local storage serve comparable
          purposes.
        </p>
      </LegalBlock>

      <LegalBlock n="02" title="The cookies we use">
        <p>
          <span className="text-white">Essential cookies</span> are required
          for the website to function and cannot be switched off in our systems.
        </p>
        <p>
          <span className="text-white">Analytics cookies</span> help us
          understand how visitors use the site so we can improve it. They
          collect information in an aggregated way.
        </p>
        <p>
          <span className="text-white">Marketing cookies</span> may be used
          to measure the effectiveness of campaigns and, where applicable, to
          show relevant content. These are only set with your consent.
        </p>
      </LegalBlock>

      <LegalBlock n="03" title="Third-party cookies">
        <p>
          Some cookies are set by third parties we use to operate the site, such
          as analytics providers and, if running campaigns, advertising
          platforms. These providers process data under their own policies. We
          set non-essential third-party cookies only where you have consented.
        </p>
      </LegalBlock>

      <LegalBlock n="04" title="Managing your preferences">
        <p>
          Where required, we present a consent banner on your first visit so you
          can accept or decline non-essential cookies, and you can change your
          choice at any time. You can also control cookies through your browser
          settings, though disabling some cookies may affect how the site works.
        </p>
      </LegalBlock>

      <LegalBlock n="05" title="Updates">
        <p>
          We may update this Cookie Policy as our use of cookies changes or as
          the law requires. The date above reflects the latest revision.
        </p>
      </LegalBlock>

      <LegalBlock n="06" title="Contact">
        <p>
          Questions about our use of cookies can be sent to
          contact@pkdigitalllc.com or to PK DIGITAL LLC, 2335 E. Atlantic Blvd,
          STE 200, Pompano Beach, FL 33062, United States.
        </p>
      </LegalBlock>
    </LegalShell>
  );
}
