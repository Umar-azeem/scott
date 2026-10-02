"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Reveal } from "@/components/nerdstack/reveal"

type Plan = {
  name: string
  monthly: number
  blurb: string
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: "Hobby",
    monthly: 0,
    blurb: "For solo devs and side projects.",
    features: ["1 repository", "Live tracing", "7-day history", "Community support"],
  },
  {
    name: "Team",
    monthly: 24,
    blurb: "For teams shipping every day.",
    features: ["Unlimited repositories", "Plain-language reviews", "90-day history", "Docs sync", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: 80,
    blurb: "For orgs with scale and compliance needs.",
    features: ["Everything in Team", "SSO & SAML", "Unlimited history", "Audit logs", "Dedicated support"],
  },
]

export function PricingPlans() {
  const [annual, setAnnual] = useState(true)

  return (
    <div className="mx-auto max-w-[1000px]">
      {/* Billing toggle */}
      <Reveal>
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className={`text-[14px] font-light transition-colors ${!annual ? "text-midnight-ink" : "text-midnight-ink/50"}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 rounded-full border border-border bg-linen-base transition-colors"
          >
            <span
              className="absolute top-0.5 size-5 rounded-full bg-midnight-ink transition-all duration-300"
              style={{ left: annual ? "26px" : "3px" }}
            />
          </button>
          <span className={`text-[14px] font-light transition-colors ${annual ? "text-midnight-ink" : "text-midnight-ink/50"}`}>
            Annual
          </span>
          <span className="rounded-full bg-syntax-mint px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.75px] text-midnight-ink">
            Save 20%
          </span>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const price = annual ? Math.round(plan.monthly * 0.8) : plan.monthly
          return (
            <Reveal key={plan.name} delay={i * 90}>
              <article
                className={`flex h-full flex-col rounded-[20px] border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  plan.highlighted ? "border-transparent bg-midnight-ink text-paper-cream" : "border-border bg-lift-white"
                }`}
                style={{ boxShadow: "var(--shadow-card-soft)" }}
              >
                {plan.highlighted && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-core-coral px-3 py-1 font-mono text-[10px] uppercase tracking-[0.75px] text-paper-cream">
                    Most popular
                  </span>
                )}
                <h3 className={`font-display text-[22px] tracking-[-0.5px] ${plan.highlighted ? "text-paper-cream" : "text-midnight-ink"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-[14px] font-light ${plan.highlighted ? "text-paper-cream/70" : ""}`} style={plan.highlighted ? undefined : { color: "#231f23a3" }}>
                  {plan.blurb}
                </p>
                <div className="mt-6 flex items-end gap-1">
                  <span className={`font-display text-[44px] leading-none tracking-[-1.5px] tabular-nums transition-all duration-300 ${plan.highlighted ? "text-paper-cream" : "text-midnight-ink"}`}>
                    ${price}
                  </span>
                  <span className={`mb-1 text-[14px] font-light ${plan.highlighted ? "text-paper-cream/70" : "text-midnight-ink/60"}`}>
                    /mo
                  </span>
                </div>
                <a
                  href="#"
                  className={`mt-6 rounded-lg px-4 py-3 text-center text-[15px] font-light transition-transform duration-300 hover:-translate-y-0.5 ${
                    plan.highlighted ? "bg-paper-cream text-midnight-ink" : "bg-midnight-ink text-paper-cream"
                  }`}
                >
                  {plan.monthly === 0 ? "Start free" : "Get started"}
                </a>
                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-[14px] font-light ${plan.highlighted ? "text-paper-cream/85" : "text-midnight-ink/80"}`}>
                      <Check className={`size-4 shrink-0 ${plan.highlighted ? "text-syntax-mint" : "text-verdant-pass"}`} strokeWidth={2.2} />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
