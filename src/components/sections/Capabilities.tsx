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

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 sm:px-8 lg:px-12 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto space-y-16">
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

        {/* 6 Capabilities in stark high-contrast grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-none border border-neutral-800 bg-neutral-950/60 hover:border-white transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-900 font-mono text-xs text-neutral-500">
                    <span className="text-neutral-300 font-bold">[{indexStr}]</span>
                    <span className="uppercase tracking-wider">{cap.category}</span>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-black group-hover:border-white transition-colors">
                    {iconMap[cap.iconName] || <Layers className="w-5 h-5 text-white" />}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-neutral-200">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-900 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                    Domain Skills &amp; Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-1 rounded bg-black border border-neutral-800 text-[10px] font-mono text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
