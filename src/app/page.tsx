import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesStrip from "@/components/CapabilitiesStrip";
import CommunicationEcosystem from "@/components/CommunicationEcosystem";
import DigitalGrowth from "@/components/DigitalGrowth";
import TechSolutions from "@/components/TechSolutions";
import Industries from "@/components/Industries";
import WhyGlocious from "@/components/WhyGlocious";
import GlociousCTA from "@/components/GlociousCTA";
import Footer from "@/components/Footer";

// Heavy animation components — loaded client-side only to avoid SSR bailout
const CinematicStoryScroll = dynamic(
  () => import("@/components/CinematicStoryScroll"),
  { ssr: false, loading: () => <div className="h-screen bg-background" /> }
);

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background">
      {/* ── Navigation ────────────────────────────────────── */}
      <Navbar />

      {/* Section 1 — Hero */}
      <Hero />

      {/* Cinematic story scroll ribbon */}
      <CinematicStoryScroll />

      {/* Section 2 — Capabilities / Trust strip */}
      <CapabilitiesStrip />

      {/* Section 3 — Communication ecosystem */}
      <CommunicationEcosystem />

      {/* Section 4 — Digital growth services */}
      <DigitalGrowth />

      {/* Section 5 — Technology solutions */}
      <TechSolutions />

      {/* Section 6 — Industries */}
      <Industries />

      {/* Section 7 — Why Glocious */}
      <WhyGlocious />

      {/* Section 8 — Final CTA */}
      <GlociousCTA />

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
