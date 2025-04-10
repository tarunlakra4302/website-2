import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SmoothScroll>
          <HeroSection />
          <ProjectsSection />
        </SmoothScroll>
      </main>
      <Footer />
    </>
  );
}
