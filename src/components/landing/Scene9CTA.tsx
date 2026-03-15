import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fireLogo from "@/assets/fire-logo.png";
import GradientLight from "./GradientLight";

gsap.registerPlugin(ScrollTrigger);

const PLATFORM_URL = "https://f-i-r-e.lovable.app/";

export default function Scene9CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });

      tl.fromTo(".s9-logo", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" })
        .fromTo(".s9-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(".s9-btn", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <GradientLight position="center" intensity={0.18} size="50% 40%" />
      <img src={fireLogo} alt="F.I.R.E" className="s9-logo w-36 md:w-48 mb-10 opacity-0 will-change-transform" />
      <h2 className="s9-text font-display text-3xl md:text-5xl text-foreground text-center mb-10 opacity-0 will-change-transform">
        Discover every opportunity.
      </h2>
      <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="s9-btn cta-primary opacity-0 will-change-transform">
        Try the Platform
      </a>
    </section>
  );
}
