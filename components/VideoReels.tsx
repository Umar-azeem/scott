"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Reveal } from "./nerdstack/reveal";

// ---------- Types ----------
interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  src: string;
}

// ---------- Video Data (7 items) ----------
const VIDEO_DATA: Video[] = [
  {
    id: "1",
    title: "$15,000",
    description: "The Most Important Thing to Homebuyers",
    duration: "4:32",
    src: "/img/v1.mp4",
  },
  {
    id: "2",
    title: "$100,000",
    description: "Why I Chose This Mortgage Advisor",
    duration: "6:15",
    src: "/img/v2.mp4",
  },
  {
    id: "3",
    title: "$200,000",
    description: "First-Time Homebuyer Success Story",
    duration: "5:48",
    src: "/img/v3.mp4",
  },
  {
    id: "4",
    title: "$85,000",
    description: "Navigating the Mortgage Process with Ease",
    duration: "7:02",
    src: "/img/v4.mp4",
  },
  {
    id: "5",
    title: "$330,000",
    description: "Refinancing Made Simple & Stress-Free",
    duration: "3:55",
    src: "/img/v5.mp4",
  },
];

// ---------- Icons (unchanged) ----------
const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const VolumeOnIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

const VolumeOffIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);

// ---------- Video Card (Instagram Reels Style) ----------
const ReelCard = ({
  video,
  onClick,
}: {
  video: Video;
  onClick: (v: Video) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
            setIsPlaying(true);
          } else {
            el.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      el.pause();
    };
  }, []);

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      el.play().catch(() => {});
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const handleCardClick = () => {
    onClick(video);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  return (
    <div
      className="reel-card relative flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] rounded-2xl overflow-hidden cursor-pointer bg-midnight-ink shadow-card-soft hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleCardClick}
      style={{ aspectRatio: "9 / 16" }}
    >
      <video
        ref={videoRef}
        src={video.src}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover"
        onClick={handleVideoClick}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {isHovering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/90 text-midnight-ink flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
            {isPlaying ? (
              <PauseIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5 ml-0.5" />
            )}
          </div>
        </div>
      )}

      <button
        onClick={toggleMute}
        className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:scale-110 ${
          isHovering ? "opacity-100" : "opacity-60"
        }`}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeOffIcon className="w-4 h-4" />
        ) : (
          <VolumeOnIcon className="w-4 h-4" />
        )}
      </button>

      <span className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10">
        {video.duration}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
        <h4 className="text-white font-display text-sm font-semibold truncate leading-tight">
          {video.title}
        </h4>
        <p className="text-white/70 text-[11px] truncate mt-0.5 leading-tight font-light">
          {video.description}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#0F6D69" }}
          />
          <span className="text-[10px] text-white/50 font-medium tracking-wide uppercase">
            Reel
          </span>
        </div>
      </div>

      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{ boxShadow: "inset 0 0 0 2px rgba(168, 126, 98, 0.5)" }}
      />
    </div>
  );
};

// ---------- Video Modal ----------
const VideoModal = ({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.play().catch(() => {});
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      if (el) el.pause();
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-black">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors flex items-center justify-center backdrop-blur-sm border border-white/20"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <button
          onClick={toggleMute}
          className="absolute top-3 left-3 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors flex items-center justify-center backdrop-blur-sm border border-white/20"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeOffIcon className="w-5 h-5" />
          ) : (
            <VolumeOnIcon className="w-5 h-5" />
          )}
        </button>

        <div className="aspect-[9/16] w-full bg-black">
          <video
            ref={videoRef}
            src={video.src}
            muted={isMuted}
            loop
            playsInline
            controls={false}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-12">
          <h3 className="text-white font-display text-lg font-bold">
            {video.title}
          </h3>
          <p className="text-white/70 text-sm mt-0.5 font-light">
            {video.description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[#0F6D69] text-xs font-semibold uppercase tracking-wider">
              {video.duration}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/40 text-xs">Client Story</span>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-auto">
            <PlayIcon className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- Main Carousel Component ----------
export default function VideoCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const checkScroll = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 20);

    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector(".reel-card")?.getBoundingClientRect().width || 200;
    const gap = 20;
    const scrollAmount = (cardWidth + gap) * (direction === "left" ? -2 : 2);
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const openVideo = (video: Video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const el = rowRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: percent * maxScroll, behavior: "smooth" });
  };

  return (
    <Reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-lift-white">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span
                className="w-1 h-8 rounded-full"
                style={{ background: "#0F6D69" }}
              />
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-midnight-ink">
                Business <span style={{ color: "#0F6D69" }}>Just </span>Secured
              </h2>
            </div>
            <p className="text-sm text-midnight-ink/60 ml-4 pl-0.5 font-light">
              This auto supply center, backed by more than 20 years in operation
              and a strong 718 credit profile, was able to secure the working
              capital needed to continue growing. Whether you're looking to
              purchase inventory, expand operations, upgrade equipment, or
              improve cash flow, the right financing solution can help you reach
              your next milestone. Need capital for your business? Let'
            </p>
          </div>

          <div className="flex items-center gap-2 bg-lift-white border border-border rounded-full px-4 py-2 self-start sm:self-auto shadow-card-soft">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#0F6D69" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: "#0F6D69" }}
              />
            </span>
            <span className="text-xs font-medium text-midnight-ink/70">
              {VIDEO_DATA.length} Stories
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            disabled={!showLeftArrow}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-card-soft -ml-4 ${
              showLeftArrow
                ? "bg-lift-white text-midnight-ink hover:bg-midnight-ink/5 hover:scale-105 border border-border"
                : "bg-lift-white/50 text-midnight-ink/30 cursor-not-allowed opacity-50 border border-border"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div
            ref={rowRef}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-1 scrollbar-brand custom-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {VIDEO_DATA.map((video) => (
              <div key={video.id} className="snap-start">
                <ReelCard video={video} onClick={openVideo} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!showRightArrow}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-card-soft -mr-4 ${
              showRightArrow
                ? "bg-lift-white text-midnight-ink hover:bg-midnight-ink/5 hover:scale-105 border border-border"
                : "bg-lift-white/50 text-midnight-ink/30 cursor-not-allowed opacity-50 border border-border"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Long Scroller */}
        <div className="mt-6 px-2">
          <div
            ref={trackRef}
            className="relative w-full h-2 bg-[#0F6D69]/20 rounded-full cursor-pointer overflow-visible"
            onClick={handleTrackClick}
          >
            {/* Filled progress */}
            <div
              className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
              style={{
                width: `${scrollProgress * 100}%`,
                background: "#0F6D69",
              }}
            />

            {/* Tick marks */}
            {VIDEO_DATA.map((_, i) => {
              const position = i / (VIDEO_DATA.length - 1);
              return (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-1 h-4 rounded-full transition-colors duration-200"
                  style={{
                    left: `${position * 100}%`,
                    background: "#0F6D69",
                    transform: "translateX(-50%) translateY(-50%)",
                  }}
                />
              );
            })}
          </div>
          {/* Labels */}
          <div className="flex justify-between mt-1 text-[10px] text-midnight-ink/40 font-medium px-0.5">
            {VIDEO_DATA.map((video, i) => (
              <span
                key={i}
                className="text-center"
                style={{ width: `${100 / VIDEO_DATA.length}%` }}
              >
                {video.duration}
              </span>
            ))}
          </div>
        </div>

        {selectedVideo && (
          <VideoModal video={selectedVideo} onClose={closeModal} />
        )}
      </div>
    </Reveal>
  );
}
