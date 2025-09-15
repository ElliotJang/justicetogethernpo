import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FactsSection from "@/components/FactsSection";
import MissionSection from "@/components/MissionSection";
import MembersSection from "@/components/MembersSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <FactsSection />
        <MissionSection />
        <MembersSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
