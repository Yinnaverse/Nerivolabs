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
    <section id="pricing" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="heading-section mb-6">Pricing, with clarity.</h2>
          <p className="text-body text-lg">
            Straightforward pricing for design work that's built to last.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border/50 rounded-sm transition-all duration-300 hover:border-border hover:shadow-sm"
            >
              <div className="space-y-6">
                {/* Tier Header */}
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-body text-sm">{tier.description}</p>
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-border" />

                {/* Features */}
                <ul className="space-y-3">
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
                <div className="pt-4">
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
        <div className="border-t border-border/50 pt-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-lg font-medium text-foreground mb-3">
                Brand Identity & Visual Systems
              </h3>
              <p className="text-body text-sm mb-6 lg:mb-0">
                Complete brand foundations for products and companies ready to scale.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {brandServices.map((service, index) => (
                <span key={index} className="text-body text-sm">
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
