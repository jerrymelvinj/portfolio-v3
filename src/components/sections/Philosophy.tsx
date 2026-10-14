"use client";

import * as React from "react";
import { siteConfig } from "@/content/site-config";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Philosophy() {
  const toolkit = [
    {
      category: "Design & Interaction",
      items: ["Figma Variables & Auto Layout", "Design Tokens", "Wireframing & Usability Testing", "Adobe Creative Suite", "Rive Motion"],
    },
    {
      category: "Frontend Engineering",
      items: ["React & Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI Primitives", "Git & CI/CD"],
    },
    {
      category: "Methodology & Strategy",
      items: ["E-Commerce Funnel Optimization", "WCAG 2.1 AAA Accessibility", "Multi-Channel Authentication", "RTL / Geospatial UX"],
    },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Biography &amp; Design Ethos
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Human-Centered Product Design Philosophy.
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            {siteConfig.location}
          </div>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Jerry's raw extracted biography */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
              &ldquo;I don&apos;t always know where a design is going when I start, but somewhere in the middle, it finds its shape. That&apos;s the part I live for.&rdquo;
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
              <p>
                I got into UI/UX quietly, without a grand plan. Learned design systems first, the boring but necessary kind, then slowly started understanding when to break them. Over time, I found myself designing and building together, not separately. One fed the other.
              </p>
              <p className="text-sm font-mono text-neutral-500">
                Education: English with Communication Studies, Christ University, Bengaluru.
              </p>
              <p className="text-sm font-mono text-neutral-400">
                Actively participating in design critiques, tech meetups, hackathons, and creative sprints across the Bengaluru design ecosystem.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 bg-neutral-950 text-white font-mono text-xs uppercase hover:bg-white hover:text-black hover:border-white transition-all"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 bg-neutral-950 text-white font-mono text-xs uppercase hover:bg-white hover:text-black hover:border-white transition-all"
              >
                <span>GitHub Workspace</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Technical Stack & Frameworks Bento Card */}
          <div className="lg:col-span-5 bg-neutral-950/70 border border-neutral-800 p-8 space-y-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block border-b border-neutral-900 pb-3">
              Technical Stack &amp; Frameworks
            </span>

            <div className="space-y-6">
              {toolkit.map((group, gIdx) => (
                <div key={gIdx} className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-2 py-1 rounded bg-black border border-neutral-800 text-[11px] font-mono text-neutral-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>DESIGN + FRONTEND CODE</span>
              <span>100% PRODUCTION READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
