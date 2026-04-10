import { useState, useRef, useCallback } from "react";
import fireLogo from "@/assets/fire-logo.png";

interface FireLogoProps {
  className?: string;
  imgRef?: React.Ref<HTMLImageElement>;
}

export default function FireLogo({ className = "", imgRef }: FireLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.setProperty("--mx", `${x}`);
    el.style.setProperty("--my", `${y}`);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fire-logo-container ${isHovered ? "is-hovered" : ""} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Pulsing glow layer */}
      <div className="fire-logo-glow" />
      {/* Energy streaks */}
      <div className="fire-logo-streaks">
        <div className="streak streak-1" />
        <div className="streak streak-2" />
        <div className="streak streak-3" />
        <div className="streak streak-4" />
      </div>
      {/* Blur glow behind */}
      <div className="fire-logo-blur" />
      <img
        ref={imgRef}
        src={fireLogo}
        alt="F.I.R.E"
        className="fire-logo-img"
      />
    </div>
  );
}
