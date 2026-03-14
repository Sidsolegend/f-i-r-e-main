import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import previewHero from "@/assets/preview-hero-real.png";

export default function VisionSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="section-padding max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground text-center leading-tight mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        What if every student could discover{" "}
        <span className="text-gradient-accent">every opportunity?</span>
      </motion.h2>

      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={previewHero}
          alt="FIRE Platform Preview"
          className="w-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}
