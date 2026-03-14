import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xs font-light tracking-[0.35em] uppercase text-muted-foreground">
          F.I.R.E
        </span>

        <p className="text-xs text-muted-foreground/60">
          © 2026 F.I.R.E | All Rights Reserved
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/60 hover:text-primary transition-colors duration-400"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/60 hover:text-primary transition-colors duration-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
