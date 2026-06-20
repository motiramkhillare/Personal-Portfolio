"use client";

import { useState, useEffect, useCallback } from "react";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypingEffect({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypingEffectProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      setText(currentWord.slice(0, text.length + 1));
      if (text.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setText(currentWord.slice(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [text, wordIndex, isDeleting, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className="gradient-text" style={{ display: "inline" }}>
      {text}
      <span
        style={{
          display: "inline-block",
          width: 3,
          height: "1em",
          background: "var(--color-primary)",
          marginLeft: 2,
          verticalAlign: "text-bottom",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
