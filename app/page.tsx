import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <AboutSection />
    </div>
  );
}
