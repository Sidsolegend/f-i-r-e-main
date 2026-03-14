import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import previewHero from "@/assets/preview-hero-real.png";

const PLATFORM_URL = "https://f-i-r-e.lovable.app/";

export default function FinalReveal() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="section-padding max-w-6xl mx-auto text-center">
      <motion.h2
        className="font-display text-3xl md:text-5xl text-foreground mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Ready to explore?
      </motion.h2>
      <motion.p
        className="text-muted-foreground max-w-lg mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        The platform is live. Discover clubs, register for events, and never miss an opportunity.
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
      >
        <a
          href={PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Try the Platform
        </a>
        <a
          href={PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
        >
          Explore Clubs
        </a>
        <a
          href={PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
        >
          Create Account
        </a>
      </motion.div>

      <motion.div
        className="rounded-2xl overflow-hidden shadow-2xl border border-border/30"
        initial={{ opacity: 0, y: 80, scale: 0.92 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={previewHero} alt="FIRE Platform" className="w-full" loading="lazy" />
      </motion.div>
    </section>
  );
}
