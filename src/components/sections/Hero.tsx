"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern glow-ambient"
    >
      {/* Background ambient light orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Availability & Location Top Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-medium text-cyan-200">
                {siteConfig.availabilityStatus}
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Jerry Melvin J
              <span className="block mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-gradient-cyan">
                Senior Product Designer & UI/UX Specialist
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Focus Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 pt-1"
          >
            {siteConfig.focusTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-zinc-900/80 border-zinc-700/80 hover:border-cyan-500/50 hover:bg-zinc-800 text-zinc-300 px-3 py-1 text-xs sm:text-sm font-medium transition-all"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              asChild
              size="lg"
              variant="glow"
              className="w-full sm:w-auto text-base gap-2 px-8 shadow-xl shadow-cyan-500/20"
            >
              <Link href="#work">
                <Sparkles className="w-4 h-4" /> Explore Case Studies
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base gap-2 px-8 border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white"
            >
              <Link href="#contact">
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Proof Stats Ribbon */}
          <motion.div
            variants={itemVariants}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-zinc-800/80 text-left"
          >
            {siteConfig.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce hidden md:block">
        <Link href="#work" aria-label="Scroll to Work section">
          <ArrowDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
