import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ImpactSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="section-padding max-w-4xl mx-auto text-center">
      <motion.h2
        className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        Equal access to{" "}
        <span className="text-gradient-accent">opportunity.</span>
      </motion.h2>

      <motion.p
        className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        FIRE is on a mission to ensure that every student, regardless of their school or background,
        has fair and transparent access to co-curricular opportunities that shape their future.
      </motion.p>
    </section>
  );
}
