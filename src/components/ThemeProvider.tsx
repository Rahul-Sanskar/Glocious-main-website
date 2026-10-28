"use client";

/**
 * ThemeProvider — the single source of truth for the active theme.
 *
 * Contract with the rest of the app:
 *   · The theme lives on <html data-theme="light|dark">, which is what
 *     globals.css keys every semantic token off.
 *   · The inline script in layout.tsx sets that attribute before first paint,
 *     so this provider never causes a flash — it only *reads* the current
 *     value on mount and keeps it in sync afterwards.
 *   · An explicit choice is persisted in localStorage. When the visitor has
 *     made no explicit choice, the OS preference is followed live.
 *
 * No external dependency — the whole mechanism is ~1KB.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

interface ThemeContextValue {
  /** The theme currently applied to the document. */
  theme: Theme;
  /** False during SSR / first render — use to avoid hydration mismatches on icons. */
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  mounted: false,
  setTheme: () => {},
  toggleTheme: () => {},
});

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
}

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function readDomTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Adopt whatever the pre-paint script decided, then keep following the OS
  // preference for as long as the visitor hasn't chosen explicitly.
  useEffect(() => {
    setThemeState(readDomTheme());
    setMounted(true);

    const query = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemChange = (event: MediaQueryListEvent) => {
      if (readStoredTheme()) return; // explicit choice always wins
      const next: Theme = event.matches ? "light" : "dark";
      applyTheme(next);
      setThemeState(next);
    };

    query.addEventListener("change", handleSystemChange);
    return () => query.removeEventListener("change", handleSystemChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode) — theme still applies for the session */
    }
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, mounted, setTheme, toggleTheme }),
    [theme, mounted, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
