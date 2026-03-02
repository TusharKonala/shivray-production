import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkSection } from "@/components/WorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
