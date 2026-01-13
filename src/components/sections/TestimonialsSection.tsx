import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote:
      "Nerivo Labs transformed our product vision into a design system that actually scales. Their process is methodical, and the results speak for themselves.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "Stackflow",
  },
  {
    quote:
      "Working with Nerivo felt like having a design partner who truly understood product. They didn't just deliver screens—they delivered clarity.",
    author: "Marcus Webb",
    role: "Head of Product",
    company: "Relay Finance",
  },
  {
    quote:
      "The attention to detail and systematic approach sets them apart. Our brand identity now feels cohesive across every touchpoint.",
    author: "Elena Rodriguez",
    role: "Co-founder",
    company: "Wellspace",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div 
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="label-mono">What clients say</span>
          <h2 className="heading-section mt-4 max-w-xl">
            Trusted by teams building what's next.
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group p-8 bg-background border border-border/50 rounded-sm transition-all duration-300 hover:border-border hover:shadow-sm"
            >
              <blockquote className="space-y-6">
                <p className="text-body text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <footer className="pt-4 border-t border-border/50">
                  <div className="text-sm font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-caption mt-1">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
