"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          What I <span className="gradient-text">Offer</span>
        </h2>
        <p className="section-subtitle">
          Core capabilities that I bring to every project
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}
        className="features-grid"
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true, margin: "-30px" }}
            className="glass card-hover"
            style={{
              borderRadius: 16,
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "rgba(59, 130, 246, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: 16,
              }}
            >
              {feature.icon}
            </div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                color: "var(--text-2)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
