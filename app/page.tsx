import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MissionSection } from "@/components/MissionSection";
import { WorkSection } from "@/components/WorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GrowTogetherSection } from "@/components/GrowTogetherSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <MissionSection />
      <WorkSection />
      <TestimonialsSection />
      <GrowTogetherSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
