// app/reviews/page.tsx
"use client";

import { useState } from "react";
import { PageShell } from "@/components/nerdstack/page-shell";
import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Zap,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ─── Review Data ──────────────────────────────────────────────────
interface Review {
  name: string;
  location?: string;
  date: string;
  title?: string;
  avatar?: string;
  text: string;
  rating: number;
  loanStatus?: string;
  loanType?: string;
  interestRate?: string;
  closeOnTime?: string;
  fees?: string;
  tags?: string[];
  reply?: string;
}

const reviews: Review[] = [
  {
    name: "SWillliams",
    location: "Fort Washington, MD",
    date: "4/17/2025",
    title: "First time home owner",
    rating: 5,
    text: `I am writing to express my sincere gratitude for the exceptional service and support Donnell provided throughout my mortgage application process. From our initial consultation to the final closing, his professionalism and expertise made what could have been a daunting experience much smoother and more manageable. His willingness to answer every question gave me complete confidence throughout the entire process.`,
    loanStatus: "Closed Apr 2025",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "Kingsley Amoasie",
    location: "Hagerstown, MD",
    date: "10/17/2024",
    title: "Outstanding Service – Truly Above and Beyond!",
    rating: 5,
    text: `Donnell was an absolute game-changer in my home-buying experience! From the start, he went above and beyond to ensure everything went smoothly. Not only was he incredibly knowledgeable and responsive, but he also took the time to provide me with personalized advice and tips to help improve my credit score. He truly cared about my success.`,
    loanStatus: "Closed Oct 2024",
    loanType: "Purchase",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    tags: ["30 year fixed", "FHA Loan", "Low credit score"],
  },
  {
    name: "L S",
    location: "Upper Marlboro, MD",
    date: "10/6/2024",
    title: "Simple the best",
    rating: 5,
    text: `Working with Donnell Green was an exceptional experience! From start to finish, he was professional, knowledgeable, and incredibly responsive. He patiently answered all my questions, helped me navigate the process with ease, and ensured I got the best rate possible. His attention to detail and dedication made what could have been a stressful process feel effortless.`,
    loanStatus: "Closed Oct 2024",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
  },
  {
    name: "Bria",
    location: "Windsor Mill, MD",
    date: "10/5/2024",
    title: "10/10 recommend!",
    rating: 5,
    text: `Donnell was great from start to finish. He's very knowledgeable when it comes to his career. He leaves no question unanswered. He's been recommended to family and friends! 10/10 recommended — we'll be using him again.`,
    loanStatus: "Closed Oct 2024",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "mgeorge162",
    location: "Edgewood, MD",
    date: "9/23/2024",
    title: "We're Grateful",
    rating: 5,
    text: `We were referred to Donnell by one of our friends. The moment we started to communicate with Donnell we felt comfortable right away. He treated us like family, and explained the entire house buying process to us. He answered every question we had. Being first time home buyers, we couldn't have asked for a better experience.`,
    loanStatus: "Closed Jul 2024",
    loanType: "Purchase",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "Connor Loube",
    location: "Frederick, MD",
    date: "1/3/2024",
    title: "Great Experience",
    rating: 5,
    text: `Donnell was available what felt like 24/7 to help with anything and answer all questions. He made the stressful process of home buying not so stressful and broke down the process. Very timely in his responses and easy to talk to. Would definitely recommend.`,
    loanStatus: "In progress",
    loanType: "Purchase",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "tbreaux14",
    location: "Baltimore, MD",
    date: "1/1/2024",
    title: "10 out of 10!",
    rating: 5,
    text: `Being a first time home buyer can be nerve wrecking but I felt Donnell's services made me feel at ease. He is extremely professional, patient and he definitely knows his stuff! He gave me a lot of tips, answered all my questions even if asked the same multiple times lol.`,
    loanStatus: "Closed Dec 2023",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan", "First-time home buyer"],
  },
  {
    name: "Tee",
    location: "Baltimore, MD",
    date: "10/31/2023",
    title: "Home and Student loans paid off",
    rating: 5,
    text: `Donnell is an amazing lender. I closed on my house in a little over 30 days and he was able to find me money to assist me. The best part was he also found a grant that paid off my student loans with the purchase of my home. I'm grateful.`,
    loanStatus: "Closed Aug 2023",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
  },
  {
    name: "Georgia W.",
    location: "Windsor Mill, MD",
    date: "10/29/2023",
    title: "1st Home Buyer",
    rating: 5,
    text: `Thank you so much Donnell for all your help in securing the loan for my new home in Baltimore County. As a first time homebuyer I appreciated how kind, organized, thorough & professional you were during this entire process. You went above and beyond to ensure that all my questions were answered.`,
    loanStatus: "Closed Oct 2023",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "morrisonmarcus",
    location: "Baltimore, MD",
    date: "10/28/2023",
    title:
      "He is the best person to guide you and assist you in every way throughout the full term of the loan process.",
    rating: 5,
    text: `He was very professional and throughout my first experience, he offered expert professional advice. I highly recommend him to everyone out there who is seeking to buy a home, especially "First Time Home Buyers."`,
    loanStatus: "Closed Oct 2023",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "Knowledgeable",
    location: "Baltimore, MD",
    date: "7/11/2023",
    title: "Dreams come true",
    rating: 5,
    text: `My lender was knowledgeable about various types of loans and various types of grant programs. For first time homebuyers, Mr. Green was professional, very communicative. I highly recommend Mr. Green for first time homebuyers and people who are investing in a home for the very first time.`,
    loanStatus: "Closed Jul 2023",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "Gigi M.",
    location: "Baltimore, MD",
    date: "7/4/2023",
    title: "Donnell Green",
    rating: 5,
    text: `Donnell is professional and relatable, explained each step & what to expect next from pre-approval to closing. He properly responded to questions or concerns. Donnell was a pleasure to work with — never felt uncomfortable, unheard, or that he was too busy when needing to contact him. Nice working with him.`,
    loanStatus: "Closed Jul 2023",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan", "First-time home buyer"],
  },
  {
    name: "Stacey Bennett",
    location: "Owings Mills, MD",
    date: "4/11/2023",
    title: "Small Business Owner",
    rating: 5,
    text: `As a small business owner I was worried about the home buying process due to all the paperwork and income verifications. Once I spoke to Donnell he put my worries to rest. He was very knowledgeable and available to help with any questions I had.`,
    loanStatus: "Closed Apr 2023",
    loanType: "Purchase",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "FHA Loan", "Self employed"],
  },
  {
    name: "Jefferson M Exinor S",
    location: "Baltimore, MD",
    date: "11/15/2022",
    title: "1st time Buyer",
    rating: 5,
    text: `Donnell did his thang — he went above and beyond to get me approved and my closing cost was ONLY $2,800. Well below the original amount that I was quoted for. I was kept in the loop with daily calls (sometimes multiple calls). I appreciate knowing what was going on.`,
    loanStatus: "Closed Oct 2022",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "No",
    fees: "Lower than expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
    reply:
      "Donnell Green: I was a pleasure working with you Jefferson. I know your home will be the perfect place for your family and a great asset for generational wealth.",
  },
  {
    name: "kiritter",
    location: "Berlin, MD",
    date: "4/28/2021",
    title: "DJ was great to work with on our refinance.",
    rating: 5,
    text: `DJ was very knowledgeable of the current market and was able to provide us all of our options to refinance our mortgage. He was a pleasure to work with and I highly recommend DJ Green.`,
    loanStatus: "Closed Apr 2021",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
  },
  {
    name: "laura ann5",
    location: "Minnetrista, MN",
    date: "12/8/2020",
    title: "Professional, kind and knowledgeable",
    rating: 5,
    text: `From the initial call through closing, DJ was remarkably attentive and had answers to all of our questions. He always included details and made sure we were on the same page. We will recommend DJ Green to our family and friends.`,
    loanStatus: "Closed Dec 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "maiden1",
    location: "Colorado Springs, CO",
    date: "9/17/2020",
    title: "AWESOME",
    rating: 5,
    text: `DJ was wonderful to work with. Very precise on all his numbers, had paperwork done and closing date was about 7 days out. Definitely would recommend DJ to anybody. Whole process pretty simple to do.`,
    loanStatus: "In progress",
    loanType: "Refinance",
    tags: ["30 year fixed", "VA Loan"],
  },
  {
    name: "S K Johnson",
    location: "Maplewood, MN",
    date: "9/16/2020",
    title: "Quicken Loans",
    rating: 5,
    text: `Great attention and service rendered by my originator DJ Green. I would do it again if needed with not doing anything differently. DJ responded to text messages or e-mail very promptly. Quicken scheduled my loan closing 24 days after origination. I have had no bait and switch. Great interest rate.`,
    loanStatus: "In progress",
    loanType: "Refinance",
    tags: ["30 year fixed", "VA Loan"],
  },
  {
    name: "saundralacy",
    location: "Belleville, MI",
    date: "9/16/2020",
    title: "Awesome!!",
    rating: 5,
    text: `DJ Green was responsive, kept us informed and explained the entire process. We closed on our re-finance quickly and without any issues. I've given his information to several friends who are interested in refinancing.`,
    loanStatus: "Closed Sep 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "JJANTONELLI64",
    location: "Melbourne, FL",
    date: "9/16/2020",
    title: "Very clear and easy to understand",
    rating: 5,
    text: `DJ was amazing, I can't say enough about how easy he was to understand in basic terms. He explained all the details. I would highly recommend him to another person in the same situation. He followed up with me to make sure everything was completed to my satisfaction.`,
    loanStatus: "Pre-qualified",
    loanType: "Refinance",
    tags: ["30 year fixed", "VA Loan"],
  },
  {
    name: "Byrdie",
    location: "Frederick, MD",
    date: "9/14/2020",
    title: "So helpful!",
    rating: 5,
    text: `DJ was absolutely wonderful to work with. He took the time to explain things to me in clear, simple language, was never pushy or rushed, and really helped me feel confident about my decision to refinance. So glad he was the person taking me through this process — he really helped relieve my stress.`,
    loanStatus: "In progress",
    loanType: "Refinance",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "Colin G.",
    location: "Woodbury, MN",
    date: "6/12/2020",
    title: "Excellent refinance experience",
    rating: 5,
    text: `I was skeptical about going with such a large mortgage lender, but was pleasantly surprised by the service we received from DJ at Quicken Loans. Not only was he able to find my wife and I a competitive rate with lower fees than expected, he followed up with us throughout the entire process.`,
    loanStatus: "Closed Jun 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["Conventional Loan"],
  },
  {
    name: "glass0621",
    location: "El Paso, TX",
    date: "4/10/2020",
    title: "Fantastic Banker",
    rating: 5,
    text: `Our banker, DJ Green, was just super! From beginning of our process to closing, he was fabulous! He was always attentive, never blew us off nor gave the indication we were not important. He is trustworthy! If he is not sure about an answer, he will get confirmation.`,
    loanStatus: "Closed Mar 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "VA Loan"],
  },
  {
    name: "jamesmayerssr",
    location: "Temecula, CA",
    date: "4/7/2020",
    title: "Best experience of having someone help when I need it.",
    rating: 5,
    text: `I am not good at writing a review of how I feel; but I want others to know about my journey of finding my way back in control of my life. I did not know how I'd pay next month's bills — this was each month, and it was making me stressed. DJ helped me turn things around.`,
    loanStatus: "Closed Mar 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "hollandbrian30",
    location: "Westminster, MD",
    date: "2/11/2020",
    title: "Friendly, helpful and delivered as promised",
    rating: 5,
    text: `DJ was extremely helpful throughout the loan process. He delivered everything he promised upfront and even called weekly to check in and make sure everything was on track even after his part of the process was complete. He couldn't have been more professional and honest. I recommend talking to DJ.`,
    loanStatus: "Closed Feb 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "zuser201611192038170",
    location: "North Richland Hills, TX",
    date: "1/24/2020",
    title: "DJ Green",
    rating: 5,
    text: `DJ was very supportive since his first call to inquire about my wife's and my needs. He was so understanding with my questions and my asking the same question many times. I was very impressed with Quicken Loans' support of me as well wanting to monitor DJ's performance.`,
    loanStatus: "In progress",
    loanType: "Refinance",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "Annette Williams",
    location: "Saint Augustine, FL",
    date: "1/27/2020",
    title: "Best Lender Ever",
    rating: 5,
    text: `Having experienced the sell and purchase of four homes through various lenders, I can honestly say my experience with Mr. Green was an unexpected beacon of light. His knowledge, experience, people skills and accessibility made it possible to efficiently navigate our complete lending process within four weeks.`,
    loanStatus: "Closed Jan 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "lwnottoday",
    location: "Oldsmar, FL",
    date: "9/27/2019",
    title: "LoanDepot",
    rating: 5,
    text: `I can't express how pleased I am with this lender. They are the best people to work with. DJ Green is my personal consultant and he is great. Everything went smoothly. If you want quality people, LoanDepot is the lending company to use.`,
    loanStatus: "Closed Sep 2019",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "gas2660",
    location: "Riviera Beach, FL",
    date: "8/29/2019",
    title: "DJ Green at Loan Depot",
    rating: 5,
    text: `DJ was wonderful to work with. No matter how many silly questions we asked he remained kind and helpful. Our computer skills are not what you could call good — he was always there ready and willing to walk us through everything. I cannot imagine having a better experience.`,
    loanStatus: "Closed Aug 2019",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "chrisdaugherty57",
    location: "Bushnell, FL",
    date: "8/23/2019",
    title: "Home Refinance",
    rating: 5,
    text: `DJ and everyone I dealt with at Loan Depot were very pleasant to work with. Everything went very smoothly. I am happy with the job they have done. Thanks to everyone and for your hard work.`,
    loanStatus: "Closed Aug 2019",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "FHA Loan", "Low credit score"],
  },
];

// ─── Helper to render stars ──────────────────────────────────────
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? "fill-[#0F6D69] text-[#0F6D69]" : "text-midnight-ink/20"
      }`}
      strokeWidth={i < rating ? 0 : 1.5}
    />
  ));
};

// ─── Review Card Component ──────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const text = review.text;
  const shouldTruncate = text.length > 300;
  const displayText = expanded
    ? text
    : text.slice(0, 300) + (shouldTruncate ? "..." : "");

  return (
    <Reveal>
      <div className="flex h-full flex-col rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#0F6D69]/10">
            <Image
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                review.name,
              )}&background=A87E62&color=fff&size=48`}
              alt={review.name}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-display text-lg font-semibold text-midnight-ink">
                {review.name}
              </h4>
              <span className="text-xs text-midnight-ink/40">
                {review.date}
              </span>
            </div>
            {review.location && (
              <p className="text-xs text-midnight-ink/50">{review.location}</p>
            )}
            <div className="mt-1 flex">{renderStars(review.rating)}</div>
          </div>
        </div>

        {review.title && (
          <h5 className="mt-4 font-display text-base font-semibold text-midnight-ink">
            {review.title}
          </h5>
        )}

        <p className="mt-2 flex-1 text-sm text-midnight-ink/70 leading-relaxed whitespace-pre-line">
          {displayText}
        </p>

        {shouldTruncate && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-3 self-start text-sm font-medium text-[#0F6D69] hover:text-[#96694f] transition-colors"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        {/* Tags */}
        {review.tags && review.tags.length > 0 && (
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

        {/* Loan meta */}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-3 text-xs text-midnight-ink/50">
          {review.loanStatus && <span>Status: {review.loanStatus}</span>}
          {review.loanType && <span>Type: {review.loanType}</span>}
          {review.interestRate && <span>Rate: {review.interestRate}</span>}
          {review.closeOnTime && <span>On time: {review.closeOnTime}</span>}
          {review.fees && <span>Fees: {review.fees}</span>}
        </div>

        {/* Lender reply */}
        {review.reply && (
          <div className="mt-3 rounded-lg bg-[#0F6D69]/5 p-3 text-xs italic text-midnight-ink/70">
            {review.reply}
          </div>
        )}
      </div>
    </Reveal>
  );
}

// ─── Page Component ──────────────────────────────────────────────
export default function ReviewsPage() {
  return (
    <PageShell
      eyebrow="Reviews"
      title="Donnell Green Client Reviews"
      description="Real stories from real families who have purchased or refinanced homes with Donnell Green at Fairway Independent Mortgage."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── Hero / Intro ────────────────────────────────────────── */}
        <Reveal>
          <div className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="flex justify-center">
              <div className="rounded-full bg-[#0F6D69]/10 p-4">
                <MessageCircle className="h-8 w-8 text-[#0F6D69]" />
              </div>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-midnight-ink sm:text-4xl">
              Helping families achieve homeownership with confidence
            </h2>
            <p className="mt-4 text-sm text-midnight-ink/60 max-w-2xl mx-auto">
              Real stories from real clients who have purchased or refinanced
              with Donnell Green at Fairway Independent Mortgage.
            </p>

            {/* Rating summary */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#0F6D69] text-[#0F6D69]"
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-midnight-ink">
                  5 Stars ∙ 39 Reviews
                </span>
              </div>
              <a
                href="https://www.zillow.com/lender-profile/dgreen82/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-lift-white px-4 py-2 text-xs font-medium text-midnight-ink transition-colors hover:bg-midnight-ink/5"
              >
                View on Zillow
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* ─── Reviews Grid ────────────────────────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

        {/* ─── Verified by Trustindex ──────────────────────────────── */}
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#0F6D69]/10 px-5 py-2 text-xs font-medium text-[#0F6D69]">
              Verified by Zillow ∙ 39 Reviews
            </span>
          </div>
        </Reveal>

        {/* ─── Quote Banner ────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] bg-[#0F6D69] p-8 text-center text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            </div>
            <div className="relative">
              <Quote className="mx-auto h-10 w-10 text-white/60" />
              <blockquote className="mt-4 font-display text-2xl font-light leading-relaxed sm:text-3xl">
                "My goal is to build a relationship with my customers that helps
                them feel completely satisfied and respected throughout the
                entire mortgage process."
              </blockquote>
              <p className="mt-3 text-white/70">— Donnell Green</p>
            </div>
          </section>
        </Reveal>

        {/* ─── Why Choose Donnell ────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                Why Choose Donnell
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-midnight-ink">
                Experience You Can Trust
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                6+ years in mortgage, 10+ in finance, 11+ in sales, and 21+ in
                customer service — combined to make your transaction seamless.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Target,
                  title: "Transparency",
                  desc: "Clear rates, terms, and expectations",
                },
                {
                  icon: Zap,
                  title: "Speed with Care",
                  desc: "Move quickly without sacrificing guidance.",
                },
                {
                  icon: MessageCircle,
                  title: "Expert Advice",
                  desc: "Match buyers with the right mortgage option.",
                },
                {
                  icon: Users,
                  title: "Relationship First",
                  desc: "Build long-standing partnerships, not one-time transactions.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="rounded-full bg-[#0F6D69]/10 p-3 text-[#0F6D69]">
                    <item.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-midnight-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-midnight-ink/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ─── Education / CTA ──────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:text-left">
              <div className="flex-1">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
                  Ready to Get Started?
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Confidence At Your Fingertips.
                </h2>
                <p className="mt-4 text-sm text-midnight-ink/70 leading-relaxed">
                  Make informed decisions with confidence. From step-by-step
                  breakdowns to transparent comparisons and real testimonials,
                  everything you need to understand your mortgage options lives
                  here.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="https://mobile.fairwaynow.com/homehub/signup/donnell.green@fairwaymc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#0F6D69] text-white shadow-md transition-all duration-300 hover:bg-[#96694f] hover:shadow-lg">
                      Apply Online
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="s">
                    <Button
                      variant="outline"
                      className="border-midnight-ink/20 text-midnight-ink hover:bg-midnight-ink/5"
                    >
                      View All Products
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="shrink-0">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#0F6D69]/5">
                  <BookOpen
                    className="h-24 w-24 text-[#0F6D69]/30"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}
