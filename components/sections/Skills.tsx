"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";

type Category = keyof typeof skillCategories;

export default function Skills() {
  const [active, setActive] = useState<Category>("frontend");
  const categories = Object.keys(skillCategories) as Category[];

  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Category Tabs */}
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
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "10px 24px",
              borderRadius: 12,
              border: "1px solid",
              borderColor:
                active === cat ? "var(--color-primary)" : "var(--border)",
              background:
                active === cat
                  ? "rgba(59, 130, 246, 0.1)"
                  : "var(--surface)",
              color:
                active === cat
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
            {skillCategories[cat].icon} {skillCategories[cat].label}
          </button>
        ))}
      </motion.div>

      {/* Skill Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {skillCategories[active].skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.08} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
