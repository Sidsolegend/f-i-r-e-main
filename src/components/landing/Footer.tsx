import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="scene-divider" />
      <footer className="px-6 md:px-12 py-20 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-sm font-light tracking-[0.4em] uppercase text-foreground/60">
            F.I.R.E
          </span>

          <p className="text-xs text-muted-foreground/50 font-light">
            © 2026 F.I.R.E | All Rights Reserved
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/40 hover:text-primary transition-all duration-500 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/40 hover:text-primary transition-all duration-500 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
