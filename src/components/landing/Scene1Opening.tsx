import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fireLogo from "@/assets/fire-logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function Scene1Opening() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations — slower, more cinematic
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(logoRef.current, { opacity: 0, scale: 0.8, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 2.2 })
        .fromTo(taglineRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.4 }, "-=0.8")
        .fromTo(subtitleRef.current, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.5")
        .fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.3");

      // Scroll-driven: logo zooms up and fades
      gsap.to(logoRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
        scale: 1.3,
        opacity: 0,
      });

      gsap.to(taglineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "20% top",
          end: "60% top",
          scrub: 1,
        },
        y: -80,
        opacity: 0,
      });

      gsap.to(subtitleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "25% top",
          end: "65% top",
          scrub: 1,
        },
        y: -60,
        opacity: 0,
      });

      gsap.to(scrollHintRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "10% top",
          end: "30% top",
          scrub: 1,
        },
        opacity: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Layered radial gradient backgrounds */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, hsla(0,0%,15%,0.4) 0%, hsl(0,0%,0%) 70%)",
          }}
        />
        <div
          className="absolute inset-0 s1-bg-glow"
          style={{
            background: "radial-gradient(circle 400px at 50% 45%, hsla(0,0%,25%,0.12) 0%, transparent 70%)",
          }}
        />

        <img
          ref={logoRef}
          src={fireLogo}
          alt="F.I.R.E"
          className="relative z-10 w-48 md:w-64 lg:w-80 mb-10 will-change-transform"
        />

        <h1
          ref={taglineRef}
          className="relative z-10 font-display text-4xl md:text-6xl lg:text-[5.5rem] text-foreground text-center tracking-tight leading-[1.1] will-change-transform"
        >
          <span className="text-foreground/90">Find. </span>
          <span className="text-gradient-accent">Involve.</span>
          <br />
          <span className="text-foreground/90">Reach. </span>
          <span className="text-gradient-accent">Engage.</span>
        </h1>

        <p
          ref={subtitleRef}
          className="relative z-10 mt-10 text-base md:text-lg text-muted-foreground text-center max-w-md font-light tracking-wide leading-relaxed will-change-transform"
        >
          Equal access to opportunity in every school.
        </p>

        <div ref={scrollHintRef} className="absolute bottom-10 z-10 flex flex-col items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground font-light">
            Scroll to explore
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
