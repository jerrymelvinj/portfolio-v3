"use client";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full border border-border/80 bg-background/80 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative w-10 h-10 rounded-full border border-border/80 bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground hover:border-foreground transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ y: -20, opacity: 0, rotate: -45 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 20, opacity: 0, rotate: 45 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 hover:text-indigo-700 transition-colors" />
        )}
      </motion.div>
    </button>
  );
}
