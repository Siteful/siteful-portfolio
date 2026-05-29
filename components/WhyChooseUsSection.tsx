"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Zap,
  Smartphone,
  Server,
  HeadphonesIcon,
  BadgeDollarSign,
} from "lucide-react";

const reasons = [
  {
    icon: <Sparkles size={20} />,
    title: "Modern Design",
    desc: "Clean, contemporary interfaces that follow the latest design standards and create strong first impressions.",
  },
  {
    icon: <Zap size={20} />,
    title: "Fast Performance",
    desc: "Optimized load times through modern frameworks, code splitting, and performance-first architecture.",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Responsive Website",
    desc: "Pixel-perfect experiences across all screen sizes — desktop, tablet, and mobile.",
  },
  {
    icon: <Server size={20} />,
    title: "Scalable Architecture",
    desc: "Built to grow with your business using modular, maintainable, and future-proof technology stacks.",
  },
  {
    icon: <HeadphonesIcon size={20} />,
    title: "Reliable Support",
    desc: "Ongoing post-launch support with regular updates, monitoring, and priority issue resolution.",
  },
  {
    icon: <BadgeDollarSign size={20} />,
    title: "Affordable Solutions",
    desc: "Premium quality at competitive pricing with flexible packages for startups and growing businesses.",
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Why Siteful
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-base leading-relaxed">
            We combine technical expertise with strategic thinking to deliver
            results that matter.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * (i + 1) }}
              className="card p-7 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center text-accent-light mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
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
