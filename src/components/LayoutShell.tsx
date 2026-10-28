"use client";

/**
 * LayoutShell — client boundary that owns all layout-level dynamic imports.
 * Keeping dynamic() calls inside a "use client" component avoids the
 * Next.js 14 BAILOUT_TO_CLIENT_SIDE_RENDERING that happens when dynamic()
 * with ssr:false is used directly in a Server Component layout.
 *
 * Only two behaviours are genuinely client-only:
 *   · AIChatbot      — needs state + the speech API
 *   · SmoothScroll   — owns the Lenis instance
 * Everything else renders on the server and ships zero JS.
 */

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import InteractiveBackground from "@/components/InteractiveBackground";

const AIChatbot    = dynamic(() => import("@/components/AIChatbot"),    { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {/* reducedMotion="user" makes every Framer Motion animation honour the OS
          setting: transform and layout animations are skipped while opacity
          fades are kept. Declared once here instead of guarding each component,
          so a stale `initial={{ y: 24 }}` anywhere can never bypass it. */}
      <MotionConfig reducedMotion="user">
        <InteractiveBackground />
        <SmoothScroll />
        {children}
        <AIChatbot />
      </MotionConfig>
    </ThemeProvider>
  );
}
