"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@/components/ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

interface ScrollHighlightTextProps {
  text: string;
  className?: string;
  highlightColor?: string;
  baseColor?: string;
}

export default function ScrollHighlightText({
  text,
  className = "",
  highlightColor,
  baseColor,
}: ScrollHighlightTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const activeHighlight = highlightColor || (isDark ? "#FFFFFF" : "#0F172A");
  const activeBase = baseColor || (isDark ? "#333333" : "#CBD5E1");

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".scroll-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { color: activeBase, opacity: 0.35 },
        {
          color: activeHighlight,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 35%",
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, activeHighlight, activeBase]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="scroll-word inline-block mr-[0.25em] transition-colors duration-200"
          style={{ color: activeBase, opacity: 0.35 }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
