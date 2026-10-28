import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Glocious | Business Communication, Growth & Technology",
  description:
    "Talk to Glocious Infotech about business communication, digital growth or technology solutions. Send an enquiry and our team will respond with a scoped recommendation.",
  alternates: {
    canonical: "https://www.glocious.com/contact",
  },
  openGraph: {
    title: "Contact Glocious Infotech",
    description:
      "Tell us about your business and the outcome you need — communication, digital growth or technology.",
    url: "https://www.glocious.com/contact",
    type: "website",
  },
};

const expectations = [
  {
    title: "A real response",
    body: "Your enquiry goes to our team, not a queue — we review the detail before replying.",
  },
  {
    title: "A scoped recommendation",
    body: "We suggest the channels, platform or approach that fit your requirement, and say so when something isn't needed.",
  },
  {
    title: "No obligation",
    body: "An initial conversation carries no commitment and no cost.",
  },
];

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.glocious.com/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.glocious.com/contact" },
    ],
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-background">
        {/* Ambient wash behind the header */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, var(--glow-color) 0%, transparent 70%)",
          }}
        />

        <div className="container-page relative z-10 pt-36 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left — context */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Contact</p>
              <h1 className="text-h1 mb-6 text-content-primary">
                Let&apos;s talk about
                <br />
                <span className="font-normal text-content-secondary">
                  what you&apos;re building.
                </span>
              </h1>

              <p className="text-lead max-w-md mb-10 text-content-secondary">
                Tell us about your business and the outcome you need. We&apos;ll come back
                with the right approach across communication, digital growth or technology.
              </p>

              <ul className="space-y-6 mb-10">
                {expectations.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent"
                    />
                    <div>
                      <p className="text-sm font-medium mb-1 text-content-primary">
                        {item.title}
                      </p>
                      <p className="text-xs leading-relaxed text-content-secondary">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <p className="text-xs leading-relaxed text-content-secondary">
                  <span className="font-medium text-content-primary">
                    Glocious Infotech Pvt. Ltd.
                  </span>
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Footer />
    </>
  );
}
