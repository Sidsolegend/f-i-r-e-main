import { useRef, useCallback } from "react";

interface UseTiltOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
}

export function useTilt({ maxTilt = 6, scale = 1.02, speed = 500 }: UseTiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transition = `transform ${speed * 0.3}ms cubic-bezier(0.23, 1, 0.32, 1)`;
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(${scale})`;
    },
    [maxTilt, scale, speed]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
  }, [speed]);

  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
}
