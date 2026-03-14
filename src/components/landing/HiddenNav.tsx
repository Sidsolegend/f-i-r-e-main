import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PLATFORM_URL = "https://f-i-r-e.lovable.app/";

export default function HiddenNav() {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (e.clientY < 20) {
        setVisible(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setVisible(false), 400);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
          onMouseLeave={handleLeave}
          className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-5"
          style={{
            background: "linear-gradient(180deg, hsla(0,0%,0%,0.8) 0%, transparent 100%)",
          }}
        >
          <span className="text-sm font-light tracking-[0.4em] uppercase text-foreground/80">
            F.I.R.E
          </span>
          <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="cta-primary text-xs py-3 px-6">
            Try the Platform
          </a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
