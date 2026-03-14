import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  { name: "Divyesh Srivastava", role: "Founder & Lead", desc: "Driving the vision for equal access to opportunity." },
  { name: "Rian Mallik", role: "Co-Founder", desc: "Building the technical foundation of FIRE." },
  { name: "Parthiv Prasanth", role: "Core Team", desc: "Shaping the user experience and platform design." },
  { name: "Roshan Kesavan", role: "Core Team", desc: "Managing operations and school partnerships." },
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="section-padding max-w-5xl mx-auto">
      <motion.p
        className="text-sm uppercase tracking-[0.3em] text-primary text-center mb-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
      >
        The Team
      </motion.p>
      <motion.h2
        className="font-display text-3xl md:text-5xl text-foreground text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
      >
        Built by students. Designed for schools.
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center max-w-lg mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        A passionate team of students working to reduce opportunity inequality in education.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            className="p-6 rounded-2xl bg-card border border-border/50 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-display text-primary font-bold">
                {member.name.charAt(0)}
              </span>
            </div>
            <h3 className="text-foreground font-semibold mb-1">{member.name}</h3>
            <p className="text-primary text-xs uppercase tracking-wider mb-2">{member.role}</p>
            <p className="text-muted-foreground text-sm">{member.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
