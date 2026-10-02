// app/data/loanPrograms.ts

export interface LoanProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  features?: string[];
  idealFor?: string[];
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
  testimonials: {
    name: string;
    text: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

export const loanPrograms: LoanProgram[] = [
  {
    id: "mca",
    title: "Merchant Cash Advance (MCA)",
    subtitle:
      "providing fast working capital by advancing funds based on your business’s revenue",
    description:
      "A Merchant Cash Advance is a fast funding option where you receive an advance based on revenue and repay automatically from ongoing sales or deposits.",
    longDescription:
      "An MCA is an advance on future sales (receivables), typically repaid automatically from daily/weekly revenue. There are some monthly payment advances as well. You're selling a portion of future sales, not taking a traditional term loan. Pricing is often quoted as a factor rate rather than an APR. Works best when fast funding matters more than lowest total cost.",
    icon: "DollarSign",
    benefits: [
      "Revenue-based approval (deposits matter)",
      "Automatic remittances (daily or weekly pulls)",
      "Factor-rate pricing (total payback quoted)",
      "Same Day Funding",
      "Flexible repayment that adjusts with sales volume",
      "No fixed maturity date tied to performance",
    ],
    features: [
      "Revenue-based qualification – approval based primarily on business revenue",
      "Daily/weekly automated remittances",
      "Transparent factor pricing – total repayment known upfront",
    ],
    idealFor: [
      "Seasonal businesses",
      "Restaurants and hospitality",
      "Retailers with fluctuating sales",
      "Businesses needing rapid capital",
    ],
    steps: [
      {
        step: 1,
        title: "Apply & connect",
        description: "Complete a quick online application and link your business bank account or processor.",
      },
      {
        step: 2,
        title: "Revenue review",
        description: "We review your recent deposits and sales history to determine your advance amount.",
      },
      {
        step: 3,
        title: "Fast funding",
        description: "Once approved, funds are deposited directly into your business account.",
      },
      {
        step: 4,
        title: "Funding delivery",
        description: "Receive your capital and start using it immediately for business needs.",
      },
      {
        step: 5,
        title: "Auto-remittance until paid",
        description: "Daily or weekly payments are automatically deducted until the advance is fully repaid.",
      },
    ],
    testimonials: [
      {
        name: "Marcus T, Catering",
        text: "We opted for a Cash Advance, and the funds were in our account the next morning. It was a lifesaver. Because the repayments fluctuate with our daily credit card sales, I didn't have to worry about a huge fixed bill during our post-holiday slow down. It kept our doors open when it mattered most.",
      },
    ],
    faqs: [
      {
        question: "Is a Merchant Cash Advance a loan?",
        answer:
          "Technically, it's an advance on future sales rather than a traditional loan. It's structured as a purchase of future receivables, which is why factor rates are used instead of interest rates.",
      },
      {
        question: "How quickly can I receive funding?",
        answer:
          "Many MCAs can fund within 24–48 hours after approval. The speed depends on how quickly you can connect your bank or processor.",
      },
      {
        question: "Do I need good credit to qualify?",
        answer:
          "Credit score is less important than your revenue and deposit history. Many businesses with fair credit still qualify.",
      },
      {
        question: "How are payments made?",
        answer:
          "Payments are automatically deducted from your business bank account or credit card processor on a daily or weekly basis.",
      },
      {
        question: "Can I pay off my advance early?",
        answer:
          "Yes, most MCAs allow early repayment. Be sure to check for any prepayment penalties or discounts in your agreement.",
      },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "loc",
    title: "Business Line of Credit",
    subtitle:
      "providing fast working capital by advancing funds based on your business’s revenue",
    description:
      "A business line of credit gives you a revolving limit you can draw from, repay, and reuse as needed.",
    longDescription:
      "A revolving credit limit you can draw from, repay, and reuse as needed. Draw anytime for short-term needs, reusable funds as you repay, pay for what you use, helps manage cash flow gaps and seasonality, only pay interest on the amount drawn, can be secured or unsecured depending on profile.",
    icon: "CreditCard",
    benefits: [
      "Draw anytime for short-term needs",
      "Reusable funds as you repay",
      "Pay for what you use (on drawn amount)",
      "Helps manage cash flow gaps and seasonality",
      "Only pay interest on the amount drawn",
      "Can be secured or unsecured depending on profile",
    ],
    features: [
      "Revolving credit structure – approved limit accessed repeatedly",
      "Draw as needed – transfer only what you need",
      "Interest charged only on funds used",
    ],
    idealFor: [
      "Businesses with seasonal cash flow",
      "Contractors needing to cover materials before invoice payment",
      "Retailers managing inventory cycles",
    ],
    steps: [
      {
        step: 1,
        title: "Approval",
        description: "Apply and get approved for a credit limit based on your business profile.",
      },
      {
        step: 2,
        title: "Draw funds",
        description: "Transfer any amount up to your limit directly into your business account.",
      },
      {
        step: 3,
        title: "Repayment schedule",
        description: "Repay on a flexible schedule—interest only on the amount you’ve drawn.",
      },
      {
        step: 4,
        title: "Replenishment",
        description: "As you repay, your available credit is restored.",
      },
      {
        step: 5,
        title: "Ongoing access",
        description: "Draw again whenever you need, without reapplying.",
      },
    ],
    testimonials: [
      {
        name: "David C, Tech Consulting",
        text: "Our Line of Credit is now our 'emergency' cash flow bridge. We draw from it to cover payroll on Friday and pay it back as soon as a client's invoice clears. Only paying interest on the days the money is out of the account makes this the most cost-effective way to manage our working capital.",
      },
    ],
    faqs: [
      {
        question: "What is a Business Line of Credit?",
        answer:
          "A Business Line of Credit is a revolving credit account that gives you access to a set amount of funds you can draw from, repay, and redraw as needed.",
      },
      {
        question: "How quickly can I access the funds?",
        answer:
          "Once approved, you can typically draw funds within 1–4 weeks, depending on lender verification and account setup.",
      },
      {
        question: "Do I have to pay interest on the full credit limit?",
        answer:
          "No, you only pay interest on the amount you actually draw, not the total approved limit.",
      },
      {
        question: "Who qualifies for a Business Line of Credit?",
        answer:
          "Businesses with consistent revenue and a solid financial history typically qualify. Startups may need additional collateral or a personal guarantee.",
      },
      {
        question: "What can I use a Business Line of Credit for?",
        answer:
          "Almost anything—working capital, inventory purchases, payroll, marketing, or covering unexpected expenses.",
      },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "term-loan",
    title: "Small Business Loans (Term Loans)",
    subtitle:
      "Structured long term financing with fixed payments and a clear payoff timeline for predictable business growth.",
    description:
      "A term loan provides a lump sum upfront and is repaid on a predictable schedule over a fixed term.",
    longDescription:
      "A lump-sum loan repaid on a set schedule over a fixed term. Lump sum: you receive one upfront deposit of the full loan amount. Fixed schedule: monthly payments stay predictable over the term. Expansion funding: a business uses a term loan to open a second location. Planned investment: a bakery finances a new oven with set payments. Not revolving: unlike a LOC, you don't 're-borrow' without a new loan.",
    icon: "Building",
    benefits: [
      "Lump-sum funding for planned investments",
      "Predictable payments for budgeting",
      "Clear payoff timeline with a defined term",
      "Typically offers lower rates than short-term options",
      "Ideal for equipment, hiring, or expansion projects",
      "Fixed or variable rate options available",
    ],
    features: [
      "Lump Sum Funding – receive the full approved amount upfront",
      "Fixed Repayment Schedule – consistent monthly payments",
      "Set Loan Term and Cost – know your total repayment upfront",
    ],
    idealFor: [
      "Businesses planning major expansions",
      "Equipment purchases",
      "New location openings",
      "Long-term capital investments",
    ],
    steps: [
      {
        step: 1,
        title: "Application",
        description: "Complete the application and provide business and personal financial information.",
      },
      {
        step: 2,
        title: "Verification",
        description: "We verify your revenue, credit, and business history.",
      },
      {
        step: 3,
        title: "Underwriting",
        description: "Our team reviews your file to determine approval and terms.",
      },
      {
        step: 4,
        title: "Funding",
        description: "Once approved, the full loan amount is deposited into your account.",
      },
      {
        step: 5,
        title: "Repayment",
        description: "Make fixed monthly payments until the loan is fully repaid.",
      },
    ],
    testimonials: [
      {
        name: "Sarah J, Manufacturing",
        text: "Securing a Term Loan allowed us to buy the machinery upfront and lock in a fixed monthly payment. This stability made it easy to project our overhead for the next five years. We've already seen a 30% increase in production capacity thanks to that one investment.",
      },
    ],
    faqs: [
      {
        question: "What is a Small Business Term Loan?",
        answer:
          "A term loan is a lump-sum loan repaid over a fixed period with regular payments—often monthly—at a fixed or variable interest rate.",
      },
      {
        question: "How quickly can I receive funding?",
        answer:
          "Funding can take 3–7 business days after approval, depending on the lender and documentation.",
      },
      {
        question: "Are payments fixed?",
        answer:
          "Typically, yes. Fixed-rate term loans have consistent payments throughout the term.",
      },
      {
        question: "What can I use the funds for?",
        answer:
          "Equipment, real estate, expansion, hiring, marketing, or almost any business purpose.",
      },
      {
        question: "What determines approval?",
        answer:
          "Lenders consider credit score, revenue, time in business, and debt-to-income ratio.",
      },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "abl",
    title: "Asset Based Lending (ABL)",
    subtitle:
      "Turn your existing business assets into immediate working capital.",
    description:
      "Asset-based lending ties borrowing power to collateral value, with availability that can change as assets change.",
    longDescription:
      "Financing tied to collateral value using a borrowing base (AR, inventory, equipment). Borrowing base: availability is tied to eligible AR/inventory/equipment values. AR-driven funding: a distributor borrows against receivables to fund purchase orders. Inventory leverage: a wholesaler finances growth based on inventory strength. Dynamic limits: borrowing capacity can rise or fall with collateral changes. Reporting readiness: requires systems to report AR aging and collateral status.",
    icon: "Briefcase",
    benefits: [
      "Collateral-driven limit (borrowing base)",
      "Can unlock more capital for asset-rich businesses",
      "More reporting and monitoring requirements",
      "Common collateral includes receivables, inventory, or equipment",
      "Availability may increase as asset values grow",
      "Often suited for companies with strong balance sheets",
    ],
    features: [
      "Asset Secured Financing – secured by eligible assets",
      "Borrow Against Value – based on a percentage of asset value",
      "Scalable Credit Access – borrowing capacity grows with assets",
    ],
    idealFor: [
      "Distributors with large receivables",
      "Wholesalers with inventory",
      "Manufacturers with equipment",
      "Businesses with strong collateral but weaker credit",
    ],
    steps: [
      {
        step: 1,
        title: "Collateral evaluation",
        description: "We assess your eligible assets (AR, inventory, equipment).",
      },
      {
        step: 2,
        title: "Advance rates",
        description: "We determine the percentage of asset value you can borrow against.",
      },
      {
        step: 3,
        title: "Facility setup",
        description: "Establish the credit facility and reporting requirements.",
      },
      {
        step: 4,
        title: "Borrow within base",
        description: "Draw funds as needed up to your available borrowing base.",
      },
      {
        step: 5,
        title: "Ongoing compliance",
        description: "Submit periodic reports to maintain your borrowing base.",
      },
    ],
    testimonials: [
      {
        name: "Mark J, Heavy Equipment Company",
        text: "I thought I was out of business before I even started again. They didn't just look at the bad credit; they looked at my ability to work. Now, I'm ahead of schedule on the project.",
      },
    ],
    faqs: [
      {
        question: "What is Asset Based Lending?",
        answer:
          "Asset Based Lending is a financing method where a business borrows against its assets—such as accounts receivable, inventory, or equipment—to secure a revolving line of credit or term loan.",
      },
      {
        question: "What assets can be used as collateral?",
        answer:
          "Common assets include accounts receivable, inventory, machinery, equipment, and sometimes real estate.",
      },
      {
        question: "How is the loan amount determined?",
        answer:
          "The amount is based on a percentage of the eligible collateral's value, known as an 'advance rate'.",
      },
      {
        question: "How are repayments structured?",
        answer:
          "Repayments are typically made as the collateral converts to cash—for example, when receivables are collected, the proceeds are used to repay the loan.",
      },
      {
        question: "Is Asset Based Lending only for struggling businesses?",
        answer:
          "No, many healthy businesses use ABL to fuel growth, especially those with high asset turnover but limited cash flow.",
      },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
  {
    id: "sba",
    title: "SBA Loans (SBA 7(a))",
    subtitle: "Government Backed Financing",
    description:
      "SBA loans like SBA 7(a) are long-term, structured financing with heavier documentation and a slower process for larger projects.",
    longDescription:
      "Our SBA loans do not require collateral and goes out 10 years. It's called the 'SBA 7A' program. SBA guarantee: a portion of the loan may be guaranteed through an SBA program. Longer timeline: better for planned projects than urgent 'need funds today' cases. Documentation heavy: requires detailed financials and business information. Major purchases: common for real estate, acquisitions, and large equipment. Strong fit: best for qualified borrowers prioritizing long-term structure.",
    icon: "Landmark",
    benefits: [
      "Longer terms (often multi-year)",
      "Fits big-ticket uses like expansion or acquisition",
      "More paperwork and longer approval timeline",
      "Backed partially by the U.S. Small Business Administration",
      "Competitive rates compared to conventional loans",
      "Can be used for a wide range of business purposes",
    ],
    features: [
      "SBA Guaranteed Financing – backed in part by the SBA",
      "Lender Funded Capital – provided by approved banks",
      "Structured Term Repayment – lump sum with scheduled payments",
    ],
    idealFor: [
      "Businesses planning major expansions or acquisitions",
      "Real estate purchases",
      "Large equipment financing",
      "Established businesses with strong financials",
    ],
    steps: [
      {
        step: 1,
        title: "Pre-qualification",
        description: "Initial review to see if your business meets SBA program guidelines.",
      },
      {
        step: 2,
        title: "Package assembly",
        description: "Gather detailed financials, business plans, and other required documents.",
      },
      {
        step: 3,
        title: "Underwriting",
        description: "Lender and SBA review your application and collateral.",
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign final documents and meet SBA requirements.",
      },
      {
        step: 5,
        title: "Funding & repayment",
        description: "Funds are disbursed, and you begin repayment according to the loan terms.",
      },
    ],
    testimonials: [
      {
        name: "Carlos R., Manufacturing",
        text: "The SBA loan allowed us to purchase our building and expand production. The process was lengthy but the rates and terms were unbeatable.",
      },
    ],
    faqs: [
      {
        question: "What is an SBA Loan?",
        answer:
          "An SBA loan is a business loan partially guaranteed by the U.S. Small Business Administration, offering favorable terms for qualified borrowers.",
      },
      {
        question: "How long are SBA loan terms?",
        answer:
          "SBA 7(a) loans can have terms up to 10 years for working capital and 25 years for real estate.",
      },
      {
        question: "What can SBA funds be used for?",
        answer:
          "Real estate, equipment, working capital, debt refinancing, acquisition, and more.",
      },
      {
        question: "Are SBA loans hard to qualify for?",
        answer:
          "They require strong credit, solid business history, and detailed documentation, but many businesses qualify.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Approval can take 30–90 days due to the thorough underwriting process.",
      },
    ],
    ctaText: "APPLY TODAY",
    ctaLink: "/contact",
  },
];