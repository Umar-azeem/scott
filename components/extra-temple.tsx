"use client"

import { useState } from "react"
import { Bug, ScanSearch, FileCode2, Check } from "lucide-react"
import Image from "next/image"

const tabs = [
  {
    key: "debug",
    label: "DEBUG",
    Icon: Bug,
    tint: "var(--color-packet-sky)",
    title: "Find the root cause, not the symptom",
    body: "Nerdstack walks the call graph, correlates traces, and points at the exact line that broke — with a plain-language explanation of why.",
    points: ["Cross-service trace stitching", "Blast-radius estimation", "One-click reproduction"],
    code: [
      { t: "critical", c: "var(--color-core-coral)", l: "TypeError: cannot read 'id' of undefined" },
      { t: "trace", c: "var(--color-packet-sky)", l: "→ order.service.ts:142 · getUser()" },
      { t: "cause", c: "var(--color-cache-sand)", l: "session expired before hydrate" },
      { t: "fix", c: "var(--color-syntax-mint)", l: "guard null session · retry once" },
    ],
  },
  {
    key: "review",
    label: "REVIEW",
    Icon: ScanSearch,
    tint: "var(--color-qubit-orchid)",
    title: "Reviews that read like a senior engineer",
    body: "Every PR gets a calm, exact summary of intent, risk, and edge cases — so humans can focus on judgment, not diff-scrolling.",
    points: ["Intent summaries per commit", "Risk-scored change surfaces", "Suggested test coverage"],
    code: [
      { t: "review", c: "var(--color-qubit-orchid)", l: "PR #482 · 6 files · +214 −38" },
      { t: "risk", c: "var(--color-signal-amber)", l: "medium — touches auth middleware" },
      { t: "note", c: "var(--color-packet-sky)", l: "add test: expired token path" },
      { t: "pass", c: "var(--color-syntax-mint)", l: "ready to merge after 1 fix" },
    ],
  },
  {
    key: "docs",
    label: "DOCS",
    Icon: FileCode2,
    tint: "var(--color-syntax-mint)",
    title: "Documentation that stays true",
    body: "Nerdstack generates docs from the running system and keeps them synced as the code evolves — no more stale wikis.",
    points: ["Auto-synced API references", "Architecture diagrams", "Inline usage examples"],
    code: [
      { t: "docs", c: "var(--color-syntax-mint)", l: "generated 128 pages · synced 2m ago" },
      { t: "api", c: "var(--color-packet-sky)", l: "POST /v2/trace — 4 params" },
      { t: "diff", c: "var(--color-cache-sand)", l: "3 endpoints changed this week" },
      { t: "ok", c: "var(--color-syntax-mint)", l: "coverage 96% of public surface" },
    ],
  },
]

export function Features() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px]">
        <div className="max-w-[600px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-midnight-ink/50">
            Capabilities
          </span>
          <h2 className="mt-4 text-balance font-display text-[40px] font-normal leading-[1.1] tracking-[-1px] text-midnight-ink sm:text-[48px]">
            One system that reads your whole stack
          </h2>
        </div>

        {/* tab switcher */}
        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className="flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-[12px] uppercase tracking-[0.75px] transition-colors duration-200"
              style={{
                borderColor: active === i ? "transparent" : "var(--border)",
                background: active === i ? "var(--color-midnight-ink)" : "var(--color-lift-white)",
                color: active === i ? "var(--color-paper-cream)" : "#231f23a3",
              }}
            >
              <t.Icon className="size-3.5" strokeWidth={2} />
              {t.label}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div key={`copy-${tab.key}`} className="ns-fade-up">
            <span
              className="flex size-12 items-center justify-center rounded-xl"
              style={{ background: tab.tint }}
            >
              <tab.Icon className="size-6 text-midnight-ink" strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 text-balance font-display text-[32px] font-normal leading-[1.15] tracking-[-0.5px] text-midnight-ink">
              {tab.title}
            </h3>
            <p className="mt-4 max-w-[440px] text-[16px] font-light leading-[1.5]" style={{ color: "#231f23a3" }}>
              {tab.body}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {tab.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[16px] font-light text-midnight-ink">
                  <span className="flex size-5 items-center justify-center rounded-full bg-syntax-mint">
                    <Check className="size-3 text-midnight-ink" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
{/* <Image
  src="/img/jrb.jpg"
  alt="Features"
  width={600}
  height={400}
/> */}
 <div
            key={`code-${tab.key}`}
            className="ns-fade-up rounded-[20px] border border-white/5 bg-obsidian-depth p-6"
            style={{ boxShadow: "var(--shadow-card-soft)" }}
          >
            <div className="mb-4 flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-core-coral" />
              <span className="size-2.5 rounded-full bg-signal-amber" />
              <span className="size-2.5 rounded-full bg-verdant-pass" />
            </div>
            <div className="flex flex-col gap-3 font-mono text-[13px]">
              {tab.code.map((line, i) => (
                <div
                  key={line.l}
                  className="ns-fade-up flex items-center gap-3"
                  style={{ animationDelay: `${i * 0.09}s` }}
                >
                  <span
                    className="w-16 shrink-0 rounded px-1.5 py-0.5 text-center text-[10px] uppercase tracking-[0.75px]"
                    style={{ background: "rgba(247,246,245,0.06)", color: line.c }}
                  >
                    {line.t}
                  </span>
                  <span className="text-paper-cream/80">{line.l}</span>
                </div>
              ))}
            </div>
          </div> 
          
        </div>
      </div>
    </section>
  )
}
