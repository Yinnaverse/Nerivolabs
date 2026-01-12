import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20">
      <div className="container-narrow section-padding">
        <div className="max-w-4xl">
          <h1 className="heading-hero animate-fade-up text-balance">
            Designing products and brands for what's next.
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-body animate-fade-up-delay-1">
            Nerivo Labs is a multidisciplinary design studio focused on product design, 
            brand systems, and digital experiences that scale.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <Button variant="primary" size="lg" className="group">
              Start a project
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary_outline" size="lg">
              View work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
