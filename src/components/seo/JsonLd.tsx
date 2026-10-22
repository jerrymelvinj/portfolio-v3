import * as React from "react";
import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";

export function JsonLd() {
  const schemaPortfolio = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Selected Product Design & Architecture Case Studies | Jerry Melvin J",
    url: `${siteConfig.url}/#work`,
    description:
      "Detailed case studies on e-commerce checkout overhauls, multi-channel authentication, geospatial address infrastructure, and high-performance production design systems.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.jerrymelvinj.com/#website",
      name: `${siteConfig.name} — Portfolio`,
      url: siteConfig.url,
    },
    hasPart: projects.map((p) => ({
      "@type": "Article",
      "@id": `${siteConfig.url}/work/${p.slug}#article`,
      headline: p.title,
      description: p.summary,
      url: `${siteConfig.url}/work/${p.slug}`,
      author: {
        "@type": "Person",
        "@id": "https://www.jerrymelvinj.com/#person",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Person",
        "@id": "https://www.jerrymelvinj.com/#person",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPortfolio) }}
    />
  );
}
