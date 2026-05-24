"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Zap } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="orb orb-2" style={{ opacity: 0.5 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-violet text-sm font-semibold tracking-widest uppercase">
            About Us
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            We Are <span className="gradient-text">Siteful Studio</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A passionate team of developers and designers dedicated to crafting
            modern, high-performance digital solutions for businesses and
            startups that want to make an impact online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target size={28} />,
              title: "Our Mission",
              desc: "To empower businesses with modern, professional websites that drive growth, build trust, and create lasting digital impressions.",
              gradient: "from-indigo-500 to-violet-500",
            },
            {
              icon: <Eye size={28} />,
              title: "Our Vision",
              desc: "To become the go-to digital partner for startups and businesses seeking world-class web experiences at accessible pricing.",
              gradient: "from-violet-500 to-purple-500",
            },
            {
              icon: <Zap size={28} />,
              title: "Our Focus",
              desc: "We specialize in performance-driven websites with stunning visuals, clean code, and an unwavering commitment to quality.",
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              className="glass-card glass-card-hover p-8 text-center"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-5`}
              >
                {card.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {card.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
