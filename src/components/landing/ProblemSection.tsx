import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Calendar, Megaphone } from "lucide-react";

const cards = [
  { icon: Users, label: "Clubs", desc: "Hidden from most students" },
  { icon: Calendar, label: "Events", desc: "Missed due to poor visibility" },
  { icon: Megaphone, label: "Announcements", desc: "Lost in scattered channels" },
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="section-padding max-w-5xl mx-auto">
      <motion.p
        className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground text-center leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        In many schools, opportunities exist —{" "}
        <span className="text-muted-foreground">but students often never see them.</span>
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            className="flex flex-col items-center p-8 rounded-2xl bg-card border border-border/50 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <card.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-foreground mb-2">{card.label}</h3>
            <p className="text-muted-foreground text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
