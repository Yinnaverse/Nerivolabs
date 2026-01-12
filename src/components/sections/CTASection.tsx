import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-section">
            Let's build something solid.
          </h2>
          <p className="text-lg text-body mt-6 mb-10">
            Ready to start your next project? We'd love to hear about it.
          </p>
          <Button variant="primary" size="xl" className="group">
            Talk to the lab
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
