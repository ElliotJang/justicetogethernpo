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
      <Header />
      <HeroSection />
      <AboutSection />
      <FactsSection />
      <MissionSection />
      <MembersSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
};

export default Index;
