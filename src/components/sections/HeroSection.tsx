import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { fadeUpVariants } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      
      <div className="container-narrow section-padding relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            className="heading-hero text-balance"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Designing products and brands for what's next.
          </motion.h1>
          
          <motion.p 
            className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-body"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            Nerivo Labs is a multidisciplinary design studio focused on product design, 
            brand systems, and digital experiences that scale.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-wrap gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <Button variant="primary" size="lg" className="group">
              Start a project
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary_outline" size="lg">
              View work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
