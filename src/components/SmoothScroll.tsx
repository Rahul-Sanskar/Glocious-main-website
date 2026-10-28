"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * SmoothScroll — single owner of scroll behaviour.
 *
 * Why this owns anchor handling: the CSS `scroll-behavior: smooth` rule has
 * been removed, because two smooth-scroll systems fighting over the same
 * property is what produces the "jump then glide" artefact. Lenis is now the
 * only thing that moves the page, so in-page anchors are routed through it.
 */
export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* Honour the OS setting. Lenis still drives scrollTo and owns the ticker,
       but with smoothWheel off the page stops drifting after the gesture and
       anchors jump instead of gliding. */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    /* Progress bar — read from Lenis' own scroll event so it stays in sync
       with the smoothed position rather than the raw one. */
    const progressBar = document.querySelector<HTMLElement>(".scroll-progress-bar");
    const onScroll = () => {
      ScrollTrigger.update();
      if (!progressBar) return;
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      const progress = limit > 0 ? Math.min(1, Math.max(0, lenis.scroll / limit)) : 0;
      gsap.set(progressBar, { scaleX: progress });
    };
    lenis.on("scroll", onScroll);

    const updateTicker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(updateTicker);

    /* Route same-page anchors through Lenis (the nav links to "/#section", so
       both the bare "#id" and "/#id" forms have to be recognised). Cross-page
       hashes are left to the router. */
    const onDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex);
      if (path !== "" && path !== window.location.pathname) return;

      const target = document.getElementById(decodeURIComponent(href.slice(hashIndex + 1)));
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -72, immediate: prefersReducedMotion });
    };

    /* Capture phase, so this runs before the router's own click handler. Next's
       <Link> bails out when the event is already default-prevented, which is
       what lets Lenis own the scroll instead of two systems racing. */
    document.addEventListener("click", onDocumentClick, true);

    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return null;
}
