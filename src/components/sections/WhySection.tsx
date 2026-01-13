import { FlaskConical, Lightbulb, Users, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: FlaskConical,
    title: "Lab-driven experimentation",
    description: "Continuous refinement through research and iteration.",
  },
  {
    icon: Lightbulb,
    title: "Product-first thinking",
    description: "Design that goes beyond visuals to solve real problems.",
  },
  {
    icon: Users,
    title: "Founder-led projects",
    description: "Small, focused team with direct senior involvement.",
  },
  {
    icon: Layers,
    title: "Systems built to scale",
    description: "Design foundations that grow with your product.",
  },
];

const WhySection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div 
          ref={ref}
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label-mono">Why Nerivo Labs</span>
          <h2 className="heading-section mt-4 max-w-xl">
            A different kind of design partner.
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} className="group" variants={staggerItem}>
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <reason.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium text-hero">{reason.title}</h3>
              <p className="text-caption mt-2">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
