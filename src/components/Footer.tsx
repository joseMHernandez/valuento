export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="font-semibold tracking-tight">Valuento</span>
          <span className="ml-3 text-sm text-muted">
            The growth team for NYC service businesses.
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="mailto:hello@valuento.com" className="hover:text-foreground">
            hello@valuento.com
          </a>
          <a href="#book" className="hover:text-foreground">
            Book a review
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
