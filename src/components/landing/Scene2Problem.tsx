import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClubCard, EventCard, AnnouncementItem, CLUBS_DATA, EVENTS_DATA, ANNOUNCEMENTS_DATA } from "./FIREComponents";

gsap.registerPlugin(ScrollTrigger);

export default function Scene2Problem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(".s2-line1", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
        .to(".s2-line1", { opacity: 0.3, y: -30, duration: 0.8 }, "+=0.5")
        .fromTo(".s2-line2", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 }, "-=0.3")
        .to({}, { duration: 0.5 })
        // Club card drifts in from upper-left
        .fromTo(".s2-club", { opacity: 0, x: -180, y: -60, rotation: -12, scale: 0.85 }, { opacity: 1, x: -240, y: -100, rotation: -4, scale: 0.9, duration: 1.4 }, "-=0.2")
        // Event card drifts in from right
        .fromTo(".s2-event", { opacity: 0, x: 200, y: 60, rotation: 10, scale: 0.85 }, { opacity: 1, x: 220, y: 40, rotation: 3, scale: 0.9, duration: 1.4 }, "-=1")
        // Announcement drifts in from bottom
        .fromTo(".s2-announce", { opacity: 0, y: 120, x: -60, rotation: -6, scale: 0.85 }, { opacity: 1, y: 100, x: -40, rotation: -2, scale: 0.9, duration: 1.4 }, "-=1")
        .to(".s2-line2", { opacity: 0.15, duration: 0.5 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="scene-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <h2 className="s2-line1 font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight opacity-0">
            Opportunities exist in every school.
          </h2>
          <h2 className="s2-line2 font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mt-6 opacity-0">
            But many students{" "}
            <span className="text-muted-foreground">never see them.</span>
          </h2>
        </div>
      </div>

      {/* Real FIRE platform cards floating in like scattered information */}
      <div
        className="s2-club absolute opacity-0 will-change-transform pointer-events-none"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <ClubCard {...CLUBS_DATA[0]} />
      </div>

      <div
        className="s2-event absolute opacity-0 will-change-transform pointer-events-none"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <EventCard {...EVENTS_DATA[0]} />
      </div>

      <div
        className="s2-announce absolute opacity-0 will-change-transform pointer-events-none"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <AnnouncementItem {...ANNOUNCEMENTS_DATA[0]} />
      </div>
    </section>
  );
}
