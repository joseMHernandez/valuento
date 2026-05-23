const cases = [
  {
    client: "Hudson Dental Group",
    vertical: "Multi-location dental · UES + Brooklyn",
    person: "Dr. Priya Shah",
    role: "Managing Partner",
    initials: "PS",
    metric: "+312%",
    metricLabel: "new-patient bookings · 6 months",
    quote:
      "We replaced three months of agency PowerPoints with a website Valuento shipped in six weeks. Our calendar has been full ever since.",
  },
  {
    client: "Madison Legal",
    vertical: "Boutique immigration law · Midtown",
    person: "Marcus Lin",
    role: "Founding Partner",
    initials: "ML",
    metric: "$1.4M",
    metricLabel: "pipeline added in Q1",
    quote:
      "They rewrote our positioning in two weeks. Our cost per qualified consultation dropped 64% and we stopped competing on price.",
  },
  {
    client: "Tribeca Pilates",
    vertical: "Boutique fitness · 4 NYC studios",
    person: "Elena Park",
    role: "Founder & CEO",
    initials: "EP",
    metric: "9.2×",
    metricLabel: "ROI on website spend, year one",
    quote:
      "Other agencies pitched a rebrand. Valuento pitched a number. Year one we cleared 9× the engagement fee — and we own every asset.",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Selected work
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Numbers, not vibes.
            </h2>
          </div>
          <a
            href="#book"
            className="hidden text-sm text-muted hover:text-foreground md:inline"
          >
            See all case studies →
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.client}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/30"
            >
              <div className="text-xs uppercase tracking-widest text-muted">
                {c.vertical}
              </div>
              <div className="mt-2 text-xl font-semibold">{c.client}</div>

              <div className="mt-8">
                <div className="text-5xl font-semibold tracking-tight text-accent md:text-6xl">
                  {c.metric}
                </div>
                <div className="mt-2 text-sm text-muted">{c.metricLabel}</div>
              </div>

              <p className="mt-8 text-foreground/90">&ldquo;{c.quote}&rdquo;</p>

              <div className="mt-8 flex items-center gap-3 border-t border-border/60 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-medium text-accent">
                  {c.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{c.person}</div>
                  <div className="text-xs text-muted">{c.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
