import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Divyesh Srivastava", role: "Founder & Lead", initial: "D" },
  { name: "Rian Mallik", role: "Co-Founder", initial: "R" },
  { name: "Parthiv Prasanth", role: "Core Team", initial: "P" },
  { name: "Roshan Kesavan", role: "Core Team", initial: "R" },
];

export default function Scene6Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(".s6-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(".s6-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");

      team.forEach((_, i) => {
        tl.fromTo(
          `.s6-card-${i}`,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.8 },
          i === 0 ? "+=0.2" : "-=0.5"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p className="s6-subtitle text-xs uppercase tracking-[0.4em] text-primary mb-4 opacity-0 will-change-transform">
          The Team
        </p>
        <h2 className="s6-title font-display text-3xl md:text-5xl text-foreground text-center mb-16 opacity-0 will-change-transform">
          Built by students.<br />
          <span className="text-muted-foreground">Designed for schools.</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`s6-card-${i} glass-card p-6 text-center opacity-0 will-change-transform group hover:border-primary/20 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <span className="text-xl font-display text-primary font-bold">{member.initial}</span>
              </div>
              <h3 className="text-foreground font-medium text-sm mb-1">{member.name}</h3>
              <p className="text-primary/80 text-[11px] uppercase tracking-[0.15em]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
