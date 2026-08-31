"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmailButton({
  email = "jerrymelvinj@gmail.com",
  className = "",
}: {
  email?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email to clipboard"
      className={`group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/80 bg-background/80 backdrop-blur-md text-sm font-medium hover:border-foreground transition-all duration-300 cursor-pointer ${className}`}
    >
      <span className="relative w-4 h-4 flex items-center justify-center shrink-0">
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400 transition-all scale-110" />
        ) : (
          <Copy className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
        )}
      </span>
      <span className="text-muted group-hover:text-foreground transition-colors font-mono text-xs md:text-sm">
        {copied ? "Copied to clipboard!" : email}
      </span>
    </button>
  );
}
