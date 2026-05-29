"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Brew & Bean",
    image: "/project-coffeeshop.png",
    problem: "A premium coffee shop struggled to attract online customers and lacked a professional digital presence.",
    solution: "Built a modern, immersive website with online ordering, menu showcase, and ambient brand storytelling.",
    result: "3x increase in online orders and 60% more foot traffic from digital discovery.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Sharp Cuts Studio",
    image: "/project-barbershop.png",
    problem: "A high-end barbershop relied on walk-ins only and had no online booking system.",
    solution: "Created a sleek landing page with integrated booking, gallery showcase, and a bold brand aesthetic.",
    result: "70% of bookings now come through the website, reducing no-shows by 40%.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "MetricFlow Dashboard",
    image: "/project-dashboard.png",
    problem: "A growing startup needed a centralized dashboard to track KPIs across multiple departments.",
    solution: "Developed a real-time analytics dashboard with role-based access, custom reports, and data visualization.",
    result: "Decision-making speed improved by 50% with real-time data visibility.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    title: "Flavora",
    image: "/project-restaurant.png",
    problem: "A restaurant chain needed a unified ordering system that works across dine-in, takeaway, and delivery.",
    solution: "Built a mobile-first ordering platform with real-time tracking, menu management, and payment integration.",
    result: "Order volume increased by 85% with a 4.8★ user satisfaction rating.",
    tags: ["React", "Firebase", "Stripe", "Tailwind"],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-base leading-relaxed">
            Real results from real projects. Here&apos;s how we&apos;ve helped
            businesses grow through modern web solutions.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="card overflow-hidden group cursor-pointer"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className={`relative h-56 md:h-auto min-h-[240px] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-primary/20" />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-manrope)" }}>
                      {project.title}
                    </h3>
                    <ArrowUpRight size={18} className="text-foreground-subtle group-hover:text-accent-light transition-colors" />
                  </div>

                  <div className="space-y-3 mb-5">
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-foreground-subtle">Problem</span>
                      <p className="text-foreground-muted text-sm leading-relaxed mt-0.5">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-accent-light">Solution</span>
                      <p className="text-foreground-muted text-sm leading-relaxed mt-0.5">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-success">Result</span>
                      <p className="text-foreground-muted text-sm leading-relaxed mt-0.5">{project.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-0.5 rounded-full bg-accent-muted text-accent-light border border-accent/15">
                        {tag}
                      </span>
                    ))}
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
