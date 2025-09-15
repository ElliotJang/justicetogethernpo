const MembersSection = () => {
  // Executive Board TBD

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
            <div className="bg-card rounded-lg p-6 shadow-lg border border-border text-center">
              <p className="text-muted-foreground">Not yet decided</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;