"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import TypingEffect from "@/components/ui/TypingEffect";
import TerminalWidget from "@/components/ui/TerminalWidget";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "6rem 1.5rem 4rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 2.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="tag"
            style={{ marginBottom: 20 }}
          >
            👋 Welcome to my portfolio
          </motion.div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 8,
            }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 600,
              marginBottom: 20,
              minHeight: "2.4rem",
            }}
          >
            <TypingEffect words={personalInfo.typingTexts} />
          </div>

          <p
            style={{
              color: "var(--text-2)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 500,
            }}
          >
            Passionate about building elegant, performant web applications with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <a href="#projects" className="btn-primary">
              🚀 View Projects
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              📄 View Resume
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 40,
            }}
          >
            {personalInfo.stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Profile + Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 2.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Profile Image */}
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-primary), var(--color-accent-cyan))",
              padding: 3,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "var(--bg-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/profile.png"
                alt={personalInfo.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML = "👨‍💻";
                  }
                }}
              />
            </div>
          </div>

          {/* Terminal */}
          <TerminalWidget />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontSize: "1.2rem", color: "var(--text-3)" }}
        >
          ↓
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            order: 2;
          }
          .hero-grid > div:last-child {
            order: 1;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
          .hero-grid > div:first-child > div:nth-child(5) {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
