"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Destinations mirror the single-page architecture: capability links jump to
// the homepage section that documents them, and Contact is the only standalone
// route today. Swap the anchors for real URLs as sub-pages ship.
const footerLinks = {
  Solutions: [
    { label: "Business Communication", href: "/#communication" },
    { label: "Digital Growth", href: "/#digital" },
    { label: "Technology Solutions", href: "/#technology" },
    { label: "Industries", href: "/#industries" },
  ],
  Company: [
    { label: "Why Glocious", href: "/#why-glocious" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/glocious" },
  { name: "Twitter / X", url: "https://twitter.com/glocious" },
  { name: "Instagram", url: "https://www.instagram.com/glocious" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-subtle pt-20 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display font-bold text-[17px] tracking-tight mb-5 text-content-primary"
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black bg-accent text-accent-contrast">
                G
              </div>
              Glocious Infotech
            </Link>
            <p className="text-sm leading-relaxed max-w-[280px] text-content-secondary">
              Powering business communication, driving digital growth, and delivering technology solutions for modern enterprises.
            </p>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs leading-relaxed text-content-secondary">
                <span className="font-medium text-content-primary">Glocious Infotech Pvt. Ltd.</span><br />
                India
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold mb-5 uppercase tracking-widest text-content-primary">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-content-secondary hover:text-content-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + bottom strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-xs font-medium text-content-secondary hover:text-content-primary transition-colors"
              >
                {social.name}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
                />
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <p className="text-xs text-content-secondary">
              © {new Date().getFullYear()} Glocious Infotech Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs text-content-secondary hover:text-content-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-content-secondary hover:text-content-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
