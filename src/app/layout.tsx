import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

/* Display face (headings) + text face (body) + mono (code / technical labels).
   Three families is the ceiling — each one is a real download cost. */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.glocious.com"),
  title: "Glocious Infotech | Business Communication, Digital Growth & Technology Solutions",
  description:
    "Glocious Infotech helps businesses communicate with customers, automate engagement, and accelerate growth through intelligent communication infrastructure, digital marketing, and technology solutions.",
  keywords: [
    "bulk SMS India",
    "business communication platform",
    "WhatsApp Business API",
    "RCS messaging",
    "IVR solutions",
    "cloud telephony",
    "OTP SMS",
    "transactional SMS",
    "digital marketing agency",
    "SEO services India",
    "lead generation",
    "marketing automation",
    "website development India",
    "AI communication platform",
    "unified messaging platform",
    "Glocious Infotech",
  ],
  alternates: {
    canonical: "https://www.glocious.com",
  },
  icons: {
    icon: "/glocious-icon.svg",
    shortcut: "/glocious-icon.svg",
    apple: "/glocious-icon.svg",
  },
  openGraph: {
    title: "Glocious Infotech | Business Communication & Digital Growth",
    description:
      "Powering business communication and digital growth. SMS, RCS, WhatsApp, Voice, IVR, Email, SEO, and AI-powered automation, all from one technology partner.",
    url: "https://www.glocious.com",
    siteName: "Glocious Infotech",
    images: [
      {
        url: "/images/hero-communication-network.jpg",
        width: 1200,
        height: 630,
        alt: "Glocious Infotech — Business Communication & Digital Growth",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glocious Infotech | Business Communication & Digital Growth",
    description:
      "SMS, RCS, WhatsApp, Voice, IVR, Email, AI chatbots, SEO and digital marketing, all from one partner.",
    images: ["/images/hero-communication-network.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://www.glocious.com/#organization",
        name: "Glocious Infotech Pvt. Ltd.",
        url: "https://www.glocious.com/",
        description:
          "Glocious Infotech is a technology and business solutions company specialising in business communication infrastructure, digital growth services, and AI-powered automation.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Glocious Business Communication & Digital Solutions",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Business Communication",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bulk SMS & Transactional SMS" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Business Communication" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "RCS Messaging" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "IVR & Cloud Telephony" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Communication" } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Digital Growth",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Digital Marketing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation & Management" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing Automation" } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Technology Solutions",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website & E-commerce Development" } },
              ],
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Glocious Infotech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Glocious Infotech is a technology and business solutions company that provides business communication infrastructure (SMS, RCS, WhatsApp, Voice, IVR, Email), digital growth services (SEO, SMM, PPC, Lead Generation), and technology solutions including website, e-commerce and custom digital development.",
            },
          },
          {
            "@type": "Question",
            name: "What communication channels does Glocious support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Glocious supports a full range of business communication channels including Bulk SMS, OTP & Authentication SMS, Transactional SMS, RCS Messaging, WhatsApp Business API, Voice SMS, IVR, Cloud Telephony, Missed Call Services, Click-to-Call, Call Routing, OTP Email, Transactional Email, and Promotional Email.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/*
          Theme initialization — runs before first paint so the correct theme
          is applied with zero flash. Intentional constraints:
            · synchronous but tiny (no rendering dependency, no network)
            · explicit stored preference wins
            · otherwise the OS preference is honoured
            · wrapped in try/catch so private-mode storage errors can't break the page
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");var e=document.documentElement;e.setAttribute("data-theme",t);e.style.colorScheme=t;}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`,
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LayoutShell>
          <div
            className="scroll-progress-bar fixed top-0 left-0 right-0 h-[2px] origin-left scale-x-0 z-[99999] transition-transform duration-75"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-accent) 45%, var(--color-accent) 55%, transparent)",
            }}
          />
          <div className="grain-overlay fixed inset-0 z-[9999] pointer-events-none" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
