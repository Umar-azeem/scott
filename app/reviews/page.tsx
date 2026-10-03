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
    name: "Stephanie Z",
    location: "Alexandria, VA",
    date: "8/24/2021",
    title: "Excellent service",
    rating: 5,
    text: `Scott and his team are phenomenal. They were fast, knowledgeable, honest, and always available to answer questions. I will use them again in the future.`,
    loanStatus: "Closed Aug 2021",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "Kevin F.",
    location: "Sacramento, CA",
    date: "6/29/2021",
    title: "Awesome Lender!",
    rating: 5,
    text: `I had the pleasure of working with Scott Moon as the lender of my buyer in a real estate purchase. From the beginning I found Scott to be professional and very, very responsive. Even though Scott and I were 3 hours apart in time zones, he always answered my calls.`,
    loanStatus: "Closed May 2021",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
  },
  {
    name: "Edward Morozov",
    location: "College Park, MD",
    date: "6/13/2021",
    title: "Scott was great!",
    rating: 5,
    text: `Dedicated, responsive, thoughtful, and honest! Scott took the time to answer all of my questions and provide information that I didn't even know I needed. I would recommend him to anybody looking for a mortgage in the DMV!`,
    loanStatus: "Closed Jun 2021",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan", "First-time home buyer"],
  },
  {
    name: "joy K",
    location: "Washington, DC",
    date: "6/10/2021",
    title: "Fantastic experience!",
    rating: 5,
    text: `Scott handled my recent refinance, and was responsive and knowledgeable. We were able to close much earlier than I had anticipated. He was patient, kind and answered all of my questions. I thoroughly enjoyed working with Scott, and will continue to recommend him to friends and colleagues.`,
    loanStatus: "Closed Jun 2021",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["Conventional Loan"],
  },
  {
    name: "EE-VA",
    location: "Annandale, VA",
    date: "4/19/2021",
    title: "Outstanding loan officer!",
    rating: 5,
    text: `Scott Moon provided outstanding loan officer support during the refinancing of our home. A member of our family recommended Scott highly based on their recent refinance. He made the process seamless and easy for us. He was responsive, knowledgeable and provided clear and succinct communication.`,
    loanStatus: "Closed Oct 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["Conventional Loan"],
  },
  {
    name: "Sally992",
    location: "Towson, MD",
    date: "1/23/2021",
    title: "Great loan officer",
    rating: 5,
    text: `Responsive, knowledgeable, and available whenever you have a question or need any help. Closed within thirty days of having an accepted offer. Thankful for Scott/WEI!`,
    loanStatus: "Closed Dec 2020",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan", "First-time home buyer"],
  },
  {
    name: "HV-VA",
    location: "Gainesville, VA",
    date: "12/9/2020",
    title: "Professional & Knowledgeable",
    rating: 5,
    text: `Scott is professional, responsive and knowledgeable. He responded to my questions not only to answer but with additional information. He's patient and very pleasant to talk with. I've been highly recommending him to my friends and coworkers.`,
    loanStatus: "Closed Nov 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["Conventional Loan"],
  },
  {
    name: "GregTaylor9",
    location: "Washington, DC",
    date: "10/16/2020",
    title: "Most knowledgeable, accessible lender I've ever used",
    rating: 5,
    text: `Scott was my broker as I worked through the fifth refinance I've completed on my condo. It had been 8 years since my last refi, so I still had a bunch of questions. And even though he had the best pricing that I found (from 5 different brokers), he was patient and thorough.`,
    loanStatus: "Closed Aug 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "djolsen47",
    location: "Kensington, MD",
    date: "9/21/2020",
    title: "Outstanding, responsive service",
    rating: 5,
    text: `Scott Moon did an excellent job as our loan officer for our recent refinance. He has excellent communication skills, responds quickly to messages or questions, and is a kind, reassuring voice in the midst of a big money transaction.`,
    loanStatus: "Closed Sep 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "bmo124",
    location: "Washington, DC",
    date: "9/18/2020",
    title: "The Best",
    rating: 5,
    text: `Scott is the best we've ever worked with. He's extremely responsive and knowledgeable, and he communicates often and very effectively. We cannot recommend him enough, you'd be crazy to work with anyone else!`,
    loanStatus: "Closed Aug 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
  },
  {
    name: "emmaescobar77",
    location: "Silver Spring, MD",
    date: "7/21/2020",
    title: "Scott was great to work with!!!",
    rating: 5,
    text: `I was really nervous about buying a property but Scott was so great to work with. I first contacted him in 2018 when I was interested in purchasing a property. He gave me a lot of information about the difference between renting and buying. And was very helpful in explaining.`,
    loanStatus: "Closed Apr 2020",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan", "First-time home buyer"],
  },
  {
    name: "svetka8477",
    location: "Ashburn, VA",
    date: "7/15/2020",
    title: "A+",
    rating: 5,
    text: `Scott and his team worked seamlessly to help me with my first refinance. I was more than pleased start to finish and have recommended WEI to many friends and family who also shared my same experience.`,
    loanStatus: "Closed Jul 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "Tom M.",
    location: "Washington, DC",
    date: "5/23/2020",
    title: "Made everything very easy.",
    rating: 5,
    text: `Scott was responsive and made the whole process very easy. I have recommended him to many friends and family members. When and if we need mortgage services in the future, he'll be the first person I call.`,
    loanStatus: "Closed May 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "theoneandonly6",
    location: "Temple Hills, MD",
    date: "5/19/2020",
    title: "No other Lender I'd recommend, Scott is THE BEST",
    rating: 5,
    text: `First and foremost, I would like to give Scott a HUGE Thank YOU!! Thank you again Scott for every aspect of service you provided me from the beginning to end on this journey. Scott, you were super responsive, dedicated and diligent. Scott has the ability to take on your home.`,
    loanStatus: "Closed May 2020",
    loanType: "Purchase",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed"],
  },
  {
    name: "Beth R.",
    location: "Gambrills, MD",
    date: "5/12/2020",
    title: "Excellent Customer Service!",
    rating: 5,
    text: `I was referred to Scott while shopping around for lenders and the best rate. Scott beat all others for both rates and closing costs. On top of that, he and his team were extremely responsive and always answered all of my questions.`,
    loanStatus: "Closed Apr 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "VA Loan"],
  },
  {
    name: "user6540560",
    location: "Washington, DC",
    date: "5/5/2020",
    title: "Always responsive, wants your business",
    rating: 5,
    text: `Although I'd been working with another lender, Scott swooped in and made me a few offers. Eventually he made one too good to turn down and he ended up with my business. Throughout the entire process, Scott was extremely responsive, knowledgeable, and followed-up with all my questions.`,
    loanStatus: "Closed May 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "Johnny D.",
    location: "Clarksburg, MD",
    date: "5/1/2020",
    title: "Excellent Customer Service!",
    rating: 5,
    text: `Scott was not only very detailed but also very patient. He was very responsive and was able to breakdown the details of the loan and guide me through the process. He was very clear and made sure I understood every detail.`,
    loanStatus: "Closed Mar 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "tammy reece315",
    location: "Annapolis, MD",
    date: "4/19/2020",
    title: "Great communication and follow through",
    rating: 5,
    text: `Scott and his team were great to work with. He's very knowledgeable and always willing to answer questions along the way. They found the best deal for my refi and got it done in a very timely manner.`,
    loanStatus: "Closed Feb 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["15 year fixed", "Conventional Loan"],
  },
  {
    name: "junabelpedro",
    location: "Manteca, CA",
    date: "4/8/2020",
    title: "Excellent",
    rating: 5,
    text: `Made my refinancing process easy. Scott gave me options that I can choose from and gave me reasonable advice. I didn't expect that we would close this time because of the Coronavirus that's going on but he still continued working on my refinance. Thank you!`,
    loanStatus: "Closed Mar 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "James D",
    location: "Alexandria, VA",
    date: "4/5/2020",
    title: "Refinance",
    rating: 5,
    text: `Scott was awesome in refinancing my loan. He's a true professional and looks out for the best interest of his clients. It's easy to trust Scott and he is very accessible whenever needed.`,
    loanStatus: "Closed Feb 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
  },
  {
    name: "Victoria M.",
    location: "Kensington, MD",
    date: "3/26/2019",
    title: "Professional and patient",
    rating: 5,
    text: `Scott has always been patient, knowledgeable, thorough and timely. I just finished refinancing my home and it was stress-free! Scott has always addressed my concerns and questions with honesty, and patience. He's been professional every step of the way.`,
    loanStatus: "Closed Feb 2020",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan", "First-time home buyer"],
  },
  {
    name: "Debo",
    location: "Fairburn, GA",
    date: "1/28/2020",
    title: "Professional, Considerate, Patient and Honest",
    rating: 5,
    text: `Scott is very helpful and professional. One thing that made him different from the other lenders is the patience he had with me and he educated me throughout the whole process. I look forward to working with him in the future.`,
    loanStatus: "Closed Dec 2019",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["15 year fixed", "Conventional Loan"],
  },
  {
    name: "TONYb",
    location: "Bowie, MD",
    date: "1/28/2020",
    title: "Accommodation and Knowledge is everything!",
    rating: 5,
    text: `Scott Moon comes highly recommended and I was not disappointed! Scott and his team were very helpful and on top of things throughout the process. Communication is also important for me and they were very responsive in whatever questions I had and always kept me updated.`,
    loanStatus: "Closed Jan 2020",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "JenniferNicoleSanche",
    location: "Yucaipa, CA",
    date: "10/21/2019",
    title: "Excellent Lender",
    rating: 5,
    text: `I refinanced my home and Scott was so helpful and quick to respond. He found the best deals for me, so that when I closed I almost brought nothing to the table to refinance my home. He cares and finds what is best for your situation.`,
    loanStatus: "Closed Oct 2019",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "whozdamak",
    location: "Antioch, CA",
    date: "10/12/2019",
    title: "Top notch customer service",
    rating: 5,
    text: `My wife and I repeatedly said to each other that it felt as if we were Scott's only clients. The majority of our concerns were responded to within the hour. We went in with a plan and closed on a deal that was better than we anticipated.`,
    loanStatus: "Closed Oct 2019",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "zuser201503221900111",
    location: "Simi Valley, CA",
    date: "9/18/2019",
    title: "Scott Moon is the best!!!!",
    rating: 5,
    text: `Scott contacted me when we were in the middle of refinancing with another broker. I'm glad we connected: He is so professional, helpful and walks you through every detail that you need help with. This was extremely confusing for my husband and I to understand all the details.`,
    loanStatus: "Closed Sep 2019",
    loanType: "Refinance",
    interestRate: "Higher than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "cspina2",
    location: "Danville, CA",
    date: "9/11/2019",
    title: "5 star rating for lender Scott Moon",
    rating: 5,
    text: `Scott Moon was professional, personable and made my refinance seamless. Scott was able to get a lower interest rate than I expected and closed on time.`,
    loanStatus: "Closed Sep 2019",
    loanType: "Refinance",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan", "Low credit score"],
  },
  {
    name: "Penny Hile",
    location: "Lincoln, CA",
    date: "9/5/2019",
    title: "Scott Moon is the best!",
    rating: 5,
    text: `I would like to thank Scott for all his help in putting this loan together. He made a potentially stressful situation very stress-free, providing me with detailed information and explaining everything in an easily understood manner. And the entire process took less than a month from our first contact.`,
    loanStatus: "Closed Sep 2019",
    loanType: "Refinance",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "Evan Law",
    location: "Culpeper, VA",
    date: "7/18/2019",
    title: "Absolutely outstanding!",
    rating: 5,
    text: `Scott was incredibly helpful in answering a multitude of questions, in providing the best solutions available, and in ensuring that my wife and I achieved our desired outcome. I'm so pleased I found him!`,
    loanStatus: "Closed Jul 2019",
    loanType: "Purchase",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "Andy Z.",
    location: "Alexandria, VA",
    date: "7/13/2019",
    title: "The best customer service",
    rating: 5,
    text: `Scott is very focused on customer service—whenever you have a question, he always makes an effort to provide support and assistance, even late evenings or early mornings. I can count on Scott to answer my questions. Great work!`,
    loanStatus: "Closed Jun 2019",
    loanType: "Purchase",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "As expected",
  },
  {
    name: "user2596447",
    location: "Charlotte Hall, MD",
    date: "7/5/2019",
    title: "Excellent Service",
    rating: 5,
    text: `Scott was on his game from the minute we spoke. Always and promptly answered any questions through the entire loan process, and closed within 30 days. The entire home purchase was smooth and as explained with no hiccups along the way. Scott contacted before closing and followed up after.`,
    loanStatus: "Closed Jun 2019",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan"],
  },
  {
    name: "Paula G",
    location: "Lanham Seabrook, MD",
    date: "3/27/2019",
    title: "Outstanding Service!",
    rating: 5,
    text: `Mr. Scott Moon, I wanted to take the time to express my appreciation for the efficient and well organized lending services you and your company provided me! You made my loan process simple and as transparent as possible. You were attentive, never a delay and always forthright when more info was needed.`,
    loanStatus: "Closed Mar 2019",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "JLi",
    location: "Ashburn, VA",
    date: "3/20/2019",
    title: "Highly recommended!",
    rating: 5,
    text: `Scott is an absolute professional and was incredibly helpful throughout every step of our buying process. Extremely knowledgeable and most importantly - always available, hard working and personable. Very thankful for his approach and personality.`,
    loanStatus: "Closed Dec 2018",
    loanType: "Purchase",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
  },
  {
    name: "James",
    location: "Alexandria, VA",
    date: "3/11/2019",
    title: "Scott is AWESOME!",
    rating: 5,
    text: `Scott is an excellent resource for assistance on buying a home. He was efficient, helpful and provided intelligent insight throughout the entire process. I would highly recommend utilizing Scott as your go-to for assistance on any property!`,
    loanStatus: "Closed Jan 2019",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan", "First-time home buyer"],
  },
  {
    name: "cemitch15",
    location: "Fairburn, GA",
    date: "1/12/2019",
    title: "Scott Moon is Awesome",
    rating: 5,
    text: `Scott is really the Man when it comes down to getting approved for a Mortgage loan, he is very patient and smart when it comes to any minor issues, for every bump in the road I came across he helped!`,
    loanStatus: "Closed May 2018",
    loanType: "Purchase",
    interestRate: "Lower than expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "jmlee11194",
    location: "Rockville, MD",
    date: "12/19/2018",
    title: "Excellent above and beyond brokerage service",
    rating: 5,
    text: `Scott my loan officer has been extremely helpful throughout the course of assisting with my mortgage loan. Not only did he help me with my Loan, he also helped answer and/or point me to the right direction with all my house buying headaches. I highly recommend using Scott.`,
    loanStatus: "Closed Oct 2018",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "Conventional Loan", "Low credit score"],
  },
  {
    name: "jennireves",
    location: "Atlanta, GA",
    date: "8/30/2018",
    title: "Amazing customer service",
    rating: 5,
    text: `Scott Moon, and the WEI Mortgage team, walked us through every detail of the mortgage process. They carefully guided us, taking time to review and answer questions whenever we needed. We are very pleased with the service we received.`,
    loanStatus: "Closed Aug 2018",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "FHA Loan"],
  },
  {
    name: "latoyasinclair ls",
    location: "East Point, GA",
    date: "7/16/2018",
    title: "Excellent to Work With",
    rating: 5,
    text: `Working with Scott has been wonderful, he is very patient in explaining the entire loan process. He answered every question I had in a timely manner and gave me great advice. I will recommend him to everyone I know.`,
    loanStatus: "Closed Jul 2018",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "Lower than expected",
    tags: ["30 year fixed", "FHA Loan", "First-time home buyer"],
  },
  {
    name: "Sonia Phuyal",
    location: "Silver Spring, MD",
    date: "8/2/2018",
    title: "Great",
    rating: 5,
    text: `He was very helpful and reliable, I would totally recommend him to anyone. He answered my questions and concerns promptly and I can't ask for more! Just love his attitude and energy towards my project.`,
    loanStatus: "Closed Jul 2018",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["30 year fixed", "Conventional Loan", "First-time home buyer"],
  },
  {
    name: "aedc",
    location: "Washington, DC",
    date: "5/13/2018",
    title: "Responsive, helpful, and easy to work with",
    rating: 5,
    text: `Scott was great. My husband and I decided to move quickly on a house, and Scott moved quickly to provide us with the information we needed and to promptly put us in a place to get our financing in place. He was responsive and helpful throughout the process of qualifying.`,
    loanStatus: "Closed Feb 2018",
    loanType: "Purchase",
    interestRate: "As expected",
    closeOnTime: "Yes",
    fees: "As expected",
    tags: ["15 year fixed", "First-time home buyer"],
  },
];

// ─── Helper to render stars ──────────────────────────────────────
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? "fill-[#212843] text-[#212843]" : "text-midnight-ink/20"
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
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#212843]/10">
            <Image
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                review.name,
              )}&background=212843&color=fff&size=48`}
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
            className="mt-3 self-start text-sm font-medium text-[#212843] hover:text-[#161b2e] transition-colors"
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
                className="rounded-full bg-[#212843]/10 px-2.5 py-0.5 text-xs text-[#212843]"
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
          <div className="mt-3 rounded-lg bg-[#212843]/5 p-3 text-xs italic text-midnight-ink/70">
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
      title="Scott J Moon Client Reviews"
      description="Real stories from real families who have purchased or refinanced homes with Scott J Moon. Reviews are from Scott's time at WEI Mortgage."
    >
      <div className="mx-auto max-w-[1000px] space-y-20">
        {/* ─── Hero / Intro ────────────────────────────────────────── */}
        <Reveal>
          <div className="rounded-[24px] border border-border bg-lift-white p-8 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="flex justify-center">
              <div className="rounded-full bg-[#212843]/10 p-4">
                <MessageCircle className="h-8 w-8 text-[#212843]" />
              </div>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-midnight-ink sm:text-4xl">
              Helping families achieve homeownership with confidence
            </h2>
            <p className="mt-4 text-sm text-midnight-ink/60 max-w-2xl mx-auto">
              Real stories from real clients who have purchased or refinanced
              with Scott J Moon. The reviews below are from Scott's time at WEI
              Mortgage and reflect his commitment to client service.
            </p>

            {/* Rating summary */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#212843] text-[#212843]"
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-midnight-ink">
                  5 Stars ∙ 67 Reviews
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ─── Reviews Grid ────────────────────────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

        {/* ─── Verified Banner ─────────────────────────────────────── */}
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#212843]/10 px-5 py-2 text-xs font-medium text-[#212843]">
              Verified Client Reviews · 67 Total
            </span>
          </div>
        </Reveal>

        {/* ─── Quote Banner ────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] bg-[#212843] p-8 text-center text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
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
              <p className="mt-3 text-white/70">— Scott J Moon</p>
            </div>
          </section>
        </Reveal>

        {/* ─── Why Choose Scott ────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
                Why Choose Scott
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-midnight-ink">
                Experience You Can Trust
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-midnight-ink/70 leading-relaxed">
                A client-first approach built on listening carefully,
                communicating clearly, and following through on commitments.
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
                  <div className="rounded-full bg-[#212843]/10 p-3 text-[#212843]">
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
                <span className="text-sm font-semibold uppercase tracking-wider text-[#212843]">
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
                  <Link href="/contact">
                    <Button className="bg-[#212843] text-white shadow-md transition-all duration-300 hover:bg-[#161b2e] hover:shadow-lg">
                      Get Pre-Qualified
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/loan-options">
                    <Button
                      variant="outline"
                      className="border-midnight-ink/20 text-midnight-ink hover:bg-midnight-ink/5"
                    >
                      View All Loan Options
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="shrink-0">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#212843]/5">
                  <BookOpen
                    className="h-24 w-24 text-[#212843]/30"
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