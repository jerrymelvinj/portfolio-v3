import { portfolioData } from "@/data/content";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return portfolioData.home.projects.map((project) => ({
    slug: project.id,
  }));
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
      <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-16">
        <ArrowLeft size={16} />
        Back to Work
      </Link>

      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">{project.title}</h1>
        
        {/* @ts-ignore */}
        {study.highlight && (
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-12">
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
              <p className="text-lg text-muted leading-relaxed mb-12 whitespace-pre-line">{section.content}</p>
              
              {(section as any).image && (
                <div className="w-full rounded-2xl overflow-hidden bg-muted/10">
                  <img src={(section as any).image} alt={section.title} className="w-full h-auto object-cover" />
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
