import Header from "@/components/header";
import AgingEraSection from "@/components/sections/aging-era-section";
import GrowthContactSection from "@/components/sections/growth-contact-section";
import HeroSection from "@/components/sections/hero-section";
import LifestyleSection from "@/components/sections/lifestyle-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import PipelineSection from "@/components/sections/pipeline-section";
import StorySection from "@/components/sections/story-section";
import TeamSection from "@/components/sections/team-section";

export default function Home() {
  return (
    <div className="app-shell">
      <Header />
      <HeroSection />
      <AgingEraSection />
      <PhilosophySection />
      <StorySection />
      <PipelineSection />
      <LifestyleSection />
      <TeamSection />
      <GrowthContactSection />
    </div>
  );
}
