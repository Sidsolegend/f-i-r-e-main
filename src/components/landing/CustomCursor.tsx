import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState<"none" | "link" | "card">("none");
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const onOverLink = () => setHovering("link");
    const onOverCard = () => setHovering("card");
    const onOut = () => setHovering("none");

    const observe = () => {
      const links = document.querySelectorAll('a, button, [role="button"], .cta-primary, .cta-outline, input, textarea, select');
      const cards = document.querySelectorAll('.glass-card');
      links.forEach((el) => {
        el.addEventListener("mouseenter", onOverLink);
        el.addEventListener("mouseleave", onOut);
      });
      cards.forEach((el) => {
        el.addEventListener("mouseenter", onOverCard);
        el.addEventListener("mouseleave", onOut);
      });
      return { links, cards };
    };

    const { links, cards } = observe();
    const observer = new MutationObserver(() => observe());
    observer.observe(document.body, { childList: true, subtree: true });

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.4);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.4);
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.12);
      trailPos.current.x = lerp(trailPos.current.x, mouse.current.x, 0.06);
      trailPos.current.y = lerp(trailPos.current.y, mouse.current.y, 0.06);

      const ringScale = clicking ? 0.7 : hovering === "card" ? 2.2 : hovering === "link" ? 1.6 : 1;
      const dotScale = clicking ? 0.6 : 1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) scale(${dotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) scale(${ringScale})`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onOverLink);
        el.removeEventListener("mouseleave", onOut);
      });
      cards.forEach((el) => {
        el.removeEventListener("mouseenter", onOverCard);
        el.removeEventListener("mouseleave", onOut);
      });
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [visible, hovering, clicking]);

  return (
    <>
      {/* Faint trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none will-change-transform"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(0 0% 100% / 0.03) 0%, transparent 70%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `1px solid hsl(0 0% ${hovering !== "none" ? "80%" : "53%"} / ${hovering !== "none" ? 0.5 : 0.3})`,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease, border-color 0.4s ease",
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "hsl(var(--foreground))",
          boxShadow: "0 0 6px 1px hsl(0 0% 100% / 0.3)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
