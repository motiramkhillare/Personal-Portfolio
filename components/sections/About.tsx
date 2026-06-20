"use client";

import { motion } from "framer-motion";
import { personalInfo, learningTimeline } from "@/lib/data";
import TimelineItem from "@/components/ui/TimelineItem";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Get to know me and my journey in software development
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass"
          style={{ borderRadius: 16, padding: "2rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>👨‍💻</span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Who I Am</h3>
          </div>
          {personalInfo.bio.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              style={{
                color: "var(--text-2)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                marginBottom: i === 0 ? 16 : 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Timeline */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🗺️</span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>My Journey</h3>
          </motion.div>

          {learningTimeline.map((entry, i) => (
            <TimelineItem key={entry.year} entry={entry} index={i} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
