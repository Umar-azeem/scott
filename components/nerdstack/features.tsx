"use client";

import { useState } from "react";
import {
  Home,
  RefreshCw,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ⚠️ PLACEHOLDER TESTIMONIALS — replace with verified client reviews
// (with written permission) before publishing. Do NOT use real client
// data without consent.
const testimonials = [
  {
    key: "first-time",
    label: "First-Time Home Buyer",
    Icon: Home,
    tint: "var(--color-packet-sky)",
    author: "Verified Client", // TODO: replace with real name
    quote:
      "Testimonial coming soon. Scott's verified client reviews will appear here once approved for publication.",
    image: "/img/testimonial-1.jpg", // TODO: replace with real image
    meta: {
      closed: "", // TODO: replace with real data
      loanType: "",
      rate: "",
      onTime: "",
      fees: "",
      tags: [],
    },
  },
  {
    key: "credit",
    label: "Credit-Challenged Buyer",
    Icon: Star,
    tint: "var(--color-qubit-orchid)",
    author: "Verified Client", // TODO
    quote:
      "Testimonial coming soon. Scott's verified client reviews will appear here once approved for publication.",
    image: "/img/testimonial-2.jpg", // TODO
    meta: {
      closed: "",
      loanType: "",
      rate: "",
      onTime: "",
      fees: "",
      tags: [],
    },
  },
  {
    key: "refinance",
    label: "Purchase & Refinance",
    Icon: RefreshCw,
    tint: "var(--color-syntax-mint)",
    author: "Verified Client", // TODO
    quote:
      "Testimonial coming soon. Scott's verified client reviews will appear here once approved for publication.",
    image: "/img/testimonial-3.jpg", // TODO
    meta: {
      closed: "",
      loanType: "",
      rate: "",
      onTime: "",
      fees: "",
      tags: [],
    },
  },
];

export function Features() {
  const [active, setActive] = useState(0);
  const tab = testimonials[active];

  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px]">
        {/* Header with button on the right */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-[600px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-midnight-ink/50">
              Testimonials
            </span>
            <h2 className="mt-4 text-balance font-display text-[40px] font-normal leading-[1.1] tracking-[-1px] text-midnight-ink sm:text-[48px]">
              What My Clients Are Saying...
            </h2>
            {/* Rating summary — hidden until verified reviews exist */}
            {/* 
            <div className="mt-4 flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-[#212843] text-[#212843]"
                />
              ))}
              <span className="ml-2 text-sm text-midnight-ink/60">
                5 Stars ∙ XX Reviews
              </span>
            </div>
            */}
          </div>
          <Link
            href="/testimonials"
            className="mt-2 inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-border bg-lift-white px-5 py-3 text-sm font-medium text-midnight-ink transition-colors hover:bg-midnight-ink/5"
          >
            VIEW MORE TESTIMONIALS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Tab switcher */}
        <div className="mt-10 flex flex-wrap gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className="flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-[12px] uppercase tracking-[0.75px] transition-colors duration-200"
              style={{
                borderColor: active === i ? "transparent" : "var(--border)",
                background:
                  active === i
                    ? "var(--color-navy-base)"
                    : "var(--color-lift-white)",
                color: active === i ? "var(--color-paper-cream)" : "#231f23a3",
              }}
            >
              <t.Icon className="size-3.5" strokeWidth={2} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div key={`copy-${tab.key}`} className="ns-fade-up">
            <span
              className="flex size-12 items-center justify-center rounded-xl"
              style={{ background: tab.tint }}
            >
              <tab.Icon
                className="size-6 text-midnight-ink"
                strokeWidth={1.8}
              />
            </span>
            <h3 className="mt-5 text-balance font-display text-[32px] font-normal leading-[1.15] tracking-[-0.5px] text-midnight-ink">
              {tab.author}
            </h3>
            <p
              className="mt-4 text-[16px] font-light leading-[1.6] italic"
              style={{ color: "#231f23a3" }}
            >
              "{tab.quote}"
            </p>

            {/* Tags */}
            {tab.meta.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tab.meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#212843]/10 px-2.5 py-0.5 text-xs text-[#212843]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Loan meta */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-midnight-ink/50">
              {tab.meta.closed && <span>Loan Status: {tab.meta.closed}</span>}
              {tab.meta.loanType && (
                <span>Loan Type: {tab.meta.loanType}</span>
              )}
              {tab.meta.rate && <span>Interest Rate: {tab.meta.rate}</span>}
              {tab.meta.onTime && <span>Close on time: {tab.meta.onTime}</span>}
              {tab.meta.fees && <span>Fees: {tab.meta.fees}</span>}
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={tab.image}
              alt={tab.author}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}