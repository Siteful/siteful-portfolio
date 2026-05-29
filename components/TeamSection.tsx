"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const team = [
  {
    name: "Muhammad Bagas Althaafah",
    role: "CEO",
    image: "/avatar-bagas.png",
    desc: "Leading project vision, product design, and overall development workflow to ensure every project delivers both functionality and visual excellence.",
    skills: ["Project Direction", "UI/UX Design", "Frontend Dev", "Tech Consulting", "Quality Control"],
    socials: [
      { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
      { icon: <Mail size={15} />, href: "mailto:bagas@siteful.studio", label: "Email" },
    ],
  },
  {
    name: "Anis Malihatin",
    role: "CMO",
    image: "/avatar-anis.png",
    desc: "Focused on business growth, branding strategy, and building strong relationships with clients and partners.",
    skills: ["Client Acquisition", "Negotiation", "Branding", "Finance", "Content Marketing"],
    socials: [
      { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
      { icon: <Mail size={15} />, href: "mailto:anis@siteful.studio", label: "Email" },
    ],
  },
  {
    name: "Sirrul Fatih Ahdiat",
    role: "CTO",
    image: "/avatar-sirrul.png",
    desc: "Managing the technical infrastructure, backend systems, deployment, and security architecture to ensure scalable and reliable solutions.",
    skills: ["Backend Dev", "Database Architecture", "Deployment", "Security", "API Integration"],
    socials: [
      { icon: <GithubIcon />, href: "#", label: "GitHub" },
      { icon: <Mail size={15} />, href: "mailto:sirrul@siteful.studio", label: "Email" },
    ],
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Meet The <span className="text-gradient">Team</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-base leading-relaxed">
            The people behind Siteful Studio — combining creativity, strategy,
            and technology to build impactful digital experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * (i + 1) }}
              className="card p-7 text-center group"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="absolute -inset-0.5 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border-light group-hover:border-accent/30 transition-colors duration-300">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="80px" />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-manrope)" }}>
                {member.name}
              </h3>
              <span className="text-gradient text-xs font-bold tracking-wider uppercase">
                {member.role}
              </span>
              <p className="text-foreground-muted text-sm leading-relaxed mt-3 mb-5">
                {member.desc}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                {member.skills.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-light text-foreground-muted border border-border-light">
                    {s}
                  </span>
                ))}
              </div>

              {/* Socials */}
              <div className="flex justify-center gap-2">
                {member.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-surface-light border border-border-light flex items-center justify-center text-foreground-subtle hover:text-accent-light hover:border-accent/30 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
