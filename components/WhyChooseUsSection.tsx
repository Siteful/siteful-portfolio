"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Zap,
  Smartphone,
  Briefcase,
  BadgeDollarSign,
  HeadphonesIcon,
} from "lucide-react";

const reasons = [
  {
    icon: <Sparkles size={24} />,
    title: "Modern Design",
    desc: "We craft pixel-perfect, visually stunning interfaces that align with the latest design trends and stand out from the competition.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: <Zap size={24} />,
    title: "Fast Performance",
    desc: "Lightning-fast load times through optimized code, modern frameworks, and performance-first architecture.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Responsive Website",
    desc: "Flawless experiences across all devices — desktop, tablet, and mobile — with adaptive layouts and touch-friendly interactions.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Professional Workflow",
    desc: "Structured project management with clear communication, milestones, and timely delivery you can always count on.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <BadgeDollarSign size={24} />,
    title: "Affordable Solutions",
    desc: "Premium quality at competitive pricing. We offer flexible packages tailored to startups, UMKM, and growing businesses.",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: "Maintenance Support",
    desc: "Ongoing post-launch support including updates, security patches, performance monitoring, and content management.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="orb orb-1" style={{ opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-violet text-sm font-semibold tracking-widest uppercase">
            Why Us
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Why Choose <span className="gradient-text">Siteful</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We combine technical excellence with creative vision to deliver
            digital experiences that truly make a difference for your business.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="glass-card glass-card-hover p-7 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {item.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
