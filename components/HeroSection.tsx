"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Layout,
  Code2,
  Sparkles,
} from "lucide-react";

const floatingCards = [
  {
    icon: <Layout size={18} />,
    title: "Dashboard UI",
    desc: "Analytics & Metrics",
    color: "from-indigo-500/20 to-violet-500/20",
    delay: 0,
    pos: "top-24 right-8 md:top-32 md:right-16 lg:right-24",
  },
  {
    icon: <Code2 size={18} />,
    title: "Clean Code",
    desc: "Modern Stack",
    color: "from-purple-500/20 to-pink-500/20",
    delay: 1,
    pos: "top-48 right-2 md:top-56 md:right-4 lg:right-8",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Pixel Perfect",
    desc: "UI/UX Design",
    color: "from-violet-500/20 to-indigo-500/20",
    delay: 2,
    pos: "top-72 right-12 md:top-80 md:right-20 lg:right-32",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-foreground-muted mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Crafting Modern{" "}
              <span className="gradient-text">Digital Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-foreground-muted text-base sm:text-lg max-w-xl leading-relaxed mb-10"
            >
              Siteful Studio helps businesses, startups, and UMKM build modern,
              professional, and impactful websites that drive growth and
              establish digital presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-glow inline-flex items-center gap-2">
                View Projects
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center gap-2">
                Start Your Project
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex gap-10 mt-14"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl sm:text-3xl font-bold gradient-text"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-foreground-muted text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating UI Cards */}
          <div className="hidden lg:block relative h-[500px]">
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + card.delay * 0.15 }}
                className={`absolute ${card.pos} animate-float${
                  card.delay === 1 ? "-delayed" : card.delay === 2 ? "-delayed" : ""
                }`}
                style={{
                  animationDelay: `${card.delay * 1.5}s`,
                }}
              >
                <div className="glass-card p-5 min-w-[200px] hover:border-accent-violet/40 transition-all duration-300 cursor-default">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-foreground mb-3`}
                  >
                    {card.icon}
                  </div>
                  <div className="font-semibold text-sm mb-1">{card.title}</div>
                  <div className="text-foreground-muted text-xs">
                    {card.desc}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Extra decorative orb behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-violet/10 rounded-full blur-[100px] animate-pulse-glow" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
