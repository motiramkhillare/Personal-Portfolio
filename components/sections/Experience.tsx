"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/lib/data";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          My professional journey and academic background
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="experience-grid"
      >
        {/* Experience */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>💼</span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Experience</h3>
          </motion.div>
          {experiences.map((entry, i) => (
            <TimelineItem key={entry.title} entry={entry} index={i} side="left" />
          ))}
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>🎓</span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Education</h3>
          </motion.div>
          {education.map((entry, i) => (
            <TimelineItem key={entry.title} entry={entry} index={i} side="right" />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
