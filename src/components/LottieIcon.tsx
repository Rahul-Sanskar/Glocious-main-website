"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ComponentType, type CSSProperties } from "react";

/**
 * Lottie glyph.
 *
 * The animations are authored in-repo (src/assets/lottie/*.json) and passed in
 * as plain objects, so nothing is fetched from a CDN at runtime. The player
 * itself is client-only: lottie-web needs a real DOM container and reads
 * `window` while it initialises.
 *
 * We use `LottieSvg` rather than the full `Lottie` build — it carries only the
 * SVG renderer, which is all these animations need.
 */
const Player = dynamic(() => import("lottie-react").then((mod) => mod.LottieSvg), {
  ssr: false,
}) as unknown as ComponentType<PlayerProps>;

type PlayerProps = {
  src: object;
  as?: "span";
  loop?: boolean;
  autoplay?: boolean;
  segment?: readonly [number, number];
  style?: CSSProperties;
};

type LottieIconProps = {
  /** Animation object imported from src/assets/lottie. */
  animationData: { op?: number };
  /** Rendered box in px. The artwork is authored on a 100×100 grid. */
  size?: number;
  loop?: boolean;
  /** Frame parked on when the visitor prefers reduced motion. Defaults to the midpoint. */
  staticFrame?: number;
  className?: string;
  /** Accessible name. Omit to mark the animation decorative. */
  label?: string;
};

export default function LottieIcon({
  animationData,
  size = 40,
  loop = true,
  staticFrame,
  className,
  label,
}: LottieIconProps) {
  /* MotionConfig in LayoutShell covers Framer Motion; Lottie is a separate
     engine and needs its own read of the same OS preference. */
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const totalFrames = animationData.op ?? 60;
  const frame = staticFrame ?? Math.round(totalFrames / 2);

  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      style={{ width: size, height: size, display: "inline-block", lineHeight: 0 }}
    >
      {/* Parking the playable range on a single composed frame is what stops
          a reduced-motion visitor from landing on frame 0, where most of these
          glyphs have not been drawn yet. */}
      <Player
        as="span"
        src={animationData}
        loop={loop && !reduceMotion}
        autoplay={!reduceMotion}
        segment={reduceMotion ? [frame, frame + 1] : undefined}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </span>
  );
}
