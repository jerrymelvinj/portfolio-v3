"use client";

import * as React from "react";
import { siteConfig } from "@/content/site-config";
import { Quote, Briefcase, Heart, Cpu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Philosophy() {
  const pillars = [
    {
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      title: "Business Strategy",
      description:
        "Every pixel must tie directly to conversion funnels, retention loops, and measurable commercial outcomes.",
    },
    {
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      title: "Human Clarity",
      description:
        "Zero cognitive overload. Accessible typography, intuitive micro-feedback, and radical empathy for all user demographics.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Technical Feasibility",
      description:
        "Designed with code architecture in mind. Modular design tokens, 60fps animations, and production-ready React components.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 via-zinc-950/90 to-zinc-950/90 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Ambient glow decoration */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono font-medium">
            <Quote className="w-3.5 h-3.5" />
            <span>Design Philosophy</span>
          </div>

          {/* Styled Quote */}
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug tracking-tight text-gradient">
            &ldquo;Great design lives at the intersection of business strategy,
            human clarity, and technical feasibility. Interface complexity should
            never be passed down to the user.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="font-bold text-base text-cyan-300">
              {siteConfig.name}
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              Senior Product Designer & UI/UX Specialist • Bengaluru, India
            </span>
          </div>

          {/* Tri-Pillar Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-800/80 text-left">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 space-y-2 hover:border-zinc-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-bold text-white">
                  {pillar.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
