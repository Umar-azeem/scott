"use client";

import { useState } from "react";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, Lock, CheckCircle2, MapPin } from "lucide-react";
// Import brand icons from react-icons/fa
import { FaLinkedin, FaGoogle } from "react-icons/fa";

const socialLinks = [
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "http://linkedin.com/in/donnell-green-b2557066",
    label: "LinkedIn",
  },
  {
    id: "zillow",
    icon: FaGoogle, // Zillow doesn't have a react-icon, using Google as placeholder or you can use a custom SVG
    url: "https://www.zillow.com/lender-profile/dgreen82/",
    label: "Zillow",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const state = formData.get("state") as string;
    const primaryGoal = formData.get("primaryGoal") as string;
    const message = formData.get("message") as string;

    const emailSubject = encodeURIComponent(
      `Mortgage Inquiry from ${firstName} ${lastName}`,
    );
    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
State: ${state}
Primary Goal: ${primaryGoal}

Message:
${message || "No additional message provided."}

---
This inquiry was sent from the Donnell Green - Fairway Independent Mortgage website.`,
    );

    window.open(
      `mailto:donnell.green@fairwaymc.com?subject=${emailSubject}&body=${emailBody}`,
      "_blank",
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageShell
        eyebrow="contact"
        title="Message sent"
        description="Your email client has been opened with your inquiry pre‑filled."
      >
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="rounded-[20px] border border-border bg-lift-white p-4 text-center shadow-card-soft sm:p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-8 w-8 text-[#021B2C]" />
              </div>
              <h3 className="text-2xl font-bold text-midnight-ink">
                Message Ready!
              </h3>
              <p className="mt-2 text-midnight-ink/70">
                Your email client has been opened with your message pre‑filled.
              </p>
              <p className="mt-1 text-sm text-midnight-ink/50">
                If it didn't open, please contact us directly at{" "}
                <a
                  href="mailto:donnell.green@fairwaymc.com"
                  className="font-medium text-midnight-ink underline"
                >
                  donnell.green@fairwaymc.com
                </a>
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-midnight-ink text-lift-white hover:bg-midnight-ink/90"
              >
                Send Another Message
              </Button>
            </div>
          </Reveal>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      eyebrow="contact"
      title="Get in touch with Donnell Green"
      description="Ready for a clear, straightforward mortgage? Let's connect – I'm here to help."
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column – contact info */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-midnight-ink sm:text-3xl">
                    A Direct Line to Expert Advice
                  </h2>
                  <p className="mt-2 text-midnight-ink/70">
                    You're not just filling out a form. You're starting a
                    conversation with an experienced loan officer at Fairway
                    Independent Mortgage Corporation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-midnight-ink">
                    Why Start the Conversation?
                  </h3>
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-midnight-ink" />
                    <div>
                      <h4 className="font-medium">
                        Fast, Personalized Response
                      </h4>
                      <p className="text-sm text-midnight-ink/60">
                        Get answers tailored to your situation, not a generic
                        template.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-midnight-ink" />
                    <div>
                      <h4 className="font-medium">
                        No Obligation, No Pressure
                      </h4>
                      <p className="text-sm text-midnight-ink/60">
                        This is about discovery and planning. I provide
                        clarity, not a heavy sales pitch.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-lg font-semibold text-midnight-ink">
                    Other Ways to Connect
                  </h3>
                  <div className="mt-6 space-y-6">
                    <a
                      href="tel:+16679002913"
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-lift-white text-midnight-ink transition group-hover:bg-[#0F6D69] group-hover:text-lift-white">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-midnight-ink group-hover:text-#0F6D69">
                          (667) 900-2913
                        </p>
                        <p className="text-xs text-midnight-ink/50">
                          Call or Text for a Quick Chat
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:donnell.green@fairwaymc.com"
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-lift-white text-midnight-ink transition group-hover:bg-[#0F6D69] group-hover:text-lift-white">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-midnight-ink group-hover:text-midnight-ink/80 break-all">
                          donnell.green@fairwaymc.com
                        </p>
                        <p className="text-xs text-midnight-ink/50">
                          Email for Detailed Inquiries
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-lift-white text-midnight-ink">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-bold text-midnight-ink">Address</p>
                        <p className="text-sm text-midnight-ink/60">
                          40 W. Chesapeake Ave,
                          <br />
                          Suite 400
                          <br />
                          Towson, MD 21204
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-lift-white text-midnight-ink">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-bold text-midnight-ink">
                          Business Hours
                        </p>
                        <p className="text-sm text-midnight-ink/60">
                          Mon – Fri: 8:30 AM – 6:00 PM{" "}
                          <span className="block text-xs text-midnight-ink/40 sm:inline">
                            (Eastern Standard Time)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[midnight-ink]/50">
                    Follow &amp; Connect
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map(({ id, icon: Icon, url, label }) => (
                      <a
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-lift-white text-midnight-ink transition hover:bg-[#0F6D69] hover:text-lift-white"
                        aria-label={label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-midnight-ink/40">
                    NMLS# 1217575 · Fairway Independent Mortgage Corporation
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column – form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft sm:p-10">
                <h3 className="text-2xl font-bold text-midnight-ink">
                  Send a Message
                </h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="mailto:donnell.green@fairwaymc.com"
                    className="inline-flex items-center gap-2 rounded-full bg-midnight-ink/5 px-3 py-1.5 text-xs text-midnight-ink/70 transition hover:bg-midnight-ink/10"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    donnell.green@fairwaymc.com
                  </a>
                  <a
                    href="tel:+16679002913"
                    className="inline-flex items-center gap-2 rounded-full bg-midnight-ink/5 px-3 py-1.5 text-xs text-midnight-ink/70 transition hover:bg-midnight-ink/10"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    (667) 900-2913
                  </a>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-midnight-ink">
                        First Name *
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        required
                        className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-midnight-ink/20"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-midnight-ink">
                        Last Name *
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        required
                        className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-midnight-ink/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-midnight-ink">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-midnight-ink/20"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-midnight-ink">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-midnight-ink/20"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight-ink">
                      State *
                    </label>
                    <select
                      name="state"
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-midnight-ink/20"
                    >
                      <option value="">Select a state…</option>
                      {[
                        "AL",
                        "AK",
                        "AZ",
                        "AR",
                        "CA",
                        "CO",
                        "CT",
                        "DE",
                        "FL",
                        "GA",
                        "HI",
                        "ID",
                        "IL",
                        "IN",
                        "IA",
                        "KS",
                        "KY",
                        "LA",
                        "ME",
                        "MD",
                        "MA",
                        "MI",
                        "MN",
                        "MS",
                        "MO",
                        "MT",
                        "NE",
                        "NV",
                        "NH",
                        "NJ",
                        "NM",
                        "NY",
                        "NC",
                        "ND",
                        "OH",
                        "OK",
                        "OR",
                        "PA",
                        "RI",
                        "SC",
                        "SD",
                        "TN",
                        "TX",
                        "UT",
                        "VT",
                        "VA",
                        "WA",
                        "WV",
                        "WI",
                        "WY",
                      ].map((abbr) => (
                        <option key={abbr} value={abbr}>
                          {abbr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight-ink">
                      Primary Goal *
                    </label>
                    <select
                      name="primaryGoal"
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-midnight-ink/20"
                    >
                      <option value="">Select a goal…</option>
                      <option value="Home Purchase">Home Purchase</option>
                      <option value="Refinance for Lower payment">
                        Refinance for Lower Payment
                      </option>
                      <option value="Refinance for Cash out">
                        Refinance for Cash Out
                      </option>
                      <option value="Home Equity Line of Credit (HELOC)">
                        Home Equity Line of Credit (HELOC)
                      </option>
                      <option value="Investment Property (Purchase or Refinance)">
                        Investment Property (Purchase or Refinance)
                      </option>
                      <option value="Commercial Real Estate Finance options">
                        Commercial Real Estate Finance Options
                      </option>
                      <option value="General Home or Commercial Finance Questions">
                        General Home or Commercial Finance Questions
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight-ink">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="mt-1 w-full resize-none rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-midnight-ink/20"
                      placeholder="Tell me about your mortgage needs…"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#0F6D69] py-6 font-semibold text-lift-white transition hover:bg-midnight-ink/90 disabled:opacity-70"
                  >
                    {isSubmitting ? "Opening Email…" : "Send Message"}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-midnight-ink/40">
                    <Lock className="h-3.5 w-3.5" />
                    <span>
                      Your email client will open with your message pre‑filled
                    </span>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </PageShell>
  );
}