const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Our Mission
          </h2>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-16 leading-relaxed">
            "To ensure every immigrant facing deportation receives the legal protection they deserve."
          </blockquote>
          
          <div className="text-left">
            <h3 className="text-xl font-bold mb-8 text-foreground">We advocate for:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold text-lg mb-3 text-primary">Government-funded immigration attorneys</h4>
                <p className="text-muted-foreground">
                  Ensuring every immigrant has access to qualified legal representation, regardless of their financial situation.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold text-lg mb-3 text-primary">Humane treatment of detainees</h4>
                <p className="text-muted-foreground">
                  Advocating for dignified and respectful treatment of all individuals in immigration custody.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold text-lg mb-3 text-primary">Legal rights awareness</h4>
                <p className="text-muted-foreground">
                  Educating immigrants about their constitutional rights and available legal protections.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold text-lg mb-3 text-primary">Legislative reform</h4>
                <p className="text-muted-foreground">
                  Working toward comprehensive immigration reform that centers justice and equity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;