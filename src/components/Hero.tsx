export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          NYC growth team · Taking 3 clients for Q3 2026
        </div>

        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          We build the website that brings you{" "}
          <span className="text-accent">your next 100 customers.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Valuento is the growth team for NYC service businesses doing $500K–$10M,
          ready to scale without hiring an in-house marketing department.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
          >
            Book a 20-min growth review →
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:border-foreground/40"
          >
            See client results
          </a>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-3 gap-8 border-t border-border/60 pt-8 text-sm">
          <div>
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">3.4×</div>
            <div className="mt-1 text-muted">Avg. pipeline lift in 90 days</div>
          </div>
          <div>
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">$8k</div>
            <div className="mt-1 text-muted">Engagement floor · 90-day min</div>
          </div>
          <div>
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">12</div>
            <div className="mt-1 text-muted">NYC service brands shipped</div>
          </div>
        </div>
      </div>
    </section>
  );
}
