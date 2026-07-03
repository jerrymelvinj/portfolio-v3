import { portfolioData } from "@/data/content";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
      <section className="mb-20 max-w-2xl mt-4 md:mt-8">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">{portfolioData.home.title}</h1>
        <p className="text-xl text-muted leading-relaxed">{portfolioData.home.subtitle}</p>
      </section>

      <section className="flex flex-col gap-24">
        {portfolioData.home.projects.map((project) => (
          <Link href={`/work/${project.id}`} key={project.id} className="group cursor-pointer block">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] mb-6 overflow-hidden rounded-2xl bg-muted/10">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h2 className="text-3xl font-medium mb-2 group-hover:text-foreground/80 transition-colors">{project.title}</h2>
            <p className="text-lg text-muted max-w-2xl">{project.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
