export default function Flywheel() {
  return (
    <section
      id="flywheel"
      className="relative overflow-hidden border-b border-border/60 py-24"
    >
      <div className="absolute -right-32 top-0 -z-10 h-[400px] w-[700px] rounded-full bg-accent/[0.07] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              The flywheel
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              The NYC Service Letter
            </h2>
            <p className="mt-6 text-lg text-muted">
              Every Tuesday: one teardown of an NYC service-business website,
              with the conversion fix attached. Read by 2,800 founders and
              owner-operators across the five boroughs.
            </p>

            <form className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@yourbusiness.com"
                className="flex-1 rounded-full border border-border bg-card px-5 py-3.5 text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-muted">
              Free. No spam. Unsubscribe in one click.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-xs uppercase tracking-widest text-muted">
              Latest issue · #47
            </div>
            <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight">
              Why your homepage&apos;s &ldquo;About&rdquo; section is
              costing you 30% of leads
            </h3>
            <p className="mt-4 text-sm text-muted">
              We audited the homepages of 41 NYC dental practices. The pattern
              is brutal — and the fix takes a single afternoon.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex text-sm font-medium text-accent"
            >
              Read the teardown →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
