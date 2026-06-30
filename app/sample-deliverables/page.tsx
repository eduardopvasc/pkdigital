"use client";

import {
  Nav,
  Footer,
  PageHero,
  Reveal,
  CTA,
  useReduce,
} from "@/components/site";
import { IconDocument } from "@/components/icons";
import {
  SAMPLE_DELIVERABLES,
  samplePdfPath,
  type SampleSection,
} from "@/lib/sample-deliverables";

function SectionBlock({ section }: { section: SampleSection }) {
  return (
    <div>
      <h4 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-accent-strong">
        {section.heading}
      </h4>
      {section.body ? (
        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
          {section.body}
        </p>
      ) : null}
      {section.bullets ? (
        <ul className="mt-3 space-y-2">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      {section.table ? (
        <div className="mt-4 overflow-hidden rounded-xl border border-line">
          <table className="w-full border-collapse text-left text-[13.5px]">
            <thead>
              <tr className="bg-white/[0.03]">
                {section.table.head.map((h) => (
                  <th
                    key={h}
                    className="border-b border-line px-4 py-2.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-faint"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 ? "bg-white/[0.015]" : ""}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-2.5 ${ci === 0 ? "text-white" : "text-muted"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {section.note ? (
        <p className="mt-3 font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-faint">
          {section.note}
        </p>
      ) : null}
    </div>
  );
}

export default function SampleDeliverablesPage() {
  const reduce = useReduce();

  return (
    <>
      <Nav />
      <main>
        <PageHero
          reduce={reduce}
          kicker="Sample deliverables"
          title="Examples of the work we deliver."
          lead="Representative, illustrative samples of the documents produced in a NOREN engagement. Each is clearly watermarked SAMPLE — they are templates, not real client work, with no real client data."
        />

        <section className="border-b border-line">
          <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-8 md:py-20">
            {/* Honest framing */}
            <Reveal reduce={reduce} className="mb-12">
              <div className="rounded-2xl border border-accent/25 bg-accent/[0.05] p-5 md:p-6">
                <p className="text-[14px] leading-relaxed text-muted">
                  <span className="text-white">A note on these samples.</span>{" "}
                  These documents illustrate the format and depth of what NOREN
                  produces. They use a fictional “Sample Client” and illustrative
                  figures, are watermarked SAMPLE, and contain no real client
                  data. Actual deliverables are produced per engagement inside
                  your private workspace.
                </p>
              </div>
            </Reveal>

            <div className="space-y-10">
              {SAMPLE_DELIVERABLES.map((doc) => (
                <Reveal key={doc.slug} reduce={reduce}>
                  <article className="relative overflow-hidden rounded-2xl border border-line bg-surface">
                    {/* Watermark */}
                    <span
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      aria-hidden
                    >
                      <span className="-rotate-[22deg] select-none font-[family-name:var(--font-display)] text-[5rem] font-bold tracking-[0.2em] text-white/[0.035] md:text-[8rem]">
                        SAMPLE
                      </span>
                    </span>

                    <div className="relative">
                      {/* Document header */}
                      <div className="flex flex-col gap-4 border-b border-line p-7 sm:flex-row sm:items-start sm:justify-between md:p-9">
                        <div>
                          <div className="flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-faint">
                            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                            {doc.kind} · Sample
                          </div>
                          <h2 className="display-md mt-3">{doc.title}</h2>
                          <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-muted">
                            {doc.summary}
                          </p>
                        </div>
                        <a
                          href={samplePdfPath(doc.slug)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white hover:border-accent/45"
                        >
                          <IconDocument className="h-4 w-4 text-accent-strong" />
                          Download PDF
                        </a>
                      </div>

                      {/* Meta */}
                      <div className="grid gap-px overflow-hidden border-b border-line bg-line sm:grid-cols-3">
                        {doc.meta.map((m) => (
                          <div key={m.label} className="bg-surface px-7 py-4 md:px-9">
                            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-faint">
                              {m.label}
                            </div>
                            <div className="mt-1 text-[14px] text-white">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Body */}
                      <div className="grid gap-8 p-7 md:grid-cols-2 md:p-9">
                        {doc.sections.map((s) => (
                          <SectionBlock key={s.heading} section={s} />
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA
          reduce={reduce}
          kicker="Get started"
          title="Ready to receive work like this?"
          lead="Choose a plan to continue to secure checkout, or see exactly how the engagement runs."
          primaryHref="/plans"
          primaryLabel="View plans"
          secondaryHref="/how-it-works"
          secondaryLabel="See how it works"
        />
      </main>
      <Footer />
    </>
  );
}
