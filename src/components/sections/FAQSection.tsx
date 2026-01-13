import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What's your typical process for a new project?",
    answer:
      "We start with a discovery phase to understand your goals, users, and constraints. From there, we move into wireframes and concept exploration, followed by high-fidelity design and iteration. Every project includes a handoff with organized assets and documentation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on scope. A landing page typically takes 2–3 weeks, a multi-page website 4–6 weeks, and a full product design engagement 8–12 weeks. We'll provide a detailed timeline during our initial conversation.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes, we frequently partner with early-stage teams. Whether you're pre-seed or Series A, we tailor our approach to match your stage—focusing on what matters most to get your product to market.",
  },
  {
    question: "What deliverables can we expect?",
    answer:
      "Depending on the project: high-fidelity designs, interactive prototypes, design systems with components, brand guidelines, and production-ready assets. Everything is organized and documented for seamless handoff.",
  },
  {
    question: "Do you offer ongoing design support?",
    answer:
      "Yes. Many clients work with us on a retainer basis for continuous product design, feature iterations, and design system maintenance. We can discuss what arrangement works best for your needs.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through our contact form or email. We'll schedule a brief call to understand your project, discuss scope, and see if we're the right fit. No pressure, just a conversation.",
  },
];

const FAQSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div 
          ref={ref}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="lg:col-span-4">
            <span className="label-mono">FAQ</span>
            <h2 className="heading-section mt-4">
              Common questions, clear answers.
            </h2>
            <p className="text-body mt-4 text-base">
              Everything you need to know about working with us.
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-0">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50 py-2"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5 [&[data-state=open]>svg]:rotate-45">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-base leading-relaxed pb-6 pr-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
