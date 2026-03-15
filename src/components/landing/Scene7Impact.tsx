import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientLight from "./GradientLight";

gsap.registerPlugin(ScrollTrigger);

export default function Scene7Impact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          snap: { snapTo: 1, duration: 0.4, ease: "power2.inOut" },
        },
      });

      tl.fromTo(".s7-heading", { opacity: 0, y: 60, scale: 0.93 }, { opacity: 1, y: 0, scale: 1, duration: 1.8, ease: "power3.out" })
        .fromTo(".s7-body", { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.6");

      gsap.to(".s7i-bg-glow", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        y: -40,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <GradientLight position="center" intensity={0.2} size="50% 40%" className="s7i-bg-glow" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="s7-heading font-display text-4xl md:text-6xl lg:text-[5rem] text-foreground leading-tight opacity-0 will-change-transform">
          Equal access to<br />
          <span className="text-gradient-accent">opportunity.</span>
        </h2>
        <p className="s7-body mt-10 text-base md:text-lg text-muted-foreground max-w-xl font-light leading-relaxed opacity-0 will-change-transform">
          FIRE helps every student discover what their school has to offer — reducing opportunity inequality across education.
        </p>
      </div>
    </section>
  );
}
