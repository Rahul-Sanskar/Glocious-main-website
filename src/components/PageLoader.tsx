"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/**
 * PageLoader — a small first-paint loader.
 *
 * It is rendered by the server (so it is on screen for the very first frame,
 * before any JavaScript runs) and removes itself once the document has
 * finished loading. Two guards keep it honest:
 *
 *   · MIN_VISIBLE_MS — a floor, so a warm cache doesn't produce a one-frame
 *     flicker that reads as a glitch.
 *   · MAX_VISIBLE_MS — a ceiling, so a stalled third-party request can never
 *     trap the visitor behind the overlay.
 *
 * Motion goes through Framer Motion, which is configured globally with
 * reducedMotion="user" in LayoutShell — the spin stops for anyone who has
 * asked the OS for less motion.
 */

const MIN_VISIBLE_MS = 550;
const MAX_VISIBLE_MS = 2200;

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    let minTimer: number | undefined;

    const release = () => {
      const elapsed = Date.now() - startedAt;
      minTimer = window.setTimeout(
        () => setDone(true),
        Math.max(0, MIN_VISIBLE_MS - elapsed)
      );
    };

    if (document.readyState === "complete") {
      release();
    } else {
      window.addEventListener("load", release, { once: true });
    }

    const maxTimer = window.setTimeout(() => setDone(true), MAX_VISIBLE_MS);

    return () => {
      window.removeEventListener("load", release);
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="status"
          aria-label="Loading Glocious"
          data-page-loader=""
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center gap-6 bg-background"
        >
          {/* Mark inside a rotating progress ring */}
          <div className="relative w-[74px] h-[74px]">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid var(--color-border)" }}
            />
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid transparent",
                borderTopColor: "var(--color-accent)",
                borderRightColor: "var(--color-accent-alt)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            />
            <Image
              src="/images/glocious-mark.png"
              alt=""
              width={408}
              height={492}
              priority
              sizes="48px"
              className="absolute inset-0 m-auto"
              style={{ height: 34, width: "auto" }}
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-display text-sm font-semibold tracking-tight text-content-primary">
              Glocious
            </span>
            {/* Indeterminate progress hairline */}
            <span
              aria-hidden
              className="relative block h-[2px] w-[120px] overflow-hidden rounded-full"
              style={{ backgroundColor: "var(--color-border)" }}
            >
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-accent), var(--color-accent-alt))",
                }}
                initial={{ width: "8%" }}
                animate={{ width: ["8%", "72%", "92%"] }}
                transition={{ duration: 1.6, times: [0, 0.6, 1], ease: "easeOut" }}
              />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
