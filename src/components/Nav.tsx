import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="text-lg font-semibold tracking-tight">Valuento</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#methodology" className="hover:text-foreground">Method</a>
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#flywheel" className="hover:text-foreground">Insights</a>
        </nav>
        <a
          href="#book"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
        >
          Book a growth review →
        </a>
      </div>
    </header>
  );
}
