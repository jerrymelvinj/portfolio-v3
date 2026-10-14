"use client";

import * as React from "react";
import { siteConfig } from "@/content/site-config";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  // Framer Motion Staggered Mask Reveal
  const lineVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: (custom: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Apple / Framer smooth deceleration
        delay: 0.15 + custom * 0.12,
      },
    }),
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.55 + custom * 0.1,
      },
    }),
  };

  // Interactive floating skills
  const chips = siteConfig.skillsChips;

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-6 sm:px-8 lg:px-12 bg-black border-b border-neutral-800"
    >
      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Availability / Status ribbon */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 pb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/80 text-xs font-mono text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{siteConfig.availabilityStatus}</span>
          </span>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline-block">
            {siteConfig.coordinates}
          </span>
        </motion.div>

        {/* Massive Greeting & Typography Reveal */}
        <div className="space-y-1 sm:space-y-2">
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-black tracking-tighter uppercase text-white leading-[0.92]"
            >
              Hi, I&apos;m Jerry Melvin J.
            </motion.h1>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden">
            <motion.h2
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-black tracking-tighter uppercase text-white leading-[0.92]"
            >
              I Design Complex Digital
            </motion.h2>
          </div>

          {/* Line 3 with high contrast highlight */}
          <div className="overflow-hidden">
            <motion.div
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-black tracking-tighter uppercase text-neutral-400 leading-[0.92] flex items-center gap-4 flex-wrap"
            >
              <span className="text-white">Products 0 → 1.</span>
            </motion.div>
          </div>
        </div>

        {/* Sub-headline & Bio snippet */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-8 space-y-4"
          >
            <p className="text-lg sm:text-2xl text-neutral-300 font-normal leading-relaxed max-w-3xl">
              Product Designer & UI/UX Specialist based in Bengaluru. Specializing in high-conversion e-commerce checkout architecture, scalable design systems, and human-centered digital experiences.
            </p>
            <p className="text-sm sm:text-base text-neutral-500 font-normal leading-relaxed max-w-2xl font-mono">
              Proven commercial impact across Healthcare E-Commerce, Multi-Channel Auth, and Regional UAE Logistics.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4 md:items-end justify-center"
          >
            <Link
              href="#work"
              className="group inline-flex items-center justify-between gap-4 px-6 py-4 bg-white text-black font-extrabold uppercase text-xs tracking-wider rounded-none hover:bg-neutral-200 transition-colors w-full sm:w-auto"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </Link>
            <a
              href={siteConfig.socials.email}
              className="group inline-flex items-center justify-between gap-4 px-6 py-4 border border-neutral-700 bg-black text-white font-extrabold uppercase text-xs tracking-wider rounded-none hover:border-white transition-colors w-full sm:w-auto"
            >
              <span>jerrymelvinj@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Floating interactive tags / chips for skills */}
        <motion.div
          custom={5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <div className="flex items-center justify-between pb-4">
            <span className="text-xs uppercase font-mono tracking-widest text-neutral-500">
              Interactive Skill Tags & Capabilities [Drag or Hover]
            </span>
            <span className="text-xs font-mono text-neutral-600 hidden sm:inline-block">
              {chips.length} Core Competencies
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {chips.map((chip, index) => (
              <motion.div
                key={chip}
                drag
                dragConstraints={{ left: -15, right: 15, top: -10, bottom: 10 }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-300 hover:text-black hover:bg-white hover:border-white transition-colors duration-200 cursor-grab active:cursor-grabbing select-none text-xs sm:text-sm font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 group-hover:bg-black" />
                <span>{chip}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Proof Metric Strip */}
      <div className="max-w-7xl mx-auto w-full mt-12 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {siteConfig.stats.map((stat, i) => (
          <div key={i} className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white">
              {stat.value}
            </div>
            <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
