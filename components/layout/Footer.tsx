"use client";

import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "3rem 1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Brand */}
        <div>
          <div
            className="gradient-text"
            style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 8, letterSpacing: "-0.03em" }}
          >
            MK
          </div>
          <p style={{ color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.6 }}>
            Building digital experiences with modern web technologies.
          </p>
        </div>

        {/* Quick Nav */}
        <div>
          <h4
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-3)",
              marginBottom: 16,
            }}
          >
            Navigation
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "var(--text-2)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-3)",
              marginBottom: 16,
            }}
          >
            Connect
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-2)", textDecoration: "none", fontSize: "0.9rem" }}
            >
              🐙 GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-2)", textDecoration: "none", fontSize: "0.9rem" }}
            >
              💼 LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ color: "var(--text-2)", textDecoration: "none", fontSize: "0.9rem" }}
            >
              📧 Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <p style={{ color: "var(--text-3)", fontSize: "0.8rem" }}>
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p style={{ color: "var(--text-3)", fontSize: "0.8rem" }}>
          Built with 💙 Next.js & React
        </p>
      </div>
    </footer>
  );
}
