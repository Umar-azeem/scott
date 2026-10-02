import {
  LayoutGrid,
  DollarSign,
  CreditCard,
  Building,
  Landmark,
  Home,
  Handshake,
  FileText,
  Truck,
  SquareStack,
  Rocket,
  Wallet,
  Briefcase,
  Store,
  ArrowLeftRight,
  Coins,
  TrendingUp,
  HandCoins,
  Globe,
  BarChart3,
} from "lucide-react";

const names = [
  "All Loan Products",
  "Merchant Cash Advance",
  "Business Line of Credit",
  "Small Business Loans",
  "SBA Loans",
  "Real Estate Loans",
  "Loan",
  "Invoice Financing",
  "Equipment Financing",
  "Business Credit Cards",
  "Startup Loans",
  "Working Capital Loans",
  "Business Term Loans",
  "Commercial Loans",
  "Bridge Loans",
  "Microloans",
  "Business Acquisition Loans",
  "Franchise Financing",
  "Export/Import Financing",
  "Business Expansion Loans",
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "All Loan Products": LayoutGrid,
  "Merchant Cash Advance": DollarSign,
  "Business Line of Credit": CreditCard,
  "Small Business Loans": Building,
  "SBA Loans": Landmark,
  "Real Estate Loans": Home,
  Loan: Handshake,
  "Invoice Financing": FileText,
  "Equipment Financing": Truck,
  "Business Credit Cards": SquareStack,
  "Startup Loans": Rocket,
  "Working Capital Loans": Wallet,
  "Business Term Loans": Briefcase,
  "Commercial Loans": Store,
  "Bridge Loans": ArrowLeftRight,
  Microloans: Coins,
  "Business Acquisition Loans": TrendingUp,
  "Franchise Financing": HandCoins,
  "Export/Import Financing": Globe,
  "Business Expansion Loans": BarChart3,
};

export function LogoStrip() {
  const row = [...names, ...names];
  return (
    <section className="px-4 py-12">
      <p className="mb-8 text-center font-mono text-[10px] uppercase tracking-[0.75px] text-black">
        Trusted by engineering teams shipping fast
      </p>
      <div className="relative mx-auto max-w-[1000px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="ns-marquee flex w-max items-center gap-12">
          {row.map((n, i) => {
            const Icon = iconMap[n];
            return (
              <span
                key={i}
                className="flex items-center gap-2 whitespace-nowrap font-display text-[22px] font-normal tracking-[-0.5px] text-[#0F6D69]"
              >
                {Icon && <Icon className="h-5 w-5" />}
                {n}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}