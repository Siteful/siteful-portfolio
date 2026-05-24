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
    icon: <Globe size={26} />,
    title: "Landing Page Development",
    desc: "High-converting landing pages with stunning visuals and optimized performance to capture leads and drive action.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Building2 size={26} />,
    title: "Company Profile Website",
    desc: "Professional corporate websites that establish credibility, communicate your brand story, and attract potential clients.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: <LayoutDashboard size={26} />,
    title: "Dashboard System",
    desc: "Custom admin dashboards and data visualization panels with intuitive interfaces for streamlined business operations.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <Palette size={26} />,
    title: "UI/UX Design",
    desc: "User-centered design with beautiful interfaces, smooth interactions, and thoughtful user journeys from wireframe to prototype.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Wrench size={26} />,
    title: "Website Maintenance",
    desc: "Ongoing technical support, security updates, performance monitoring, and content management to keep your site running perfectly.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: <Cloud size={26} />,
    title: "Hosting & Deployment",
    desc: "Fast, secure, and reliable hosting solutions with automated deployment pipelines and 99.9% uptime guarantee.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Database size={26} />,
    title: "Backend Development",
    desc: "Scalable server-side solutions with robust APIs, database architecture, and third-party integrations for your applications.",
    gradient: "from-emerald-500 to-cyan-500",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
    >
      <div className="orb orb-1" style={{ opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-violet text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Comprehensive web solutions tailored to your business needs — from
            design and development to deployment and maintenance.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * (i + 1) }}
              className={`glass-card glass-card-hover p-7 group ${
                i === 6 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
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
