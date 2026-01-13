import workFintech from "@/assets/work-fintech.jpg";
import workWellness from "@/assets/work-wellness.jpg";
import workSaas from "@/assets/work-saas.jpg";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Fintech Dashboard",
    category: "Product Design",
    image: workFintech,
  },
  {
    title: "Wellness Brand",
    category: "Brand Identity",
    image: workWellness,
  },
  {
    title: "SaaS Platform",
    category: "Digital Experience",
    image: workSaas,
  },
];

const WorkSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="work" className="section-padding">
      <div className="container-narrow">
        <motion.div 
          ref={ref}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="label-mono">Selected Work</span>
            <h2 className="heading-section mt-4">Recent projects.</h2>
          </div>
          <a
            href="#"
            className="text-sm text-body hover:text-hero link-underline transition-colors duration-200 self-start"
          >
            View all work
          </a>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href="#"
              className="group block"
              variants={staggerItem}
            >
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {project.category}
              </span>
              <h3 className="heading-card mt-1 group-hover:text-body transition-colors duration-200">
                {project.title}
              </h3>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
