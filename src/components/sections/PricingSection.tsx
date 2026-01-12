import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    title: "Landing Page Design",
    description: "High-converting landing page",
    features: [
      "UX structure & visual design",
      "Responsive across devices",
      "Framer / Webflow-ready delivery",
    ],
    cta: "Get started",
    href: "#contact",
  },
  {
    title: "Website Design",
    description: "Multi-page website design",
    features: [
      "Design system & components",
      "Desktop & mobile views",
      "Smooth interactions & layout logic",
    ],
    cta: "Start a project",
    href: "#contact",
  },
  {
    title: "Mobile App Design",
    description: "iOS & Android UI design",
    features: [
      "UX flows & wireframes",
      "Design system & components",
      "Prototype-ready screens",
    ],
    cta: "Request pricing",
    href: "#contact",
  },
  {
    title: "Web App / SaaS Design",
    description: "Complex product UX & UI",
    features: [
      "Scalable design systems",
      "Dashboards, flows, and states",
      "Built for growth & iteration",
    ],
    cta: "Talk to the lab",
    href: "#contact",
  },
];

const brandServices = [
  "Logo design",
  "Visual identity system",
  "Typography & color systems",
  "Brand guidelines",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background border-t border-divider">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="label-mono">Pricing</span>
          <h2 className="heading-section mt-4 mb-4">Pricing, with clarity.</h2>
          <p className="text-body text-base sm:text-lg">
            Straightforward pricing for design work that's built to last.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 md:mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 bg-card border border-border/50 rounded-sm transition-all duration-300 hover:border-border hover:shadow-sm"
            >
              <div className="flex flex-col h-full">
                {/* Tier Header */}
                <div className="mb-6">
                  <h3 className="text-base sm:text-lg font-medium text-foreground mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-body text-sm">{tier.description}</p>
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-border mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-body text-sm leading-relaxed"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6 mt-auto">
                  <Button
                    variant="minimal"
                    className="p-0 h-auto text-sm font-medium group/btn"
                    asChild
                  >
                    <a href={tier.href}>
                      {tier.cta}
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Identity Add-on */}
        <div className="border-t border-border/50 pt-8 md:pt-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <div className="lg:max-w-md">
              <h3 className="text-base sm:text-lg font-medium text-foreground mb-2">
                Brand Identity & Visual Systems
              </h3>
              <p className="text-body text-sm">
                Complete brand foundations for products and companies ready to scale.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3">
              {brandServices.map((service, index) => (
                <span key={index} className="text-body text-sm whitespace-nowrap">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
