"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Siteful completely transformed our online presence. The website they built is clean, fast, and has significantly increased our customer inquiries. Highly professional team.",
    name: "Rina Sari",
    role: "Founder, Brew & Bean Coffee",
    initials: "RS",
  },
  {
    quote:
      "Working with Siteful was seamless. They understood our vision and delivered a dashboard that exceeded expectations. Their technical skills and communication are top-notch.",
    name: "Andi Pratama",
    role: "CTO, MetricFlow",
    initials: "AP",
  },
  {
    quote:
      "From consultation to launch, everything was handled with care. Our ordering website is beautiful and intuitive — our customers love using it. Best investment we made.",
    name: "Maya Dewi",
    role: "Owner, Flavora Restaurant",
    initials: "MD",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-base leading-relaxed">
            Real feedback from businesses we&apos;ve helped build and grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="card p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-warning fill-warning" />
                ))}
              </div>

              <p className="text-foreground-muted text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-border-light">
                <div className="w-9 h-9 rounded-full bg-accent-muted flex items-center justify-center text-accent-light text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-foreground-subtle text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
