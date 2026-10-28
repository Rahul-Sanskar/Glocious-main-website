"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, Menu, X, ArrowRight, Sun, Moon, MessageSquare, Wifi, Globe, PhoneCall, Mail, Code2, Search, Share2, MousePointerClick, Users, BarChart2, Building2, HeartPulse, GraduationCap, Landmark, ShoppingBag, Store, Cpu, Layers, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";
import BrandLogo from "./BrandLogo";
import { useTheme } from "./ThemeProvider";

// ─── Nav structure ────────────────────────────────────────────
// "Solutions" uses a two-column mega-panel because it has many items.
// All other dropdowns use a single-column panel.
//
// NOTE ON DESTINATIONS
// Solutions and the two mapped disciplines now have dedicated pages under
// /solutions/[slug], so those items link there. The remaining disciplines and
// industries still deep-link to the homepage section that documents them —
// when those sub-pages are built, only the `href` values need to change.

type NavDropdownItem = {
  title: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  desc?: string;
};

type NavItem = {
  title: string;
  href: string;
  /** If omitted, the item renders as a plain link with no dropdown */
  dropdown?: NavDropdownItem[];
  /** Two-column mega panel */
  mega?: boolean;
};

const navItems: NavItem[] = [
  {
    title: "Solutions",
    href: "/solutions",
    mega: true,
    dropdown: [
      { title: "Business Messaging", href: "/solutions/business-messaging", icon: MessageSquare, desc: "SMS, OTP, Transactional & Promotional" },
      { title: "RCS",                href: "/solutions/rcs-messaging",      icon: Wifi,          desc: "Rich cards, carousels & verified sender" },
      { title: "WhatsApp",           href: "/solutions/whatsapp-business",  icon: Globe,         desc: "WhatsApp Business Communication" },
      { title: "Voice & IVR",        href: "/solutions/voice-ivr",          icon: PhoneCall,     desc: "IVR flows & intelligent call routing" },
      { title: "Email",              href: "/solutions/email-communication", icon: Mail,         desc: "Transactional, OTP & promotional email" },
      { title: "API Messaging",      href: "/solutions/api-messaging",      icon: Code2,         desc: "Programmable, developer-first messaging" },
    ],
  },
  {
    title: "Digital Growth",
    href: "/#digital",
    dropdown: [
      { title: "SEO",               href: "/#digital", icon: Search },
      { title: "SMO",               href: "/#digital", icon: Share2 },
      { title: "SMM",               href: "/#digital", icon: Share2 },
      { title: "PPC",               href: "/#digital", icon: MousePointerClick },
      { title: "Lead Generation",   href: "/#digital", icon: Users },
      { title: "Lead Management",   href: "/solutions/lead-management", icon: BarChart2 },
    ],
  },
  {
    title: "Technology",
    href: "/#technology",
    dropdown: [
      { title: "Website Development", href: "/#technology", icon: Layers },
      { title: "E-commerce",          href: "/#technology", icon: ShoppingCart },
      { title: "Digital Solutions",   href: "/solutions/website-digital-solutions", icon: Cpu },
    ],
  },
  {
    title: "Industries",
    href: "/#industries",
    dropdown: [
      { title: "Real Estate",  href: "/#industries", icon: Building2 },
      { title: "Healthcare",   href: "/#industries", icon: HeartPulse },
      { title: "Education",    href: "/#industries", icon: GraduationCap },
      { title: "BFSI",         href: "/#industries", icon: Landmark },
      { title: "E-commerce",   href: "/#industries", icon: ShoppingBag },
      { title: "Retail",       href: "/#industries", icon: Store },
      { title: "Technology",   href: "/#industries", icon: Cpu },
    ],
  },
  {
    title: "Company",
    href: "/#why-glocious",
    dropdown: [
      { title: "About",   href: "/#why-glocious" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

// ─── Dropdown panel ───────────────────────────────────────────

function DropdownPanel({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  if (!item.dropdown) return null;

  const isMega = item.mega;
  const panelWidth = isMega ? "w-[480px]" : item.dropdown.length > 4 ? "w-[220px]" : "w-[200px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 6, filter: "blur(6px)" }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      role="menu"
      className={`surface-overlay absolute top-full left-0 mt-0 ${panelWidth} overflow-hidden`}
      style={{ zIndex: 200 }}
      // Keep open while mouse moves into the panel
      onMouseEnter={() => {}}
    >
      {isMega ? (
        // Two-column mega panel
        <div className="p-2 grid grid-cols-2 gap-0.5">
          {item.dropdown.map((sub) => {
            const Icon = sub.icon;
            const active = pathname === sub.href;
            return (
              <Link
                key={sub.title}
                href={sub.href}
                role="menuitem"
                onClick={onClose}
                className="group flex items-start gap-3 p-3 rounded-lg transition-colors outline-none hover:bg-accent-soft focus-visible:bg-accent-soft"
              >
                {Icon && (
                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                      active ? "bg-accent-soft border-accent-soft" : "bg-content-primary/[0.04] border-border"
                    }`}
                  >
                    <Icon size={13} className={active ? "text-accent" : "text-content-secondary"} />
                  </div>
                )}
                <div className="min-w-0">
                  <p
                    className={`text-xs font-medium leading-snug ${
                      active ? "text-accent" : "text-content-primary"
                    }`}
                  >
                    {sub.title}
                  </p>
                  {sub.desc && (
                    <p className="text-2xs mt-0.5 leading-snug text-content-secondary">
                      {sub.desc}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        // Single-column panel
        <div className="p-1.5">
          {item.dropdown.map((sub) => {
            const Icon = sub.icon;
            const active = pathname === sub.href;
            return (
              <Link
                key={sub.title}
                href={sub.href}
                role="menuitem"
                onClick={onClose}
                className="group/link flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors outline-none hover:bg-accent-soft focus-visible:bg-accent-soft"
              >
                {Icon && (
                  <Icon
                    size={13}
                    className={`shrink-0 ${active ? "text-accent" : "text-content-secondary"}`}
                  />
                )}
                <span
                  className={`text-xs font-medium flex-1 ${
                    active ? "text-accent" : "text-content-secondary"
                  }`}
                >
                  {sub.title}
                </span>
                <ArrowRight
                  size={11}
                  className="text-accent -translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-150"
                />
              </Link>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Mobile: which accordion section is expanded
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const { theme, mounted, toggleTheme } = useTheme();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Close dropdown on outside click
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileOpenIndex(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Hover intent — small delay prevents flicker when moving between items
  const handleMouseEnter = useCallback((index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  }, []);

  // Keyboard: open/close with Enter or Space, close with Escape
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpenIndex((prev) => (prev === index ? null : index));
      }
      if (e.key === "Escape") {
        setOpenIndex(null);
      }
    },
    []
  );

  // Sun is shown while dark (action = go light) and vice-versa, so the icon
  // always depicts the state the button will switch to.
  const isDark = theme === "dark";
  const ThemeIcon = !mounted ? null : isDark ? <Sun size={16} /> : <Moon size={16} />;
  const themeLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  const isScrolledOrInner = scrolled || pathname !== "/";

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-base border-b ${
        isScrolledOrInner
          ? "backdrop-blur-xl py-3 shadow-card"
          : "py-5"
      }`}
      style={{
        backgroundColor: isScrolledOrInner ? "var(--color-nav-background)" : "transparent",
        borderColor: isScrolledOrInner ? "var(--color-border)" : "transparent",
      }}
    >
      {/* Same container as every section, so the logo lines up with the
          hero headline instead of sitting on its own wider grid. */}
      <div className="container-page flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────────── */}
        <div className="flex items-center gap-8 xl:gap-10">
          <BrandLogo preload size={32} className="shrink-0 z-50" />

          {/* ── Desktop navigation ──────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
            onMouseLeave={handleMouseLeave}
          >
            {navItems.map((item, index) => {
              const hasDropdown = !!item.dropdown?.length;
              const isOpen = openIndex === index;
              // Highlight if current route starts with a dropdown href
              const isActive =
                item.dropdown?.some((d) => pathname === d.href) ||
                (item.href !== "/" && pathname.startsWith(item.href.replace("/#", "/")));

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(index)}
                >
                  {/* Nav trigger — dropdown button, or plain link when the
                      item has no sub-navigation */}
                  {hasDropdown ? (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onClick={() => setOpenIndex((p) => (p === index ? null : index))}
                      className={`flex items-center gap-1.5 px-2.5 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors hover:bg-accent-soft ${
                        isActive || isOpen ? "text-content-primary" : "text-content-secondary"
                      } ${isOpen ? "bg-accent-soft" : ""}`}
                      onFocus={() => setOpenIndex(index)}
                      onBlur={(e) => {
                        // Only close if focus moves outside the nav item group
                        if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                          setTimeout(() => setOpenIndex((p) => (p === index ? null : p)), 150);
                        }
                      }}
                    >
                      {item.title}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center px-2.5 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors hover:bg-accent-soft ${
                        isActive ? "text-content-primary" : "text-content-secondary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown panel */}
                  {hasDropdown && (
                    <div
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <AnimatePresence>
                        {isOpen && (
                          <DropdownPanel
                            item={item}
                            pathname={pathname}
                            onClose={() => setOpenIndex(null)}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* ── Right actions ────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-btn rounded-full"
            aria-label={themeLabel}
            title={themeLabel}
          >
            {ThemeIcon}
          </button>

          {/* CTA — color-shifting premium button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <Link 
              href="/contact" 
              className="btn btn-primary relative overflow-hidden group border-none"
              style={{
                background: "linear-gradient(135deg, var(--color-button-background) 0%, var(--brand-yellow-500) 50%, var(--color-button-background) 100%)",
                backgroundSize: "200% 100%",
              }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ["0% 0%", "200% 0%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
              <span className="relative z-10">Talk to Us</span>
            </Link>
          </motion.div>
        </div>

        {/* ── Mobile menu button ───────────────────────────── */}
        <button
          type="button"
          className={`icon-btn lg:hidden relative text-content-primary ${mobileMenuOpen ? "invisible" : ""}`}
          style={{ width: "2.25rem", height: "2.25rem", zIndex: 110 }}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────
          Slide-down panel — cleaner on mobile than a full-screen takeover.
          Accordion per nav section. Theme toggle + CTA at the bottom.
      ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 top-0 z-[99] flex flex-col overflow-y-auto lg:hidden bg-background"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-5 py-4 shrink-0 border-b border-border">
              <BrandLogo size={30} onClick={() => setMobileMenuOpen(false)} />
              <button
                type="button"
                className="icon-btn text-content-primary"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav items as accordion */}
            <div className="flex-1 px-4 py-3">
              {navItems.map((item, index) => {
                const isExpanded = mobileOpenIndex === index;
                const hasDropdown = !!item.dropdown?.length;
                return (
                  <div
                    key={item.title}
                    className="border-b border-border last:border-0"
                  >
                    {hasDropdown ? (
                      <>
                        {/* Accordion trigger */}
                        <button
                          type="button"
                          className="w-full flex items-center justify-between py-3.5 text-[15px] font-semibold text-left text-content-primary"
                          onClick={() => setMobileOpenIndex((p) => (p === index ? null : index))}
                          aria-expanded={isExpanded}
                        >
                          {item.title}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 text-content-secondary ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            aria-hidden
                          />
                        </button>

                        {/* Accordion content */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 grid grid-cols-2 gap-1">
                                {item.dropdown!.map((sub) => {
                                  const Icon = sub.icon;
                                  const active = pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.title}
                                      href={sub.href}
                                      className={`flex items-center gap-2 px-2 py-2.5 rounded-lg text-xs font-medium transition-colors hover:bg-accent-soft ${
                                        active ? "text-accent bg-accent-soft" : "text-content-secondary"
                                      }`}
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {Icon && (
                                        <Icon
                                          size={13}
                                          className={`shrink-0 ${active ? "text-accent" : "text-content-secondary"}`}
                                        />
                                      )}
                                      {sub.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center py-3.5 text-[15px] font-semibold text-content-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom actions */}
            <div className="px-4 py-5 space-y-3 shrink-0 border-t border-border">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg btn-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Talk to Us
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                className="btn btn-secondary btn-block"
                aria-label={themeLabel}
              >
                {mounted && (isDark ? <Sun size={15} /> : <Moon size={15} />)}
                {mounted ? (isDark ? "Light mode" : "Dark mode") : "Toggle theme"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
