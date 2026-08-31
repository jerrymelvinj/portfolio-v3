"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/content";
import { motion } from "framer-motion";
import ContraHireButton from "@/components/ContraHireButton";
import CopyEmailButton from "@/components/CopyEmailButton";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-xl border-b border-border/60 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Link href="/" className="flex items-center group">
          <Image
            src="/Logo.svg"
            alt={`${portfolioData.home.title} - Product Designer`}
            width={180}
            height={64}
            priority
            className="h-10 md:h-12 w-auto dark:invert group-hover:scale-105 transition-all duration-300"
          />
        </Link>

        {/* Bouncy Navigation Pill Bar */}
        <nav className="relative flex items-center gap-1 p-1 bg-border/40 backdrop-blur-md rounded-full border border-border/60">
          {portfolioData.nav.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-5 py-2 text-xs uppercase tracking-widest transition-colors font-medium ${
                  isActive ? "text-background" : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="bouncyPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-foreground rounded-full -z-10"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Widgets: Copy Email, Theme Toggle, & Contra CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <CopyEmailButton email="jerrymelvinj@gmail.com" />
          <ContraHireButton />
        </div>
      </div>
    </header>
  );
}
