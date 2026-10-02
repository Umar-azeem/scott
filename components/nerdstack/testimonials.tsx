const items = [
  {
    quote:
      "Nerdstack turned a three-day incident hunt into a twenty-minute read. It explained the failure like a patient staff engineer.",
    name: "Mara Ellison",
    role: "Staff Engineer, Vercel",
    tint: "var(--color-packet-sky)",
    initials: "ME",
  },
  {
    quote:
      "The PR reviews are eerily good. Calm, exact, and they catch the edge cases my team keeps missing.",
    name: "Devin Park",
    role: "Eng Lead, Linear",
    tint: "var(--color-qubit-orchid)",
    initials: "DP",
  },
  {
    quote:
      "Our docs finally match reality. Nerdstack regenerates them from the running system every deploy.",
    name: "Sofia Reyes",
    role: "Platform, Supabase",
    tint: "var(--color-syntax-mint)",
    initials: "SR",
  },
]

export function Testimonials() {
  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto max-w-[560px] text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-midnight-ink/50">
            Field notes
          </span>
          <h2 className="mt-4 text-balance font-display text-[40px] font-normal leading-[1.1] tracking-[-1px] text-midnight-ink sm:text-[48px]">
            Engineers who stopped guessing
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-[20px] border border-border bg-lift-white p-8"
              style={{ boxShadow: "var(--shadow-card-soft)" }}
            >
              <blockquote className="text-[16px] font-light leading-[1.5]" style={{ color: "#231f23a3" }}>
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  className="flex size-12 items-center justify-center rounded-[12px] font-display text-[16px] text-midnight-ink"
                  style={{ background: t.tint }}
                >
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <span className="text-[14px] font-medium text-midnight-ink">{t.name}</span>
                  <span className="text-[13px] font-light" style={{ color: "#231f23a3" }}>
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
