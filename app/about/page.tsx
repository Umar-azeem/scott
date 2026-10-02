import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  BadgeCheck,
  Users,
  Clock,
  Sparkles,
  Handshake,
  TrendingUp,
  FileText,
  Target,
  CheckCircle,
  Zap,
  MessageCircle,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Donnell Green | Fairway Independent Mortgage",
  description:
    "Meet Donnell Green, your local loan officer at Fairway Independent Mortgage Corporation. Learn about his story, mission, and why clients trust him for home purchasing and refinancing.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Your Trusted Loan Officer"
      description="Expert guidance, transparent terms, and a process built for home buyers and refinancers."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── HERO SECTION ─────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[32px] border border-border bg-[#0F6D69] shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            {/* Decorative blurs */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#0F6D69]/5 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#0F6D69]/5 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row lg:justify-between">
              {/* Left Content */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white">
                  HI, I'M
                </span>
                <h1 className="font-display text-4xl font-bold tracking-tight text-midnight-ink sm:text-5xl">
                  Donnell Green,
                  <br />
                  <span className="text-white">Your Local Loan Officer</span>
                </h1>
                <p className="max-w-2xl text-sm text-midnight-ink/70 sm:text-base">
                  I'm a loan officer at Fairway Independent Mortgage Corporation
                  where we specialize in home purchasing and home refinancing
                  with a ton of products for both. I have been in the mortgage
                  industry for 6 years, finance for 10 years, sales for 11
                  years, and customer service for 21 years.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
                  <Link href="/contact">
                    <Button className="bg-black text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                      Get Pre-Approved
                    </Button>
                  </Link>
                  <a href="tel:+16679002913">
                    <Button
                      variant="outline"
                      className="border-[#0F6D69] text-[#0F6D69] transition-all duration-300 hover:bg-[#0F6D69] hover:text-white"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Donnell
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="shrink-0">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-96 lg:w-96 ">
                  <div className="absolute inset-0 rounded-full bg-[#0F6D69]/10" />
                  <Image
                    src="/img/dp.png"
                    alt="Donnell Green"
                    fill
                    className="rounded-full h-52 w-64 border-4 border-[#0F6D69]/20 object-cover shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-2 shadow-lg">
                    <BadgeCheck className="h-7 w-7 text-[#0F6D69]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── OUR STORY ────────────────────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                  About Donnell
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Building Relationships That Last
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  Hello friends, family, and future referral partners. My name
                  is Donnell Green. I'm a loan officer at Fairway Independent
                  Mortgage Corporation where we specialize in home purchasing
                  and home refinancing with a ton of products for both.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  I have been in the mortgage industry for 6 years, finance for
                  10 years, sales for 11 years, and customer service for 21
                  years. My goal is to build a relationship with my customers
                  that helps them feel that they are completely satisfied and
                  respected throughout the entire mortgage process.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  I want my clients to feel important and educated on the entire
                  process. My many years of experience and tenacity will help
                  showcase my industry product knowledge and my absolute
                  integrity and back by Fairway's support system, it will help
                  ease the mortgage process and make your transaction seamless.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  My work ethic and passion to deliver 100% customer
                  satisfaction will guarantee loyal customers for life.
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Donnell Green office"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── VALUES GRID ──────────────────────────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: FileText,
              title: "Transparency",
              desc: "Clear rates, terms, and expectations.",
            },
            {
              icon: Zap,
              title: "Speed with Care",
              desc: "Move quickly without sacrificing guidance.",
            },
            {
              icon: MessageCircle,
              title: "Expert Advice",
              desc: "Match clients with the right loan product.",
            },
            {
              icon: Handshake,
              title: "Relationship First",
              desc: "Build long-standing partnerships, not one-time transactions.",
            },
            {
              icon: TrendingUp,
              title: "Client Growth",
              desc: "Support clients as they build wealth through homeownership.",
              className: "sm:col-span-2 lg:col-span-1",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 70}>
              <div
                className={`flex flex-col rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 ${
                  item.className || ""
                }`}
              >
                <item.icon
                  className="h-7 w-7 text-[#0F6D69]"
                  strokeWidth={1.8}
                />
                <h3 className="mt-3 font-display text-xl font-semibold text-midnight-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-midnight-ink/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ─── OUR HISTORY ──────────────────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="flex-1 p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                  Experience You Can Trust
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  21 Years of Service
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  With 6 years in the mortgage industry, 10 years in finance, 11
                  years in sales, and 21 years in customer service, I bring a
                  wealth of experience to every transaction. My background has
                  taught me the importance of listening, educating, and
                  advocating for my clients.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  Backed by Fairway Independent Mortgage Corporation's powerful
                  support system, I help ease the mortgage process and make your
                  transaction seamless. Whether you're buying your first home or
                  refinancing, I'm here to guide you every step of the way.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-midnight-ink">
                    5.00 · 39 Reviews
                  </span>
                </div>
                <p className="mt-1 text-xs text-midnight-ink/50">
                  NMLS# 1217575
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Donnell Green experience"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── WHY CHOOSE ───────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
              Why Choose Donnell
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-midnight-ink">
              Strategic Mortgage Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
              I provide strategic mortgage solutions built to move you forward
              with confidence, clarity, and long‑term partnership.
            </p>
          </section>
        </Reveal>

        {/* ─── OUR MISSION ───────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] border border-border bg-[#0F6D69] p-8 text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            </div>
            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
                My Mission
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold">
                Your Homeownership <br />
                Journey Starts Here.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/80 leading-relaxed">
                My mission is to deliver 100% customer satisfaction by making
                the mortgage process seamless, educational, and respectful. I
                want you to feel important and confident every step of the way.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ─── HOW IT WORKS ──────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                How It Works
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Simple, Fast, Transparent
              </h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Apply Online In Minutes",
                  desc: "Start with a simple application – no hidden paperwork.",
                },
                {
                  icon: Clock,
                  title: "Decision as fast as 24 hours",
                  desc: "Get a response quickly so you can plan ahead.",
                },
                {
                  icon: Sparkles,
                  title: "Close with Confidence",
                  desc: "Get the right loan for your home purchase or refinance.",
                },
              ].map((step, idx) => (
                <Reveal key={step.title} delay={idx * 70}>
                  <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0F6D69]/10 text-[#0F6D69]">
                      <step.icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-midnight-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-midnight-ink/60">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button className="bg-[#0F6D69] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* ─── CONTACT INFO ─────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                Contact Donnell
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Let's Connect
              </h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center">
                <Phone className="h-7 w-7 text-[#0F6D69]" strokeWidth={1.8} />
                <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                  Office & Cell
                </h3>
                <a
                  href="tel:+16679002913"
                  className="mt-1 text-sm text-[#0F6D69] hover:underline"
                >
                  (667) 900-2913
                </a>
              </div>
              <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center">
                <Target className="h-7 w-7 text-[#0F6D69]" strokeWidth={1.8} />
                <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                  Address
                </h3>
                <p className="mt-1 text-sm text-midnight-ink/60">
                  40 W. Chesapeake Ave,
                  <br />
                  Suite 400
                  <br />
                  Towson, MD 21204
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs text-midnight-ink/40">
                NMLS# 1217575 · Fairway Independent Mortgage Corporation
              </p>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}