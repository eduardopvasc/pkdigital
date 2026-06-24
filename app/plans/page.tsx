"use client";

import { Nav, Footer, PageHero, CTA, useReduce } from "@/components/site";
import { PricingPlans } from "@/components/plans";

export default function PlansPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="Plans"
          title="Simple plans for structured growth."
          lead="Clear engagement tiers for brands that want stronger strategy, better execution, and scalable growth systems."
        />

        <section className="border-b border-line">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
            <PricingPlans reduce={reduce} />
          </div>
        </section>

        <CTA
          reduce={reduce}
          kicker="Get started"
          title="Build Your Growth Infrastructure"
          lead="Start with a strategy call. We'll recommend the tier that fits where your brand is today."
          primaryHref="/contact"
          primaryLabel="Book a Strategy Call"
          secondaryHref="/framework"
          secondaryLabel="Explore the Framework"
        />
      </main>
      <Footer />
    </>
  );
}
