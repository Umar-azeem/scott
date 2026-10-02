"use client";

import { useState } from "react";
import {
  CheckCircle,
  Clock,
  Wallet,
  Building,
  BarChart3,
  Calendar,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Home,
  Percent,
  FileCheck,
  Users,
  Award,
} from "lucide-react";

type TabKey = "overview" | "features" | "requirements" | "rates" | "example";

interface Tab {
  id: TabKey;
  label: string;
}

// ─── Background images for each tab ────────────────────────────────
const tabImages: Record<TabKey, string> = {
  overview: "/img/h1.jpg",
  features: "/img/h2.jpg",
  requirements: "/img/h3.jpg",
  rates: "/img/h4.jpg",
  example: "/img/h5.jpg",
};

const tabs: Tab[] = [
  { id: "overview", label: "Things to know" },
  { id: "features", label: "Why work with Scott" },
  { id: "requirements", label: "What you'll need" },
  { id: "rates", label: "Rates & Costs" },
  { id: "example", label: "Loan Example" },
];

export default function TabSec() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              What You Need To Know
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              A mortgage is a loan used to purchase or refinance a home,
              typically repaid over 15 to 30 years. Scott helps you understand
              which loan program fits your goals, income, and long-term plans.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  <strong className="text-white">Purchase or refinance:</strong>{" "}
                  Whether you&apos;re buying your first home, moving up, or
                  restructuring your current mortgage, there&apos;s a program
                  designed for your situation.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  <strong className="text-white">Loan programs:</strong>{" "}
                  Conventional, FHA, VA, USDA, and jumbo options are available
                  depending on your eligibility and goals.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  <strong className="text-white">Pre-qualification first:</strong>{" "}
                  Understanding your potential buying power before you shop
                  helps you make confident, informed decisions.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  <strong className="text-white">Education-first approach:</strong>{" "}
                  Scott walks you through every step — from application to
                  closing — so nothing feels confusing or rushed.
                </span>
              </li>
            </ul>
          </div>
        );

      case "features":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              Why Work With Scott
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              A mortgage experience built around you — not a call center.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  title: "Personal attention",
                  desc: "Every client gets individual attention and a mortgage strategy based on their specific goals.",
                },
                {
                  icon: Clock,
                  title: "Clear communication",
                  desc: "Understand what's happening at every stage of your mortgage journey.",
                },
                {
                  icon: ShieldCheck,
                  title: "Problem solving",
                  desc: "When challenges arise, Scott works to identify solutions and keep your transaction moving.",
                },
                {
                  icon: FileCheck,
                  title: "Education first",
                  desc: "Understand your options before making important financing decisions.",
                },
                {
                  icon: Award,
                  title: "Start-to-finish support",
                  desc: "From your initial conversation to closing, receive guidance throughout the entire process.",
                  className: "sm:col-span-2",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/40 hover:shadow-lg ${
                    item.className || ""
                  }`}
                >
                  <item.icon className="mb-2 size-5 text-white" />
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "requirements":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              What You&apos;ll Typically Need
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Requirements vary by loan program, but here&apos;s what most
              borrowers should have ready.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: DollarSign,
                  title: "Income documentation",
                  desc: "Recent pay stubs, W-2s, or tax returns depending on your employment type.",
                },
                {
                  icon: Building,
                  title: "Asset statements",
                  desc: "Bank and investment statements to verify down payment and reserves.",
                },
                {
                  icon: BarChart3,
                  title: "Credit profile",
                  desc: "Most programs have minimum credit score requirements. Scott can review yours and discuss options.",
                },
                {
                  icon: ShieldCheck,
                  title: "Employment history",
                  desc: "A stable employment history (typically 2 years) strengthens your application.",
                },
                {
                  icon: Home,
                  title: "Property details",
                  desc: "Once you're under contract, the property itself is reviewed as part of the process.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/40"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <item.icon className="size-5 text-white" />
                  </span>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="mt-0.5 text-sm text-white/70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );

      case "rates":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              Understanding Mortgage Rates & Costs
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Your rate depends on several factors. Scott helps you understand
              the full picture — not just the headline number.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Credit score",
                  desc: "Higher scores typically unlock lower rates and better program options.",
                },
                {
                  title: "Down payment",
                  desc: "Larger down payments can reduce risk and may lower your rate.",
                },
                {
                  title: "Loan type & term",
                  desc: "FHA, VA, conventional, and jumbo loans each have different rate structures.",
                },
                {
                  title: "Closing costs",
                  desc: "Beyond the rate, expect lender fees, title, appraisal, and prepaid items.",
                },
                {
                  title: "Rate locks",
                  desc: "Locking your rate protects you from market changes during the process.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/40"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-medium text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="mt-0.5 text-sm text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "example":
        return (
          <div className="space-y-5">
            <h3 className="text-xl font-light text-white sm:text-2xl">
              EXAMPLE: A first-time buyer purchasing a $350,000 home with 10%
              down.
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Home Price", value: "$350,000" },
                { label: "Down Payment (10%)", value: "$35,000" },
                { label: "Loan Amount", value: "$315,000" },
                { label: "Loan Term", value: "30 Years" },
                {
                  label: "Estimated Monthly Payment",
                  value: "~$2,100",
                  className: "sm:col-span-2",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm ${
                    item.className || ""
                  }`}
                >
                  <span className="text-sm font-light text-white/60">
                    {item.label}
                  </span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-white/20 p-6 text-center backdrop-blur-sm">
              <p className="text-sm font-light text-white/70">
                Every situation is different
              </p>
              <p className="text-2xl font-light text-white">
                Let&apos;s find your numbers
              </p>
              <p className="mt-1 text-xs text-white/50">
                (Illustrative example only — not a rate quote or commitment)
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getButtonLabel = () => {
    switch (activeTab) {
      case "example":
        return "Get Started";
      default:
        return "Get Pre-Qualified";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#EEDBCC] py-16 sm:py-20">
      {/* Scrollbar styling for the tab bar, in brand color #0F6D69 */}
      <style jsx>{`
        .tab-scroll {
          scrollbar-width: thin;
          scrollbar-color: #0f6d69 transparent;
        }
        .tab-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .tab-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .tab-scroll::-webkit-scrollbar-thumb {
          background-color: #0f6d69;
          border-radius: 9999px;
        }
        .tab-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #96694f;
        }
      `}</style>
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 size-64 rounded-full bg-[#0F6D69]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-[#0F6D69]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ─── Header ─── */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[#0F6D69]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#0F6D69]">
            Loan Programs
          </span>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-midnight-ink sm:text-4xl">
            Explore Your <span className="text-[#0F6D69]">Loan Options</span>
          </h2>
          <p className="mt-2 text-sm text-midnight-ink/50">
            Understand your mortgage options with clear, personalized guidance
          </p>
        </div>

        {/* ─── Tabs ─── */}
        <div className="relative z-20">
          {/* Unified scrollable tab bar — works the same on mobile and desktop */}
          <div className="tab-scroll -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex w-max min-w-full gap-1 rounded-2xl border border-[#EEDBCC] bg-white/70 p-1 backdrop-blur-sm sm:w-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 touch-manipulation whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-light transition-all duration-300 active:scale-95 sm:px-5 ${
                    activeTab === tab.id
                      ? "bg-[#0F6D69] text-white shadow-md"
                      : "text-midnight-ink/60 hover:bg-[#EEDBCC]/50 hover:text-midnight-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Content Panel with Background Image ─── */}
          <div className="relative mt-6 overflow-hidden rounded-2xl">
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
              <img
                src={tabImages[activeTab]}
                alt=""
                className="h-full w-full object-cover blur-sm"
                style={{ transform: "scale(1.05)" }}
              />
              {/* 40% warm overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(168, 126, 98, 0.4)" }}
              />
              {/* Extra dark gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 text-white sm:p-8">
              {renderContent()}

              {/* CTA Button */}
              <div className="mt-8 flex justify-center border-t border-white/20 pt-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-light text-[#0F6D69] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.25)]"
                >
                  {getButtonLabel()}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}