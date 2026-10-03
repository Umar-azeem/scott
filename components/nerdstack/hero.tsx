"use client";

import {
  Home,
  Key,
  Calculator,
  ShieldCheck,
  Handshake,
  FileText,
  ArrowRight,
  Phone,
  Mail,
  Users,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    id: "facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/", // TODO: confirm Scott's Facebook URL
    label: "Facebook",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/", // TODO: confirm Scott's Instagram URL
    label: "Instagram",
  },
  // {
  //   id: "google",
  //   icon: FaGoogle,
  //   url: "", // add Scott's Google Business profile URL
  //   label: "Google",
  // },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/", // TODO: confirm Scott's LinkedIn URL
    label: "LinkedIn",
  },
  {
    id: "twitter",
    icon: FaXTwitter,
    url: "https://x.com/", // TODO: confirm Scott's X URL
    label: "X",
  },
];

// ─── Floating Icons ────────────────────────────────────────────────────
const floatingTiles = [
  {
    Icon: Home,
    bg: "var(--color-packet-sky)",
    cls: "left-0 top-10 ns-float",
    delay: "0s",
  },
  {
    Icon: Key,
    bg: "var(--color-core-coral)",
    cls: "right-2 top-0 ns-float",
    delay: "1.1s",
  },
  {
    Icon: Calculator,
    bg: "var(--color-syntax-mint)",
    cls: "left-6 bottom-4 ns-float",
    delay: "0.6s",
  },
  {
    Icon: ShieldCheck,
    bg: "var(--color-qubit-orchid)",
    cls: "right-0 bottom-10 ns-float",
    delay: "1.6s",
  },
  {
    Icon: Handshake,
    bg: "var(--color-cache-sand)",
    cls: "left-24 top-0 ns-float hidden lg:flex",
    delay: "0.3s",
  },
  {
    Icon: FileText,
    bg: "var(--color-latency-peach)",
    cls: "right-24 bottom-0 ns-float hidden lg:flex",
    delay: "2s",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-core-coral) 0%, var(--color-cache-sand) 55%, transparent 75%)",
          opacity: 0.55,
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-0 hidden sm:block">
        {floatingTiles.map(({ Icon, bg, cls, delay }, i) => (
          <span
            key={i}
            className={`absolute flex size-16 items-center justify-center rounded-2xl border border-border bg-lift-white ${cls}`}
            style={{
              boxShadow: "var(--shadow-dropdown)",
              animationDelay: delay,
            }}
          >
            <span
              className="flex size-10 items-center justify-center rounded-xl"
              style={{ background: bg }}
            >
              <Icon className="size-5 text-midnight-ink" strokeWidth={1.8} />
            </span>
          </span>
        ))}
      </div>

      {/* ─── Main Grid ─── */}
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* ─── RIGHT COLUMN: Text Content ─── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="ns-fade-up inline-flex items-center gap-2.5 rounded-full border border-border bg-lift-white px-4 py-1.5 font-mono text-[11px] tracking-[0.5px] text-midnight-ink/70">
            <Users className="size-4 text-core-coral" strokeWidth={1.8} />
            <span className="font-bold text-midnight-ink">NMLS</span>
            #1492315
          </div>

          {/* Heading */}
          <h1
            className="ns-fade-up mt-6 font-display font-normal tracking-[-2px] text-midnight-ink"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1 }}
          >
            <span className="block text-[0.4em] font-mono text-sm tracking-[2px] text-midnight-ink/40">
              HI, I'M
            </span>
            Scott Moon,
          </h1>

          {/* Subtitle */}
          <p className="ns-fade-up mt-4 text-2xl font-light text-midnight-ink/64">
            Your Local Mortgage Professional
          </p>

          {/* Description */}
          <p className="ns-fade-up mt-2 max-w-sm text-base font-light leading-relaxed text-midnight-ink/50">
            My name is Scott Moon, and I’m a mortgage professional dedicated to
            helping individuals and families navigate the home financing process
            with confidence. With years of experience in the mortgage industry
            and a strong background in client service, I focus on providing
            personalized guidance for home purchases, refinancing, and a variety
            of mortgage solutions. I believe the mortgage process should be
            straightforward, transparent, and centered around the client. My
            approach is built on listening to each client’s goals, explaining
            their available options, and providing consistent support from the
            initial consultation through closing. I also have specialized
            experience working with veterans and military borrowers, helping
            them better understand their home financing options. Whether you're
            purchasing your first home, moving into your next home, refinancing
            your current mortgage, or exploring VA loan options, my goal is to
            make the process easier to understand and provide a mortgage
            experience built around your individual needs.
          </p>
          <div
            className="ns-fade-up mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            style={{ animationDelay: "0.15s" }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#232A45] px-6 py-3 text-sm font-light text-paper-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(35,31,35,0.35)]"
            >
              <Phone className="size-4" strokeWidth={1.6} />
              Schedule Intro Call
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+12023525625"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[rgba(35,31,35,0.06)] px-6 py-3 text-sm font-light text-midnight-ink transition-all duration-300 hover:bg-[rgba(35,31,35,0.1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(35,31,35,0.12)]"
            >
              <Phone className="size-4" strokeWidth={1.6} />
              Call Us
            </a>
          </div>
        </div>
        <div
          className="ns-fade-up relative"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="relative overflow-hidden ">
            {/* Profile Image */}
            <div
              className="aspect-[3/4] w-full "
              style={{ minHeight: "400px" }}
            >
              <img
                src="/img/dp.png"
                alt="Scott J Moon, Mortgage Professional"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
        <div class="flex h-full w-full rounded-3xl shadow-4xl shadow-midnight-ink/10 bg-gradient-to-br from-[#f5e6d3] to-[#d4c5b2]  items-center justify-center text-6xl font-light tracking-tight text-midnight-ink/80">
          SM
        </div>
      `;
                  }
                }}
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/60 bg-white/95 p-5 backdrop-blur-xl shadow-lg sm:bottom-6 sm:left-6 sm:right-6 md:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                {/* Name + Credentials */}
                <div>
                  <h3 className="font-display text-xl font-normal tracking-[-0.5px] text-midnight-ink">
                    Scott Moon
                  </h3>
                  <p className="text-xs font-light text-midnight-ink/60">
                    Mortgage Professional · Mortgage Maniac
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-midnight-ink/50">
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-core-coral" />
                      NMLS 1492315
                    </span>
                    <span className="hidden text-border sm:inline">|</span>
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-core-coral" />
                      NEXA Mortgage, LLC NMLS# 1660690
                    </span>
                  </div>
                </div>

                {/* Contact Icons */}
                <div className="flex items-center gap-2">
                  {/* Phone */}
                  <a
                    href="tel:+12023525625"
                    className="rounded-full bg-[rgba(35,31,35,0.05)] p-2.5 text-midnight-ink/60 transition-all hover:bg-[rgba(35,31,35,0.1)] hover:text-core-coral hover:shadow-md"
                    aria-label="Call Scott Moon"
                  >
                    <Phone className="size-4" strokeWidth={1.6} />
                  </a>
                  {/* Email */}
                  <a
                    href="mailto:smoon@nexamortgage.com"
                    className="rounded-full bg-[rgba(35,31,35,0.05)] p-2.5 text-midnight-ink/60 transition-all hover:bg-[rgba(35,31,35,0.1)] hover:text-core-coral hover:shadow-md"
                    aria-label="Email Scott Moon"
                  >
                    <Mail className="size-4" strokeWidth={1.6} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}