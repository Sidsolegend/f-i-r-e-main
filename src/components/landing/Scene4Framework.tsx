import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, HandHelping, Radio, Zap } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import GradientLight from "./GradientLight";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { icon: Search, letter: "F", word: "Find", desc: "Discover clubs, events, and opportunities — all in one place." },
  { icon: HandHelping, letter: "I", word: "Involve", desc: "Join communities and participate in what matters to you." },
  { icon: Radio, letter: "R", word: "Reach", desc: "Connect with students across schools and campuses." },
  { icon: Zap, letter: "E", word: "Engage", desc: "Stay active, informed, and deeply connected to your school." },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const tilt = useTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`s4-pillar-${index} glass-card p-8 opacity-0 will-change-transform group hover:border-primary/30 transition-colors duration-500`}
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
          <pillar.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-2xl font-display text-foreground mb-2">
            <span className="text-primary font-bold">{pillar.letter}</span>
            <span className="text-muted-foreground">.</span>{" "}
            {pillar.word}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-light">{pillar.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Scene4Framework() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
          snap: { snapTo: 1, duration: 0.4, ease: "power2.inOut" },
        },
      });

      tl.fromTo(".s4-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });

      pillars.forEach((_, i) => {
        tl.fromTo(
          `.s4-pillar-${i}`,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80, y: 30, scale: 0.92 },
          { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
          i === 0 ? "+=0.3" : "-=0.3"
        );
      });

      tl.to({}, { duration: 0.5 });

      // Parallax background
      gsap.to(".s4-bg-glow", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        y: -60,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <GradientLight position="center" intensity={0.18} size="65% 55%" className="s4-bg-glow" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p className="s4-title text-xs uppercase tracking-[0.4em] text-primary mb-16 opacity-0 will-change-transform">
          The Framework
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full">
          {pillars.map((p, i) => (
            <PillarCard key={p.word} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
