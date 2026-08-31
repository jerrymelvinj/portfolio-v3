import { portfolioData } from "@/data/content";
import { Download, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import ContraHireButton from "@/components/ContraHireButton";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Jerry Melvin J, a Product Designer & UI/UX Specialist based in Bengaluru, India. Explore background, work experience, education, and design philosophy.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
      <section className="max-w-4xl mb-24 mt-8">
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted uppercase tracking-[0.2em] mb-6 font-mono">
          <MapPin className="w-4 h-4 text-emerald-400" />
          Bengaluru, Karnataka, India
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-foreground">
          {portfolioData.about.title}
        </h1>

        <div className="text-xl md:text-2xl leading-relaxed text-muted space-y-8 font-light max-w-3xl">
          <p>{portfolioData.about.bio1}</p>
          <p>{portfolioData.about.bio2}</p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <p className="text-sm text-muted font-mono uppercase tracking-wide max-w-md leading-relaxed">
            {portfolioData.about.education}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download="Jerry_Melvin_Resume.pdf"
              className="inline-flex shrink-0 items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform"
            >
              My Resume
              <Download size={18} />
            </a>
            <ContraHireButton theme="dark" />
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-32">
        <div className="border-b border-border pb-6 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-muted block mb-2 font-mono">
            Career Timeline
          </span>
          <h2 className="text-4xl font-medium tracking-tight text-foreground">
            Professional Experience
          </h2>
        </div>

        <div className="flex flex-col border-t border-border">
          {portfolioData.about.experiences.map((exp, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border group hover:bg-border/20 transition-colors px-6 -mx-6 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 w-full md:w-1/2">
                <span className="text-2xl font-medium text-foreground md:w-36">{exp.company}</span>
                <span className="text-xl text-muted font-light">{exp.role}</span>
              </div>
              <span className="text-muted mt-4 md:mt-0 font-mono text-sm">{exp.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Design Approach & Skills */}
      <section className="mb-32 border-t border-border pt-16">
        <div className="border-b border-border pb-6 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-muted block mb-2 font-mono">
            Craft & Philosophy
          </span>
          <h2 className="text-4xl font-medium tracking-tight text-foreground">
            Design Methodology & Technical Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl bg-border/20 border border-border/80">
            <h3 className="text-2xl font-medium mb-6 text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" /> Core Strengths
            </h3>
            <ul className="space-y-4 text-muted leading-relaxed list-disc list-inside">
              <li>End-to-End Product & Interaction Design</li>
              <li>E-Commerce Conversion Rate Optimization (CRO)</li>
              <li>Multi-channel Authentication UX (Google One-Tap, OTP)</li>
              <li>Scalable Design Systems & Component Libraries</li>
              <li>Responsive Web & Mobile Interface Engineering</li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-border/20 border border-border/80">
            <h3 className="text-2xl font-medium mb-6 text-foreground">Toolkit & Frameworks</h3>
            <p className="text-muted leading-relaxed mb-6">
              <strong className="text-foreground block mb-1 font-mono text-sm uppercase tracking-wider">Design & Motion</strong>
              Figma, Adobe Creative Suite (Illustrator, Photoshop, After Effects), Rive, Wireframing & Usability Testing.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground block mb-1 font-mono text-sm uppercase tracking-wider">Frontend Development</strong>
              React, Next.js, TypeScript, Tailwind CSS, Three.js, GSAP, Framer Motion, Git.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Bento Collage for Communities & Collaborations */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted block mb-2 font-mono">
              Culture & Community
            </span>
            <h2 className="text-4xl font-medium tracking-tight text-foreground">
              Communities & Collaborations
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md font-mono">
            Actively participating in design critiques, tech meetups, hackathons, and creative sprints across the Bengaluru design ecosystem.
          </p>
        </div>

        {/* Modern Bento Grid Collage */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {portfolioData.about.communities.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden bg-border/20 border border-border/80 hover:border-foreground/40 transition-all duration-500 min-h-[260px] md:min-h-[300px] ${
                item.span || (idx === 0 ? "col-span-1 md:col-span-2 row-span-2" : "col-span-1 md:col-span-2")
              }`}
            >
              <Image
                src={item.image}
                alt={item.title || "Community Event"}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Modern Glassmorphic Overlay Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/80 text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                    {item.category || "Community"}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
