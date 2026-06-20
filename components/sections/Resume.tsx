"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle">
          View my professional resume and qualifications
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="glass"
        style={{
          borderRadius: 16,
          overflow: "hidden",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        {/* Resume Viewer */}
        <div
          style={{
            height: 600,
            background: "linear-gradient(135deg, rgba(59,130,246,0.03), rgba(139,92,246,0.03))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <object
            data={personalInfo.resumeUrl}
            type="application/pdf"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Fallback if PDF can't be displayed */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: 16,
                padding: 24,
              }}
            >
              <span style={{ fontSize: "4rem" }}>📄</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, textAlign: "center" }}>
                Resume Preview
              </h3>
              <p
                style={{
                  color: "var(--text-2)",
                  fontSize: "0.95rem",
                  textAlign: "center",
                  maxWidth: 400,
                }}
              >
                Add your resume PDF to <code style={{ fontFamily: "var(--font-mono)", color: "var(--color-primary-light)" }}>public/resume.pdf</code> to enable the embedded viewer.
              </p>
            </div>
          </object>
        </div>

        {/* View Button */}
        <div
          style={{
            padding: "1.25rem",
            display: "flex",
            justifyContent: "center",
            borderTop: "1px solid var(--border)",
          }}
        >
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            📄 View Full Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
