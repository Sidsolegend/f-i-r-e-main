import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClubCard, EventCard, AnnouncementItem, CategoryFilter, PlatformNav,
  CLUBS_DATA, EVENTS_DATA, ANNOUNCEMENTS_DATA,
} from "./FIREComponents";

gsap.registerPlugin(ScrollTrigger);

export default function Scene3Idea() {
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

      tl.fromTo(".s3-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 })
        .to(".s3-text", { y: -100, scale: 0.9, opacity: 0.2, duration: 1.5 }, "+=0.5")
        // Left panel: clubs directory preview
        .fromTo(".s3-panel-left", { x: "-100%", opacity: 0 }, { x: "-30%", opacity: 0.85, duration: 1.5 }, "-=1")
        // Right panel: events listing preview
        .fromTo(".s3-panel-right", { x: "100%", opacity: 0 }, { x: "30%", opacity: 0.85, duration: 1.5 }, "-=1.5")
        // Center: full nav + interface preview rises
        .fromTo(".s3-panel-center", { y: "60%", opacity: 0, scale: 0.85 }, { y: "0%", opacity: 1, scale: 1, duration: 1.5 }, "-=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, hsla(227,30%,12%,0.5) 0%, transparent 70%)",
        }}
      />

      <h2 className="s3-text relative z-20 font-display text-3xl md:text-5xl lg:text-6xl text-foreground text-center max-w-4xl px-6 leading-tight opacity-0 will-change-transform">
        What if every opportunity{" "}
        <span className="text-gradient-accent">lived in one place?</span>
      </h2>

      {/* Left panel: Clubs directory */}
      <div className="s3-panel-left absolute top-1/2 left-0 -translate-y-1/2 w-80 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm opacity-0 will-change-transform overflow-hidden">
        <div className="p-4 border-b border-border/20">
          <h3 className="text-sm font-semibold text-foreground mb-3">Clubs Directory</h3>
          <CategoryFilter />
        </div>
        <div className="p-3 space-y-3">
          {CLUBS_DATA.slice(0, 2).map((club) => (
            <ClubCard key={club.name} {...club} className="w-full" />
          ))}
        </div>
      </div>

      {/* Right panel: Events listing */}
      <div className="s3-panel-right absolute top-1/2 right-0 -translate-y-1/2 w-80 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm opacity-0 will-change-transform overflow-hidden">
        <div className="p-4 border-b border-border/20">
          <h3 className="text-sm font-semibold text-foreground mb-1">Upcoming Events</h3>
        </div>
        <div className="p-3 space-y-3">
          {EVENTS_DATA.map((event) => (
            <EventCard key={event.title} {...event} className="w-full" />
          ))}
        </div>
      </div>

      {/* Center: Platform interface preview */}
      <div className="s3-panel-center absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] max-w-4xl rounded-t-2xl border border-border/30 border-b-0 overflow-hidden opacity-0 will-change-transform subtle-glow">
        <PlatformNav />
        <div className="p-6 flex gap-4">
          {ANNOUNCEMENTS_DATA.map((ann) => (
            <AnnouncementItem key={ann.title} {...ann} className="w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
