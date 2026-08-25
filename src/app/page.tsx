import { portfolioData } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* Hero Section */}
      <section className="mb-20 max-w-4xl mt-4 md:mt-8">
        <span className="text-sm font-medium uppercase tracking-widest text-muted mb-3 block">
          Senior Product Designer & UI/UX Specialist — Bengaluru, India
        </span>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
          {portfolioData.home.title}
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-3xl mb-8">
          {portfolioData.home.subtitle}
        </p>
        <p className="text-base text-muted/90 leading-relaxed max-w-3xl">
          Specializing in end-to-end product design, high-conversion e-commerce checkout optimization,
          and component design systems. Driven by combining user empathy with measurable business outcomes.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="flex flex-col gap-24 mb-32">
        <div className="border-b border-border pb-6">
          <h2 className="text-3xl font-medium tracking-tight">Featured Case Studies</h2>
          <p className="text-muted mt-2">
            Selected product design projects highlighting conversion optimization, logistics UX, and authentication overhaul.
          </p>
        </div>

        {portfolioData.home.projects.map((project, index) => (
          <article key={project.id} className="group cursor-pointer">
            <Link href={`/work/${project.id}`} className="block">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] mb-6 overflow-hidden rounded-2xl bg-muted/10">
                <Image
                  src={project.image}
                  alt={`Case Study: ${project.title}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-3xl font-medium mb-3 group-hover:text-foreground/80 transition-colors">
                {project.title}
              </h3>
              <p className="text-lg text-muted max-w-3xl leading-relaxed mb-4">
                {project.description}
              </p>
              {project.caseStudy?.overview && (
                <p className="text-sm text-foreground/70 font-medium">
                  Key Focus: {project.caseStudy.overview}
                </p>
              )}
            </Link>
          </article>
        ))}
      </section>

      {/* Design Capabilities & Expertise */}
      <section className="mb-32 border-t border-border pt-16">
        <h2 className="text-3xl font-medium mb-12 tracking-tight">Design Capabilities & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-muted/5 border border-border/50">
            <h3 className="text-xl font-medium mb-3">E-Commerce Conversion UX</h3>
            <p className="text-muted leading-relaxed text-sm">
              Overhauling purchase funnels, milestone indicators, and frictionless checkout flows to eliminate cart abandonment and maximize customer acquisition velocity.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/5 border border-border/50">
            <h3 className="text-xl font-medium mb-3">Authentication & Identity UX</h3>
            <p className="text-muted leading-relaxed text-sm">
              Designing multi-channel onboarding flows (Google One-Tap, Mobile OTP, Email) that eliminate mandatory profile registration roadblocks.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/5 border border-border/50">
            <h3 className="text-xl font-medium mb-3">Design Systems & UI Engineering</h3>
            <p className="text-muted leading-relaxed text-sm">
              Architecting scalable component libraries, visual tokens, and responsive UI frameworks that bridge the gap between design and production code.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/5 border border-border/50">
            <h3 className="text-xl font-medium mb-3">Logistics & Map-Based UX</h3>
            <p className="text-muted leading-relaxed text-sm">
              Designing localized address mapping, hyper-local fulfillment indicators, and omnichannel pickup experiences tailored for regional markets.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/5 border border-border/50">
            <h3 className="text-xl font-medium mb-3">User Research & Usability Testing</h3>
            <p className="text-muted leading-relaxed text-sm">
              Conducting heuristic evaluations, user journey mapping, and qualitative feedback loops to uncover cognitive friction and usability blockers.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/5 border border-border/50">
            <h3 className="text-xl font-medium mb-3">Frontend Development</h3>
            <p className="text-muted leading-relaxed text-sm">
              Building interactive, accessible web applications using React, Next.js, TypeScript, Tailwind CSS, and Framer Motion for modern browser performance.
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="mb-32 bg-muted/5 border border-border/50 rounded-3xl p-8 md:p-16">
        <h2 className="text-3xl font-medium mb-6 tracking-tight">Design Philosophy</h2>
        <p className="text-xl text-muted leading-relaxed max-w-4xl mb-6 font-light">
          &ldquo;Great design lives at the intersection of business strategy, human clarity, and technical feasibility.
          I believe that interface complexity should never be passed down to the user.&rdquo;
        </p>
        <p className="text-base text-muted/90 leading-relaxed max-w-3xl">
          Whether optimizing checkout funnels for healthcare brands like OMRON or crafting localized fulfillment journeys across Gulf markets,
          my process prioritizes clarity, rapid prototyping, and empirical user feedback.
        </p>
      </section>

      {/* Frequently Asked Questions (FAQ Section) */}
      <section className="mb-16 border-t border-border pt-16">
        <h2 className="text-3xl font-medium mb-12 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-8 max-w-4xl">
          <div className="border-b border-border/50 pb-6">
            <h3 className="text-xl font-medium mb-2">Where are you located?</h3>
            <p className="text-muted leading-relaxed">
              I am based in Bengaluru, Karnataka, India, and collaborate with product teams and clients globally across remote and hybrid environments.
            </p>
          </div>
          <div className="border-b border-border/50 pb-6">
            <h3 className="text-xl font-medium mb-2">What is your primary design specialization?</h3>
            <p className="text-muted leading-relaxed">
              My primary focus is Product Design (UI/UX), specializing in e-commerce checkout optimization, complex web application workflows, design systems, and frontend implementation.
            </p>
          </div>
          <div className="border-b border-border/50 pb-6">
            <h3 className="text-xl font-medium mb-2">What design and development tools do you use?</h3>
            <p className="text-muted leading-relaxed">
              I work with Figma, Adobe Creative Cloud, React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and modern web performance optimization tools.
            </p>
          </div>
          <div className="pb-6">
            <h3 className="text-xl font-medium mb-2">How can we work together?</h3>
            <p className="text-muted leading-relaxed">
              You can reach out directly via email at{" "}
              <a href="mailto:jerrymelvinj@gmail.com" className="text-foreground underline">
                jerrymelvinj@gmail.com
              </a>{" "}
              or connect with me on LinkedIn to discuss design opportunities, product consulting, or full-time roles.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
