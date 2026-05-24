"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

/* Inline SVGs for brand icons not in lucide-react */
function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

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

const team = [
  {
    name: "Muhammad Bagas Althaafah",
    role: "CEO",
    image: "/avatar-bagas.png",
    desc: "Leading project vision, product design, and overall development workflow to ensure every project delivers both functionality and visual excellence.",
    responsibilities: [
      "Project Direction",
      "UI/UX Design",
      "Frontend Development",
      "Workflow & System Flow",
      "Tech Consultant",
      "Client Requirement Analysis",
      "Quality Control",
    ],
    gradient: "from-indigo-500 to-violet-500",
    socials: [
      { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
      { icon: <InstagramIcon />, href: "#", label: "Instagram" },
      { icon: <Mail size={16} />, href: "mailto:bagas@siteful.studio", label: "Email" },
    ],
  },
  {
    name: "Anis Malihatin",
    role: "CMO",
    image: "/avatar-anis.png",
    desc: "Focused on business growth, branding strategy, and building strong relationships with clients and partners.",
    responsibilities: [
      "Client Acquisition",
      "Negotiation",
      "Branding & Social Media",
      "Finance",
      "Partnership",
      "Content Marketing",
    ],
    gradient: "from-violet-500 to-purple-500",
    socials: [
      { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
      { icon: <InstagramIcon />, href: "#", label: "Instagram" },
      { icon: <Mail size={16} />, href: "mailto:anis@siteful.studio", label: "Email" },
    ],
  },
  {
    name: "Sirrul Fatih Ahdiat",
    role: "CTO",
    image: "/avatar-sirrul.png",
    desc: "Managing the technical infrastructure, backend systems, deployment, and security architecture to ensure scalable and reliable digital solutions.",
    responsibilities: [
      "Backend Development",
      "Database Architecture",
      "Deployment",
      "Server Management",
      "Security & API Integration",
    ],
    gradient: "from-purple-500 to-pink-500",
    socials: [
      { icon: <GithubIcon />, href: "#", label: "GitHub" },
      { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
      { icon: <Mail size={16} />, href: "mailto:sirrul@siteful.studio", label: "Email" },
    ],
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="orb orb-1" style={{ opacity: 0.3 }} />
      <div className="orb orb-3" style={{ opacity: 0.25 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-violet text-sm font-semibold tracking-widest uppercase">
            Our Team
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Meet The <span className="gradient-text">Team</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            The people behind Siteful Studio — combining creativity, strategy,
            and technology to build impactful digital experiences.
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Top gradient accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Hover glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${member.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none`}
              />

              <div className="p-7 relative z-10">
                {/* Avatar + Name block */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div
                      className={`absolute -inset-1 rounded-full bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500`}
                    />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-card-border group-hover:border-accent-violet/50 transition-colors duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {member.name}
                  </h3>

                  {/* Role badge */}
                  <span
                    className={`inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white`}
                  >
                    {member.role}
                  </span>
                </div>

                {/* Description */}
                <p className="text-foreground-muted text-sm leading-relaxed text-center mb-5">
                  &ldquo;{member.desc}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-card-border mb-5" />

                {/* Responsibilities */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {member.responsibilities.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-card-border text-foreground-muted group-hover:border-accent-violet/20 group-hover:text-foreground/80 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex justify-center gap-2">
                  {member.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-lg bg-white/5 border border-card-border flex items-center justify-center text-foreground-muted hover:text-accent-violet hover:border-accent-violet/40 hover:bg-accent-violet/10 transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
