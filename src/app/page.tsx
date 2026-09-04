import { portfolioData } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
import ScrollHighlightText from "@/components/ScrollHighlightText";
import WorkStage3D from "@/components/WorkStage3D";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* 1. Hero Section */}
      <section className="min-h-[75vh] flex flex-col justify-center mb-16">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            I design complex digital products <span className="text-foreground font-mono">0 → 1</span>
          </p>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-foreground mb-8 leading-[0.95]">
            Product <br />
            <span className="text-muted font-light">Designer</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-8 mt-4">
            <p className="text-base text-muted max-w-lg leading-relaxed">
              Based in Bengaluru, India. Specializing in high-conversion e-commerce checkout architecture, 
              scalable design systems, and human-centered digital experiences.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-muted font-mono">
                Scroll to explore ↓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive 3D WebGL Work Stage */}
      <section className="mb-32">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs uppercase tracking-widest text-muted font-mono">
            Interactive 3D Stage • Drag & Explore
          </span>
          <span className="text-xs uppercase tracking-widest text-muted font-mono">
            3 Selected Works
          </span>
        </div>
        <div className="border border-border/80 rounded-3xl bg-gradient-to-b from-border/20 to-transparent p-2">
          <WorkStage3D projects={portfolioData.home.projects} />
        </div>
      </section>

      {/* 3. Approach & Philosophy (Scroll-Illuminated Typography) */}
      <section className="mb-40 max-w-5xl" id="approach">
        <span className="text-xs uppercase tracking-[0.25em] text-muted block mb-6 font-mono">
          01 // Design Philosophy & Approach
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-20 text-foreground">
          Building products that customers love isn&apos;t magic, it requires:
        </h2>

        <div className="space-y-24 border-l border-border/80 pl-8 md:pl-16 ml-2">
          {/* FOCUS */}
          <div className="group">
            <span className="text-xs uppercase tracking-widest text-muted font-mono block mb-2">
              Phase 01 // Strategy
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
              FOCUS
            </h3>
            <ScrollHighlightText
              text="Turn qualitative insights and user behavior data into an uncompromised product strategy by ruthlessly prioritizing high-impact friction points, defining measurable conversion goals, and unifying cross-functional teams."
              className="text-2xl md:text-3xl font-light"
            />
          </div>

          {/* LISTENING */}
          <div className="group">
            <span className="text-xs uppercase tracking-widest text-muted font-mono block mb-2">
              Phase 02 // Discovery
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
              LISTENING
            </h3>
            <ScrollHighlightText
              text="Listen deeply to users, stakeholders, and analytics to uncover unspoken friction points, identify drop-off barriers, and discover overlooked commercial opportunities."
              className="text-2xl md:text-3xl font-light"
            />
          </div>

          {/* CRAFT */}
          <div className="group">
            <span className="text-xs uppercase tracking-widest text-muted font-mono block mb-2">
              Phase 03 // Execution
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
              CRAFT
            </h3>
            <ScrollHighlightText
              text="Transform strategy into intuitive, scalable experiences through research, systems thinking, rapid prototyping, and pixel-level frontend engineering."
              className="text-2xl md:text-3xl font-light"
            />
          </div>

          {/* VALIDATION */}
          <div className="group">
            <span className="text-xs uppercase tracking-widest text-muted font-mono block mb-2">
              Phase 04 // Measurement
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
              VALIDATION
            </h3>
            <ScrollHighlightText
              text="Validate assumptions with real-world A/B testing, measure revenue velocity, and continuously iterate based on live behavioral user feedback."
              className="text-2xl md:text-3xl font-light"
            />
          </div>
        </div>
      </section>

      {/* 4. Featured Case Studies Showcase */}
      <section className="mb-40" id="work">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-8 mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted block mb-3 font-mono">
              02 // Selected Works
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-muted text-sm max-w-md font-mono">
            Proven commercial impact across Healthcare E-Commerce, Multi-Channel Auth, and Regional UAE Logistics.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {portfolioData.home.projects.map((project, index) => (
            <article key={project.id} className="group">
              <Link href={`/work/${project.id}`} className="block">
                <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-3xl bg-border/20 border border-border">
                  <Image
                    src={project.image}
                    alt={`Case Study: ${project.title}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted font-mono mb-2 block">
                      Case Study 0{index + 1}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-medium text-foreground group-hover:text-white/80 transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted max-w-3xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {project.caseStudy?.highlight && (
                    <span className="shrink-0 px-4 py-1.5 rounded-full border border-border text-xs text-muted font-mono uppercase tracking-wider">
                      {project.caseStudy.highlight.split("|")[0]}
                    </span>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 4.5 Shipped & Deployed Projects (Code to Deployment) */}
      <section className="mb-40 border-t border-border pt-20" id="deployed-works">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-8 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted block mb-3 font-mono">
              03 // Code to Deployment
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground">
              Shipped &amp; Live Projects
            </h2>
          </div>
          <p className="text-muted text-sm max-w-md font-mono">
            End-to-end design in Figma, frontend architecture, and production cloud deployments on Vercel.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {portfolioData.home.otherWorks?.map((work) => (
            <div
              key={work.id}
              className="group relative rounded-3xl overflow-hidden bg-border/20 border border-border/80 hover:border-foreground/40 transition-all duration-500 p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            >
              <div className="relative w-full lg:w-1/2 aspect-[16/9] rounded-2xl overflow-hidden bg-border/40 border border-border">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live on Vercel
                    </span>
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">
                      {work.category}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                    {work.title}
                  </h3>
                  <p className="text-sm font-mono text-muted mb-4 uppercase tracking-wide">
                    {work.tagline}
                  </p>
                  <p className="text-base text-muted leading-relaxed mb-6">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {work.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-border/40 border border-border text-xs font-mono text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:scale-105 transition-transform duration-300"
                  >
                    Visit Live Site ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Core Capabilities Grid */}
      <section className="mb-40 border-t border-border pt-20">
        <span className="text-xs uppercase tracking-[0.25em] text-muted block mb-4 font-mono">
          04 // Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-foreground">
          Design Capabilities & Core Toolkit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-border/20 border border-border/80 hover:border-foreground/40 transition-colors">
            <h3 className="text-xl font-medium text-foreground mb-3">E-Commerce Conversion UX</h3>
            <p className="text-muted leading-relaxed text-sm">
              Overhauling purchase funnels, milestone indicators, and frictionless checkout flows to eliminate cart abandonment and maximize customer acquisition velocity.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-border/20 border border-border/80 hover:border-foreground/40 transition-colors">
            <h3 className="text-xl font-medium text-foreground mb-3">Authentication & Identity UX</h3>
            <p className="text-muted leading-relaxed text-sm">
              Designing multi-channel onboarding flows (Google One-Tap, Mobile OTP, Email) that eliminate mandatory profile registration roadblocks.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-border/20 border border-border/80 hover:border-foreground/40 transition-colors">
            <h3 className="text-xl font-medium text-foreground mb-3">Design Systems & UI Engineering</h3>
            <p className="text-muted leading-relaxed text-sm">
              Architecting scalable component libraries, visual tokens, and responsive UI frameworks that bridge the gap between design and production code.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-border/20 border border-border/80 hover:border-foreground/40 transition-colors">
            <h3 className="text-xl font-medium text-foreground mb-3">Logistics & Map-Based UX</h3>
            <p className="text-muted leading-relaxed text-sm">
              Designing localized address mapping, hyper-local fulfillment indicators, and omnichannel pickup experiences tailored for regional markets.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-border/20 border border-border/80 hover:border-foreground/40 transition-colors">
            <h3 className="text-xl font-medium text-foreground mb-3">User Research & Usability Testing</h3>
            <p className="text-muted leading-relaxed text-sm">
              Conducting heuristic evaluations, user journey mapping, and qualitative feedback loops to uncover cognitive friction and usability blockers.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-border/20 border border-border/80 hover:border-foreground/40 transition-colors">
            <h3 className="text-xl font-medium text-foreground mb-3">Frontend Development</h3>
            <p className="text-muted leading-relaxed text-sm">
              Building interactive, accessible web applications using React, Next.js, TypeScript, Tailwind CSS, and Framer Motion for modern browser performance.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="mb-20 border-t border-border pt-20">
        <span className="text-xs uppercase tracking-[0.25em] text-muted block mb-4 font-mono">
          05 // FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-foreground">
          Frequently Asked Questions
        </h2>

        <div className="space-y-12 max-w-4xl">
          <div className="border-b border-border pb-8">
            <h3 className="text-2xl font-medium text-foreground mb-3">Where are you located?</h3>
            <p className="text-muted text-base leading-relaxed">
              I am based in Bengaluru, Karnataka, India, and collaborate with product teams and clients globally across remote and hybrid environments.
            </p>
          </div>
          <div className="border-b border-border pb-8">
            <h3 className="text-2xl font-medium text-foreground mb-3">What is your primary design specialization?</h3>
            <p className="text-muted text-base leading-relaxed">
              My primary focus is Product Design (UI/UX), specializing in e-commerce checkout optimization, complex web application workflows, design systems, and frontend implementation.
            </p>
          </div>
          <div className="border-b border-border pb-8">
            <h3 className="text-2xl font-medium text-foreground mb-3">What design and development tools do you use?</h3>
            <p className="text-muted text-base leading-relaxed">
              I work with Figma, Adobe Creative Cloud, React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and modern web performance optimization tools.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-foreground mb-3">How can we work together?</h3>
            <p className="text-muted text-base leading-relaxed">
              You can reach out directly via email at{" "}
              <a href="mailto:jerrymelvinj@gmail.com" className="text-foreground underline decoration-1 underline-offset-4">
                jerrymelvinj@gmail.com
              </a>{" "}
              or hire me directly through Contra to discuss product design consulting, design systems, or full-time opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
