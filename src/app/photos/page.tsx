import { portfolioData } from "@/data/content";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Photography portfolio and visual captures by Jerry Melvin J, Senior Product Designer & UI/UX Specialist.",
  alternates: {
    canonical: "/photos",
  },
};

export default function Photos() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <h1 className="sr-only">Photography Portfolio - Jerry Melvin J</h1>
      <div className="masonry-grid mt-12">
        {portfolioData.photos.items.map((item) => (
          <div
            key={item.id}
            className="relative masonry-item rounded-2xl overflow-hidden bg-muted/10 cursor-pointer group min-h-[300px]"
          >
            <Image
              src={item.image}
              alt="Photography capture by Jerry Melvin J"
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
