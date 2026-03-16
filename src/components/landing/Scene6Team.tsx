import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTilt } from "@/hooks/use-tilt";
import GradientLight from "./GradientLight";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Rian", role: "CEO (Chief Executive Officer)", initial: "R" },
  { name: "Roshan", role: "COO (Chief Operating Officer)", initial: "R" },
  { name: "Ishanth", role: "CFO (Chief Financial Officer)", initial: "I" },
  { name: "Rohit", role: "CMO (Chief Marketing Officer)", initial: "R" },
  { name: "Siddharth", role: "CTO & Lead Developer", initial: "S" },
  { name: "Parthiv", role: "CSO (Chief Strategy Officer)", initial: "P" },
  { name: "Prajjit", role: "CInO (Chief Innovation Officer)", initial: "P" },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const tilt = useTilt({ maxTilt: 7, scale: 1.03 });

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`s6-card-${index} glass-card p-5 md:p-6 text-center opacity-0 will-change-transform group hover:border-primary/20 transition-all duration-500`}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
        <span className="text-lg md:text-xl font-display text-primary font-bold">{member.initial}</span>
      </div>
      <h3 className="text-foreground font-medium text-sm mb-1">{member.name}</h3>
      <p className="text-primary/60 text-[9px] uppercase tracking-[0.15em] font-medium leading-relaxed">{member.role}</p>
    </div>
  );
}

export default function Scene6Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1,
          snap: { snapTo: 1, duration: 0.4, ease: "power2.inOut" },
        },
      });

      tl.fromTo(".s6-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(".s6-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5");

      team.forEach((_, i) => {
        tl.fromTo(
          `.s6-card-${i}`,
          { opacity: 0, y: 60, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          i === 0 ? "+=0.2" : "-=0.45"
        );
      });

      gsap.to(".s6-bg-glow", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        y: -50,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <GradientLight position="center" intensity={0.12} size="70% 50%" className="s6-bg-glow" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p className="s6-subtitle text-xs uppercase tracking-[0.4em] text-primary mb-4 opacity-0 will-change-transform">
          The Team
        </p>
        <h2 className="s6-title font-display text-3xl md:text-5xl text-foreground text-center mb-14 opacity-0 will-change-transform">
          Built by students.<br />
          <span className="text-muted-foreground">Designed for schools.</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl w-full">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
