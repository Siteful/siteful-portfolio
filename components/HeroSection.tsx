"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, BarChart3 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full pt-32 pb-24 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight mt-7 mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Building Digital Presence{" "}
            <span className="text-gradient">That Drives Growth</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10"
          >
            We help businesses, startups, and organizations build modern websites
            that look professional, perform fast, and convert visitors into
            customers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn-secondary">
              Start Your Project
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex gap-10 mt-16 pt-8 border-t border-border-light"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-manrope)" }}>
                  {stat.value}
                </div>
                <div className="text-foreground-subtle text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Floating visual elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block absolute top-32 right-0 w-[380px]"
        >
          {/* Card 1 */}
          <div className="card-static p-5 mb-4 animate-subtle-float">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center">
                <Monitor size={16} className="text-accent-light" />
              </div>
              <div>
                <div className="text-sm font-medium">Website Performance</div>
                <div className="text-xs text-foreground-subtle">Lighthouse Score</div>
              </div>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold text-success" style={{ fontFamily: "var(--font-manrope)" }}>98</span>
              <span className="text-xs text-foreground-subtle mb-1">/100</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-static p-5 ml-12 mb-4 animate-subtle-float" style={{ animationDelay: "2s" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center">
                <Smartphone size={16} className="text-accent-light" />
              </div>
              <div>
                <div className="text-sm font-medium">Responsive Design</div>
                <div className="text-xs text-foreground-subtle">All Devices</div>
              </div>
            </div>
            <div className="flex gap-2">
              {["Desktop", "Tablet", "Mobile"].map((d) => (
                <span key={d} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-light text-foreground-muted">{d}</span>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-static p-5 animate-subtle-float" style={{ animationDelay: "4s" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center">
                <BarChart3 size={16} className="text-accent-light" />
              </div>
              <div>
                <div className="text-sm font-medium">Conversion Rate</div>
                <div className="text-xs text-foreground-subtle">Last 30 days</div>
              </div>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold text-accent-light" style={{ fontFamily: "var(--font-manrope)" }}>+42%</span>
              <span className="text-xs text-success mb-1">↑ growth</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
