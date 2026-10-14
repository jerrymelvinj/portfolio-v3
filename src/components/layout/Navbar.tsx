"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [bengaluruTime, setBengaluruTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setBengaluruTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/85 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand with Official Signature Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 text-white transition-opacity hover:opacity-80"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700/80 group-hover:border-white transition-colors">
            <Logo size={22} className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-sm sm:text-base tracking-tight uppercase">
              {siteConfig.name}
            </span>
            <span className="text-neutral-600 hidden sm:inline-block">/</span>
            <span className="text-neutral-400 text-xs tracking-wider uppercase hidden sm:inline-block font-mono">
              Product Designer
            </span>
          </div>
        </Link>

        {/* Center Live Bengaluru Time */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>BLR {bengaluruTime || "09:38 AM IST"}</span>
        </div>

        {/* Navigation items & CTA */}
        <nav className="flex items-center gap-6 sm:gap-8 text-xs font-mono tracking-wider uppercase">
          <Link
            href="/#work"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <a
            href={siteConfig.socials.email}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </nav>
      </div>
    </header>
  );
}
