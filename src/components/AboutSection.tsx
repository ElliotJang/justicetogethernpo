const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What is Justice Together?
          </h2>
          
          <div className="space-y-8 text-lg text-foreground/80">
            <p className="leading-relaxed">
              Justice Together is a nonprofit advocacy organization working to ensure that immigrants 
              facing deportation have access to legal representation and their constitutional rights are protected.
            </p>
            
            <p className="leading-relaxed">
              Immigration enforcement policies are pushing a radical mass deportation agenda on immigrants—discarding due process, 
              violating constitutional rights, and targeting immigrant communities.
            </p>
            
            <p className="leading-relaxed font-semibold text-primary">
              We fight back by working to secure <strong>free legal representation</strong> for immigrants 
              at risk of detention and deportation.
            </p>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Why?</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <p className="text-foreground font-medium">
                  Immigrants do <strong>not</strong> receive government-appointed attorneys
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <p className="text-foreground font-medium">
                  Without legal help, they're defenseless
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <p className="text-foreground font-medium">
                  U.S. citizens have been wrongfully detained
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <p className="text-foreground font-medium">
                  Children are being separated from their parents and held in inhumane conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;