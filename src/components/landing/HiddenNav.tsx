import { useEffect, useRef, useState } from "react";

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
    <nav
      onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
      onMouseLeave={handleLeave}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-5 transition-all duration-500 ease-out"
      style={{
        background: "linear-gradient(180deg, hsla(0,0%,0%,0.8) 0%, transparent 100%)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <span className="text-sm font-light tracking-[0.4em] uppercase text-foreground/80">
        F.I.R.E
      </span>
      <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="cta-primary text-xs py-3 px-6">
        Try the Platform
      </a>
    </nav>
  );
}
