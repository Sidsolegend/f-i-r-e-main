/**
 * Simplified visual recreations of the real FIRE platform UI components.
 * These match the styling and data from https://f-i-r-e.lovable.app/
 */

import { Users, Calendar, MapPin, Megaphone, ExternalLink, Instagram, Mail } from "lucide-react";

// ─── Club Card (matches real platform club cards) ─────────────────────────────

type ClubCardProps = {
  name: string;
  category: string;
  categoryColor: string;
  description?: string;
  president: string;
  vicePresident: string;
  status?: "Open" | "Closed";
  className?: string;
};

export function ClubCard({
  name,
  category,
  categoryColor,
  description,
  president,
  vicePresident,
  status = "Open",
  className = "",
}: ClubCardProps) {
  return (
    <div
      className={`rounded-2xl border border-border/40 bg-card p-5 space-y-3 w-[280px] md:w-[320px] shrink-0 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[11px] font-medium px-2.5 py-1 rounded-full"
          style={{ background: categoryColor, color: "hsl(var(--foreground))" }}
        >
          {category}
        </span>
        <span
          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
            status === "Open"
              ? "bg-green-500/15 text-green-400"
              : "bg-red-500/15 text-red-400"
          }`}
        >
          {status}
        </span>
      </div>
      <h4 className="text-base font-semibold text-foreground leading-snug">{name}</h4>
      {description && (
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
      )}
      <div className="pt-2 border-t border-border/30 space-y-1.5">
        <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Core Team</p>
        <p className="text-xs text-foreground/80">
          President: <span className="text-foreground">{president}</span>
        </p>
        <p className="text-xs text-foreground/80">
          Vice President: <span className="text-foreground">{vicePresident}</span>
        </p>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <Mail className="w-3.5 h-3.5 text-muted-foreground" />
        <Instagram className="w-3.5 h-3.5 text-muted-foreground" />
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
      </div>
    </div>
  );
}

// ─── Event Card (matches real platform event cards) ───────────────────────────

type EventCardProps = {
  day: string;
  month: string;
  title: string;
  organizer: string;
  location: string;
  className?: string;
};

export function EventCard({ day, month, title, organizer, location, className = "" }: EventCardProps) {
  return (
    <div
      className={`rounded-2xl border border-border/40 bg-card p-4 flex items-start gap-4 w-[300px] md:w-[340px] shrink-0 ${className}`}
    >
      <div className="flex flex-col items-center justify-center bg-primary/10 rounded-xl px-3 py-2 min-w-[52px]">
        <span className="text-lg font-bold text-primary leading-none">{day}</span>
        <span className="text-[10px] uppercase font-semibold text-primary/70 tracking-wider">{month}</span>
      </div>
      <div className="space-y-1.5 min-w-0">
        <h4 className="text-sm font-semibold text-foreground leading-snug">{title}</h4>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <Users className="w-3 h-3 shrink-0" />
          {organizer}
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3 shrink-0" />
          {location}
        </p>
      </div>
    </div>
  );
}

// ─── Announcement Item (matches real platform announcement feed) ──────────────

type AnnouncementProps = {
  title: string;
  date: string;
  preview: string;
  category: string;
  className?: string;
};

export function AnnouncementItem({ title, date, preview, category, className = "" }: AnnouncementProps) {
  return (
    <div
      className={`rounded-2xl border border-border/40 bg-card p-4 space-y-2 w-[280px] md:w-[320px] shrink-0 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
          {category}
        </span>
        <span className="text-[10px] text-muted-foreground">{date}</span>
      </div>
      <h4 className="text-sm font-semibold text-foreground leading-snug">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{preview}</p>
    </div>
  );
}

// ─── Category Filter Bar (matches real platform filter tabs) ──────────────────

export function CategoryFilter({ className = "" }: { className?: string }) {
  const categories = ["All", "STEM", "Arts & Culture", "Service", "Academic", "Health & Science", "Lifestyle"];
  return (
    <div className={`flex items-center gap-2 overflow-hidden ${className}`}>
      {categories.map((cat, i) => (
        <span
          key={cat}
          className={`text-[11px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 ${
            i === 0
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground"
          }`}
        >
          {cat}
        </span>
      ))}
    </div>
  );
}

// ─── Platform Nav Bar (matches real platform navigation) ──────────────────────

export function PlatformNav({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between px-6 py-3 border-b border-border/30 bg-card/80 backdrop-blur-sm ${className}`}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-[11px] font-bold text-primary-foreground">F</span>
        </div>
        <span className="text-sm font-semibold text-foreground tracking-wide">F.I.R.E</span>
      </div>
      <div className="flex items-center gap-5">
        {["Home", "About", "Clubs", "Events", "Announcements"].map((item) => (
          <span key={item} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[11px] text-muted-foreground px-2.5 py-1 rounded-lg bg-secondary">
          GIIS Singapore
        </span>
        <span className="text-xs font-medium text-primary-foreground bg-primary/90 px-3 py-1.5 rounded-lg">
          Sign In
        </span>
      </div>
    </div>
  );
}

// ─── Stats Row (matches real platform hero stats) ─────────────────────────────

export function StatsRow({ className = "" }: { className?: string }) {
  const stats = [
    { value: "22+", label: "Clubs" },
    { value: "8+", label: "Events" },
    { value: "100%", label: "Accessible" },
  ];
  return (
    <div className={`flex items-center justify-center gap-10 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-2xl font-bold text-primary">{stat.value}</p>
          <p className="text-xs text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Preset Data ──────────────────────────────────────────────────────────────

export const CLUBS_DATA: ClubCardProps[] = [
  {
    name: "GIIS Art Club",
    category: "Arts & Culture",
    categoryColor: "hsl(280 40% 20%)",
    president: "Divyesh Srivastava",
    vicePresident: "Shambhavi Kasar",
  },
  {
    name: "GIIS Aviation & Astronomy Club",
    category: "STEM",
    categoryColor: "hsl(227 40% 20%)",
    description: "Inspiring the next generation of aerospace pioneers and astronomers.",
    president: "Rian Mallik",
    vicePresident: "Parthiv Prasanth",
  },
  {
    name: "GIIS Tech Club",
    category: "STEM",
    categoryColor: "hsl(227 40% 20%)",
    president: "Anuraag Vombatkere",
    vicePresident: "Duaa Sherief",
  },
  {
    name: "GIIS Research Society",
    category: "Academic",
    categoryColor: "hsl(45 40% 20%)",
    description: "Fostering a strong culture of intellectual inquiry and high-quality, original research.",
    president: "Avinash Reddy",
    vicePresident: "Aarya Pandey",
  },
  {
    name: "GIIS Interact Club",
    category: "Service",
    categoryColor: "hsl(150 40% 18%)",
    description: "Empowering young leaders committed to service, integrity, and meaningful change.",
    president: "Purvaa Prakash",
    vicePresident: "Iraj Gupta",
  },
];

export const EVENTS_DATA: EventCardProps[] = [
  { day: "15", month: "Mar", title: "TEDxYouth@GIIS", organizer: "GIIS TedX Club", location: "Main Auditorium" },
  { day: "22", month: "Mar", title: "Chess Tournament 2026", organizer: "GIIS Chess Club", location: "Activity Room" },
  { day: "5", month: "Apr", title: "Art Exhibition: Perspectives", organizer: "GIIS Art Club", location: "Art Gallery" },
];

export const ANNOUNCEMENTS_DATA: AnnouncementProps[] = [
  {
    title: "Club Applications Now Open",
    date: "Mar 10, 2026",
    preview: "All clubs are now accepting new member applications for the upcoming semester.",
    category: "General",
  },
  {
    title: "TEDxYouth@GIIS Registration",
    date: "Mar 8, 2026",
    preview: "Register now for TEDxYouth@GIIS. Limited seats available for this flagship event.",
    category: "Events",
  },
  {
    title: "New Club: Sustainability Sphere",
    date: "Mar 5, 2026",
    preview: "A new sustainability-focused club has been approved. Learn more and join today.",
    category: "Clubs",
  },
];
