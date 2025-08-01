const MembersSection = () => {
  const executiveBoard = [
    { name: "Anaya Parikh" },
    { name: "Aileen Toomey" },
    { name: "Aarika Tania" }
  ];

  return (
    <section id="members" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Our Team
          </h2>
          
          {/* Founder Section */}
          <div className="mb-16">
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Founder</h3>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Esther Park</h4>
              <p className="text-muted-foreground mb-6">2nd generation immigrant</p>
              
              <div className="bg-secondary rounded-lg p-6">
                <h5 className="font-semibold mb-3 text-foreground">Speech & Debate "Original Advocacy" Speech:</h5>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Proposed immigration legislation for a more just process</li>
                  <li>• 8th Place in California State Finals</li>
                  <li>• Champion at the Wolfpack Invitational</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Executive Board */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Executive Board</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {executiveBoard.map((member, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg text-foreground">{member.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;