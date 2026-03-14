import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, HandHelping, Radio, Zap } from "lucide-react";

const pillars = [
  { icon: Search, letter: "F", word: "Find", desc: "Discover clubs, events, and opportunities in one place." },
  { icon: HandHelping, letter: "I", word: "Involve", desc: "Join communities and participate in what matters to you." },
  { icon: Radio, letter: "R", word: "Reach", desc: "Connect with students across schools and campuses." },
  { icon: Zap, letter: "E", word: "Engage", desc: "Stay active, informed, and connected to your school." },
];

export default function FrameworkSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="section-padding max-w-5xl mx-auto">
      <motion.p
        className="text-sm uppercase tracking-[0.3em] text-primary text-center mb-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        The Framework
      </motion.p>
      <motion.h2
        className="font-display text-3xl md:text-5xl text-foreground text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
      >
        Four pillars of impact
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.word}
            className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-display text-foreground mb-1">
                  <span className="text-primary font-bold">{p.letter}</span>
                  <span className="text-muted-foreground">.</span> {p.word}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
