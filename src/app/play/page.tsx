import { portfolioData } from "@/data/content";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Design experiments, photography, poems, and creative visual explorations by Jerry Melvin J.",
  alternates: {
    canonical: "/play",
  },
};

export default function Play() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 mt-12">
        <h1 className="text-4xl font-medium tracking-tight mb-6">{portfolioData.play.title}</h1>
        <div className="flex gap-4">
          {portfolioData.play.tags.map((tag) => (
            <button
              key={tag}
              className="px-5 py-2 border border-border rounded-lg text-sm hover:border-foreground transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="masonry-grid">
        {portfolioData.play.items.map((item) => (
          <div
            key={item.id}
            className="relative masonry-item rounded-2xl overflow-hidden bg-muted/10 cursor-pointer group min-h-[300px]"
          >
            <Image
              src={item.image}
              alt={`Creative work: ${item.type}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
