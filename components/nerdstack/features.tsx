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

const testimonials = [
  {
    key: "first-time",
    label: "First-Time Home Buyer",
    Icon: Home,
    tint: "var(--color-packet-sky)",
    author: "SWillliams, Fort Washington, MD",
    quote:
      "I am writing to express my sincere gratitude for the exceptional service and support scott provided throughout my mortgage application process. From our initial consultation to the final closing, his professionalism and expertise made what could have been a daunting experience much smoother and more manageable. His willingness to answer every question gave me complete confidence.",
    image: "/img/jrb.jpg", // replace with actual image path
    meta: {
      closed: "Closed Apr 2025",
      loanType: "Purchase",
      rate: "As expected",
      onTime: "Yes",
      fees: "Lower than expected",
      tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
    },
  },
  {
    key: "credit",
    label: "Low Credit Score",
    Icon: Star,
    tint: "var(--color-qubit-orchid)",
    author: "Kingsley Amoasie, Hagerstown, MD",
    quote:
      "scott was an absolute game-changer in my home-buying experience! From the start, he went above and beyond to ensure everything went smoothly. Not only was he incredibly knowledgeable and responsive, but he also took the time to provide me with personalized advice and tips to help improve my credit score. He truly cared about my success.",
    image: "/img/jrb2.jpg",
    meta: {
      closed: "Closed Oct 2024",
      loanType: "Purchase",
      rate: "Lower than expected",
      onTime: "Yes",
      fees: "",
      tags: ["30 year fixed", "FHA Loan", "Low credit score"],
    },
  },
  {
    key: "refinance",
    label: "Purchase & Refinance",
    Icon: RefreshCw,
    tint: "var(--color-syntax-mint)",
    author: "L S, Upper Marlboro, MD",
    quote:
      "Working with scott Green was an exceptional experience! From start to finish, he was professional, knowledgeable, and incredibly responsive. He patiently answered all my questions, helped me navigate the process with ease, and ensured I got the best rate possible. His attention to detail and dedication made what could have been a stressful process feel effortless.",
    image: "/img/jrb3.jpg",
    meta: {
      closed: "Closed Oct 2024",
      loanType: "Purchase",
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
            {/* Rating summary */}
            <div className="mt-4 flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-[#232A45] text-[#232A45]"
                />
              ))}
              <span className="ml-2 text-sm text-midnight-ink/60">
                5 Stars ∙ 39 Reviews
              </span>
            </div>
          </div>
          <Link
            href="/reviews"
            className="mt-2 inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-border bg-lift-white px-5 py-3 text-sm font-medium text-midnight-ink transition-colors hover:bg-midnight-ink/5"
          >
            VIEW MORE TESTIMONIALS HERE
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
                    ? "var(--color-midnight-ink)"
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
                    className="rounded-full bg-[#0F6D69]/10 px-2.5 py-0.5 text-xs text-[#0F6D69]"
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