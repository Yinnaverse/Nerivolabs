const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="label-mono">About</span>
            <h2 className="heading-section mt-4">
              Design with intention.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-body">
              Nerivo Labs is a design studio founded by creatives obsessed with clarity, 
              systems, and meaningful digital experiences—blending product thinking 
              with strong visual identity.
            </p>
            <p className="text-lg leading-relaxed text-body">
              We believe in the power of restraint, the beauty of structure, 
              and the impact of design that serves a purpose. Every project is 
              an opportunity to build something that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
