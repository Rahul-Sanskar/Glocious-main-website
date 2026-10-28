import type { Config } from "tailwindcss";

/**
 * Glocious Infotech — Tailwind configuration
 *
 * Color utilities resolve to the semantic CSS custom properties defined in
 * globals.css, so every utility automatically follows the active theme.
 *
 * Naming
 * ------
 *   bg-background / bg-surface / bg-surface-elevated   → surfaces
 *   text-content-primary / -secondary / -muted         → text
 *   border-border / border-border-strong               → borders
 *   bg-accent / text-accent / bg-accent-soft           → brand accent
 *
 * Never hard-code a hex value in a component — add a token instead.
 */
const config: Config = {
  /* Themes are driven by the [data-theme] attribute on <html>, set by the
     inline script in layout.tsx. This keeps Tailwind's `dark:` variant aligned
     with the same source of truth as the CSS custom properties. */
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Surfaces ─────────────────────────────────────── */
        background: {
          DEFAULT: "var(--color-background)",
          subtle: "var(--color-background-subtle)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          elevated: "var(--color-surface-elevated)",
          sunken: "var(--color-surface-sunken)",
        },

        /* ── Text ─────────────────────────────────────────── */
        content: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },

        /* ── Borders ──────────────────────────────────────── */
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },

        /* ── Brand accent ─────────────────────────────────── */
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          soft: "var(--color-accent-soft)",
          contrast: "var(--color-accent-contrast)",
        },

        focus: "var(--color-focus-ring)",

        /* ── Secondary accent (two-tone gradients) ────────── */
        accentAlt: {
          DEFAULT: "var(--color-accent-alt)",
          soft: "var(--color-accent-alt-soft)",
        },

        /* ── Feedback ─────────────────────────────────────── */
        success: {
          DEFAULT: "var(--color-success)",
          soft: "var(--color-success-soft)",
        },
        warning: "var(--color-warning)",
        danger: {
          DEFAULT: "var(--color-danger)",
          soft: "var(--color-danger-soft)",
        },
        disabled: {
          DEFAULT: "var(--color-disabled-background)",
          text: "var(--color-disabled-text)",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      fontSize: {
        "2xs": ["var(--text-2xs)", { lineHeight: "1.45" }],
        xs: ["var(--text-xs)", { lineHeight: "1.5" }],
        sm: ["var(--text-sm)", { lineHeight: "1.6" }],
        body: ["var(--text-body)", { lineHeight: "1.65" }],
        lead: ["var(--text-lead)", { lineHeight: "1.65" }],
        h4: ["var(--text-h4)", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        h3: ["var(--text-h3)", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        h2: ["var(--text-h2)", { lineHeight: "1.14", letterSpacing: "-0.025em" }],
        h1: ["var(--text-h1)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        display: ["var(--text-display)", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
      },

      /* One controlled radii scale — softer than Tailwind's default so the
         whole product shares the same geometry. */
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },

      maxWidth: {
        page: "var(--container-max)",
        measure: "var(--measure)",
      },

      spacing: {
        section: "var(--section-y)",
        "section-tight": "var(--section-y-tight)",
        gutter: "var(--gutter)",
        "control-sm": "var(--control-h-sm)",
        "control-md": "var(--control-h-md)",
        "control-lg": "var(--control-h-lg)",
      },

      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        overlay: "var(--shadow-overlay)",
        accent: "var(--shadow-accent)",
      },

      transitionDuration: {
        instant: "var(--duration-instant)",
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
      },

      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        "out-soft": "var(--ease-out-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
