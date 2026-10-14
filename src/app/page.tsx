import { Hero } from "@/components/sections/Hero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Capabilities } from "@/components/sections/Capabilities";
import { Philosophy } from "@/components/sections/Philosophy";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-black">
      <Hero />
      <CaseStudies />
      <Capabilities />
      <Philosophy />
      <FAQ />
    </div>
  );
}
