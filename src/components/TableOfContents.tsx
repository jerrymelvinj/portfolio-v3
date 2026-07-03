"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function TableOfContents({ sections }: { sections: { id: string, title: string }[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // Trigger when element hits top 20% of screen
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-32 flex flex-col gap-4">
      <span className="text-sm font-bold uppercase tracking-widest text-muted mb-4">Contents</span>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className={clsx(
            "text-left text-sm transition-colors duration-300",
            activeId === section.id ? "text-foreground font-medium" : "text-muted hover:text-foreground/80"
          )}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}
