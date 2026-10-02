"use client";
import { Reveal } from "@/components/nerdstack/reveal";
import { BookOpen, ArrowRight, PlayCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import Cards from "../cards";

const socialLinks = [
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/", // TODO: confirm Scott's LinkedIn URL
    label: "LinkedIn",
  },
  // {
  //   id: "zillow",
  //   icon: FaGoogle, // swap for SiZillow from react-icons/si if available
  //   url: "", // TODO: confirm Scott's Zillow profile URL
  //   label: "Zillow",
  // },
];

const columns = [
  {
    title: "Mortgage",
    links: [
      { label: "Home Purchase", href: "/loan-options" },
      { label: "Refinance", href: "/loan-options" },
      { label: "VA Home Loans", href: "/loan-options" },
      { label: "First-Time Buyers", href: "/loan-options" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Loan Process", href: "/about" },
      { label: "FAQs", href: "/faq" },
      { label: "Reviews", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Scott", href: "/about" },
      {
        label: "NEXA Mortgage, LLC",
        href: "https://www.nexamortgage.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/", // TODO: confirm
      },
      { label: "NMLS# 1492315", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function CtaFooter() {
  return (
    <section className="px-4 pb-2">
      {/* CTA stage */}
      <div className="relative mx-auto mb-8 max-w-[1000px] overflow-hidden rounded-[20px] border border-border bg-linen-base px-6 py-20 text-center">
        <div
          aria-hidden
          className="ns-halo pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at center, var(--color-core-coral) 0%, var(--color-cache-sand) 55%, transparent 75%)",
            opacity: 0.5,
          }}
        />
        <Reveal>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <section className="rounded-[24px]  p-8  hover:-translate-y-1 sm:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="rounded-full bg-[#212843]/10 p-3">
                  <BookOpen
                    className="h-8 w-8 text-[#212843]"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Label */}
                <span className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#212843]">
                  Education
                </span>

                {/* Heading */}
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-midnight-ink sm:text-4xl">
                  Confidence At Your Fingertips.
                </h2>

                {/* Description */}
                <p className="mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                  Make informed mortgage decisions with confidence. From
                  step‑by‑step breakdowns to transparent loan comparisons and
                  real client testimonials, everything you need to understand
                  your home financing options lives here.
                </p>

                {/* Primary CTA */}
                <Link
                  href="/resources"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#212843] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#161b2e] hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View All Resources
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary CTAs */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-light text-midnight-ink/60 transition-colors hover:text-[#212843]"
                  >
                    <PlayCircle className="h-4 w-4" strokeWidth={1.6} />
                    HOW IT WORKS
                  </Link>
                  <span className="text-midnight-ink/20">•</span>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 text-sm font-light text-midnight-ink/60 transition-colors hover:text-[#212843]"
                  >
                    <HelpCircle className="h-4 w-4" strokeWidth={1.6} />
                    FREQUENTLY ASKED QUESTIONS
                  </Link>
                </div>
              </div>
            </section>
            <Cards />
          </div>
        </Reveal>
      </div>

      {/* Footer card */}
      <footer
        className="mx-auto max-w-[1000px] rounded-[20px] border border-border bg-[#212843] p-8 sm:p-12"
        style={{ boxShadow: "var(--shadow-card-soft)" }}
      >
        <div className="grid gap-10 flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2">
              <span className="flex  items-center justify-center rounded-lg bg-white text-paper-cream">
                <Image
                  src="/img/logo.png"
                  alt="Scott J Moon - NEXA Mortgage"
                  width={120}
                  height={30}
                  className="h-16 w-28 object-contain"
                />
              </span>
            </a>
            <p className="mt-4 max-w-[240px] text-[14px] text-white font-light leading-[1.5]">
              Personalized mortgage guidance for purchases, refinancing, and VA
              home loans.
            </p>
            <p className="mt-2 text-[12px] text-white/70 font-light">
              NMLS# 1492315
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ id, icon: Icon, url, label }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-lift-white text-midnight-ink transition hover:bg-[#212843] hover:text-lift-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
                {col.title}
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] font-light text-white transition-colors duration-300 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info strip */}
        <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
              Phone
            </span>
            <p className="mt-1 text-[14px] font-light text-white">
              <a href="tel:+12023525625" className="hover:underline">
                (202) 352-5625
              </a>
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
              Email
            </span>
            <p className="mt-1 text-[14px] font-light text-white break-all">
              <a
                href="mailto:smoon@nexamortgage.com"
                className="hover:underline"
              >
                smoon@nexamortgage.com
              </a>
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-white/50">
              Company
            </span>
            <p className="mt-1 text-[14px] font-light text-white leading-[1.5]">
              NEXA Mortgage, LLC
              <br />
              NMLS# 1660690
            </p>
          </div>
        </div>

        {/* Equal Housing / Compliance */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-6 text-center text-[11px] text-white/70 font-light">
          <span>Equal Housing Opportunity</span>
          <span className="text-white/30">•</span>
          <span>Equal Credit Opportunity Act</span>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <span
            className="text-[13px] font-light"
            style={{ color: "#ffffffb3" }}
          >
            © {new Date().getFullYear()} Scott J Moon · NEXA Mortgage, LLC. All
            rights reserved.
          </span>
          <span className="rounded-full bg-[#6a7899] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.75px] text-white">
            NMLS# 1492315
          </span>
        </div>
      </footer>
    </section>
  );
}