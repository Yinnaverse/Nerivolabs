import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div 
          ref={ref}
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
