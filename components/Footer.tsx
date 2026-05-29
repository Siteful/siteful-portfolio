"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Testimonials", href: "#testimonials" },
];

const socials = [
  { icon: <InstagramIcon />, href: "https://instagram.com/siteful.studio", label: "Instagram" },
  { icon: <GithubIcon />, href: "https://github.com/siteful", label: "GitHub" },
  { icon: <Phone size={16} />, href: "https://wa.me/6281234567890", label: "WhatsApp" },
  { icon: <Mail size={16} />, href: "mailto:hello@siteful.studio", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo-icon.png" alt="Siteful" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-manrope)" }}>
                SITEFUL
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-sm mb-5">
              A professional web development studio helping businesses, startups,
              and UMKM build modern, high-performance digital experiences.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-surface border border-border-light flex items-center justify-center text-foreground-subtle hover:text-accent-light hover:border-accent/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-foreground-subtle" style={{ fontFamily: "var(--font-manrope)" }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-foreground-muted text-sm hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-foreground-subtle" style={{ fontFamily: "var(--font-manrope)" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-foreground-muted text-sm">
              <a href="mailto:hello@siteful.studio" className="hover:text-foreground transition-colors">
                hello@siteful.studio
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                +62 812-3456-7890
              </a>
              <a href="https://instagram.com/siteful.studio" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                @siteful.studio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-foreground-subtle text-xs">
            © {new Date().getFullYear()} Siteful Studio. All rights reserved.
          </p>
          <p className="text-foreground-subtle text-xs">
            Crafted with care in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
