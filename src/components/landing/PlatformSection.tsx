import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import previewClubs from "@/assets/preview-clubs-real.png";
import previewEvents from "@/assets/preview-events-real.png";

const previews = [
  { src: previewClubs, label: "Clubs Directory", desc: "Browse and filter student-led clubs by category." },
  { src: previewEvents, label: "Events & Calendar", desc: "Stay updated with upcoming events and registration." },
];

export default function PlatformSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="section-padding max-w-6xl mx-auto">
      <motion.p
        className="text-sm uppercase tracking-[0.3em] text-primary text-center mb-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      >
        The Platform
      </motion.p>
      <motion.h2
        className="font-display text-3xl md:text-5xl text-foreground text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
      >
        Built for students
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center max-w-xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        A clean, modern interface designed to make every opportunity accessible.
      </motion.p>

      <div className="space-y-16">
        {previews.map((preview, i) => (
          <motion.div
            key={preview.label}
            className="relative"
            initial={{ opacity: 0, y: 60 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{preview.label}</span>
              <span className="text-muted-foreground text-sm">— {preview.desc}</span>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/30">
              <img src={preview.src} alt={preview.label} className="w-full" loading="lazy" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
