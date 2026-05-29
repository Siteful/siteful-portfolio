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
    icon: <MessageCircle size={20} />,
    title: "Discovery",
    desc: "Understanding your goals, audience, and requirements through focused consultation.",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Planning",
    desc: "Defining scope, timeline, technical stack, and content strategy with a clear roadmap.",
  },
  {
    icon: <PenTool size={20} />,
    title: "Design",
    desc: "Creating wireframes and high-fidelity mockups that bring your brand to life.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Development",
    desc: "Building with clean, modern code using cutting-edge frameworks and best practices.",
  },
  {
    icon: <TestTube2 size={20} />,
    title: "Testing",
    desc: "Rigorous QA across devices, browsers, and performance benchmarks.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Launch",
    desc: "Deploying with optimized hosting, monitoring setup, and post-launch support.",
  },
];

export default function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workflow" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-base leading-relaxed">
            A structured six-step process that ensures quality, transparency,
            and precision from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * (i + 1) }}
              className="card p-7 relative group"
            >
              {/* Step number */}
              <div className="absolute top-6 right-6 text-3xl font-bold text-foreground/[0.04] group-hover:text-accent/[0.08] transition-colors duration-300" style={{ fontFamily: "var(--font-manrope)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center text-accent-light mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
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
