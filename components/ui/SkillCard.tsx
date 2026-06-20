"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Skill } from "@/lib/data";

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

export default function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="glass glow-shadow"
      style={{
        borderRadius: 14,
        padding: "1.25rem",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1.4rem" }}>{skill.icon}</span>
          <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{skill.name}</span>
        </div>
        <span
          className="gradient-text"
          style={{ fontWeight: 700, fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
