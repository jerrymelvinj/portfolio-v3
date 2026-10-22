import { Hero } from "@/components/sections/Hero";
import { FeaturedIn } from "@/components/sections/FeaturedIn";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Capabilities } from "@/components/sections/Capabilities";
import { Philosophy } from "@/components/sections/Philosophy";
import { FAQ } from "@/components/sections/FAQ";

// Home Page Schema (WebSite & Person @graph)
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.jerrymelvinj.com/#website",
      "url": "https://www.jerrymelvinj.com/",
      "name": "Jerry Melvin J — Portfolio",
      "description":
        "Product Designer & UI/UX Specialist crafting high-conversion e-commerce checkout architecture, scalable design systems, and human-centered digital experiences.",
      "publisher": {
        "@id": "https://www.jerrymelvinj.com/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.jerrymelvinj.com/#person",
      "name": "Jerry Melvin J",
      "jobTitle": "Product Designer & UI/UX Specialist",
      "url": "https://www.jerrymelvinj.com/",
      "image": "https://www.jerrymelvinj.com/Logo.svg",
      "description":
        "Bengaluru-based Senior Product Designer and UI/UX Specialist specializing in high-conversion e-commerce checkout architecture, multi-regional product strategy, and design systems.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN",
      },
      "knowsAbout": [
        "UI/UX Design",
        "E-Commerce Checkout Architecture",
        "Conversion Rate Optimization (CRO)",
        "Design Systems",
        "WCAG AAA Accessibility",
        "Frontend Engineering",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-black">
      {/* Home Page JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <FeaturedIn />
      <CaseStudies />
      <Capabilities />
      <Philosophy />
      <FAQ />
    </div>
  );
}
