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
  title: "About — Scott J Moon | NEXA Mortgage, LLC",
  description:
    "Meet Scott J Moon, a mortgage professional at NEXA Mortgage, LLC. Learn about his story, mission, and why clients trust him for home purchasing, refinancing, and VA home loans.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Your Trusted Mortgage Professional"
      description="Personalized guidance, transparent terms, and a process built for homebuyers, refinancers, and veterans."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── HERO SECTION ─────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[32px] border border-border bg-[#212843] shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            {/* Decorative blurs */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#212843]/5 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#212843]/5 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row lg:justify-between">
              {/* Left Content */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white">
                  HI, I'M
                </span>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white/70 sm:text-5xl">
                  Scott J Moon,
                  <br />
                  <span className="text-white">
                    Your Local Mortgage Professional
                  </span>
                </h1>
                <p className="max-w-2xl text-sm text-white/70 sm:text-base">
                  I'm a mortgage professional at NEXA Mortgage, LLC where we
                  specialize in home purchasing and refinancing with a variety
                  of loan programs for both. I also have specialized experience
                  working with veterans and military borrowers, helping them
                  better understand their home financing options.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
                  <Link href="/contact">
                    <Button className="bg-white text-[#212843] shadow-md transition-all duration-300 hover:bg-[#161b2e] hover:text-white hover:shadow-lg">
                      Get Pre-Qualified
                    </Button>
                  </Link>
                  <a href="tel:+12023525625">
                    <Button
                      variant="outline"
                      className="border-white text-white transition-all duration-300 hover:bg-white hover:text-[#212843]"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Scott
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="shrink-0">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-96 lg:w-96 ">
                  <div className="absolute inset-0 rounded-full bg-white" />
                  <Image
                    src="/img/dp.png"
                    alt="Scott J Moon"
                    fill
                    className="rounded-full h-58 w-64 border-4 border-[#212843]/20 object-cover shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-2 shadow-lg">
                    <BadgeCheck className="h-7 w-7 text-[#212843]" />
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
                <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
                  About Scott
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  More Than a Mortgage Transaction
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  With a background in hospitality sales and operations, Scott
                  brings a client-first approach to mortgage lending. His
                  experience taught him the importance of listening carefully,
                  communicating clearly, and following through on commitments.
                  Today, he applies those same principles to helping homebuyers
                  and homeowners navigate their financing options.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  Scott graduated from Texas A&M University and has built his
                  mortgage career around educating clients and helping them
                  make informed financing decisions. His professional background
                  also includes specialized experience serving veterans and
                  military borrowers.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  Scott believes the mortgage process should be about more than
                  paperwork and numbers. Every borrower has different goals,
                  circumstances, and questions. His approach is to understand
                  those needs first, explain the available options, and help
                  clients move forward with confidence.
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Scott Moon office"
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
                  className="h-7 w-7 text-[#212843]"
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
                <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
                  Experience You Can Trust
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  A Client-First Approach
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  With a background in hospitality sales and operations, Scott
                  brings a client-first approach to mortgage lending. His
                  experience has taught him the importance of listening,
                  educating, and advocating for his clients — principles he
                  applies to every transaction.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  Backed by NEXA Mortgage, LLC's powerful support system, Scott
                  helps ease the mortgage process and make your transaction
                  seamless. Whether you're buying your first home, refinancing,
                  or exploring VA financing, he's here to guide you every step
                  of the way.
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
                    Verified Reviews
                  </span>
                </div>
                <p className="mt-1 text-xs text-midnight-ink/50">
                  NMLS# 1492315
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Scott Moon experience"
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
            <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
              Why Choose Scott
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-midnight-ink">
              Strategic Mortgage Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
              Strategic mortgage solutions built to move you forward with
              confidence, clarity, and long-term partnership.
            </p>
          </section>
        </Reveal>

        {/* ─── OUR MISSION ───────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] border border-border bg-[#212843] p-8 text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
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
                My mission is to make the mortgage process straightforward,
                transparent, and centered around you. I want you to feel
                confident, informed, and supported every step of the way.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ─── HOW IT WORKS ──────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
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
                  title: "Start the Conversation",
                  desc: "Tell Scott about your homeownership goals and financial situation.",
                },
                {
                  icon: Clock,
                  title: "Review Your Options",
                  desc: "Explore mortgage programs and financing options that may fit your needs.",
                },
                {
                  icon: Sparkles,
                  title: "Move Toward Closing",
                  desc: "Scott helps guide you through the mortgage process until you're ready to close.",
                },
              ].map((step, idx) => (
                <Reveal key={step.title} delay={idx * 70}>
                  <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center transition-all duration-300 hover:bg-lift-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#212843]/10 text-[#212843]">
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
                <Button className="bg-[#212843] text-white shadow-md transition-all duration-300 hover:bg-[#161b2e] hover:shadow-lg">
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
              <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
                Contact Scott
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Let's Connect
              </h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center">
                <Phone className="h-7 w-7 text-[#212843]" strokeWidth={1.8} />
                <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                  Direct Line
                </h3>
                <a
                  href="tel:+12023525625"
                  className="mt-1 text-sm text-[#212843] hover:underline"
                >
                  (202) 352-5625
                </a>
              </div>
              <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center">
                <MessageCircle
                  className="h-7 w-7 text-[#212843]"
                  strokeWidth={1.8}
                />
                <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                  Email
                </h3>
                <a
                  href="mailto:smoon@nexamortgage.com"
                  className="mt-1 text-xs text-[#212843] hover:underline break-all"
                >
                  smoon@nexamortgage.com
                </a>
              </div>
              <div className="flex flex-col items-center rounded-[20px] border border-border bg-lift-white/50 p-6 text-center">
                <Target className="h-7 w-7 text-[#212843]" strokeWidth={1.8} />
                <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                  Company
                </h3>
                <p className="mt-1 text-sm text-midnight-ink/60">
                  NEXA Mortgage, LLC
                  <br />
                  NMLS# 1660690
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs text-midnight-ink/40">
                Scott J Moon · NMLS# 1492315 · NEXA Mortgage, LLC NMLS# 1660690
              </p>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}