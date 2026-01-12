const services = [
  {
    title: "Product Design",
    description: "UX, UI, MVPs, SaaS, Web Apps",
    number: "01",
  },
  {
    title: "Brand Identity",
    description: "Visual systems, logos, brand foundations",
    number: "02",
  },
  {
    title: "Digital Experiences",
    description: "Websites, landing pages, interaction design",
    number: "03",
  },
  {
    title: "Design Strategy",
    description: "Product thinking, user research, positioning",
    number: "04",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <div className="mb-16">
          <span className="label-mono">What we build</span>
          <h2 className="heading-section mt-4 max-w-xl">
            Crafting experiences from product to brand.
          </h2>
        </div>

        <div className="grid gap-px bg-divider md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-background p-8 md:p-12 group hover:bg-elevated transition-colors duration-300"
            >
              <span className="text-xs font-medium text-muted-foreground">
                {service.number}
              </span>
              <h3 className="heading-card mt-4">{service.title}</h3>
              <p className="text-caption mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
