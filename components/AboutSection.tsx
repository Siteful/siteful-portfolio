"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Rocket } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            About Siteful
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            A studio built for the{" "}
            <span className="text-gradient">modern web</span>
          </h2>
          <p className="text-foreground-muted text-base leading-relaxed">
            Siteful is a web development studio focused on helping businesses,
            startups, and UMKM establish a strong digital presence. We combine
            modern design, clean code, and strategic thinking to build websites
            that work — not just look good.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: <Target size={20} />,
              title: "Who We Are",
              desc: "A small but dedicated team of designers and developers passionate about crafting digital experiences that are functional, beautiful, and impactful for every client we work with.",
            },
            {
              icon: <Lightbulb size={20} />,
              title: "What We Do",
              desc: "We design and develop modern websites — from landing pages and company profiles to custom dashboards and full-stack applications — using the latest technologies and best practices.",
            },
            {
              icon: <Rocket size={20} />,
              title: "Our Mission",
              desc: "To make professional, high-performance web solutions accessible to businesses of all sizes — empowering them to compete in the digital landscape with confidence.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="card p-7"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center text-accent-light mb-5">
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
