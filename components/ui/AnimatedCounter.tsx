"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  label,
  suffix = "+",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center" }}
    >
      <div
        style={{
          fontSize: "2.2rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
        className="gradient-text"
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.85rem",
          color: "var(--text-2)",
          marginTop: 4,
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}
