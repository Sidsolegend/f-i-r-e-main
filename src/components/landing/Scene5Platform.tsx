import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClubCard, EventCard, AnnouncementItem, CategoryFilter, PlatformNav, StatsRow,
  CLUBS_DATA, EVENTS_DATA, ANNOUNCEMENTS_DATA,
} from "./FIREComponents";

gsap.registerPlugin(ScrollTrigger);

export default function Scene5Platform() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=450%",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(".s5-label", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 })

        // Phase 1: Clubs cards slide in from left
        .fromTo(".s5-club-0", { x: "-100%", opacity: 0, rotation: -8 }, { x: 0, opacity: 1, rotation: 0, duration: 1.2 }, "+=0.3")
        .fromTo(".s5-club-1", { x: "-120%", opacity: 0, rotation: -5 }, { x: 0, opacity: 1, rotation: 0, duration: 1.2 }, "-=0.9")
        .fromTo(".s5-club-2", { x: "-140%", opacity: 0, rotation: -3 }, { x: 0, opacity: 1, rotation: 0, duration: 1.2 }, "-=0.9")

        // Phase 2: Events cards slide in from right
        .fromTo(".s5-event-0", { x: "100%", opacity: 0, rotation: 6 }, { x: 0, opacity: 1, rotation: 0, duration: 1.2 }, "-=0.5")
        .fromTo(".s5-event-1", { x: "120%", opacity: 0, rotation: 4 }, { x: 0, opacity: 1, rotation: 0, duration: 1.2 }, "-=0.9")
        .fromTo(".s5-event-2", { x: "140%", opacity: 0, rotation: 2 }, { x: 0, opacity: 1, rotation: 0, duration: 1.2 }, "-=0.9")

        // Phase 3: Announcements rise from bottom
        .fromTo(".s5-announce", { y: "80%", opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")

        // Phase 4: All pieces shrink and assemble into frame
        .to(".s5-pieces", { scale: 0.7, y: 30, duration: 1.2 }, "+=0.3")
        .fromTo(".s5-frame", { opacity: 0, scale: 0.95, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, "-=0.8")
        .to(".s5-pieces", { opacity: 0, duration: 0.6 }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <p className="s5-label absolute top-[8%] left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-primary opacity-0 will-change-transform z-20">
        The Platform
      </p>

      {/* Animated pieces that assemble */}
      <div className="s5-pieces absolute inset-0 flex items-center justify-center will-change-transform">
        {/* Clubs column - left side */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 space-y-3">
          {CLUBS_DATA.slice(0, 3).map((club, i) => (
            <div key={club.name} className={`s5-club-${i} opacity-0 will-change-transform`}>
              <ClubCard {...club} />
            </div>
          ))}
        </div>

        {/* Events column - right side */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 space-y-3">
          {EVENTS_DATA.map((event, i) => (
            <div key={event.title} className={`s5-event-${i} opacity-0 will-change-transform`}>
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* Announcements - bottom center */}
        <div className="s5-announce absolute bottom-[10%] left-1/2 -translate-x-1/2 flex gap-3 opacity-0 will-change-transform">
          {ANNOUNCEMENTS_DATA.map((ann) => (
            <AnnouncementItem key={ann.title} {...ann} />
          ))}
        </div>
      </div>

      {/* Assembled platform frame */}
      <div className="s5-frame absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-2xl border border-border/20 bg-card/90 backdrop-blur-sm overflow-hidden opacity-0 will-change-transform subtle-glow shadow-2xl">
        <PlatformNav />
        <div className="p-5">
          {/* Hero section */}
          <div className="text-center py-6">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Student-Led Initiative</p>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              Find. <span className="text-primary">Involve.</span> Reach. <span className="text-primary">Engage.</span>
            </h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Your one-stop platform for clubs, events, and announcements.
            </p>
            <StatsRow className="mt-4" />
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold text-foreground">Clubs</h4>
                <CategoryFilter className="scale-75 origin-right" />
              </div>
              <div className="space-y-2">
                {CLUBS_DATA.slice(0, 2).map((club) => (
                  <ClubCard key={club.name} {...club} className="w-full text-[10px]" />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-foreground mb-2">Events</h4>
              <div className="space-y-2">
                {EVENTS_DATA.map((event) => (
                  <EventCard key={event.title} {...event} className="w-full" />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-foreground mb-2">Announcements</h4>
              <div className="space-y-2">
                {ANNOUNCEMENTS_DATA.map((ann) => (
                  <AnnouncementItem key={ann.title} {...ann} className="w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
