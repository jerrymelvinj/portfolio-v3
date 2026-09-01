"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Badge */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-zinc-800 to-blue-500/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-inner">
            <span className="font-bold text-sm text-cyan-400 tracking-wider font-mono">
              JM
            </span>
            <div className="absolute -inset-0.5 bg-cyan-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-100 group-hover:text-cyan-300 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-xs text-zinc-400 font-medium hidden sm:inline-block">
              Product Designer & UI Specialist
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Badge
            variant="emerald"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[11px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Bengaluru / Remote
          </Badge>
          <Button asChild size="sm" variant="glow" className="gap-1.5 font-medium">
            <Link href="#contact">
              Let&apos;s Talk <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-3">
              <Badge
                variant="emerald"
                className="w-fit items-center gap-1.5 px-3 py-1 font-mono text-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Bengaluru, Karnataka, India
              </Badge>
              <Button
                asChild
                variant="glow"
                className="w-full justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="#contact">
                  <Sparkles className="w-4 h-4" /> Start a Conversation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
