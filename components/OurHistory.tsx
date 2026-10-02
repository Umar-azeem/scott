"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/components/nerdstack/reveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// ─── Image data ──────────────────────────────────────────────────
const carouselImages = [
  {
    src: "/img/bzn1.png",
    alt: "Business meeting",
  },
  {
    src: "/img/bzn2.jpg",
    alt: "Team collaboration",
  },
  {
    src: "/img/bzn3.jpg",
    alt: "Office workspace",
  },
  {
    src: "/img/bzn3.png",
    alt: "Office workspace",
  },
  {
    src: "/img/bzn4.png",
    alt: "Office workspace",
  },
];

export function OurHistory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Reveal>
      <section className="rounded-[24px] border border-border bg-lift-white p-8 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
        {/* Title */}
        <span className="text-sm font-semibold uppercase tracking-wider text-[#0F6D69]">
          Our History
        </span>

        {/* Main content */}
        <div className="mt-4 space-y-4 text-midnight-ink/80 leading-relaxed">
          <p className="text-sm sm:text-base">
            Jonathan Ravens, Owner of ByzLoan Corp., has been in the lending
            industry since 2003. Over the years, he has emerged as a trusted
            funding adviser to consumers and businesses across the country.
          </p>
          <p className="text-sm sm:text-base">
            <strong>
              Jonathan founded ByzLoan to create a better funding experience.
            </strong>{" "}
            An experience that’s centered on expert consultation, honest
            communication, and helping business owners choose the right product
            for their needs and situation.
          </p>
          <p className="text-sm sm:text-base">
            His experience and client-first approach continue to shape ByzLoan’s
            commitment to trust, transparency, and long-term relationships.
          </p>
        </div>

        {/* ─── Carousel ────────────────────────────────────────────── */}
        <div className="relative mt-8 overflow-hidden rounded-xl">
          <div className="relative aspect-[5/4] w-full">
            <Image
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-lift-white/80 p-2 text-midnight-ink shadow-md backdrop-blur-sm transition-colors hover:bg-lift-white hover:text-[#0F6D69]"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-lift-white/80 p-2 text-midnight-ink shadow-md backdrop-blur-sm transition-colors hover:bg-lift-white hover:text-[#0F6D69]"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-[#0F6D69]"
                    : "w-2 bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-border" />

        {/* Quote / Signature block */}
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#0F6D69] p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-3">
            <Quote className="h-6 w-6 text-white/80" strokeWidth={1.5} />
            <span className="font-display text-xl font-light italic text-white sm:text-2xl">
              Do something great today.
            </span>
          </div>
          <div className="text-center text-sm font-medium text-white/80 sm:text-right">
            <p>Jonathan Ravens</p>
            <p className="text-xs text-white/60">Owner</p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
