import type { Metadata } from "next"
import { PageShell } from "@/components/nerdstack/page-shell"
import { PricingPlans } from "@/components/nerdstack/pricing-plans"

export const metadata: Metadata = {
  title: "Pricing — Nerdstack",
  description: "Simple, transparent pricing that scales with your team.",
}

export default function PricingPage() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Pricing that scales with your team"
      description="Start free, upgrade when you need more. No seat games, no surprise invoices."
    >
      <PricingPlans />
    </PageShell>
  )
}
