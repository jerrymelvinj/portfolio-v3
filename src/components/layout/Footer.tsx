"use client";

import * as React from "react";
import { siteConfig } from "@/content/site-config";
import { Magnetic } from "@/components/ui/Magnetic";
import { Logo } from "@/components/ui/Logo";
import { ArrowUp, ArrowUpRight, Mail, Github, Linkedin, Instagram, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-black text-white border-t border-neutral-800 overflow-hidden">
      {/* Massive Infinite Marquee */}
      <div className="py-6 border-b border-neutral-800 bg-neutral-950/60 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-400">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>OPEN FOR Q4/2026 PRODUCTS &amp; CONSULTING</span>
              </span>
              <span className="text-neutral-600">/</span>
              <span>HIGH-CONVERSION CHECKOUT ARCHITECTURE</span>
              <span className="text-neutral-600">/</span>
              <span>SCALABLE FIGMA &amp; CODE DESIGN SYSTEMS</span>
              <span className="text-neutral-600">/</span>
              <span>BENGALURU, INDIA</span>
              <span className="text-neutral-600">/</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Action Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 flex flex-col items-center justify-center text-center space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Have a project or design challenge in mind?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-400">
            Let&apos;s build something that scales.
          </h2>
        </div>

        {/* Massive Magnetic Contact Button with Color Inversion on Hover */}
        <Magnetic strength={0.35} className="w-full flex justify-center">
          <a
            href={siteConfig.socials.email}
            aria-label="Send email to Jerry Melvin J"
            className="group relative inline-flex items-center justify-center px-8 sm:px-16 py-10 sm:py-16 w-full max-w-4xl border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-300 ease-out cursor-pointer select-none"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter transition-transform group-hover:scale-105 duration-300">
                CLICK TO MAIL ME
              </span>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-current flex items-center justify-center transition-transform group-hover:rotate-45 duration-300">
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </div>
          </a>
        </Magnetic>

        {/* Bio reflection snippet */}
        <div className="max-w-2xl mx-auto pt-6">
          <blockquote className="text-sm sm:text-base text-neutral-400 italic font-mono leading-relaxed">
            &ldquo;I don&apos;t always know where a design is going when I start, but somewhere in the middle, it finds its shape. That&apos;s the part I live for.&rdquo;
          </blockquote>
          <span className="block mt-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
            — Jerry Melvin J, Bengaluru
          </span>
        </div>
      </div>

      {/* Footer Metadata & Social Columns */}
      <div className="border-t border-neutral-800 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-neutral-900 border border-neutral-800">
                <Logo size={18} className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-mono">
              Product Designer &amp; UI/UX Specialist crafting human-centered digital experiences.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Col 2: Direct Email */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-neutral-500 uppercase tracking-wider block">
              Direct Inquiries
            </span>
            <a
              href={siteConfig.socials.email}
              className="text-white hover:underline text-sm font-semibold block"
            >
              {siteConfig.email}
            </a>
            <span className="text-neutral-500 block">
              Response SLA: &lt; 24 hours
            </span>
          </div>

          {/* Col 3: Social Profiles */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-neutral-500 uppercase tracking-wider block">
              Network &amp; Code
            </span>
            <div className="flex flex-col space-y-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile ↗</span>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Workspace ↗</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram ↗</span>
              </a>
            </div>
          </div>

          {/* Col 4: Top Action */}
          <div className="space-y-3 font-mono text-xs flex flex-col md:items-end justify-between">
            <div className="space-y-1 md:text-right">
              <span className="text-neutral-500 uppercase tracking-wider block">
                Local Time
              </span>
              <span className="text-white font-bold block">
                Asia / Kolkata (IST)
              </span>
              <span className="text-neutral-500 block">
                {siteConfig.coordinates}
              </span>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Stark Copyright Bar */}
        <div className="border-t border-neutral-900 px-6 sm:px-8 lg:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
            <div>
              Jerry Melvin J © {siteConfig.copyrightYear}
            </div>
            <div>
              Inspired by xhulia.com • Built with Next.js, Tailwind CSS, Lenis &amp; Framer Motion
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
