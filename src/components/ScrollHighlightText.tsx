"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  highlightColor = "#FFFFFF",
  baseColor = "#333333",
}: ScrollHighlightTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".scroll-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { color: baseColor, opacity: 0.3 },
        {
          color: highlightColor,
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
  }, [text, highlightColor, baseColor]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="scroll-word inline-block mr-[0.25em] transition-colors duration-200"
          style={{ color: baseColor, opacity: 0.3 }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
