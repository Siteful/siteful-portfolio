"use client";

import { Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Testimonials", href: "#testimonials" },
];

/* Inline SVG icons for brands not available in lucide-react */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const socials = [
  {
    icon: <InstagramIcon />,
    href: "https://instagram.com/siteful.studio",
    label: "Instagram",
  },
  {
    icon: <GithubIcon />,
    href: "https://github.com/siteful",
    label: "GitHub",
  },
  {
    icon: <Phone size={18} />,
    href: "https://wa.me/6281234567890",
    label: "WhatsApp",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:hello@siteful.studio",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-purple flex items-center justify-center font-bold text-sm text-white">
                S
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                SITE<span className="gradient-text">FUL</span>
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-sm mb-6">
              A professional web development studio specializing in modern,
              high-performance websites for businesses, startups, and UMKM.
              Let&apos;s build your digital future together.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-foreground-muted hover:text-accent-violet hover:border-accent-violet/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-sm mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground-muted text-sm hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-sm mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-foreground-muted text-sm">
              <a
                href="mailto:hello@siteful.studio"
                className="hover:text-foreground transition-colors"
              >
                hello@siteful.studio
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                +62 812-3456-7890
              </a>
              <a
                href="https://instagram.com/siteful.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                @siteful.studio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-xs">
            © {new Date().getFullYear()} Siteful Studio. All rights reserved.
          </p>
          <p className="text-foreground-muted text-xs">
            Crafted with passion in Indonesia 🇮🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
