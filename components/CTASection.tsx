"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative glass-card p-12 sm:p-16 lg:p-20 text-center overflow-hidden"
        >
          {/* Gradient background inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 via-accent-violet/5 to-accent-purple/10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-indigo/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Let&apos;s Build Your{" "}
              <span className="gradient-text">Digital Presence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground-muted max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
            >
              Ready to transform your business with a modern, professional
              website? Let&apos;s discuss your project and create something
              extraordinary together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 text-base px-8 py-4"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
