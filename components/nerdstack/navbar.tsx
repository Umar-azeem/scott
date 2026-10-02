"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import { loanPrograms } from "@/app/data/loanPrograms";
import Image from "next/image";
import { Mail } from "lucide-react";

// ─── Helper: get icon component ──────────────────────────────────
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    DollarSign: Icons.DollarSign,
    CreditCard: Icons.CreditCard,
    Building: Icons.Building,
    Briefcase: Icons.Briefcase,
    Landmark: Icons.Landmark,
  };
  return iconMap[iconName] || Icons.HelpCircle;
};

// ─── Navigation Links ─────────────────────────────────────────────
const mainLinks = [
  // { label: "Product", href: "" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isLoanProgramsActive = pathname === "/loan-programs";

  // ─── Desktop Dropdown ────────────────────────────────────────────
  const renderDesktopDropdown = () => (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-light transition-colors duration-300 hover:bg-linen-base hover:text-midnight-ink ${
          isLoanProgramsActive
            ? "bg-linen-base text-midnight-ink"
            : "text-midnight-ink/70"
        }`}
      >
        Loan Programs
        <Icons.ChevronDown
          className={`size-4 transition-transform duration-200 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {dropdownOpen && (
        <div
          className="absolute left-0 top-full mt-1 w-72 rounded-xl border border-border bg-lift-white p-2 shadow-dropdown"
          style={{ boxShadow: "var(--shadow-dropdown)" }}
        >
          <div className="max-h-80 overflow-y-auto">
            {loanPrograms.map((program) => {
              const Icon = getIconComponent(program.icon);
              return (
                <Link
                  key={program.id}
                  href={`/loan-programs?program=${program.id}`}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-linen-base"
                >
                  <Icon className="mt-0.5 size-5 shrink-0 text-midnight-ink/50" />
                  <div>
                    <span className="block text-sm font-medium text-midnight-ink">
                      {program.title}
                    </span>
                    <span className="text-xs text-midnight-ink/50 line-clamp-2">
                      {program.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  // ─── Mobile Dropdown ──────────────────────────────────────────────
  const renderMobileDropdown = () => (
    <div className="border-t border-border pt-2 mt-1">
      <button
        type="button"
        onClick={() => setMobileDropdownOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[14px] text-midnight-ink/80 hover:bg-linen-base"
      >
        <span>Loan Programs</span>
        <Icons.ChevronDown
          className={`size-4 transition-transform duration-200 ${
            mobileDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {mobileDropdownOpen && (
        <div className="mt-1 flex flex-col gap-1 pl-2">
          {loanPrograms.map((program) => {
            const Icon = getIconComponent(program.icon);
            return (
              <Link
                key={program.id}
                href={`/loan-programs?program=${program.id}`}
                className="flex items-start gap-3 rounded-lg px-3 py-2 text-sm text-midnight-ink/70 hover:bg-linen-base"
              >
                <Icon className="mt-0.5 size-4 shrink-0" />
                <span>{program.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );

  // ─── JSX ──────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className="flex w-full max-w-[1200px] items-center justify-between rounded-[20px] border border-border bg-[#0F6D69] px-4 py-3 backdrop-blur-md transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "var(--shadow-card-soft)" : "none" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-1">
          <span className="flex items-center justify-center rounded-lg bg-white text-paper-cream">
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={120}
              height={30}
              className="h-16 w-28"
            />
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg text-midnight-ink px-3 py-2 text-[14px] font-light transition-colors duration-300 hover:bg-linen-base hover:text-midnight-ink ${
                isActive(l.href)
                  ? "bg-linen-base  text-midnight-ink group-[]:hover:bg-linen-base hover:text-midnight-ink"
                  : "text-midnight-ink/90 "
              }`}
            >
              {l.label}
            </Link>
          ))}
          {renderDesktopDropdown()}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/pricing"
            className="px-2 text-[14px] font-light text-midnight-ink/70 transition-colors hover:text-midnight-ink"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-midnight-ink px-4 py-2 text-[14px] font-light text-paper-cream transition-transform duration-300 hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-lg text-midnight-ink lg:hidden"
        >
          {open ? (
            <Icons.X className="size-5" />
          ) : (
            <Icons.Menu className="size-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute left-4 right-4 top-[72px] rounded-[20px] border border-border bg-lift-white p-4 lg:hidden"
          style={{ boxShadow: "var(--shadow-dropdown)" }}
        >
          <div className="flex flex-col gap-1">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3 py-2 text-[14px] hover:bg-linen-base ${
                  isActive(l.href)
                    ? "bg-linen-base text-midnight-ink"
                    : "text-midnight-ink/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {renderMobileDropdown()}

            <Link
              href="mailto:donnell.green@fairwaymc.com"
              className="mt-2 rounded-lg flex items-center gap-2 justify-center bg-midnight-ink px-4 py-2 text-center text-[14px] text-paper-cream"
            >
              <Mail className="size-4" strokeWidth={1.6} /> Mail Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
