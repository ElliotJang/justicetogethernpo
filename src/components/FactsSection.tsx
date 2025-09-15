const FactsSection = () => {
  const facts = [
    {
      statistic: "37%",
      description: "Only 37% of immigrants have legal representation in immigration court"
    },
    {
      statistic: "4x",
      description: "Legal representation makes deportation 4x less likely"
    },
    {
      statistic: "Most",
      description: "Most immigrants do not speak English and lack legal knowledge"
    },
    {
      statistic: "Defenseless",
      description: "They are defenseless without help"
    }
  ];

  return (
    <section id="facts" className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-16">
          The Facts
        </h2>

        <p className="text-center max-w-prose mx-auto mb-10 md:mb-12 text-primary-foreground/90">
          Access to counsel dramatically improves outcomes in immigration court, yet most people must navigate a complex legal system alone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-accent-warm">
                {fact.statistic}
              </div>
              <p className="text-lg leading-relaxed text-primary-foreground/90">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;