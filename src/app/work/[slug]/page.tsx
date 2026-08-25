import { portfolioData } from "@/data/content";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return portfolioData.home.projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.home.projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study by Jerry Melvin J`,
      description: project.description,
      url: `https://www.jerrymelvinj.com/work/${slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study by Jerry Melvin J`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioData.home.projects.find((p) => p.id === slug);

  if (!project || !project.caseStudy) {
    return notFound();
  }

  const study = project.caseStudy;

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-16"
      >
        <ArrowLeft size={16} />
        Back to Work
      </Link>

      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">{project.title}</h1>

        {/* @ts-ignore */}
        {study.highlight && (
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground/90 mb-12">
            {/* @ts-ignore */}
            {study.highlight}
          </h2>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8 mb-16">
          <div>
            <span className="block text-sm text-muted uppercase tracking-widest mb-2">Role</span>
            <span className="font-medium">{study.role}</span>
          </div>
          <div>
            <span className="block text-sm text-muted uppercase tracking-widest mb-2">Timeline</span>
            <span className="font-medium">{study.timeline}</span>
          </div>
          <div>
            <span className="block text-sm text-muted uppercase tracking-widest mb-2">Platform</span>
            <span className="font-medium">{study.platform}</span>
          </div>
        </div>

        <div className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl text-muted">
          {study.overview}
        </div>
      </section>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 relative">
        {/* Left: Sticky Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <TableOfContents sections={study.sections} />
        </aside>

        {/* Right: Sequential Content */}
        <div className="flex-1 max-w-4xl flex flex-col gap-32">
          {study.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-3xl font-medium mb-8">{section.title}</h2>
              <p className="text-lg text-muted leading-relaxed mb-12 whitespace-pre-line">
                {section.content}
              </p>

              {(section as any).image && (
                <div className="relative w-full rounded-2xl overflow-hidden bg-muted/10">
                  <Image
                    src={(section as any).image}
                    alt={`Illustration for ${section.title}`}
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {(section as any).video && (
                <div className="w-full rounded-2xl overflow-hidden bg-muted/10">
                  <video
                    src={(section as any).video}
                    controls
                    muted
                    loop
                    autoPlay
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
