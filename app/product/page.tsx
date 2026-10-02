import type { Metadata } from "next";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Home,
  RefreshCw,
  Landmark,
  Star,
  MapPin,
  Phone,
  Globe,
  Award,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donnell Green — Loan Officer | Fairway Independent Mortgage",
  description:
    "Meet Donnell Green, loan officer at Fairway Independent Mortgage Corporation. 6+ years in mortgages, specializing in home purchasing and refinancing. 5 stars, 39 reviews.",
};

// ─── Loan Products (Donnell's mortgage services) ─────────────────
const loanProducts = [
  {
    id: "purchase",
    title: "Home Purchasing",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Whether you're buying your first home or upgrading, I'll guide you through every step with clear communication and tailored loan options.",
    highlights: [
      "First-time home buyer programs",
      "FHA, VA, USDA, and Conventional loans",
      "Down payment assistance guidance",
      "Pre-approval to strengthen your offer",
      "30-year fixed and adjustable-rate options",
      "Personalized advice to improve your credit profile",
    ],
  },
  {
    id: "refinance",
    title: "Home Refinancing",
    icon: RefreshCw,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Lower your rate, shorten your term, or tap into equity. I'll help you find the refinance strategy that fits your financial goals.",
    highlights: [
      "Rate-and-term refinancing",
      "Cash-out refinancing for equity access",
      "FHA streamline and VA IRRRL options",
      "Debt consolidation through refinancing",
      "Transparent cost and savings comparison",
      "Fast, streamlined processing",
    ],
  },
  {
    id: "fha",
    title: "FHA Loans",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "FHA loans are an excellent choice for buyers with lower credit scores or smaller down payments. I specialize in helping these clients get approved.",
    highlights: [
      "Low down payment (as low as 3.5%)",
      "Flexible credit score requirements",
      "Backed by the Federal Housing Administration",
      "Great for first-time home buyers",
      "30-year fixed and ARM options",
      "Gift funds allowed for down payment",
    ],
  },
  {
    id: "va",
    title: "VA Loans",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Honoring those who served. VA loans offer veterans and active-duty service members some of the best terms available.",
    highlights: [
      "$0 down payment for qualified veterans",
      "No private mortgage insurance (PMI)",
      "Competitive interest rates",
      "Backed by the U.S. Department of Veterans Affairs",
      "Reusable benefit",
      "Streamlined IRRRL refinance option",
    ],
  },
  {
    id: "conventional",
    title: "Conventional Loans",
    icon: Award,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Conventional loans are a great fit for buyers with strong credit and stable income, offering flexible terms and competitive rates.",
    highlights: [
      "Down payments as low as 3%",
      "Fixed and adjustable-rate options",
      "No upfront mortgage insurance for qualifying loans",
      "Ideal for primary, second, and investment homes",
      "Jumbo loan options available",
      "Cancel PMI once you reach 20% equity",
    ],
  },
];

// ─── Additional sections ─────────────────────────────────────────
const stats = [
  { label: "Years in Mortgage", value: "6+" },
  { label: "Years in Finance", value: "10+" },
  { label: "Years in Sales", value: "11+" },
  { label: "Years in Customer Service", value: "21+" },
  { label: "Star Rating", value: "5.0" },
  { label: "Client Reviews", value: "39" },
];

const reviews = [
  {
    id: 1,
    title: "First time home owner",
    author: "SWillliams from Fort Washington, MD",
    date: "4/17/2025",
    quote:
      "I am writing to express my sincere gratitude for the exceptional service and support Donnell provided throughout my mortgage application process. From our initial consultation to the final closing, his professionalism and expertise made what could have been a daunting experience much smoother and more manageable.",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
    closed: "Closed Apr 2025",
    loanType: "Purchase",
    onTime: "Yes",
    fees: "Lower than expected",
  },
  {
    id: 2,
    title: "Outstanding Service – Truly Above and Beyond!",
    author: "kingsley Amoasie from Hagerstown, MD",
    date: "10/17/2024",
    quote:
      "Donnell was an absolute game-changer in my home-buying experience! From the start, he went above and beyond to ensure everything went smoothly. Not only was he incredibly knowledgeable and responsive, but he also took the time to provide me with personalized advice and tips to help improve my credit score.",
    tags: ["30 year fixed", "FHA Loan", "Low credit score"],
    closed: "Closed Oct 2024",
    loanType: "Purchase",
    onTime: "Yes",
    fees: "",
  },
  {
    id: 3,
    title: "Simple the best",
    author: "L S from Upper Marlboro, MD",
    date: "10/6/2024",
    quote:
      "Working with Donnell Green was an exceptional experience! From start to finish, he was professional, knowledgeable, and incredibly responsive. He patiently answered all my questions, helped me navigate the process with ease, and ensured I got the best rate possible. His attention to detail and dedication made what could have been a stressful process feel effortless.",
    tags: [],
    closed: "Closed Oct 2024",
    loanType: "Purchase",
    onTime: "",
    fees: "",
  },
];

const specialties = [
  "First-Time Home Buyers",
  "FHA Loans",
  "VA Loans",
  "Conventional Loans",
  "Home Refinancing",
  "Low Credit Score Programs",
  "Down Payment Assistance",
  "30-Year Fixed Mortgages",
];

export default function DonnellGreenPage() {
  return (
    <PageShell
      eyebrow="Meet Your Loan Officer"
      title="Donnell Green"
      description="Loan Officer at Fairway Independent Mortgage Corporation. Helping families purchase and refinance homes with confidence for over 6 years."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── About / Bio Section ───────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Donnell Green"
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <Users
                    className="h-6 w-6 text-midnight-ink/80"
                    strokeWidth={1.8}
                  />
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-midnight-ink">
                    About Donnell
                  </h2>
                </div>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  Hello friends, family, and future referral partners. My name
                  is Donnell Green, and I'm a loan officer at Fairway
                  Independent Mortgage Corporation, where we specialize in home
                  purchasing and home refinancing with a ton of products for
                  both.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  I have been in the mortgage industry for 6 years, finance for
                  10 years, sales for 11 years, and customer service for 21
                  years. My goal is to build a relationship with my customers
                  that helps them feel completely satisfied and respected
                  throughout the entire mortgage process.
                </p>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  My many years of experience and tenacity will showcase my
                  industry product knowledge and my absolute integrity. Backed
                  by Fairway's support system, I'll help ease the mortgage
                  process and make your transaction seamless. My work ethic and
                  passion to deliver 100% customer satisfaction will guarantee
                  loyal customers for life.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-midnight-ink/20 text-midnight-ink hover:bg-midnight-ink/5"
                    >
                      LEARN MORE
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="bg-midnight-ink text-lift-white hover:bg-midnight-ink/90">
                      CONTACT ME
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── Stats Bar ─────────────────────────────────────────── */}
        <Reveal>
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-lift-white p-4 text-center shadow-card-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="font-display text-2xl font-semibold text-[#0F6D69]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-midnight-ink/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </section>
        </Reveal>

        {/* ─── Loan Product Sections ─────────────────────────────── */}
        {loanProducts.map((product, index) => (
          <Reveal key={product.id} delay={index * 80}>
            <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-cover lg:h-full"
                  />
                </div>
                <div className="flex-1 p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <product.icon
                      className="h-6 w-6 text-midnight-ink/80"
                      strokeWidth={1.8}
                    />
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-midnight-ink">
                      {product.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-midnight-ink/70 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {product.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-midnight-ink/70"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#0F6D69]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/about">
                      <Button
                        variant="outline"
                        className="border-midnight-ink/20 text-midnight-ink hover:bg-midnight-ink/5"
                      >
                        LEARN MORE
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="bg-midnight-ink text-lift-white hover:bg-midnight-ink/90">
                        APPLY NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        ))}

        {/* ─── Contact Info ──────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <h2 className="font-display text-2xl font-semibold text-midnight-ink text-center">
              Get In Touch
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-midnight-ink/70">
              Ready to start your mortgage journey? Reach out today — I'd love
              to help.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center rounded-xl border border-border p-4 text-center">
                <MapPin className="h-5 w-5 text-[#0F6D69]" />
                <div className="mt-2 text-xs font-medium text-midnight-ink">
                  Office Address
                </div>
                <div className="mt-1 text-xs text-midnight-ink/60">
                  40 W. Chesapeake Ave, Suite 400, Towson, MD 21204
                </div>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border p-4 text-center">
                <Phone className="h-5 w-5 text-[#0F6D69]" />
                <div className="mt-2 text-xs font-medium text-midnight-ink">
                  Office
                </div>
                <a
                  href="tel:6679002913"
                  className="mt-1 text-xs text-midnight-ink/60 hover:underline"
                >
                  (667) 900-2913
                </a>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border p-4 text-center">
                <Phone className="h-5 w-5 text-[#0F6D69]" />
                <div className="mt-2 text-xs font-medium text-midnight-ink">
                  Cell
                </div>
                <a
                  href="tel:6679002913"
                  className="mt-1 text-xs text-midnight-ink/60 hover:underline"
                >
                  (667) 900-2913
                </a>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border p-4 text-center">
                <Globe className="h-5 w-5 text-[#0F6D69]" />
                <div className="mt-2 text-xs font-medium text-midnight-ink">
                  Website
                </div>
                <a
                  href="https://mobile.fairwaynow.com/homehub/signup/donnell.green@fairwaymc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 break-all text-xs text-midnight-ink/60 hover:underline"
                >
                  Visit My Fairway Hub →
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── Specialties ───────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
              <div className="lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mortgage specialties"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-semibold text-midnight-ink">
                  My Specialties
                </h2>
                <p className="mt-1 text-sm text-midnight-ink/60">
                  Tailored solutions for every borrower.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {specialties.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-sm text-midnight-ink/80"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-[#0F6D69]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── Reviews ───────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="text-center">
              <h2 className="font-display text-2xl font-semibold text-midnight-ink">
                What My Clients Are Saying...
              </h2>
              <div className="mt-2 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#0F6D69] text-[#0F6D69]"
                  />
                ))}
                <span className="ml-2 text-sm text-midnight-ink/70">
                  5 Stars ∙ 39 Reviews
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-xl border border-border p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-midnight-ink">
                        {review.title}
                      </h3>
                      <p className="mt-1 text-xs text-midnight-ink/60">
                        {review.author} · {review.date}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-[#0F6D69] text-[#0F6D69]"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-3 text-sm italic text-midnight-ink/70 leading-relaxed">
                    "{review.quote}"
                  </blockquote>
                  {review.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {review.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#0F6D69]/10 px-2.5 py-0.5 text-xs text-[#0F6D69]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-midnight-ink/50">
                    {review.closed && <span>Loan Status: {review.closed}</span>}
                    {review.loanType && (
                      <span>Loan Type: {review.loanType}</span>
                    )}
                    {review.onTime && <span>Close on time: {review.onTime}</span>}
                    {review.fees && <span>Fees: {review.fees}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="#"
                className="inline-block text-sm font-medium text-[#0F6D69] hover:underline"
              >
                VIEW MORE TESTIMONIALS HERE →
              </Link>
            </div>
          </section>
        </Reveal>

        {/* ─── CTA / Compare ─────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <h2 className="font-display text-2xl font-semibold text-midnight-ink">
              Ready to Get Started?{" "}
              <span className="text-[#0F6D69]">Let's Talk.</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-midnight-ink/70">
              Whether you're buying your first home or refinancing, I'll help
              you find the right mortgage with fast, simple, and transparent
              service.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="https://mobile.fairwaynow.com/homehub/signup/donnell.green@fairwaymc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#0F6D69] text-white hover:bg-[#96694f]">
                  Apply Online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="tel:6679002913">
                <Button
                  variant="outline"
                  className="border-midnight-ink/20 text-midnight-ink hover:bg-midnight-ink/5"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call (667) 900-2913
                </Button>
              </a>
            </div>
          </section>
        </Reveal>

        {/* ─── Education ─────────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:text-left">
              <div className="lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Education"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-semibold text-midnight-ink">
                  <span className="text-[#0F6D69]">Education</span> – Confidence
                  At Your Fingertips.
                </h2>
                <p className="mt-2 text-sm text-midnight-ink/70">
                  Make informed decisions with confidence. From step-by-step
                  breakdowns to transparent comparisons and real testimonials,
                  everything you need to understand your mortgage options lives
                  here.
                </p>
                <Link href="#">
                  <Button className="mt-4 bg-midnight-ink text-lift-white hover:bg-midnight-ink/90">
                    View All Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}