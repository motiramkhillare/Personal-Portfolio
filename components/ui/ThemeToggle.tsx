"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 10,
        border: "1px solid var(--border)",
        background: "var(--surface)",
        backdropFilter: "blur(10px)",
        cursor: "pointer",
        color: "var(--text-1)",
        fontSize: "1.15rem",
        transition: "all 0.3s ease",
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
