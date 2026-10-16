export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <a aria-label="DATIA home" className="flex items-center gap-3 font-semibold tracking-tight" href="#home">
          <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            D
          </span>
          <span className="text-lg">DATIA</span>
        </a>
        <span className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
          APP STARTER
        </span>
      </header>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20" id="home">
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
            A clean slate for what&apos;s next
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Your next idea starts here.
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            DATIA is ready for its first build. This fast, flexible foundation gives you a clear place to shape what comes next.
          </p>
          <a className="mt-9 inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="#starter">
            Explore the starter
            <span aria-hidden="true" className="ml-3 text-base">→</span>
          </a>
        </div>

        <aside aria-labelledby="starter-title" className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8" id="starter">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Foundation / 001</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight" id="starter-title">A good place to begin</h2>
            </div>
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-medium text-primary">↳</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The essentials are in place. Open a page file and start making it yours.
          </p>
          <div className="mt-7 overflow-hidden rounded-xl bg-foreground p-5 text-background">
            <p className="mb-4 font-mono text-xs text-background/60">YOUR PROJECT, READY</p>
            <ul className="space-y-3 font-mono text-xs sm:text-sm">
              <li className="flex items-center gap-3"><span className="text-primary">/</span><span>app/page.tsx</span><span className="ml-auto text-background/50">home</span></li>
              <li className="flex items-center gap-3"><span className="text-primary">/</span><span>app/layout.tsx</span><span className="ml-auto text-background/50">metadata</span></li>
              <li className="flex items-center gap-3"><span className="text-primary">/</span><span>app/globals.css</span><span className="ml-auto text-background/50">theme</span></li>
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Included technologies">
            <span className="rounded-md bg-muted px-2.5 py-1.5 font-mono text-xs text-muted-foreground">Next.js 16</span>
            <span className="rounded-md bg-muted px-2.5 py-1.5 font-mono text-xs text-muted-foreground">TypeScript</span>
            <span className="rounded-md bg-muted px-2.5 py-1.5 font-mono text-xs text-muted-foreground">Tailwind CSS 4</span>
          </div>
        </aside>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-border px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>DATIA · Ready for your first build</span>
        <span className="font-mono">Next.js · App Router</span>
      </footer>
    </main>
  )
}
