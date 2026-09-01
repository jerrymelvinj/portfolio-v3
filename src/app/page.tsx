import { Hero } from "@/components/sections/Hero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Capabilities } from "@/components/sections/Capabilities";
import { Philosophy } from "@/components/sections/Philosophy";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-12 md:space-y-20 pb-16">
      <Hero />
      <CaseStudies />
      <Capabilities />
      <Philosophy />
      <FAQ />
      <Contact />
    </div>
  );
}
