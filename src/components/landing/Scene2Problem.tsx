import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Calendar, Megaphone } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import GradientLight from "./GradientLight";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: Users, label: "Clubs" },
  { icon: Calendar, label: "Events" },
  { icon: Megaphone, label: "Announcements" },
];

function FloatingCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const tilt = useTilt({ maxTilt: 8, scale: 1.05 });

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`s2-card-${index} absolute glass-card px-6 py-5 flex items-center gap-3 opacity-0 will-change-transform`}
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <card.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
      <span className="text-sm text-foreground font-medium tracking-wide">{card.label}</span>
    </div>
  );
}

export default function Scene2Problem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          snap: { snapTo: 1, duration: 0.4, ease: "power2.inOut" },
        },
      });

      tl.fromTo(".s2-line1", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
        .to(".s2-line1", { opacity: 0.3, y: -30, duration: 1 }, "+=0.5")
        .fromTo(".s2-line2", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.3")
        .to({}, { duration: 0.5 })
        .fromTo(".s2-card-0", { opacity: 0, x: -120, y: 40, rotation: -8 }, { opacity: 1, x: -200, y: -20, rotation: -3, duration: 1.2, ease: "power2.out" }, "-=0.2")
        .fromTo(".s2-card-1", { opacity: 0, y: 80 }, { opacity: 1, y: 30, duration: 1.2, ease: "power2.out" }, "-=0.8")
        .fromTo(".s2-card-2", { opacity: 0, x: 120, y: 40, rotation: 8 }, { opacity: 1, x: 200, y: -40, rotation: 3, duration: 1.2, ease: "power2.out" }, "-=0.8")
        .to(".s2-line2", { opacity: 0.15, duration: 0.6 }, "-=0.3");

      // Parallax background glow
      gsap.to(".s2-bg-glow", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        y: -80,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <GradientLight position="center" intensity={0.2} size="70% 60%" className="s2-bg-glow" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <h2 className="s2-line1 font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight opacity-0">
            Opportunities exist in every school.
          </h2>
          <h2 className="s2-line2 font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mt-6 opacity-0">
            But many students{" "}
            <span className="text-muted-foreground">never see them.</span>
          </h2>
        </div>
      </div>

      {cards.map((card, i) => (
        <FloatingCard key={card.label} card={card} index={i} />
      ))}
    </section>
  );
}
