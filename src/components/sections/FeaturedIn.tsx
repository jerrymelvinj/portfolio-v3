"use client";

import * as React from "react";
import { ArrowUpRight, Award, ShieldCheck } from "lucide-react";
import { NccLogo } from "@/components/ui/NccLogo";

export function FeaturedIn() {
  const articleUrl = "https://indiancc.mygov.in/activity/jerry-melvin-j/morale-on-high/";

  return (
    <div className="w-full border-t border-b border-neutral-800 bg-neutral-950/70 py-6 px-6 sm:px-8 lg:px-12 transition-colors hover:bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left Side: Badge & Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="w-12 h-12 rounded-xl bg-black border border-neutral-800 flex items-center justify-center text-white shrink-0 shadow-inner group">
            <NccLogo className="w-8 h-8 text-white transition-transform group-hover:scale-105" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                Featured In &bull; Cadet&apos;s Corner
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-500 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                <ShieldCheck className="w-3 h-3 text-neutral-400" />
                Ministry of Defence
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-2">
              <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-white">
                National Cadet Corps (NCC India)
              </h2>
              <span className="text-neutral-600 hidden sm:inline">&bull;</span>
              <span className="text-xs font-mono text-neutral-300">
                Article: &ldquo;MORALE ON HIGH&rdquo;
              </span>
            </div>
            <p className="text-[11px] font-mono text-neutral-500">
              CDT. J. Jerry Melvin &bull; Reg: TN19SDA796101 &bull; 2 (TN) ARMD SQN
            </p>
          </div>
        </div>

        {/* Right Side: External Link Button */}
        <a
          href={articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded bg-black border border-neutral-700 hover:border-white text-white font-mono text-xs uppercase tracking-wider transition-all self-stretch sm:self-auto justify-center shrink-0"
        >
          <span>Read Article on NCC Portal</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>
    </div>
  );
}
