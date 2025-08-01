import { Button } from "@/components/ui/button";

const GetInvolvedSection = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:justicetogether2027@gmail.com";
  };

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Get Involved
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold mb-8 text-foreground">How you can help:</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <p className="text-foreground font-medium">
                  • Donate to fund legal aid (Coming Soon)
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <p className="text-foreground font-medium">
                  • Join our volunteer legal network (Coming Soon)
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <p className="text-foreground font-medium">
                  • Share our message on social media
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <p className="text-foreground font-medium">
                  • Attend or host fundraisers
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="default" size="lg" className="text-lg px-8 py-3">
                Volunteer
                <span className="ml-2 text-sm">(Coming Soon)</span>
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                Donate
                <span className="ml-2 text-sm">(Coming Soon)</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3"
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;