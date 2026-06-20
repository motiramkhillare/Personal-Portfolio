"use client";

import { motion } from "framer-motion";
import type { TimelineEntry } from "@/lib/data";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  side?: "left" | "right" | "center";
}

export default function TimelineItem({ entry, index, side = "center" }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : side === "right" ? 30 : 0, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-30px" }}
      style={{
        display: "flex",
        gap: 20,
        position: "relative",
      }}
    >
      {/* Timeline dot and line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--color-primary), var(--color-accent-cyan))",
            boxShadow: "0 0 12px rgba(59, 130, 246, 0.4)",
            flexShrink: 0,
            marginTop: 4,
          }}
        />
        <div
          style={{
            width: 2,
            flex: 1,
            background: "linear-gradient(180deg, var(--color-primary), transparent)",
            marginTop: 4,
          }}
        />
      </div>

      {/* Content */}
      <div
        className="glass"
        style={{
          borderRadius: 14,
          padding: "1.25rem",
          flex: 1,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <span
            className="tag"
            style={{ fontSize: "0.7rem" }}
          >
            {entry.year}
          </span>
          {entry.type === "education" && <span>🎓</span>}
          {entry.type === "experience" && <span>💼</span>}
          {entry.type === "milestone" && <span>🏆</span>}
        </div>
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 6 }}>
          {entry.title}
        </h4>
        <p style={{ color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
}
