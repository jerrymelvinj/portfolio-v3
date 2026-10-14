import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site-config";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Users,
  Target,
  FileCheck,
  Zap,
  Activity,
} from "lucide-react";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

interface Props {
  params: Promise<{ slug: string }>;
}

// Support both canonical slugs and legacy aliases
function findProject(slug: string) {
  const normalized = slug.toLowerCase();
  return (
    projects.find((p) => p.slug.toLowerCase() === normalized) ||
    projects.find((p) => p.aliases?.some((a) => a.toLowerCase() === normalized)) ||
    null
  );
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  projects.forEach((p) => {
    params.push({ slug: p.slug });
    p.aliases?.forEach((alias) => {
      params.push({ slug: alias });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Jerry Melvin J",
    };
  }

  const title = `${project.title} | Case Study by Jerry Melvin J`;
  const description = project.summary;
  const url = `https://jerrymelvinj.com/work/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Jerry Melvin J — Product Designer Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@jerrymelvinjm",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const projectNumber = String(currentIndex + 1).padStart(2, "0");
  const totalProjects = String(projects.length).padStart(2, "0");

  // Schema.org Article / CreativeWork JSON-LD
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: "https://jerrymelvinj.com",
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    datePublished: `${project.year}-01-01`,
    inLanguage: "en-US",
    keywords: project.tags.join(", "),
  };

  return (
    <article className="min-h-screen bg-black text-white pt-24 sm:pt-32 pb-24">
      {/* JSON-LD for rich snippet SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Top Sticky Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 text-xs font-mono">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
          <div className="flex items-center gap-3 text-neutral-500">
            <span>CASE STUDY [{projectNumber} / {totalProjects}]</span>
            <span className="text-neutral-700">•</span>
            <span className="text-white font-bold">{project.year}</span>
          </div>
        </div>

        {/* TL;DR Metric Header (Component at very top) */}
        <section aria-label="TL;DR Metric Summary" className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-900 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white font-bold uppercase tracking-widest">TL;DR Metric Header</span>
            </div>
            <span className="text-neutral-500 uppercase tracking-wider">Executive Overview</span>
          </div>

          {/* 4-Item Scannable Grid: Role, Timeline, Platform, Business Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">01 / Role</span>
              <span className="text-white font-bold block text-sm leading-snug">{project.role}</span>
            </div>
            <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">02 / Timeline</span>
              <span className="text-white font-bold block text-sm leading-snug">{project.duration || project.year}</span>
            </div>
            <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">03 / Platform</span>
              <span className="text-white font-bold block text-sm leading-snug">{project.platform || "Web & Mobile Application"}</span>
            </div>
            <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">04 / Business Impact</span>
              <span className="text-white font-bold block text-sm leading-snug">{project.businessImpact || (project.impactMetrics[0].value + " " + project.impactMetrics[0].label)}</span>
            </div>
          </div>

          {/* Key Executive Takeaway Box */}
          <div className="p-4 rounded-xl bg-black border border-neutral-900 text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
            <strong className="text-white uppercase tracking-wider block mb-1">Executive Takeaway:</strong>
            {project.summary}
          </div>
        </section>

        {/* Hero Section */}
        <header className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-xs font-mono text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>{project.client}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.02]">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-lg sm:text-2xl text-neutral-400 font-normal max-w-3xl leading-snug">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* High-Impact Proof Metrics Banner Upfront (xhulia.com hallmark) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 bg-neutral-950 border border-neutral-800 rounded-2xl">
            {project.impactMetrics.map((stat, sIdx) => (
              <div key={sIdx} className="space-y-1.5">
                <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold font-mono text-neutral-300">
                  {stat.label}
                </div>
                {stat.description && (
                  <p className="text-[11px] font-mono text-neutral-500 leading-snug">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Video Walkthrough Embed Component */}
          <div className="pt-2">
            <VideoEmbed
              videoId={project.youtubeVideoId}
              title={project.title}
              posterText={project.summary}
            />
          </div>
        </header>

        {/* Narrative Section 1: Problem & Friction Analysis */}
        {project.problemAnalysis && (
          <section className="space-y-8 pt-6 border-t border-neutral-800">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                01 / Problem &amp; Behavioral Friction
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                The Friction Baseline &amp; Funnel Drop-off.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl font-normal">
              {project.problemAnalysis.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {project.problemAnalysis.frictionPoints.map((point, pIdx) => (
                <div
                  key={pIdx}
                  className="p-5 rounded-xl bg-neutral-950/60 border border-neutral-800 space-y-2 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="font-bold text-red-400/90 uppercase tracking-wider">Friction Point #{pIdx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-mono">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Narrative Section 2: Decision-Driven Architecture (Xhulia.com core structure) */}
        {project.decisions && project.decisions.length > 0 && (
          <section className="space-y-12 pt-6 border-t border-neutral-800">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                02 / Strategic Decisions &amp; Tradeoffs
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Architectural Execution &amp; Strategic Decisions.
              </h2>
              <p className="text-sm font-mono text-neutral-400 max-w-2xl">
                Every design choice optimized for conversion velocity, human clarity, and system scalability.
              </p>
            </div>

            <div className="space-y-12">
              {project.decisions.map((decision, dIdx) => (
                <div
                  key={dIdx}
                  className="border border-neutral-800 bg-neutral-950/60 p-6 sm:p-10 rounded-2xl space-y-6"
                >
                  {/* Decision Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-900">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                      Decision {String(dIdx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-mono text-white px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">
                      Outcome: {decision.outcome}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {decision.title}
                  </h3>

                  {/* Rationale Quote */}
                  <div className="p-4 sm:p-5 rounded-xl bg-black border border-neutral-800 space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                      The Strategic Rationale
                    </span>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-mono">
                      &ldquo;{decision.rationale}&rdquo;
                    </p>
                  </div>

                  {/* Granular details */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                      Execution Pillars:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-400 font-mono">
                      {decision.details.map((detail, detIdx) => (
                        <li key={detIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Narrative Section 3: Before vs. After Matrix */}
        {project.beforeAfterComparison && (
          <section className="space-y-8 pt-6 border-t border-neutral-800">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                03 / Comparative Impact
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Before &amp; After Transformation Matrix.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before Column */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Legacy State (Baseline)</span>
                </div>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-neutral-400">
                  {project.beforeAfterComparison.before.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-neutral-600">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Column */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-white/20 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-white uppercase tracking-wider font-bold">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>Redesigned Architecture (Production)</span>
                </div>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-neutral-200">
                  {project.beforeAfterComparison.after.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-white">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Key Deliverables & Production Tech Stack */}
        <section className="space-y-6 pt-6 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              04 / Deliverables &amp; System Specs
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Shipped Production Assets &amp; Specifications.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Deliverable Artifacts
              </span>
              <ul className="space-y-2 text-xs sm:text-sm font-mono text-neutral-300">
                {project.keyDeliverables?.map((item, kdIdx) => (
                  <li key={kdIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Tech Stack &amp; Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded bg-black border border-neutral-800 text-xs font-mono text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Navigation to Next Project */}
        <nav className="pt-16 border-t border-neutral-800">
          <div className="p-8 sm:p-12 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-white transition-all group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Up Next — Case Study
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  {nextProject.client} • {nextProject.year}
                </p>
              </div>

              <Link
                href={`/work/${nextProject.slug}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-mono font-bold text-xs uppercase hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
}
