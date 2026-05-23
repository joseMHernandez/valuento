const includes = [
  "Positioning + message-market fit audit",
  "Full website rebuild on Next.js",
  "Conversion + analytics instrumentation",
  "Weekly experiment cadence",
  "Monthly pipeline scorecard",
  "Direct Slack access to your growth lead",
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Pricing, in public
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Engagements start at{" "}
              <span className="text-accent">$8,000/month.</span>
            </h2>
            <p className="mt-6 text-lg text-muted">
              90-day minimum, then month-to-month. No annual contracts, no
              ramp-up fees, no surprise line items. If the work isn&apos;t
              moving the number we agreed on, you can leave at any monthly
              cycle.
            </p>
            <p className="mt-4 text-sm text-muted">
              Most engagements land between $8k–$18k/month depending on scope.
              We&apos;ll quote the floor or ceiling honestly on the first call.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-sm uppercase tracking-widest text-muted">
              What&apos;s included
            </div>
            <ul className="mt-6 space-y-3.5">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    className="mt-0.5 shrink-0 text-accent"
                    fill="none"
                  >
                    <path
                      d="M4 10.5l4 4 8-9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.01]"
            >
              Book a 20-min growth review →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
