"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only — wire up your backend here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
        >
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              viewport={{ once: true }}
              className="glass"
              style={{
                borderRadius: 14,
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: 14,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(59, 130, 246, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                {info.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-3)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 2,
                  }}
                >
                  {info.label}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-1)",
                  }}
                >
                  {info.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass"
          style={{
            borderRadius: 16,
            padding: "2rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 16,
            }}
            className="form-row"
          >
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--text-2)",
                  marginBottom: 6,
                  display: "block",
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  color: "var(--text-1)",
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--text-2)",
                  marginBottom: 6,
                  display: "block",
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  color: "var(--text-1)",
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label
              htmlFor="contact-subject"
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--text-2)",
                marginBottom: 6,
                display: "block",
              }}
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text-1)",
                fontSize: "0.9rem",
                fontFamily: "inherit",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label
              htmlFor="contact-message"
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--text-2)",
                marginBottom: 6,
                display: "block",
              }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text-1)",
                fontSize: "0.9rem",
                fontFamily: "inherit",
                outline: "none",
                transition: "border-color 0.2s",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            {submitted ? "✅ Message Sent!" : "🚀 Send Message"}
          </button>
        </motion.form>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus, textarea:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </section>
  );
}
