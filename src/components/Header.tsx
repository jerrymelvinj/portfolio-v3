"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { portfolioData } from '@/data/content';
import { motion } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-12 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <img src="/Logo.svg" alt={portfolioData.home.title} className="h-24 w-auto" />
      </Link>
      <nav className="flex gap-6 text-sm uppercase tracking-widest text-muted">
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
    </header>
  );
}
