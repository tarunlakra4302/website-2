import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutContent } from "@/components/about-content";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <SmoothScroll>
          <AboutContent />
        </SmoothScroll>
      </main>
      <Footer />
    </>
  );
}
