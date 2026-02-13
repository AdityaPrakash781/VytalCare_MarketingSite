import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { FeaturesSection } from "@/components/sections/features";
import { TrustSection } from "@/components/sections/trust";
import { CTASection } from "@/components/sections/cta";
import { MissionSlider } from "@/components/sections/mission-slider";
import { Footer } from "@/components/layout/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling on mount or when location changes (if handled by wouter)
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-teal-100 dark:selection:bg-teal-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <TrustSection />
        <CTASection />
        <MissionSlider />
      </main>

      <Footer />
    </div >
  );
}
