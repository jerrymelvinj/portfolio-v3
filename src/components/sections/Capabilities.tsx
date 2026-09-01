"use client";

import * as React from "react";
import { capabilities } from "@/content/capabilities";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  KeyRound,
  Layers,
  MapPin,
  Users,
  Code2,
  CheckCircle,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
  KeyRound: <KeyRound className="w-5 h-5 text-blue-400" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
  MapPin: <MapPin className="w-5 h-5 text-emerald-400" />,
  Users: <Users className="w-5 h-5 text-pink-400" />,
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[300px] bg-gradient-to-l from-cyan-500/10 to-transparent blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-medium">
          <Wrench className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Capabilities & Specialized Services
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
          A hybrid fusion of strategic product thinking, behavioral psychology, and
          high-performance frontend engineering.
        </p>
      </div>

      {/* Grid of 6 Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Card className="h-full flex flex-col justify-between bg-zinc-950/60 border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 card-hover-glow">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner">
                    {iconMap[cap.iconName] || <Layers className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <Badge variant="outline" className="text-[11px] font-mono text-zinc-400 bg-zinc-900/60">
                    {cap.category}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300">
                    {cap.title}
                  </CardTitle>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {cap.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                {/* Skills tags */}
                <div className="space-y-2 pt-3 border-t border-zinc-800/70">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">
                    Domain Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tangible deliverables */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-cyan-400/80 font-semibold block">
                    Deliverables
                  </span>
                  <ul className="space-y-1 text-xs text-zinc-400">
                    {cap.deliverables.slice(0, 2).map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
