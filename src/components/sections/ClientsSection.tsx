import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const clientTypes = [
  "Startups & founders",
  "Early-stage product teams",
  "Brands ready to scale",
];

const ClientsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding border-t border-divider">
      <div className="container-narrow">
        <motion.div 
          ref={ref}
          className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span className="label-mono">Who we work with</span>
            <h2 className="heading-section mt-4">
              Partners building the future.
            </h2>
          </div>

          <motion.div 
            className="space-y-3 sm:space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {clientTypes.map((type, index) => (
              <motion.div
                key={type}
                variants={staggerItem}
                className="flex items-center gap-4 py-3 sm:py-4 border-b border-divider last:border-0"
              >
                <span className="text-xs font-medium text-muted-foreground w-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base sm:text-lg text-hero">{type}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
