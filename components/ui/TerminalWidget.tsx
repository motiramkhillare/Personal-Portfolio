"use client";

import { useState, useEffect } from "react";
import { terminalCommands } from "@/lib/data";

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState<
    { type: "prompt" | "command" | "output"; text: string }[]
  >([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [phase, setPhase] = useState<"prompt" | "typing" | "output" | "done">("prompt");
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (currentCmd >= terminalCommands.length) {
      setPhase("done");
      return;
    }

    const cmd = terminalCommands[currentCmd];

    if (phase === "prompt") {
      const timer = setTimeout(() => {
        setTypedText("");
        setPhase("typing");
      }, 500);
      return () => clearTimeout(timer);
    }

    if (phase === "typing") {
      if (typedText.length < cmd.command.length) {
        const timer = setTimeout(() => {
          setTypedText(cmd.command.slice(0, typedText.length + 1));
        }, 40 + Math.random() * 40);
        return () => clearTimeout(timer);
      }
      // Done typing
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [
          ...prev,
          { type: "prompt", text: cmd.prompt },
          { type: "command", text: cmd.command },
        ]);
        setPhase("output");
      }, 300);
      return () => clearTimeout(timer);
    }

    if (phase === "output") {
      const outputLines = cmd.output.split("\n");
      let i = 0;
      const interval = setInterval(() => {
        if (i < outputLines.length) {
          setVisibleLines((prev) => [
            ...prev,
            { type: "output", text: outputLines[i] },
          ]);
          i++;
        } else {
          clearInterval(interval);
          setCurrentCmd((prev) => prev + 1);
          setPhase("prompt");
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [currentCmd, phase, typedText]);

  // Restart after done
  useEffect(() => {
    if (phase === "done") {
      const timer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentCmd(0);
        setPhase("prompt");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const cmd = currentCmd < terminalCommands.length ? terminalCommands[currentCmd] : null;

  return (
    <div className="terminal" style={{ width: "100%", maxWidth: 520 }}>
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#FF5F57" }} />
        <div className="terminal-dot" style={{ background: "#FEBC2E" }} />
        <div className="terminal-dot" style={{ background: "#28C840" }} />
        <span
          style={{
            marginLeft: 8,
            fontSize: "0.75rem",
            color: "var(--color-text-secondary)",
          }}
        >
          motiram@dev: ~/portfolio
        </span>
      </div>
      <div className="terminal-body">
        {visibleLines.map((line, i) => (
          <div className="terminal-line" key={i}>
            {line.type === "prompt" ? (
              <span className="terminal-prompt">{line.text} $ </span>
            ) : line.type === "command" ? (
              <span className="terminal-command">{line.text}</span>
            ) : (
              <span className="terminal-output">{line.text}</span>
            )}
          </div>
        ))}
        {phase === "typing" && cmd && (
          <div className="terminal-line">
            <span className="terminal-prompt">{cmd.prompt} $ </span>
            <span className="terminal-command">{typedText}</span>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 14,
                background: "var(--color-accent-emerald)",
                marginLeft: 1,
                verticalAlign: "text-bottom",
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>
        )}
        {phase === "prompt" && cmd && (
          <div className="terminal-line">
            <span className="terminal-prompt">{cmd.prompt} $ </span>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 14,
                background: "var(--color-accent-emerald)",
                verticalAlign: "text-bottom",
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>
        )}
        <style jsx>{`
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
}
