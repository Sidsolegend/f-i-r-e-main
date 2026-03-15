import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import previewHero from "@/assets/preview-hero-real.png";

gsap.registerPlugin(ScrollTrigger);

export default function Scene3Idea() {
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
        },
      });

      tl.fromTo(".s3-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 })
        .to(".s3-text", { y: -100, scale: 0.9, opacity: 0.2, duration: 1.5 }, "+=0.5")
        .fromTo(".s3-panel-left", { x: "-100%", opacity: 0 }, { x: "-30%", opacity: 0.7, duration: 1.5 }, "-=1")
        .fromTo(".s3-panel-right", { x: "100%", opacity: 0 }, { x: "30%", opacity: 0.7, duration: 1.5 }, "-=1.5")
        .fromTo(".s3-panel-center", { y: "60%", opacity: 0, scale: 0.8 }, { y: "0%", opacity: 1, scale: 1, duration: 1.5 }, "-=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, hsla(0,0%,12%,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 s3-bg-glow"
        style={{
          background: "radial-gradient(circle 350px at 50% 40%, hsla(0,0%,22%,0.12) 0%, transparent 60%)",
        }}
      />

      <h2 className="s3-text relative z-20 font-display text-3xl md:text-5xl lg:text-6xl text-foreground text-center max-w-4xl px-6 leading-tight opacity-0 will-change-transform">
        What if every opportunity{" "}
        <span className="text-gradient-accent">lived in one place?</span>
      </h2>

      {/* Abstract UI panels */}
      <div className="s3-panel-left absolute top-1/2 left-0 -translate-y-1/2 w-72 h-96 rounded-2xl border border-border/30 bg-card/50 opacity-0 will-change-transform overflow-hidden">
        <div className="p-4 space-y-3">
          <div className="h-3 w-20 bg-muted rounded-full" />
          <div className="h-2 w-32 bg-muted/60 rounded-full" />
          <div className="mt-6 space-y-2">
            {[1,2,3,4].map(i => <div key={i} className="h-10 bg-muted/40 rounded-lg" />)}
          </div>
        </div>
      </div>

      <div className="s3-panel-right absolute top-1/2 right-0 -translate-y-1/2 w-72 h-96 rounded-2xl border border-border/30 bg-card/50 opacity-0 will-change-transform overflow-hidden">
        <div className="p-4 space-y-3">
          <div className="h-3 w-16 bg-primary/30 rounded-full" />
          <div className="mt-6 grid grid-cols-2 gap-2">
            {[1,2,3,4,5,6].map(i => <div key={i} className="h-16 bg-muted/30 rounded-lg" />)}
          </div>
        </div>
      </div>

      <div className="s3-panel-center absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl rounded-t-2xl border border-border/30 border-b-0 overflow-hidden opacity-0 will-change-transform subtle-glow">
        <img src={previewHero} alt="FIRE Platform" className="w-full" loading="lazy" />
      </div>
    </section>
  );
}
