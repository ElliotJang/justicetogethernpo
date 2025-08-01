import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-justice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Fighting for Due Process.
          <br />
          <span className="text-accent-warm">Defending Human Rights.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          Immigrants deserve legal representation. We're here to educate and support to make that happen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            Donate Now
          </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-3">
            Learn More
          </Button>
        </div>
        
        <p className="mt-4 text-white/70 text-sm">(Coming Soon)</p>
      </div>
    </section>
  );
};

export default HeroSection;