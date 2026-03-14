import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PLATFORM_URL = "https://f-i-r-e.lovable.app/";

export default function HiddenNav() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-4 z-50"
        onMouseEnter={() => setVisible(true)}
      />
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50"
            onMouseLeave={() => setVisible(false)}
          >
            <span className="font-display text-lg tracking-widest text-foreground">
              F.I.R.E
            </span>
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Try the Platform
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
