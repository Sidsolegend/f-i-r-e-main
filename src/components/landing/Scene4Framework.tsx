import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, HandHelping, Radio, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { icon: Search, letter: "F", word: "Find", desc: "Discover clubs, events, and opportunities — all in one place." },
  { icon: HandHelping, letter: "I", word: "Involve", desc: "Join communities and participate in what matters to you." },
  { icon: Radio, letter: "R", word: "Reach", desc: "Connect with students across schools and campuses." },
  { icon: Zap, letter: "E", word: "Engage", desc: "Stay active, informed, and deeply connected to your school." },
];

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
        },
      });

      // Title enters
      tl.fromTo(".s4-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 });

      // Each pillar slides in with stagger
      pillars.forEach((_, i) => {
        tl.fromTo(
          `.s4-pillar-${i}`,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80, y: 30, scale: 0.92 },
          { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
          i === 0 ? "+=0.3" : "-=0.3"
        );
      });

      // Slight pause at end
      tl.to({}, { duration: 0.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p className="s4-title text-xs uppercase tracking-[0.4em] text-primary mb-16 opacity-0 will-change-transform">
          The Framework
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full">
          {pillars.map((p, i) => (
            <div
              key={p.word}
              className={`s4-pillar-${i} glass-card p-8 opacity-0 will-change-transform group hover:border-primary/30 transition-colors duration-500`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-display text-foreground mb-2">
                    <span className="text-primary font-bold">{p.letter}</span>
                    <span className="text-muted-foreground">.</span>{" "}
                    {p.word}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
