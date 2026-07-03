"use client";
import { portfolioData } from '@/data/content';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-border mt-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            {portfolioData.footer.title}
          </h2>
          <p className="text-lg text-muted">
            Let&apos;s tinker together. <a href={`mailto:${portfolioData.footer.email}`} className="text-foreground underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity">{portfolioData.footer.email}</a>
          </p>
        </div>

        <div className="flex flex-col items-end gap-6">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/jerrymelvinjm/" className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform">
              <span className="font-bold font-serif text-lg">Ln</span>
            </a>
            <a href="https://github.com/jerrymelvinj" className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform">
              <span className="font-bold font-serif text-lg">Gi</span>
            </a>
            <a href="https://www.instagram.com/jerrymelvinjm/" className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform">
              <span className="font-bold font-serif text-lg">IG</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Back to Top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
