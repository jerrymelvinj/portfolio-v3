"use client";

import * as React from "react";
import { projects } from "@/content/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Compass, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CaseStudies() {
  return (
    <section id="work" className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Partition — Stays still at top on desktop */}
        <div className="lg:sticky lg:top-20 z-30 bg-black/95 backdrop-blur-md pt-4 pb-6 border-b border-neutral-800 mb-10 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
                Selected Case Studies &amp; Product Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
                E-Commerce UX Case Studies &amp; Architecture.
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md leading-relaxed">
              Decoupling complexity in e-commerce checkout flows, regional address infrastructure, and enterprise design systems.
            </p>
          </div>
        </div>

        {/* Stacking Case Studies Container */}
        <div className="relative">
          {projects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, "0");
            const totalProjects = String(projects.length).padStart(2, "0");
            const isLast = index === projects.length - 1;

            // Distinct, opaque solid luxury dark background for each card overlay
            const solidBackgrounds = [
              "bg-[#0a0a0a]",
              "bg-[#0d0d0d]",
              "bg-[#0b0b0b]",
              "bg-[#0f0f0f]",
            ];
            const solidBg = solidBackgrounds[index % solidBackgrounds.length];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  top: `calc(190px + ${index * 12}px)`,
                  zIndex: 10 + index,
                }}
                className={`group rounded-2xl sm:rounded-3xl border border-neutral-800/90 ${solidBg} p-6 sm:p-8 lg:p-10 shadow-[0_-20px_50px_rgba(0,0,0,0.95)] transform-gpu transition-all lg:sticky ${
                  isLast ? "mb-0" : "mb-16 lg:mb-40"
                }`}
              >
                {/* Project Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-400 pb-6 border-b border-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold tracking-wider">
                      [{projectNumber} / {totalProjects}]
                    </span>
                    <span className="text-neutral-600">—</span>
                    <span className="text-neutral-300 uppercase tracking-wider">
                      {project.client}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                      {project.role}
                    </span>
                    <span className="text-white font-bold">{project.year}</span>
                  </div>
                </div>

                {/* Project Main Details */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="group/title inline-flex items-start gap-3"
                    >
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.08] group-hover/title:text-neutral-300 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-500 group-hover/title:text-white group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all shrink-0 mt-1" />
                    </Link>
                    <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal max-w-3xl">
                      {project.summary}
                    </p>
                  </div>

                  {/* Metric Badges */}
                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                    {project.metricsBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-3 py-1.5 rounded-full border border-neutral-700 bg-neutral-900 text-xs font-mono font-medium text-white shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bento-Box Style Visual Grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Primary Large Showcase Area (8 cols) */}
                  <div className="md:col-span-8 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[400px] relative overflow-hidden group-hover:border-neutral-700 transition-colors">
                    {/* Simulated App / Canvas Bar */}
                    <div className="flex items-center justify-between pb-6 border-b border-neutral-800/80">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-neutral-700" />
                        <span className="w-3 h-3 rounded-full bg-neutral-800" />
                        <span className="w-3 h-3 rounded-full bg-neutral-800" />
                        <span className="text-xs font-mono text-neutral-500 ml-2">
                          {project.slug}.architecture.fig
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 px-2 py-0.5 rounded bg-neutral-800">
                        {project.tags[0]}
                      </span>
                    </div>

                    {/* Central Schematic Diagram Placeholder */}
                    <div className="my-auto py-8">
                      {index === 0 && (
                        /* OMRON Checkout Funnel Simulation */
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                            <span>MILESTONE PROGRESSION ENGINE</span>
                            <span className="text-white font-bold">Surge: 30x Velocity</span>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase">Step 01</span>
                              <div className="text-sm font-bold text-white">Biometric Auth</div>
                              <div className="text-xs text-neutral-400">Zero-Password Passkeys</div>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase">Step 02</span>
                              <div className="text-sm font-bold text-white">Milestone Gamification</div>
                              <div className="text-xs text-neutral-400">Free Express Delivery</div>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-700 space-y-1">
                              <span className="text-[10px] font-mono text-neutral-400 uppercase">Step 03</span>
                              <div className="text-sm font-bold text-white">Instant UPI / Pay</div>
                              <div className="text-xs text-white font-bold">1-Click Purchase</div>
                            </div>
                          </div>
                          {/* Progress bar visual */}
                          <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden mt-3">
                            <div className="bg-white h-full w-[94%]" />
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        /* Multi-Channel Identity System Simulation */
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                            <span>OMNICHANNEL AUTHENTICATION STATE</span>
                            <span className="text-white font-bold">Latency: -78%</span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {["Google One-Tap", "WhatsApp OTP", "SMS Fallback", "Passkeys"].map((authType, aI) => (
                              <div key={aI} className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-center space-y-1">
                                <div className="text-xs font-bold text-white">{authType}</div>
                                <div className="text-[10px] font-mono text-neutral-500">Verified</div>
                              </div>
                            ))}
                          </div>
                          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                            <span className="text-xs font-mono text-neutral-400">WCAG 2.1 AAA Accessibility Compliance</span>
                            <span className="text-xs font-mono text-white font-bold">100 / 100 Score</span>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        /* Gulf Logistics Spatial Address Architecture Simulation */
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                            <span>SPATIAL ADDRESS CAPTURE & MAKANI API</span>
                            <span className="text-white font-bold">Accuracy: 94.2%</span>
                          </div>
                          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase">Landmark Pin-Drop</span>
                              <div className="text-sm font-bold text-white">Downtown Dubai • Villa 14-B</div>
                              <div className="text-xs text-neutral-400">Makani: 30032 95320</div>
                            </div>
                            <div className="flex items-center justify-end gap-2 text-xs font-mono text-neutral-300">
                              <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700">Arabic RTL Ready</span>
                              <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700">GPS Snapping</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        /* Eden & Blooms Production Motion Showcase */
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                            <span>PRODUCTION VERCEL CLOUD DEPLOYMENT</span>
                            <span className="text-white font-bold">Production Deployed</span>
                          </div>
                          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="space-y-1">
                              <div className="text-sm font-bold text-white">Next.js 14 + Tailwind + Framer Motion</div>
                              <div className="text-xs text-neutral-400">Artisanal Floral & Balloon Experience Studio</div>
                            </div>
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-mono font-bold uppercase rounded hover:bg-neutral-200 transition-colors"
                              >
                                <span>Live Production ↗</span>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Deliverables line */}
                    <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-neutral-500">Deliverables:</span>
                        {project.keyDeliverables?.slice(0, 3).map((item, dI) => (
                          <span key={dI} className="inline-flex items-center gap-1 text-neutral-300">
                            <CheckCircle2 className="w-3 h-3 text-neutral-400" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-700 bg-black text-white hover:bg-white hover:text-black hover:border-white transition-all text-xs font-mono font-bold uppercase tracking-wider"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Secondary Bento Grid Tiles (4 cols) */}
                  <div className="md:col-span-4 flex flex-col gap-4">
                    {/* Bento Tile 1: Primary Metric Highlight */}
                    <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex-1 flex flex-col justify-between group-hover:border-neutral-700 transition-colors">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        Primary Impact Metric
                      </span>
                      <div className="py-4 space-y-1">
                        <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                          {project.impactMetrics[0]?.value}
                        </div>
                        <div className="text-sm font-bold text-neutral-300">
                          {project.impactMetrics[0]?.label}
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                          {project.impactMetrics[0]?.description}
                        </p>
                      </div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                        Validated via Production Telemetry
                      </div>
                    </div>

                    {/* Bento Tile 2: Tech & Stack Specs */}
                    <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between group-hover:border-neutral-700 transition-colors">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 pb-3 block">
                        Architecture Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies?.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const ProjectList = CaseStudies;
