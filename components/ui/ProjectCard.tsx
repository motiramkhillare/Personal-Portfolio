"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass card-hover"
      style={{
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Project Image Placeholder */}
      <div
        style={{
          height: 200,
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(6, 182, 212, 0.05) 100%)",
          }}
        />
        <span
          style={{
            fontSize: "3rem",
            zIndex: 1,
            filter: "grayscale(0.3)",
          }}
        >
          {project.id === 1 ? "📝" : project.id === 2 ? "🏠" : "🏍️"}
        </span>
        {/* Decorative grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: "var(--text-2)",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            marginBottom: 16,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 16,
          }}
        >
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: "0.85rem", padding: "0.5rem 1rem", flex: 1, justifyContent: "center" }}
          >
            🐙 GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.5rem 1rem", flex: 1, justifyContent: "center" }}
          >
            🚀 Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
