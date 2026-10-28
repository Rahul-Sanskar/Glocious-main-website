"use client";

/**
 * CinematicStoryScroll.tsx
 * GSAP horizontal storytelling ribbon — Glocious brand messaging.
 *
 * Motion contract
 * ---------------
 * Exactly one scroll-driven animation: the ribbon tracks horizontally while the
 * section is pinned (free GSAP core + ScrollTrigger only, no Club plugins).
 * There is deliberately no secondary parallax layer and no idle floating —
 * continuous motion that isn't tied to the reader's scroll just costs frames.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NodeDot = ({ size = 10 }: { size?: number }) => (
  <svg width={size * 3} height={size * 3} viewBox={`0 0 ${size * 3} ${size * 3}`} fill="none" aria-hidden className="inline-block align-middle shrink-0">
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 0.3} fill="var(--color-accent)" />
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 0.7} fill="var(--color-accent)" fillOpacity="0.18" />
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 1.4} fill="var(--color-accent)" fillOpacity="0.06" />
  </svg>
);

const NodeDotAlt = ({ size = 6 }: { size?: number }) => (
  <svg width={size * 3} height={size * 3} viewBox={`0 0 ${size * 3} ${size * 3}`} fill="none" aria-hidden className="inline-block align-middle shrink-0">
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 0.3} fill="var(--color-accent-alt)" />
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 0.7} fill="var(--color-accent-alt)" fillOpacity="0.18" />
    <circle cx={size * 1.5} cy={size * 1.5} r={size * 1.4} fill="var(--color-accent-alt)" fillOpacity="0.06" />
  </svg>
);

const FlowArrow = () => (
  <svg width="90" height="28" viewBox="0 0 90 28" fill="none" aria-hidden className="inline-block align-middle shrink-0">
    <path d="M0 14 C20 4, 40 24, 62 14 S80 4, 90 14" stroke="url(#fa-gl)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M78 9 L90 14 L78 20" stroke="var(--color-accent)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="fa-gl" x1="0" y1="0" x2="90" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.05" />
        <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.85" />
        <stop offset="100%" stopColor="var(--color-accent-alt)" stopOpacity="0.05" />
      </linearGradient>
    </defs>
  </svg>
);

const SignalBars = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden className="inline-block align-middle shrink-0">
    <rect x="2" y="16" width="5" height="10" rx="1.5" fill="var(--color-accent)" fillOpacity="0.5" />
    <rect x="10" y="10" width="5" height="16" rx="1.5" fill="var(--color-accent)" fillOpacity="0.75" />
    <rect x="18" y="4" width="5" height="22" rx="1.5" fill="var(--color-accent)" />
  </svg>
);

const MessageIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden className="inline-block align-middle shrink-0">
    <rect x="2" y="5" width="24" height="16" rx="3" stroke="var(--color-accent)" strokeWidth="1.2" strokeOpacity="0.7" />
    <path d="M8 10 H20 M8 14 H16" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.8" />
    <path d="M6 21 L10 17 H22 V21" stroke="var(--color-accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
  </svg>
);

type Phrase = { k: "phrase"; text: string; weight?: "bold" | "light" | "accent" };
type Glyph  = { k: "glyph"; el: React.ReactNode };
type Gap    = { k: "gap"; size: number };
type Story  = Phrase | Glyph | Gap;

const story: Story[] = [
  { k: "phrase", text: "Connect",       weight: "bold"   },
  { k: "gap",    size: 28                                 },
  { k: "glyph",  el: <FlowArrow />                        },
  { k: "gap",    size: 28                                 },
  { k: "phrase", text: "every",         weight: "light"  },
  { k: "gap",    size: 10                                 },
  { k: "phrase", text: "customer",      weight: "bold"   },
  { k: "gap",    size: 48                                 },
  { k: "glyph",  el: <NodeDot />                          },
  { k: "gap",    size: 48                                 },
  { k: "phrase", text: "across",        weight: "light"  },
  { k: "gap",    size: 10                                 },
  { k: "phrase", text: "SMS",           weight: "accent" },
  { k: "gap",    size: 12                                 },
  { k: "phrase", text: "WhatsApp",      weight: "bold"   },
  { k: "gap",    size: 12                                 },
  { k: "phrase", text: "Voice",         weight: "bold"   },
  { k: "gap",    size: 48                                 },
  { k: "glyph",  el: <SignalBars />                       },
  { k: "gap",    size: 48                                 },
  { k: "phrase", text: "and",           weight: "light"  },
  { k: "gap",    size: 10                                 },
  { k: "phrase", text: "Email",         weight: "bold"   },
  { k: "gap",    size: 48                                 },
  { k: "glyph",  el: <NodeDotAlt />                       },
  { k: "gap",    size: 48                                 },
  { k: "glyph",  el: <FlowArrow />                        },
  { k: "gap",    size: 56                                 },
  { k: "phrase", text: "automate",      weight: "bold"   },
  { k: "gap",    size: 12                                 },
  { k: "phrase", text: "engagement",    weight: "bold"   },
  { k: "gap",    size: 48                                 },
  { k: "glyph",  el: <MessageIcon />                      },
  { k: "gap",    size: 48                                 },
  { k: "phrase", text: "accelerate",    weight: "light"  },
  { k: "gap",    size: 10                                 },
  { k: "phrase", text: "growth",        weight: "bold"   },
  { k: "gap",    size: 56                                 },
  { k: "glyph",  el: <NodeDot />                          },
  { k: "gap",    size: 56                                 },
  { k: "phrase", text: "at",            weight: "light"  },
  { k: "gap",    size: 10                                 },
  { k: "phrase", text: "scale",         weight: "accent" },
  { k: "gap",    size: 80                                 },
];

export default function CinematicStoryScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 160);

      const mainTween = gsap.to(track, { x: () => -getDistance(), ease: "none" });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getDistance()}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        animation: mainTween,
        invalidateOnRefresh: true,
      });
    });

    mm.add("(max-width: 767px)", () => {
      const elements = track.querySelectorAll(".story-item");
      elements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0.2, y: 12 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", end: "top 60%", scrub: true },
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Glocious story"
      className="relative w-full h-auto py-24 md:py-0 md:h-[100svh] flex items-center justify-center overflow-hidden"
      style={{
        background: "var(--color-background)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Ambient bloom */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px", height: "280px",
          background: "radial-gradient(ellipse at center, var(--glow-color) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Edge fades */}
      <div
        aria-hidden
        className="hidden md:block"
        style={{
          position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none",
          background: "linear-gradient(to right, var(--color-background) 0%, transparent 6%, transparent 94%, var(--color-background) 100%)",
        }}
      />

      {/* Eyebrow — offset below the fixed header so it is never occluded */}
      <p
        aria-hidden
        style={{
          position: "absolute", top: "5.5rem", left: "50%",
          transform: "translateX(-50%)", zIndex: 20,
          fontSize: "9px", fontWeight: 600,
          letterSpacing: "0.32em", textTransform: "uppercase",
          color: "var(--color-text-muted)", opacity: 0.8,
          whiteSpace: "nowrap",
        }}
      >
        The Glocious ecosystem — scroll to explore
      </p>

      {/* Track */}
      <div
        ref={trackRef}
        style={{ display: "flex", userSelect: "none" }}
        className="relative flex-wrap md:flex-nowrap items-center justify-center md:justify-start h-auto md:h-full max-w-7xl mx-auto px-6 md:pl-[max(6vw,40px)] md:pr-[max(12vw,80px)] gap-x-4 gap-y-6 md:gap-0 whitespace-normal md:whitespace-nowrap will-change-transform"
      >
        {story.map((item, i) => {
          if (item.k === "gap") {
            return <div key={i} className="hidden md:block shrink-0" style={{ width: `${item.size}px` }} aria-hidden />;
          }

          if (item.k === "phrase") {
            const isBold   = item.weight === "bold";
            const isAccent = item.weight === "accent";
            return (
              <span
                key={i}
                className="story-item text-center md:text-left whitespace-nowrap"
                style={{
                  display: "inline-block", flexShrink: 0,
                  fontSize: "clamp(1.9rem, 5.2vw, 5rem)",
                  fontWeight: isBold ? 650 : isAccent ? 700 : 300,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  fontFamily: "inherit",
                  ...(isAccent
                    ? {
                        background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-alt))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : {
                        color: isBold
                          ? "var(--color-text-primary)"
                          : "var(--color-text-secondary)",
                        opacity: isBold ? 0.88 : 1,
                        textShadow: isBold ? "0 0 60px var(--glow-color)" : "none",
                      }),
                }}
              >
                {item.text}
              </span>
            );
          }

          if (item.k === "glyph") {
            return (
              <span
                key={i}
                className="story-item"
                style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
                aria-hidden
              >
                {item.el}
              </span>
            );
          }

          return null;
        })}
      </div>

      {/* Scroll hint */}
      <p
        aria-hidden
        className="hidden md:flex"
        style={{
          position: "absolute", bottom: "24px", left: "50%",
          transform: "translateX(-50%)", zIndex: 20,
          display: "flex", alignItems: "center", gap: "8px",
          fontSize: "9px", fontWeight: 600,
          letterSpacing: "0.32em", textTransform: "uppercase",
          color: "var(--color-text-muted)", opacity: 0.6, whiteSpace: "nowrap",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 2 L10 6 L2 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Keep scrolling
      </p>
    </section>
  );
}
