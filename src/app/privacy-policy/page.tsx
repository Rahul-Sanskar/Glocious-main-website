import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Glocious Infotech",
  description: "Read the Privacy Policy of Glocious Infotech to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-content-primary selection:bg-accent selection:text-accent-contrast">
      <Navbar />
      
      <main className="pt-40 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-lg max-w-none text-content-secondary">
          <h1 className="text-4xl md:text-5xl font-medium text-content-primary mb-12">Privacy Policy</h1>
          <p className="text-content-muted mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">1. Introduction</h2>
            <p className="text-content-secondary leading-relaxed">
              Welcome to Glocious Infotech ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy applies to our website (glocious.com) and our business communication, digital growth and technology services. 
              If you have any questions or concerns about our policy, or our practices with regards to your personal information, please reach out to us through the enquiry form on our <Link href="/contact" className="text-accent hover:underline">Contact page</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">2. Information We Collect</h2>
            <p className="text-content-secondary leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary">
              <li>Request a consultation or solution walkthrough.</li>
              <li>Inquire about business communication, digital growth, or technology solutions.</li>
              <li>Contact us via our website forms or live support.</li>
            </ul>
            <p className="text-content-secondary leading-relaxed mt-4">
              The personal information that we collect depends on the context of your interactions with us, but can include: 
              <strong> Names, business email addresses, phone numbers, company name, and project requirements.</strong>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">3. How We Use Your Information</h2>
            <p className="text-content-secondary leading-relaxed mb-4">
              We use personal information collected via our Website for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary">
              <li><strong>To deliver our services:</strong> Communicating with you regarding your business communication, digital growth, or technology requirements.</li>
              <li><strong>To understand requirements:</strong> Reviewing your objectives and constraints to recommend suitable solutions.</li>
              <li><strong>To send administrative information:</strong> Sending project updates, service reports, and service policy notifications.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">4. Will Your Information Be Shared?</h2>
            <p className="text-content-secondary leading-relaxed">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. 
              We do not sell, rent, or trade your personal information to third parties for their promotional purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">5. Data Security</h2>
            <p className="text-content-secondary leading-relaxed">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. 
              However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">6. Contact Us</h2>
            <p className="text-content-secondary leading-relaxed">
              If you have questions or comments about this notice, please reach out to us through the enquiry form on our{" "}
              <Link href="/contact" className="text-accent hover:underline">Contact page</Link> and we will respond as soon as possible.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
