import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div 
          ref={ref}
          className="grid gap-12 md:grid-cols-2 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
