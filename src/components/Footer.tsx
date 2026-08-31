"use client";
import { portfolioData } from "@/data/content";
import { ArrowUp, MapPin } from "lucide-react";
import ContraHireButton from "@/components/ContraHireButton";
import CopyEmailButton from "@/components/CopyEmailButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-28 border-t border-border mt-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div itemScope itemType="https://schema.org/Person" className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-muted block mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-8 leading-[1.05]">
            Let&apos;s talk about <br />
            <span className="text-muted font-light">the next big thing</span>
          </h2>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <CopyEmailButton email={portfolioData.footer.email} />
            <ContraHireButton theme="dark" />
          </div>

          <p
            className="text-sm text-muted flex items-center gap-2"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <MapPin className="w-4 h-4 text-foreground/70" />
            <span itemProp="addressLocality">Bengaluru</span>,{" "}
            <span itemProp="addressRegion">Karnataka</span>,{" "}
            <span itemProp="addressCountry">India</span>
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/jerrymelvinjm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="px-6 py-3 rounded-full border border-border bg-border/20 text-foreground font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/jerrymelvinj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="px-6 py-3 rounded-full border border-border bg-border/20 text-foreground font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.instagram.com/jerrymelvinjm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="px-6 py-3 rounded-full border border-border bg-border/20 text-foreground font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Instagram ↗
            </a>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-8 pt-4">
            <span className="text-xs text-muted font-mono">
              © {new Date().getFullYear()} Jerry Melvin J
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-sm font-medium cursor-pointer"
            >
              Back to Top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
