import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import previewHero from "@/assets/preview-hero-real.png";

gsap.registerPlugin(ScrollTrigger);

const PLATFORM_URL = "https://f-i-r-e.lovable.app/";

export default function Scene8Reveal() {
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

      tl.fromTo(".s8-preview", { scale: 0.6, opacity: 0, y: 100 }, { scale: 1, opacity: 1, y: -20, duration: 2 })
        .fromTo(".s8-buttons", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="s8-preview w-[90%] max-w-5xl rounded-2xl overflow-hidden border border-border/20 subtle-glow shadow-2xl opacity-0 will-change-transform mb-10">
          <img src={previewHero} alt="FIRE Platform" className="w-full" loading="lazy" />
        </div>

        <div className="s8-buttons flex flex-wrap items-center justify-center gap-4 opacity-0 will-change-transform">
          <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="cta-primary">
            Try the Platform
          </a>
          <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="cta-outline">
            Explore Clubs
          </a>
          <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="cta-outline">
            Create Account
          </a>
        </div>
      </div>
    </section>
  );
}
