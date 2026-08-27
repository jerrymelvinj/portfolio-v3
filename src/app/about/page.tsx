import { portfolioData } from "@/data/content";
import { Download, MapPin } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import ContraHireButton from "@/components/ContraHireButton";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Jerry Melvin J, a Senior Product Designer & UI/UX Specialist based in Bengaluru, India. Explore background, work experience, education, and design philosophy.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <section className="max-w-4xl mb-24 mt-12">
        <div className="flex items-center gap-2 text-sm text-muted uppercase tracking-widest mb-4">
          <MapPin className="w-4 h-4 text-foreground/70" />
          Bengaluru, Karnataka, India
        </div>
        <h1 className="text-4xl font-medium tracking-tight mb-8">
          {portfolioData.about.title}
        </h1>

        <div className="text-xl md:text-2xl leading-relaxed text-muted space-y-8 font-light">
          <p>{portfolioData.about.bio1}</p>
          <p>{portfolioData.about.bio2}</p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <p className="text-sm text-foreground/60 font-medium tracking-wide uppercase max-w-md leading-relaxed">
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
            <ContraHireButton />
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-32">
        <h2 className="text-3xl font-medium mb-12">Professional Experience</h2>
        <div className="flex flex-col border-t border-border">
          {portfolioData.about.experiences.map((exp, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border group hover:bg-muted/5 transition-colors px-4 -mx-4 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 w-full md:w-1/2">
                <span className="text-xl font-medium md:w-32">{exp.company}</span>
                <span className="text-xl text-muted font-light">{exp.role}</span>
              </div>
              <span className="text-muted mt-4 md:mt-0 font-light">{exp.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Design Approach & Skills */}
      <section className="mb-32 border-t border-border pt-16">
        <h2 className="text-3xl font-medium mb-12">Design Methodology & Technical Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Core Strengths</h3>
            <ul className="space-y-3 text-muted leading-relaxed list-disc list-inside">
              <li>End-to-End Product & Interaction Design</li>
              <li>E-Commerce Conversion Rate Optimization (CRO)</li>
              <li>Multi-channel Authentication UX (Google One-Tap, OTP)</li>
              <li>Scalable Design Systems & Component Libraries</li>
              <li>Responsive Web & Mobile Interface Engineering</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Toolkit & Frameworks</h3>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Design:</strong> Figma, Adobe Illustrator, Photoshop, After Effects, Rive.
            </p>
            <p className="text-muted leading-relaxed">
              <strong>Development:</strong> React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Git, HTML5/CSS3.
            </p>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section>
        <h2 className="text-3xl font-medium mb-12">Communities & Collaborations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.about.communities.map((community) => (
            <div
              key={community.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/10 group cursor-pointer"
            >
              <Image
                src={community.image}
                alt="Community collaboration photo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
