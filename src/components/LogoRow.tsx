const trusted = [
  "Brooklyn Roasting Co.",
  "Hudson Dental Group",
  "Madison Legal",
  "Tribeca Pilates",
  "Flatiron Realty",
  "Greenpoint Plumbing",
  "Chelsea Med Spa",
  "Bowery Architects",
];

export default function LogoRow() {
  return (
    <section className="border-b border-border/60 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted">
          Trusted by NYC service businesses across 8 verticals
        </p>
        <div className="relative overflow-hidden">
          <div className="marquee flex w-max gap-12 whitespace-nowrap">
            {[...trusted, ...trusted].map((name, i) => (
              <span
                key={i}
                className="text-xl font-medium text-muted/80 md:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
