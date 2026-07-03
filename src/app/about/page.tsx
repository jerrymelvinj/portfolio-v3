import { portfolioData } from "@/data/content";
import { Download } from "lucide-react";

export default function About() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <section className="max-w-4xl mb-24 mt-12">
        <h1 className="text-4xl font-medium tracking-tight mb-8">{portfolioData.about.title}</h1>

        <div className="text-xl md:text-2xl leading-relaxed text-muted space-y-8 font-light">
          <p>{portfolioData.about.bio1}</p>
          <p>{portfolioData.about.bio2}</p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <p className="text-sm text-foreground/60 font-medium tracking-wide uppercase max-w-md leading-relaxed">{portfolioData.about.education}</p>
          <a
            href="/resume.pdf"
            download="Jerry_Melvin_Resume.pdf"
            className="inline-flex shrink-0 items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform"
          >
            My Resume
            <Download size={18} />
          </a>
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-3xl font-medium mb-12">Experiences</h2>
        <div className="flex flex-col border-t border-border">
          {portfolioData.about.experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border group hover:bg-muted/5 transition-colors px-4 -mx-4 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 w-full md:w-1/2">
                <span className="text-xl font-medium md:w-32">{exp.company}</span>
                <span className="text-xl text-muted font-light">{exp.role}</span>
              </div>
              <span className="text-muted mt-4 md:mt-0 font-light">{exp.date}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-medium mb-12">Communities I Love</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.about.communities.map((community) => (
            <div key={community.id} className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted/10 group cursor-pointer">
              <img src={community.image} alt="Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
