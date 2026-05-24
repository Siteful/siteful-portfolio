"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Siteful Studio transformed our online presence completely. The website they built is stunning, fast, and has significantly increased our customer inquiries. Truly professional work!",
    name: "Rina Sari",
    role: "Founder, Brew & Bean Coffee",
    avatar: "RS",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    quote:
      "Working with Siteful was an incredible experience. They understood our vision perfectly and delivered a dashboard that exceeded all expectations. Highly recommended for any startup!",
    name: "Andi Pratama",
    role: "CTO, MetricFlow",
    avatar: "AP",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    quote:
      "From the first consultation to launch, everything was handled professionally. Our restaurant ordering website is beautiful, intuitive, and our customers love it. Best decision we made!",
    name: "Maya Dewi",
    role: "Owner, Flavora Restaurant",
    avatar: "MD",
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
    >
      <div className="orb orb-3" style={{ opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-violet text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Don&apos;t just take our word for it — hear directly from the
            businesses we&apos;ve helped grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              className="glass-card glass-card-hover p-7 flex flex-col"
            >
              <Quote
                size={28}
                className="text-accent-violet/30 mb-4 rotate-180"
              />
              <p className="text-foreground-muted text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-foreground-muted text-xs">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
