import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-zinc-950/90 pt-16 pb-12 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                JM
              </div>
              <span className="font-bold text-lg text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Senior Product Designer & UI/UX Specialist crafting high-converting e-commerce
              funnels, resilient design systems, and delightful digital products.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Badge
                variant="emerald"
                className="gap-1.5 px-3 py-1 font-mono text-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.locationBadge}</span>
              </Badge>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#work" className="hover:text-cyan-400 transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="hover:text-cyan-400 transition-colors">
                  Core Capabilities
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="hover:text-cyan-400 transition-colors">
                  Design Philosophy
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ & Working Model
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Direct Channels
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href={siteConfig.socials.email}
                className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-zinc-300" />
                <span>GitHub Workspace</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Jerry Melvin J. Designed with empathy & built with Next.js & Tailwind.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-1 text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
