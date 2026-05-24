"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Brew & Bean",
    desc: "A modern, immersive website for a premium coffee shop featuring online ordering, menu showcase, and ambient brand storytelling.",
    image: "/project-coffeeshop.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Sharp Cuts Studio",
    desc: "A sleek landing page for a high-end barbershop with online booking, gallery showcase, and a bold masculine aesthetic.",
    image: "/project-barbershop.png",
    tags: ["React", "GSAP", "Node.js"],
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "MetricFlow Dashboard",
    desc: "A comprehensive startup analytics dashboard with real-time data visualization, team management, and performance tracking.",
    image: "/project-dashboard.png",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "Flavora",
    desc: "A modern restaurant ordering platform with menu management, real-time order tracking, and a delightful mobile-first experience.",
    image: "/project-restaurant.png",
    tags: ["React", "Firebase", "Stripe", "Tailwind"],
    color: "from-red-500/20 to-orange-500/20",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      <div className="orb orb-3" style={{ opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-violet text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A selection of recent work showcasing our expertise in building
            modern, high-quality digital experiences.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * (i + 1) }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2 group-hover:text-accent-violet transition-colors"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {project.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent-violet/10 text-accent-violet border border-accent-violet/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
