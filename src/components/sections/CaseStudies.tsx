"use client";

import * as React from "react";
import { projects } from "@/content/projects";
import { Project } from "@/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ArrowUpRight,
  TrendingUp,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Target,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

export function CaseStudies() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="space-y-4 mb-16 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Selected Case Studies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Measurable Impact & Case Studies
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
          Deep-dives into conversion architecture, accessible identity systems, and
          complex logistics UX engineered for tangible commercial outcomes.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="group relative overflow-hidden bg-zinc-950/70 border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/5">
              {/* Subtle top accent gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`}
              />

              <div className="p-6 sm:p-8 md:p-10 space-y-8">
                {/* Header info & tags */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="accent"
                          className="font-medium text-xs bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.client && (
                        <span className="text-xs text-zinc-400 font-mono">
                          • {project.client}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm sm:text-base font-medium text-zinc-300">
                      {project.subtitle}
                    </p>
                  </div>

                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="outline"
                    className="shrink-0 gap-2 border-zinc-700 bg-zinc-900/60 hover:bg-cyan-500 hover:text-zinc-950 hover:border-cyan-500 transition-all"
                  >
                    <span>Read Deep Dive</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-4xl">
                  {project.summary}
                </p>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-800/80">
                  {project.impactMetrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/60 space-y-1"
                    >
                      <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-zinc-300">
                        {metric.label}
                      </div>
                      {metric.description && (
                        <p className="text-[11px] text-zinc-400 line-clamp-2 leading-snug">
                          {metric.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Quick Technologies Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-zinc-400 border-t border-zinc-900">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-zinc-400" />
                    <span>Tech Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-zinc-400 font-mono text-[11px]">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-cyan-400 hover:text-cyan-300 text-xs font-medium inline-flex items-center gap-1"
                  >
                    View architectural breakdown →
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Deep-Dive Case Study Modal Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="accent" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-sm font-medium text-cyan-400">
                {selectedProject.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-2 text-sm text-zinc-300">
              {/* Key Impact Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedProject.impactMetrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1"
                  >
                    <div className="text-lg font-bold font-mono text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-xs font-medium text-zinc-300">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* The Challenge */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-400" />
                  The Challenge & Friction Points
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  The Strategic UX Solution
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Key Artifacts & Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyDeliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-zinc-300 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2 pt-2 border-t border-zinc-800">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  Technologies & Methodologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
