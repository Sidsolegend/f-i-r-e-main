import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg tracking-widest text-foreground">F.I.R.E</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 F.I.R.E | All Rights Reserved
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
