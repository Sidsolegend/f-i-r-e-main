import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import previewClubs from "@/assets/preview-clubs-real.png";
import previewEvents from "@/assets/preview-events-real.png";
import previewHero from "@/assets/preview-hero-real.png";

gsap.registerPlugin(ScrollTrigger);

export default function Scene5Platform() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(".s5-label", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 })
        // Clubs slides in from left
        .fromTo(".s5-clubs", { x: "-80%", opacity: 0, rotation: -5 }, { x: "-35%", opacity: 1, rotation: -2, duration: 1.5 }, "+=0.2")
        // Events slides in from right
        .fromTo(".s5-events", { x: "80%", opacity: 0, rotation: 5 }, { x: "35%", opacity: 1, rotation: 2, duration: 1.5 }, "-=1.2")
        // Assembly: cards move to center and combine
        .to(".s5-clubs", { x: "0%", rotation: 0, scale: 0.85, y: -20, duration: 1.5 }, "+=0.3")
        .to(".s5-events", { x: "0%", rotation: 0, scale: 0.85, y: 20, duration: 1.5 }, "-=1.5")
        // Final full preview emerges
        .fromTo(".s5-final", { opacity: 0, scale: 0.9, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1.2 }, "-=0.5")
        .to(".s5-clubs", { opacity: 0, duration: 0.5 }, "-=1")
        .to(".s5-events", { opacity: 0, duration: 0.5 }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <p className="s5-label absolute top-[8%] left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-primary opacity-0 will-change-transform z-20">
        The Platform
      </p>

      <div className="s5-clubs absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[65%] max-w-2xl rounded-2xl overflow-hidden border border-border/30 opacity-0 will-change-transform shadow-2xl">
        <img src={previewClubs} alt="Clubs Directory" className="w-full" loading="lazy" />
      </div>

      <div className="s5-events absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[65%] max-w-2xl rounded-2xl overflow-hidden border border-border/30 opacity-0 will-change-transform shadow-2xl">
        <img src={previewEvents} alt="Events" className="w-full" loading="lazy" />
      </div>

      <div className="s5-final absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[85%] max-w-4xl rounded-2xl overflow-hidden border border-border/20 opacity-0 will-change-transform subtle-glow shadow-2xl">
        <img src={previewHero} alt="FIRE Platform" className="w-full" loading="lazy" />
      </div>
    </section>
  );
}
