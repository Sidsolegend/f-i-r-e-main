import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        },
      });

      tl.fromTo(".s7-heading", { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.5 })
        .fromTo(".s7-body", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="s7-heading font-display text-4xl md:text-6xl lg:text-[5rem] text-foreground leading-tight opacity-0 will-change-transform">
          Equal access to<br />
          <span className="text-gradient-accent">opportunity.</span>
        </h2>
        <p className="s7-body mt-8 text-base md:text-lg text-muted-foreground max-w-xl font-light leading-relaxed opacity-0 will-change-transform">
          FIRE helps every student discover what their school has to offer — reducing opportunity inequality across education.
        </p>
      </div>
    </section>
  );
}
