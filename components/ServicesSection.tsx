"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Building2,
  LayoutDashboard,
  Palette,
  Wrench,
  Cloud,
  Database,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={20} />,
    title: "Landing Page Development",
    desc: "High-converting landing pages designed to capture leads, communicate value, and drive action.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Company Profile Website",
    desc: "Professional corporate sites that establish credibility and tell your brand story effectively.",
  },
  {
    icon: <LayoutDashboard size={20} />,
    title: "Dashboard System",
    desc: "Custom admin panels and data dashboards with intuitive interfaces for streamlined operations.",
  },
  {
    icon: <Database size={20} />,
    title: "Backend Development",
    desc: "Scalable server-side solutions with robust APIs, database architecture, and integrations.",
  },
  {
    icon: <Wrench size={20} />,
    title: "Website Maintenance",
    desc: "Ongoing support including updates, performance monitoring, security patches, and content management.",
  },
  {
    icon: <Cloud size={20} />,
    title: "Hosting & Deployment",
    desc: "Fast, secure hosting with CI/CD pipelines, SSL, and 99.9% uptime guarantee.",
  },
  {
    icon: <Palette size={20} />,
    title: "UI/UX Design",
    desc: "User-centered design from wireframe to high-fidelity prototype with smooth, intuitive interactions.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-base leading-relaxed">
            End-to-end web solutions — from design and development to deployment
            and ongoing support.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * (i + 1) }}
              className={`card p-7 group ${i === 6 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center text-accent-light mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
                {service.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
