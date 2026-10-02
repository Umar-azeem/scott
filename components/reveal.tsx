"use client";

import { Reveal } from "@/components/nerdstack/reveal";
import {
  Eye,
  Zap,
  MessageCircle,
  Handshake,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
} from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear rates, terms, and expectations",
  },
  {
    icon: Zap,
    title: "Speed with Care",
    description: "Move quickly without sacrificing guidance.",
  },
  {
    icon: MessageCircle,
    title: "Expert Advice",
    description: "Match businesses with the right funding option.",
  },
  {
    icon: Handshake,
    title: "Relationship First",
    description: "Build long-standing partnerships, not one-time transactions.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "We support companies as they grow and evolve.",
  },
];

const stats = [
  {
    icon: Clock,
    label: "Flexible Repayment Terms",
  },
  {
    icon: Users,
    label: "1000+ Funded Business Owners",
  },
  {
    icon: DollarSign,
    label: "$175M in Lending Since 2018",
  },
];

export function ValuesSection() {
  return (
    <section className="space-y-12">
      {/* ─── Values Grid ───────────────────────────────────────────── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 70}>
            <div className="rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#0F6D69]/10 p-2.5 text-[#0F6D69]">
                  <item.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-semibold text-midnight-ink">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-midnight-ink/60 pl-[52px]">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ─── Stats Bar ──────────────────────────────────────────────── */}
      <Reveal>
        <div className="grid grid-cols-1 gap-4 rounded-[24px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:grid-cols-3 sm:p-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 text-center sm:border-r sm:border-border last:border-r-0"
            >
              <stat.icon className="h-6 w-6 text-[#0F6D69]" strokeWidth={1.6} />
              <span className="font-display text-sm font-medium text-midnight-ink">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
