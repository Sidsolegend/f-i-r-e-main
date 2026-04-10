import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTilt } from "@/hooks/use-tilt";
import GradientLight from "./GradientLight";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Rian", role: "CEO (Chief Executive Officer)", initial: "R", photo: "" },
  { name: "Roshan", role: "COO (Chief Operating Officer)", initial: "R", photo: "" },
  { name: "Ishanth", role: "CFO (Chief Financial Officer)", initial: "I", photo: "" },
  { name: "Rohit", role: "CMO (Chief Marketing Officer)", initial: "R", photo: "" },
  { name: "Siddharth", role: "CTO & Lead Developer", initial: "S", photo: "" },
  { name: "Parthiv", role: "CSO (Chief Strategy Officer)", initial: "P", photo: "" },
  { name: "Prajjit", role: "CInO (Chief Innovation Officer)", initial: "P", photo: "" },
];

// Set this to the imported group photo once available
// e.g. import teamGroupPhoto from "@/assets/team-group.jpg";
const teamGroupPhoto = "";

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const tilt = useTilt({ maxTilt: 7, scale: 1.03 });

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`s6-card-${index} glass-card p-5 md:p-6 text-center opacity-0 will-change-transform group hover:border-primary/20 transition-all duration-500`}
    >
      {member.photo ? (
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 overflow-hidden ring-2 ring-primary/10 group-hover:ring-primary/30 group-hover:scale-110 transition-all duration-500">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
          <span className="text-lg md:text-xl font-display text-primary font-bold">{member.initial}</span>
        </div>
      )}
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
          end: "+=300%",
          pin: true,
          scrub: 1,
          snap: { snapTo: [0.4, 1], duration: 0.4, ease: "power2.inOut" },
        },
      });

      // Phase 1: Title + group photo
      tl.fromTo(".s6-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .fromTo(".s6-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .fromTo(".s6-group-photo", { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }, "-=0.3");

      // Phase 2: Transition — fade out group, fade in individual cards
      tl.to(".s6-group-photo", { opacity: 0, y: -30, duration: 0.6, ease: "power2.in" }, "+=0.5")
        .to(".s6-title", { opacity: 0, y: -20, duration: 0.4, ease: "power2.in" }, "-=0.4")
        .to(".s6-subtitle", { opacity: 0, y: -20, duration: 0.4, ease: "power2.in" }, "-=0.3");

      // Phase 3: Individual cards appear
      tl.fromTo(".s6-cards-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "+=0.1");

      team.forEach((_, i) => {
        tl.fromTo(
          `.s6-card-${i}`,
          { opacity: 0, y: 60, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
          i === 0 ? "-=0.2" : "-=0.4"
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
        <p className="s6-subtitle text-xs uppercase tracking-[0.4em] text-primary mb-4 will-change-transform">
          The Team
        </p>
        <h2 className="s6-title font-display text-3xl md:text-5xl text-foreground text-center mb-10 will-change-transform">
          Built by students.<br />
          <span className="text-muted-foreground">Designed for schools.</span>
        </h2>

        {/* Group photo */}
        <div className="s6-group-photo w-full max-w-3xl mx-auto mb-10 will-change-transform">
          {teamGroupPhoto ? (
            <div className="glass-card p-2 md:p-3 overflow-hidden">
              <img
                src={teamGroupPhoto}
                alt="The F.I.R.E. Team"
                className="w-full rounded-lg object-cover max-h-[350px]"
              />
            </div>
          ) : (
            <div className="glass-card p-8 md:p-12 flex items-center justify-center border-dashed border-primary/20">
              <p className="text-muted-foreground text-sm tracking-wide">Team group photo — coming soon</p>
            </div>
          )}
        </div>

        {/* Individual cards subtitle */}
        <p className="s6-cards-subtitle text-xs uppercase tracking-[0.4em] text-primary mb-6 opacity-0 will-change-transform">
          Meet the founders
        </p>

        {/* Individual member cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl w-full">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
