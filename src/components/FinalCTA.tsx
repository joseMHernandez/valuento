export default function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[160px]" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Book a 20-min growth review.
        </h2>
        <p className="mt-6 text-lg text-muted">
          Bring your homepage. We&apos;ll bring three specific changes that
          would move your numbers in the next 30 days. No pitch. No deck. No
          obligation.
        </p>
        <a
          href="https://cal.com/valuento"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-black transition-transform hover:scale-[1.02]"
        >
          Book my review →
        </a>
        <p className="mt-4 text-xs text-muted">
          Currently booking for Q3 2026. 3 spots remaining.
        </p>
      </div>
    </section>
  );
}
