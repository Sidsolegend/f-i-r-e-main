import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import fireLogo from "@/assets/fire-logo.png";

export default function OpeningScene() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden">
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--primary)), transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={fireLogo}
        alt="F.I.R.E Logo"
        className="w-64 md:w-80 lg:w-96 mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.h1
        className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground text-center tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>Find. </span>
        <span className="text-gradient-accent">Involve.</span>
        <br />
        <span>Reach. </span>
        <span className="text-gradient-accent">Engage.</span>
      </motion.h1>

      <motion.p
        className="mt-8 text-lg md:text-xl text-muted-foreground text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Equal access to opportunity in every school.
      </motion.p>

      <motion.div
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-sm tracking-wider uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
