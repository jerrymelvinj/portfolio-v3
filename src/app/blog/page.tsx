import * as React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site-config";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  Sparkles,
  Tag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "UX Writing & Product Thinking | Jerry Melvin J",
  description:
    "Analytical teardowns and essays on e-commerce UX architecture, cognitive biases, dark patterns, and scalable design systems by Jerry Melvin J.",
  alternates: {
    canonical: "https://www.jerrymelvinj.com/blog",
  },
  openGraph: {
    type: "website",
    title: "UX Writing & Product Thinking | Jerry Melvin J",
    description:
      "Analytical teardowns and essays on e-commerce UX architecture, cognitive biases, dark patterns, and scalable design systems by Jerry Melvin J.",
    url: "https://www.jerrymelvinj.com/blog",
    siteName: "Jerry Melvin J — Product Designer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UX Writing & Product Thinking — Jerry Melvin J",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UX Writing & Product Thinking | Jerry Melvin J",
    description:
      "Analytical teardowns and essays on e-commerce UX architecture, cognitive biases, dark patterns, and scalable design systems by Jerry Melvin J.",
    creator: "@jerrymelvinjm",
  },
};

export default function BlogListingPage() {
  // Schema.org Blog & BlogPosting JSON-LD for rich indexing
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Jerry Melvin J — UX Writing & Product Thinking",
    description:
      "Analytical teardowns and essays on e-commerce UX architecture, cognitive biases, dark patterns, and scalable design systems.",
    url: "https://www.jerrymelvinj.com/blog",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: "https://www.jerrymelvinj.com",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      url: post.externalUrl,
      datePublished: "2026-10-01",
      author: {
        "@type": "Person",
        name: siteConfig.name,
      },
      publisher: {
        "@type": "Person",
        name: siteConfig.name,
      },
      keywords: post.tags.join(", "),
    })),
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-24">
      {/* Schema.org Blog structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        {/* Top Breadcrumb Navigation */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 text-xs font-mono">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2 text-neutral-500">
            <span>EDITORIAL &bull; ARCHIVE</span>
            <span className="text-neutral-700">&bull;</span>
            <span className="text-white font-bold">{blogPosts.length} Articles</span>
          </div>
        </div>

        {/* Header Section */}
        <header className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              Editorial &bull; UX Teardowns &bull; Product Thinking
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.96]">
              Writing &amp; Teardowns.
            </h1>
          </div>
          <p className="text-base sm:text-xl text-neutral-400 font-normal max-w-3xl leading-relaxed">
            Analytical essays on e-commerce interface mechanics, cognitive psychology, dark design patterns, and conversion architecture.
          </p>
        </header>

        {/* Articles List / Grid */}
        <section aria-label="Articles List" className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs font-mono">
            <span className="text-neutral-500 uppercase tracking-wider">
              All Publications [{blogPosts.length}]
            </span>
            <span className="text-neutral-500 uppercase">
              Hosted on Blogger Platform
            </span>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group relative p-6 sm:p-10 rounded-2xl bg-neutral-950/60 border border-neutral-800 hover:border-white transition-all duration-300 space-y-6"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono pb-4 border-b border-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-semibold uppercase tracking-wider text-[11px]">
                      {post.category}
                    </span>
                    <span className="text-neutral-600 hidden sm:inline">&bull;</span>
                    <span className="text-neutral-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.publishedAt}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 text-[10px] uppercase">
                      {post.platform}
                    </span>
                  </div>
                </div>

                {/* Main Content & Title */}
                <div className="space-y-3">
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title inline-flex items-start gap-3"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug group-hover/title:text-neutral-300 transition-colors">
                      {post.title}
                    </h2>
                    <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover/title:text-white group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all shrink-0 mt-1" />
                  </a>

                  {post.subtitle && (
                    <p className="text-sm sm:text-base font-mono text-neutral-400">
                      {post.subtitle}
                    </p>
                  )}

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-4xl font-normal pt-1">
                    {post.summary}
                  </p>
                </div>

                {/* Tags and External Action Bar */}
                <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-black border border-neutral-800 text-[11px] font-mono text-neutral-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 transition-colors font-mono font-bold text-xs uppercase tracking-wider rounded-none shrink-0"
                  >
                    <span>Read on Blogger</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Editorial Ethos Banner */}
        <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3 font-mono text-xs text-neutral-400">
          <span className="text-white font-bold uppercase tracking-wider block">
            About This Publication
          </span>
          <p className="leading-relaxed">
            Written by Jerry Melvin J, a Product Designer based in Bengaluru. These essays dissect the boundary between persuasive design and user deception, exploring how psychological heuristics influence conversion velocity and customer trust.
          </p>
          <div className="pt-2 flex items-center gap-4 text-neutral-500">
            <span>Platform: Blogger (jerrymelvinj.blogspot.com)</span>
            <span>&bull;</span>
            <a
              href="https://jerrymelvinj.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline inline-flex items-center gap-1"
            >
              <span>Visit Blogspot Home</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
