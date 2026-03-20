import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";
import PipelineSection from "@/components/PipelineSection";
import PhilosophyScrollSection from "@/components/PhilosophyScrollSection";
import TechSection from "@/components/TechSection";
import { getFeaturedNewsPosts } from "@/lib/news";

export const revalidate = 60;

export default async function Home() {
  const featuredPosts = await getFeaturedNewsPosts(3);

  return (
    <div className="app-shell" id="top">
      <Navbar />
      <section id="hero" className="scroll-mt-28">
        <HeroSection />
      </section>
      <section id="philosophy" className="scroll-mt-28">
        <PhilosophyScrollSection />
      </section>
      <section id="platform" className="scroll-mt-28">
        <TechSection />
      </section>
      <section id="pipeline" className="scroll-mt-28">
        <PipelineSection />
      </section>
      <section id="leadership" className="scroll-mt-28">
        <LeadershipSection />
      </section>
      <section id="news" className="scroll-mt-28">
        <NewsSection posts={featuredPosts} />
      </section>
      <section id="investors" className="scroll-mt-28">
        <Footer />
      </section>
    </div>
  );
}
