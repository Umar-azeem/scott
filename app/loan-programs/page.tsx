// app/loan-programs/page.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { loanPrograms, LoanProgram } from "@/app/data/loanPrograms";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";

// ─── Helper: get icon component ──────────────────────────────────
const getIconComponent = (
  iconName: string,
): React.ComponentType<{ className?: string }> => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Shield: Icons.Shield,
    Star: Icons.Star,
    Building: Icons.Building,
    Building2: Icons.Building2,
    Home: Icons.Home,
    RefreshCw: Icons.RefreshCw,
    LineChart: Icons.LineChart,
    TrendingDown: Icons.TrendingDown,
    FileText: Icons.FileText,
    Users: Icons.Users,
    CreditCard: Icons.CreditCard,
    Lock: Icons.Lock,
    TrendingUp: Icons.TrendingUp,
    HelpCircle: Icons.HelpCircle,
    Activity: Icons.Activity,
    BarChart3: Icons.BarChart3,
    Calculator: Icons.Calculator,
    Landmark: Icons.Landmark,
    ArrowRight: Icons.ArrowRight,
    CheckCircle: Icons.CheckCircle,
    X: Icons.X,
    ChevronDown: Icons.ChevronDown,
    ArrowLeft: Icons.ArrowLeft,
  };
  return iconMap[iconName] || Icons.HelpCircle;
};

// ─── Loading skeleton ─────────────────────────────────────────────
function LoanProgramsLoading() {
  return (
    <PageShell
      eyebrow="Loan Programs"
      title="Explore Your Financing Options"
      description="Find the right loan for your needs."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-midnight-ink/5 animate-pulse" />
              <div className="h-6 w-32 bg-midnight-ink/5 rounded animate-pulse" />
            </div>
            <div className="mt-3 h-4 w-full bg-midnight-ink/5 rounded animate-pulse" />
            <div className="mt-2 h-4 w-3/4 bg-midnight-ink/5 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </PageShell>
  );
}

// ─── Main content ──────────────────────────────────────────────────
function LoanProgramsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("program");

  const selectedProgram = loanPrograms.find((p) => p.id === selectedId);

  const handleProgramClick = (program: LoanProgram) => {
    router.push(`/loan-programs?program=${program.id}`, { scroll: false });
  };

  const clearSelection = () => {
    router.push("/loan-programs", { scroll: false });
  };

  // ─── Detail view ──────────────────────────────────────────────────
  if (selectedProgram) {
    const Icon = getIconComponent(selectedProgram.icon);
    return (
      <PageShell
        eyebrow="Loan Program"
        title={selectedProgram.title}
        description={selectedProgram.subtitle || selectedProgram.description}
      >
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <div className="relative rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-10">
              {/* Close button */}
              <button
                onClick={clearSelection}
                className="absolute right-4 top-4 rounded-full p-2 text-midnight-ink/40 transition-colors hover:bg-midnight-ink/5 hover:text-midnight-ink"
                aria-label="Close details"
              >
                <Icons.X className="h-5 w-5" />
              </button>

              {/* Header with icon */}
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#0F6D69]/10 p-3">
                  <Icon className="h-8 w-8 text-[#0F6D69]" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-midnight-ink">
                    {selectedProgram.title}
                  </h2>
                  <p className="text-midnight-ink/60">
                    {selectedProgram.subtitle}
                  </p>
                </div>
              </div>

              {/* Overview */}
              <div className="mt-6 border-t border-border pt-6">
                <h3 className="font-display text-lg font-semibold text-midnight-ink">
                  Overview
                </h3>
                <p className="mt-2 text-sm text-midnight-ink/70 leading-relaxed">
                  {selectedProgram.longDescription ||
                    selectedProgram.description}
                </p>
              </div>

              {/* Benefits */}
              {selectedProgram.benefits &&
                selectedProgram.benefits.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-display text-lg font-semibold text-midnight-ink">
                      Key Benefits
                    </h3>
                    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {selectedProgram.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-midnight-ink/70"
                        >
                          <Icons.CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#0F6D69]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Features */}
              {selectedProgram.features &&
                selectedProgram.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-display text-lg font-semibold text-midnight-ink">
                      Features
                    </h3>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {selectedProgram.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-border bg-lift-white/50 px-4 py-3 text-sm text-midnight-ink/70"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Ideal For */}
              {selectedProgram.idealFor &&
                selectedProgram.idealFor.length > 0 && (
                  <div className="mt-6 rounded-lg bg-[#0F6D69]/5 p-5 border border-[#0F6D69]/20">
                    <h3 className="font-display text-md font-semibold text-midnight-ink">
                      Who This Loan Is For
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProgram.idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-lift-white px-4 py-1.5 text-xs font-medium text-midnight-ink/80 border border-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* Steps */}
              {selectedProgram.steps && selectedProgram.steps.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-display text-lg font-semibold text-midnight-ink">
                    How It Works
                  </h3>
                  <div className="mt-3 space-y-4">
                    {selectedProgram.steps.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F6D69] text-sm font-bold text-white">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-medium text-midnight-ink">
                            {step.title}
                          </h4>
                          <p className="text-sm text-midnight-ink/60">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials */}
              {selectedProgram.testimonials &&
                selectedProgram.testimonials.length > 0 && (
                  <div className="mt-6 rounded-lg border border-border bg-lift-white/50 p-5">
                    <h3 className="font-display text-lg font-semibold text-midnight-ink">
                      What Our Clients Say
                    </h3>
                    <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {selectedProgram.testimonials
                        .slice(0, 2)
                        .map((testimonial, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-border bg-lift-white p-4"
                          >
                            <p className="text-sm italic text-midnight-ink/70">
                              “{testimonial.text}”
                            </p>
                            <p className="mt-2 text-sm font-medium text-midnight-ink">
                              - {testimonial.name}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

              {/* FAQs */}
              {selectedProgram.faqs && selectedProgram.faqs.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-display text-lg font-semibold text-midnight-ink">
                    Frequently Asked Questions
                  </h3>
                  <div className="mt-3 space-y-2">
                    {selectedProgram.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group rounded-lg border border-border overflow-hidden"
                      >
                        <summary className="flex cursor-pointer items-center justify-between bg-lift-white/50 px-4 py-3 text-sm font-medium text-midnight-ink transition-colors hover:bg-midnight-ink/5">
                          <span>{faq.question}</span>
                          <Icons.ChevronDown className="h-4 w-4 shrink-0 text-midnight-ink/40 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="border-t border-border px-4 py-3 text-sm text-midnight-ink/70">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-6">
                <Link href={selectedProgram.ctaLink || "/contact"}>
                  <Button className="bg-[#0F6D69] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                    {selectedProgram.ctaText || "Get Started"}
                    <Icons.ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button
                    variant="outline"
                    className="border-midnight-ink/20 text-midnight-ink hover:bg-midnight-ink/5"
                  >
                    <Icons.Calculator className="mr-2 h-4 w-4" />
                    Use Our Tools
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </PageShell>
    );
  }

  // ─── List View ──────────────────────────────────────────────────
  return (
    <PageShell
      eyebrow="Loan Programs"
      title="Explore Your Financing Options"
      description="Find the right loan for your needs. Click any program to learn more."
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loanPrograms.map((program, index) => {
            const Icon = getIconComponent(program.icon);
            return (
              <Reveal key={program.id} delay={index * 60}>
                <div
                  onClick={() => handleProgramClick(program)}
                  className="group cursor-pointer rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#0F6D69]/10 p-2.5 text-[#0F6D69] transition-colors group-hover:bg-[#0F6D69] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-midnight-ink">
                      {program.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-midnight-ink/60 line-clamp-2">
                    {program.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[#0F6D69] transition-colors group-hover:text-[#96694f]">
                    <a href="/about" className="flex items-center">
                      Learn More
                      <Icons.ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

// ─── Page entry ──────────────────────────────────────────────────
export default function LoanProgramsPage() {
  return (
    <Suspense fallback={<LoanProgramsLoading />}>
      <LoanProgramsContent />
    </Suspense>
  );
}
