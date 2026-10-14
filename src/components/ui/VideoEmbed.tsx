"use client";

import * as React from "react";
import { Play, Video, ExternalLink, MonitorPlay } from "lucide-react";

interface VideoEmbedProps {
  videoId?: string;
  title: string;
  posterText?: string;
}

export function VideoEmbed({ videoId, title, posterText }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  if (videoId) {
    return (
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-white" />
            <span className="uppercase tracking-wider font-semibold text-white">Video Walkthrough</span>
          </div>
          <span className="text-[11px] text-neutral-500 uppercase">YouTube 1080p Embed</span>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
            title={`Walkthrough: ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-3">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <MonitorPlay className="w-4 h-4 text-neutral-400" />
          <span className="uppercase tracking-wider font-semibold text-neutral-300">
            Interactive Walkthrough Video
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neutral-700 animate-pulse" />
          <span className="text-[11px] text-neutral-500 uppercase">Embed Ready</span>
        </div>
      </div>

      {/* 16:9 Video Player Screen */}
      <div
        className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 flex flex-col items-center justify-center p-6 text-center shadow-2xl transition-all duration-300 hover:border-neutral-700"
        role="region"
        aria-label={`Video presentation for ${title}`}
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute w-72 h-72 rounded-full bg-white/[0.03] blur-3xl pointer-events-none group-hover:bg-white/[0.06] transition-all duration-500" />

        {/* Center Play Button & Content */}
        <div className="relative z-10 flex flex-col items-center space-y-4 max-w-md">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center text-white shadow-xl group-hover:scale-105 group-hover:border-white transition-all duration-300">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1 text-white" />
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
              Design &amp; Architecture Walkthrough
            </h4>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              {posterText || `Interactive video recording and UX flow breakdown for ${title}.`}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono text-neutral-400">
            <span>Seamless YouTube Embed Component Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
