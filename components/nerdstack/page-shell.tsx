import type { ReactNode } from "react"
import { Navbar } from "@/components/nerdstack/navbar"
import { CtaFooter } from "@/components/nerdstack/cta-footer"
import { Reveal } from "@/components/nerdstack/reveal"

type PageShellProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-paper-cream">
      <Navbar />

      {/* Page header */}
      <header className="relative overflow-hidden px-4 pt-32 pb-12 sm:pt-40">
        <div
          aria-hidden
          className="ns-halo pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at center, var(--color-core-coral) 0%, var(--color-cache-sand) 55%, transparent 75%)",
            opacity: 0.35,
          }}
        />
        <div className="relative mx-auto max-w-[820px] text-center">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-lift-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.75px] text-midnight-ink/60">
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80} as="h1" className="mt-5 text-balance font-display text-[40px] font-normal leading-[1.05] tracking-[-1.5px] text-midnight-ink sm:text-[56px]">
            {title}
          </Reveal>
          <Reveal delay={160} as="p" className="mx-auto mt-5 max-w-[520px] text-pretty text-[17px] font-light leading-[1.6]" >
            <span style={{ color: "#231f23a3" }}>{description}</span>
          </Reveal>
        </div>
      </header>

      <div className="px-4 pb-8">{children}</div>

      <CtaFooter />
    </main>
  )
}
