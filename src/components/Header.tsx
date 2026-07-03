"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { portfolioData } from '@/data/content';
import { motion } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Link href="/" className="flex items-center">
          <img src="/Logo.svg" alt={portfolioData.home.title} className="h-12 md:h-16 w-auto" />
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm uppercase tracking-widest text-muted">
          {portfolioData.nav.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative hover:text-foreground transition-colors ${isActive ? 'text-foreground font-medium' : ''}`}
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
      </div>
    </header>
  );
}
