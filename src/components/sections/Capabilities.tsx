"use client";

import * as React from "react";
import { capabilities } from "@/content/capabilities";
import { motion } from "framer-motion";
import {
  TrendingUp,
  KeyRound,
  Layers,
  MapPin,
  Users,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-white" />,
  KeyRound: <KeyRound className="w-5 h-5 text-white" />,
  Layers: <Layers className="w-5 h-5 text-white" />,
  MapPin: <MapPin className="w-5 h-5 text-white" />,
  Users: <Users className="w-5 h-5 text-white" />,
  Code2: <Code2 className="w-5 h-5 text-white" />,
};

function CapabilityCardContent({
  cap,
  idx,
  className = "",
}: {
  cap: typeof capabilities[0];
  idx: number;
  className?: string;
}) {
  const indexStr = String(idx + 1).padStart(2, "0");
  return (
    <div
      className={`group p-6 sm:p-8 rounded-none border border-neutral-800 bg-neutral-950/80 hover:border-white transition-colors duration-300 transform-gpu flex flex-col justify-between ${className}`}
    >
      <div className="space-y-5 sm:space-y-6">
        <div className="flex items-center justify-between pb-3.5 border-b border-neutral-900 font-mono text-xs text-neutral-500">
          <span className="text-neutral-300 font-bold">[{indexStr}]</span>
          <span className="uppercase tracking-wider">{cap.category}</span>
        </div>

        <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-black group-hover:border-white transition-colors">
          {iconMap[cap.iconName] || <Layers className="w-5 h-5 text-white" />}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-neutral-200">
            {cap.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
            {cap.description}
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-neutral-900 space-y-2.5">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
          Domain Skills &amp; Deliverables
        </span>
        <div className="flex flex-wrap gap-1.5">
          {cap.skills.slice(0, 3).map((skill, sIdx) => (
            <span
              key={sIdx}
              className="px-2 py-0.5 sm:py-1 rounded bg-black border border-neutral-800 text-[10px] font-mono text-neutral-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Technical Capabilities &amp; System Design
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Building Scalable Design Systems &amp; UI Architecture.
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-md">
            Bridging customer psychology, checkout conversion velocity, and robust frontend engineering.
          </p>
        </div>

        {/* Desktop & Tablet: 6 Capabilities in stark high-contrast grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <CapabilityCardContent cap={cap} idx={idx} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Infinite Auto-Scrolling Horizontal Loop (Left to Right / Infinite Marquee) */}
        <div className="block md:hidden relative -mx-6 sm:-mx-8 overflow-hidden py-1">
          {/* Edge gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex w-max gap-4 animate-marquee-horizontal hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {/* Primary Set */}
            {capabilities.map((cap, idx) => (
              <div key={`m1-${cap.id}`} className="w-[82vw] max-w-[310px] shrink-0">
                <CapabilityCardContent cap={cap} idx={idx} className="h-full" />
              </div>
            ))}
            {/* Duplicate Set for seamless infinite loop */}
            {capabilities.map((cap, idx) => (
              <div key={`m2-${cap.id}`} className="w-[82vw] max-w-[310px] shrink-0">
                <CapabilityCardContent cap={cap} idx={idx} className="h-full" />
              </div>
            ))}
          </div>

          {/* Discreet Mobile Guidance Pill */}
          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse" />
            <span>Auto-scrolling loop • Tap to pause</span>
          </div>
        </div>
      </div>
    </section>
  );
}
