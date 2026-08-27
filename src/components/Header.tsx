"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/content";
import { motion } from "framer-motion";
import ContraHireButton from "@/components/ContraHireButton";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.svg"
            alt={`${portfolioData.home.title} - Product Designer`}
            width={180}
            height={64}
            priority
            className="h-12 md:h-16 w-auto"
          />
        </Link>
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="flex items-center gap-4 md:gap-6 text-sm uppercase tracking-widest text-muted">
            {portfolioData.nav.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative hover:text-foreground transition-colors ${
                    isActive ? "text-foreground font-medium" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-px bg-foreground -bottom-1"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <ContraHireButton />
        </div>
      </div>
    </header>
  );
}
