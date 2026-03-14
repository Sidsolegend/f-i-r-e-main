import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Calendar, Megaphone, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: BookOpen, label: "Clubs", desc: "Students discover and join clubs that match their interests." },
  { icon: Calendar, label: "Events", desc: "Clubs create events, students register and participate." },
  { icon: Megaphone, label: "Announcements", desc: "Important updates reach every student instantly." },
  { icon: Sparkles, label: "Engagement", desc: "Continuous involvement builds a thriving school community." },
];

export default function Scene7Process() {
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
        },
      });

      tl.fromTo(".s7p-label", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });

      steps.forEach((_, i) => {
        // Step card
        tl.fromTo(
          `.s7p-step-${i}`,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8 },
          i === 0 ? "+=0.2" : "+=0.1"
        );
        // Connector line after each step except last
        if (i < steps.length - 1) {
          tl.fromTo(
            `.s7p-line-${i}`,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.4 },
            "-=0.3"
          );
        }
      });

      tl.to({}, { duration: 0.3 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p className="s7p-label text-xs uppercase tracking-[0.4em] text-primary mb-14 opacity-0 will-change-transform">
          How It Works
        </p>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-center gap-0 max-w-5xl w-full justify-center">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div
                className={`s7p-step-${i} glass-card p-6 text-center opacity-0 will-change-transform w-48 group hover:border-primary/20 transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-foreground font-display text-lg mb-1">{step.label}</h3>
                <p className="text-muted-foreground text-[11px] leading-relaxed font-light">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`s7p-line-${i} w-12 h-[1px] bg-gradient-to-r from-primary/40 to-primary/10 origin-left will-change-transform mx-1`}
                  style={{ transform: "scaleX(0)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col items-center gap-0 w-full max-w-xs">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center">
              <div
                className={`s7p-step-${i} glass-card p-5 text-center opacity-0 will-change-transform w-full`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 mx-auto mb-2 flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-foreground font-display text-base mb-1">{step.label}</h3>
                <p className="text-muted-foreground text-[10px] leading-relaxed font-light">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`s7p-line-${i} w-[1px] h-8 bg-gradient-to-b from-primary/40 to-primary/10 origin-top will-change-transform`}
                  style={{ transform: "scaleY(0)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
