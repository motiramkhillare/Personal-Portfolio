"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 2.3 }}
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "min(90%, 800px)",
          borderRadius: 16,
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          ...(scrolled
            ? {
                background: "var(--surface)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }
            : {
                background: "transparent",
                border: "1px solid transparent",
              }),
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            textDecoration: "none",
            color: "var(--text-1)",
            letterSpacing: "-0.03em",
          }}
        >
          <span className="gradient-text">MK</span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              style={{
                padding: "6px 14px",
                borderRadius: 10,
                border: "none",
                background:
                  activeSection === link.href
                    ? "rgba(59, 130, 246, 0.1)"
                    : "transparent",
                color:
                  activeSection === link.href
                    ? "var(--color-primary-light)"
                    : "var(--text-2)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "inherit",
              }}
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="mobile-nav">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              padding: 8,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              style={{
                width: 22,
                height: 2,
                background: "var(--text-1)",
                borderRadius: 2,
                display: "block",
              }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                width: 22,
                height: 2,
                background: "var(--text-1)",
                borderRadius: 2,
                display: "block",
              }}
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              style={{
                width: 22,
                height: 2,
                background: "var(--text-1)",
                borderRadius: 2,
                display: "block",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 80,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 999,
              width: "min(90%, 400px)",
              borderRadius: 16,
              padding: "1rem",
              background: "var(--surface)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              border: "1px solid var(--border)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleClick(link.href)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "none",
                  background:
                    activeSection === link.href
                      ? "rgba(59, 130, 246, 0.1)"
                      : "transparent",
                  color:
                    activeSection === link.href
                      ? "var(--color-primary-light)"
                      : "var(--text-2)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style jsx global>{`
        .desktop-nav {
          display: flex !important;
        }
        .mobile-nav {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
