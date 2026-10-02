"use client";

import { useState } from "react";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Phone,
  Mail,
  Globe,
  HelpCircle,
  MessageCircle,
  FileText,
  Home,
  DollarSign,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: Home,
    faqs: [
      {
        question: "What's the first step to buying a home?",
        answer:
          "The first step is getting pre-qualified. This gives you a realistic idea of what you may be able to afford, shows sellers you're a serious buyer, and helps you shop with confidence. I'll review your income, assets, and credit, then provide a pre-qualification letter. From there, we'll connect you with a real estate agent if you don't already have one and guide you through the entire process.",
      },
      {
        question: "How long does the mortgage process take?",
        answer:
          "From application to closing, most home purchases take 30–45 days. Refinances typically close in 21–30 days. With NEXA's support system and my client-service background, I help keep your transaction seamless and on track. I'll give you a clear timeline upfront and keep you updated at every milestone.",
      },
      {
        question: "Do I need a real estate agent?",
        answer:
          "While not required, having a buyer's agent is highly recommended — and typically costs you nothing, as the seller usually pays the commission. I work with a trusted network of agents and can connect you with someone who fits your needs. If you already have an agent, I'm happy to coordinate directly with them.",
      },
      {
        question: "What documents do I need to get started?",
        answer:
          "Typically, you'll need: recent pay stubs (30 days), W-2s or tax returns (2 years), bank statements (2 months), a government-issued ID, and proof of any other income. If you're self-employed, we'll need additional documentation. I'll provide a personalized checklist so you know exactly what's needed — no guesswork.",
      },
    ],
  },
  {
    id: "loan-options",
    label: "Loan Options",
    icon: FileText,
    faqs: [
      {
        question: "What types of loans do you offer?",
        answer:
          "I offer a wide range of products including Conventional, FHA, VA, USDA, Jumbo, and Adjustable-Rate Mortgages (ARMs). I also specialize in refinancing — rate-and-term, cash-out, and streamline options. We'll match you with the right loan based on your goals, credit, and long-term plans.",
      },
      {
        question: "What's the difference between FHA and Conventional loans?",
        answer:
          "FHA loans are government-insured, allowing lower credit scores (as low as 580) and down payments as low as 3.5%. Conventional loans typically require higher credit (620+) but can offer lower mortgage insurance costs and more flexibility for well-qualified buyers. I'll compare both side-by-side so you can see which saves you more over time.",
      },
      {
        question: "Should I choose a fixed-rate or adjustable-rate mortgage?",
        answer:
          "Fixed-rate mortgages lock in your interest rate for the life of the loan — ideal if you plan to stay long-term. ARMs start lower but adjust after an initial period — often better if you plan to sell or refinance within 5–7 years. We'll review your timeline and risk tolerance to choose wisely.",
      },
      {
        question: "Can I get a loan if I'm self-employed?",
        answer:
          "Absolutely. I work with many self-employed borrowers and have access to bank statement loans, profit-and-loss statement loans, and other flexible documentation options. We'll review your income streams and find a program that fits.",
      },
    ],
  },
  {
    id: "rates-costs",
    label: "Rates & Costs",
    icon: DollarSign,
    faqs: [
      {
        question: "How are interest rates determined?",
        answer:
          "Rates are influenced by market conditions, the Federal Reserve, your credit score, down payment, loan type, and term. I monitor rates daily and will lock you in at the best possible time. I'll also show you how buying points or adjusting your down payment can lower your rate.",
      },
      {
        question: "What closing costs should I expect?",
        answer:
          "Closing costs typically range from 2%–5% of the loan amount and include lender fees, title insurance, appraisal, and prepaid taxes/insurance. I'll provide a Loan Estimate within 3 business days of your application so there are no surprises. I also offer options to cover closing costs through seller concessions or lender credits.",
      },
      {
        question: "Do you offer no-closing-cost refinances?",
        answer:
          "Yes — in some cases, we can roll closing costs into the loan or accept a slightly higher rate to cover them. Whether this makes sense depends on how long you plan to stay in the home. I'll run the numbers so you can decide with confidence.",
      },
      {
        question: "How much do I need for a down payment?",
        answer:
          "It depends on the loan program. FHA requires 3.5%, Conventional as low as 3%, VA and USDA can be 0%. I also work with down payment assistance programs where available. We'll explore every option to minimize your out-of-pocket costs.",
      },
    ],
  },
  {
    id: "process-support",
    label: "Process & Support",
    icon: ShieldCheck,
    faqs: [
      {
        question: "What happens after I apply?",
        answer:
          "Once you apply, I'll review your documents and send your file to processing. An appraiser will be ordered, your loan will go through underwriting, and we'll work through any conditions together. I'll keep you informed at every step and coordinate with your agent, title company, and attorney to ensure a smooth closing.",
      },
      {
        question: "Will I work with you directly throughout the process?",
        answer:
          "Yes. Unlike some lenders where you're passed between departments, I stay personally involved from application to closing. My years of client-service experience means you'll always feel respected, informed, and important. You'll have my direct line — (202) 352-5625 — for any questions.",
      },
      {
        question: "What if my credit isn't perfect?",
        answer:
          "That's okay — many of my clients don't have perfect credit. I'll review your situation, suggest quick improvements, and match you with programs that work for your score today. I also offer credit-building guidance so you can qualify for better terms in the future.",
      },
      {
        question: "Can I get pre-qualified before house hunting?",
        answer:
          "Absolutely — and you should. Pre-qualification gives you a clear budget, strengthens your offer, and speeds up the process once you find a home. I offer fast pre-qualifications so you can shop with confidence.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState("getting-started");

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const activeFaqs =
    faqCategories.find((cat) => cat.id === activeCategory)?.faqs || [];

  return (
    <PageShell
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      description="Everything you need to know about working with Scott J Moon at NEXA Mortgage, LLC."
    >
      <div className="mx-auto max-w-[1000px] space-y-12">
        {/* ─── INTRO ─────────────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[32px] border border-border bg-[#212843] p-8 text-center shadow-card-soft sm:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <HelpCircle className="h-8 w-8 text-white" strokeWidth={1.6} />
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Your Questions, Answered
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 leading-relaxed">
                Whether you're buying your first home, refinancing, or exploring
                your financing options, I've compiled answers to the questions I
                hear most often. If you don't see yours here, reach out — I'm
                always happy to help.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="tel:+12023525625">
                  <Button className="bg-white text-[#212843] shadow-md transition-all duration-300 hover:bg-[#161b2e] hover:text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (202) 352-5625
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white transition-all duration-300 hover:bg-white hover:text-[#212843]"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── CATEGORY TABS ─────────────────────────────────────────── */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-[#212843] bg-[#212843] text-white shadow-md"
                      : "border-border bg-lift-white text-midnight-ink hover:border-[#212843] hover:text-[#212843]"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ─── FAQ LIST ──────────────────────────────────────────────── */}
        <div className="space-y-4">
          {activeFaqs.map((faq, idx) => {
            const key = `${activeCategory}-${idx}`;
            const isOpen = openItems[key];
            return (
              <Reveal key={key} delay={idx * 50}>
                <div className="overflow-hidden rounded-[20px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-0.5">
                  <button
                    onClick={() => toggleItem(key)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[#212843]/5"
                  >
                    <span className="font-display text-lg font-semibold text-midnight-ink">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#212843] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-midnight-ink/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ─── SERVICE AREA SECTION ─────────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="grid lg:grid-cols-2">
              {/* Left — Visual panel */}
              <div className="relative flex items-center justify-center bg-[#212843] p-10 lg:min-h-[420px]">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                <div className="relative text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                    <Globe className="h-10 w-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    Serving Borrowers Nationwide
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    Licensed through NEXA Mortgage, LLC
                    <br />
                    NMLS# 1660690
                  </p>
                </div>
              </div>

              {/* Right — Details */}
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
                  Work With Me
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Flexible &amp; Accessible
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  Whether you prefer meeting in person, over the phone, or
                  virtually, I'm here to make the mortgage process convenient
                  for you. Get in touch and we'll find a time that works.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#212843]/10 text-[#212843]">
                      <Phone className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-ink">
                        Direct Line
                      </p>
                      <a
                        href="tel:+12023525625"
                        className="text-sm text-[#212843] hover:underline"
                      >
                        (202) 352-5625
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#212843]/10 text-[#212843]">
                      <Mail className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-ink">Email</p>
                      <a
                        href="mailto:smoon@nexamortgage.com"
                        className="text-sm text-[#212843] hover:underline break-all"
                      >
                        smoon@nexamortgage.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#212843]/10 text-[#212843]">
                      <Clock className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight-ink">
                        Availability
                      </p>
                      <p className="text-sm text-midnight-ink/60">
                        Mon – Fri: 8:30 AM – 6:00 PM
                        <br />
                        <span className="text-xs text-midnight-ink/40">
                          Evenings &amp; weekends by appointment
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button className="bg-[#212843] text-white shadow-md transition-all duration-300 hover:bg-[#161b2e] hover:shadow-lg">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </Button>
                  </Link>
                  <a href="tel:+12023525625">
                    <Button
                      variant="outline"
                      className="border-[#212843] text-[#212843] transition-all duration-300 hover:bg-[#212843] hover:text-white"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── STILL HAVE QUESTIONS ─────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
                Still Have Questions?
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Let's Talk It Through
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                Every situation is unique. If your question isn't answered here,
                reach out directly — I'll give you a straight answer, no
                pressure, no obligation.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <a
                href="tel:+12023525625"
                className="group flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#212843]/10 text-[#212843] transition group-hover:bg-[#212843] group-hover:text-white">
                  <Phone className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-midnight-ink">
                  Call or Text
                </h3>
                <p className="mt-1 text-sm text-[#212843]">(202) 352-5625</p>
              </a>

              <a
                href="mailto:smoon@nexamortgage.com"
                className="group flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#212843]/10 text-[#212843] transition group-hover:bg-[#212843] group-hover:text-white">
                  <Mail className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-midnight-ink">
                  Email Me
                </h3>
                <p className="mt-1 text-xs text-[#212843] break-all">
                  smoon@nexamortgage.com
                </p>
              </a>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button className="bg-[#212843] text-white shadow-md transition-all duration-300 hover:bg-[#161b2e] hover:shadow-lg">
                  Get Pre-Qualified Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* ─── DISCLAIMER ───────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white/50 p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-midnight-ink/50">
              <ShieldCheck className="h-4 w-4" />
              <span>
                Scott J Moon · NMLS# 1492315 · NEXA Mortgage, LLC NMLS# 1660690
              </span>
            </div>
            <p className="mt-2 text-xs text-midnight-ink/40 leading-relaxed">
              This information is for educational purposes only and does not
              constitute a commitment to lend. All loans subject to credit
              approval and property appraisal. Rates and terms subject to
              change. Equal Housing Opportunity.
            </p>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}