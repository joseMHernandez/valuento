const steps = [
  {
    n: "01",
    title: "Audit",
    sub: "Weeks 1–2",
    body: "We map the leaks. Traffic sources, conversion paths, message-market fit, and the three pages costing you the most revenue. You leave week two with a numbered punch list — whether you hire us or not.",
  },
  {
    n: "02",
    title: "Build",
    sub: "Weeks 3–8",
    body: "We ship the website. Outcome-focused hero, ICP filter, proof above the fold, a single dominant CTA. Built on Next.js. Live in six weeks, not six months.",
  },
  {
    n: "03",
    title: "Compound",
    sub: "Month 3 onward",
    body: "We run weekly experiments against your funnel and publish a content flywheel that earns inbound while you sleep. Every test reports back to one number: pipeline created.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            The method
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            The Compound Growth System™
          </h2>
          <p className="mt-5 text-lg text-muted">
            Three stages. One outcome: a website that pays for itself in 90 days
            and keeps paying.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  {s.sub}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
