"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const filters = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Showcasing some of my recent work and side projects
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            style={{
              padding: "10px 24px",
              borderRadius: 12,
              border: "1px solid",
              borderColor:
                activeFilter === filter.value
                  ? "var(--color-primary)"
                  : "var(--border)",
              background:
                activeFilter === filter.value
                  ? "rgba(59, 130, 246, 0.1)"
                  : "var(--surface)",
              color:
                activeFilter === filter.value
                  ? "var(--color-primary-light)"
                  : "var(--text-2)",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "inherit",
              backdropFilter: "blur(10px)",
            }}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
          className="projects-grid"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
