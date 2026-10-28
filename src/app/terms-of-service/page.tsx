import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Glocious Infotech",
  description: "Read the Terms of Service and user agreements for Glocious Infotech's business communication, digital growth and technology solutions.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-content-primary selection:bg-accent selection:text-accent-contrast">
      <Navbar />
      
      <main className="pt-40 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-lg max-w-none text-content-secondary">
          <h1 className="text-4xl md:text-5xl font-medium text-content-primary mb-12">Terms of Service</h1>
          <p className="text-content-muted mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">1. Agreement to Terms</h2>
            <p className="text-content-secondary leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Glocious Infotech Pvt. Ltd. ("Company", "we", "us", or "our"), 
              concerning your access to and use of our website as well as any related business communication, digital growth and technology services. 
              By accessing our services, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">2. Communication, Growth &amp; Technology Services</h2>
            <p className="text-content-secondary leading-relaxed mb-4">
              Glocious Infotech provides business communication infrastructure, digital growth services, and technology solutions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary">
              <li><strong>Systems Delivery &amp; SLA:</strong> Service timelines, deliverables, IP ownership, and exact SLA commitments are defined in individual client master service agreements (MSA) and statements of work (SOW).</li>
              <li><strong>Data Privacy &amp; Masking:</strong> We enforce enterprise-grade data encryption and masking to ensure client and customer records remain strictly private.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">3. User Representations</h2>
            <p className="text-content-secondary leading-relaxed mb-4">
              By using our Site and Services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You will not access the Site through automated or non-human means (e.g., scraping), unless permitted by us in writing.</li>
              <li>You will not use the Site or our Services for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">4. Intellectual Property Rights</h2>
            <p className="text-content-secondary leading-relaxed">
              Unless otherwise indicated, the Site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
              (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, 
              and are protected by copyright and trademark laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">5. Modifications and Interruptions</h2>
            <p className="text-content-secondary leading-relaxed">
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. 
              We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">6. Governing Law</h2>
            <p className="text-content-secondary leading-relaxed">
              These conditions are governed by and interpreted following the laws of India, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded. 
              If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence. 
              Glocious Infotech and yourself both agree to submit to the non-exclusive jurisdiction of the courts of India.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-content-primary mb-4">7. Contact Information</h2>
            <p className="text-content-secondary leading-relaxed">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please reach out to us through the enquiry form on our{" "}
              <Link href="/contact" className="text-accent hover:underline">Contact page</Link>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
