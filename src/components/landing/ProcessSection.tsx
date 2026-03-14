import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const steps = ["Clubs", "Events", "Announcements", "Engagement"];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="section-padding max-w-4xl mx-auto">
      <motion.p
        className="text-sm uppercase tracking-[0.3em] text-primary text-center mb-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      >
        How It Works
      </motion.p>
      <motion.h2
        className="font-display text-3xl md:text-5xl text-foreground text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
      >
        From discovery to engagement
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-lg">{i + 1}</span>
              </div>
              <span className="text-foreground font-medium text-sm">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-muted-foreground mx-6 hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
