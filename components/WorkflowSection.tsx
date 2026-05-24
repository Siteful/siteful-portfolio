"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  ClipboardList,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: <MessageCircle size={24} />,
    title: "Discussion",
    desc: "Understanding your vision, goals, target audience, and project requirements through in-depth consultation.",
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Planning",
    desc: "Defining project scope, timeline, technical architecture, and content strategy for a clear roadmap.",
  },
  {
    icon: <PenTool size={24} />,
    title: "UI/UX Design",
    desc: "Creating stunning wireframes and high-fidelity mockups that bring your brand to life with pixel-perfect precision.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Development",
    desc: "Building your website with clean, modern code using cutting-edge frameworks and best practices.",
  },
  {
    icon: <TestTube2 size={24} />,
    title: "Testing",
    desc: "Rigorous quality assurance across devices, browsers, and performance benchmarks to ensure perfection.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Launch",
    desc: "Deploying your polished website with optimized hosting, domain setup, and post-launch support.",
  },
];

export default function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="workflow"
      className="section-padding relative overflow-hidden"
    >
      <div className="orb orb-2" style={{ opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-violet text-sm font-semibold tracking-widest uppercase">
            Our Process
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Our proven six-step workflow ensures every project is delivered with
            quality, transparency, and precision from start to finish.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="glass-card glass-card-hover p-7 relative group"
            >
              {/* Step number */}
              <div className="absolute top-5 right-5 text-4xl font-bold text-white/5 group-hover:text-accent-violet/10 transition-colors duration-300"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-purple flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {step.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
