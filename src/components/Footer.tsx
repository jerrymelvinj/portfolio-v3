"use client";
import { portfolioData } from "@/data/content";
import { ArrowUp, MapPin, Mail } from "lucide-react";
import ContraHireButton from "@/components/ContraHireButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-border mt-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
        <div itemScope itemType="https://schema.org/Person">
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            {portfolioData.footer.title}
          </h2>
          <p className="text-lg text-muted mb-3 flex items-center gap-2">
            <Mail className="w-4 h-4 text-foreground/70" />
            Let&apos;s tinker together:{" "}
            <a
              href={`mailto:${portfolioData.footer.email}`}
              itemProp="email"
              className="text-foreground underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {portfolioData.footer.email}
            </a>
          </p>
          <p
            className="text-sm text-muted flex items-center gap-2 mb-6"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <MapPin className="w-4 h-4 text-foreground/70" />
            <span itemProp="addressLocality">Bengaluru</span>,{" "}
            <span itemProp="addressRegion">Karnataka</span>,{" "}
            <span itemProp="addressCountry">India</span>
          </p>

          <ContraHireButton />
        </div>

        <div className="flex flex-col items-end gap-6">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/jerrymelvinjm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform"
            >
              <span className="font-bold font-serif text-lg">Ln</span>
            </a>
            <a
              href="https://github.com/jerrymelvinj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform"
            >
              <span className="font-bold font-serif text-lg">Gi</span>
            </a>
            <a
              href="https://www.instagram.com/jerrymelvinjm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform"
            >
              <span className="font-bold font-serif text-lg">IG</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
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
