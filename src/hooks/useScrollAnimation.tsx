import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options?: { once?: boolean; margin?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: options?.once ?? true, 
    margin: options?.margin as any ?? "-100px 0px"
  });

  return { ref, isInView };
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};
