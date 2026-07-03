import { portfolioData } from "@/data/content";

export default function Photos() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="masonry-grid mt-12">
        {portfolioData.photos.items.map((item) => (
          <div key={item.id} className="masonry-item rounded-2xl overflow-hidden bg-muted/10 cursor-pointer group">
             <img src={item.image} alt="Photography" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </main>
  );
}
