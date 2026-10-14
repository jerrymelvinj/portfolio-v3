import * as React from "react";

export function NccLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="National Cadet Corps (NCC) Crest"
    >
      {/* Outer Wreath Ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 2"
        className="opacity-40"
      />
      {/* Inner Shield */}
      <path
        d="M60 16L90 28V62C90 84 60 102 60 102C60 102 30 84 30 62V28L60 16Z"
        fill="black"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Three Division Chevron Stripes (Army, Navy, Air Wing) */}
      <path
        d="M38 34L60 22L82 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42 42L60 32L78 42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="opacity-60"
      />
      {/* NCC Bold Letters */}
      <text
        x="60"
        y="66"
        fill="currentColor"
        fontSize="17"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        letterSpacing="2"
      >
        NCC
      </text>
      {/* Star / Ashoka Chakra Symbol Point */}
      <circle cx="60" cy="80" r="3" fill="currentColor" />
      <path
        d="M52 87H68"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
