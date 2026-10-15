import * as React from "react";
import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";

export function JsonLd() {
  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jerry Melvin J",
    jobTitle: "Product Designer / UI/UX Specialist",
    description: "Product Designer and UI/UX Specialist based in Bengaluru, specializing in high-conversion e-commerce checkout architecture and scalable design systems.",
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.instagram,
      siteConfig.socials.youtube,
      siteConfig.socials.github,
      "https://jerrymelvinj.blogspot.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "India",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Product Designer / UI/UX Specialist",
      occupationLocation: {
        "@type": "City",
        name: "Bengaluru",
      },
      skills: [
        "Product Design",
        "UI/UX Design",
        "E-Commerce Checkout Architecture",
        "Conversion Rate Optimization (CRO)",
        "Design Systems",
        "Multi-Channel Authentication",
        "WCAG 2.1 AAA Accessibility",
        "Frontend Engineering",
      ],
    },
    knowsAbout: [
      "Product Design",
      "UI/UX Design",
      "E-Commerce Checkout Architecture",
      "Conversion Rate Optimization (CRO)",
      "Design Systems & Token Architecture",
      "Multi-Channel Authentication UX",
      "WCAG 2.1 AAA Accessibility",
      "Next.js & Frontend Engineering",
      "Framer Motion",
    ],
  };

  const schemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Product Designer Portfolio`,
    url: siteConfig.url,
    description: siteConfig.subheadline,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: "Product Designer / UI/UX Specialist",
    },
  };

  const schemaPortfolio = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Selected Product Design & Architecture Case Studies | Jerry Melvin J",
    url: `${siteConfig.url}/#work`,
    description: "Detailed case studies on e-commerce checkout overhauls, multi-channel authentication, geospatial address infrastructure, and high-performance production design systems.",
    isPartOf: {
      "@type": "WebSite",
      name: `${siteConfig.name} — Product Designer Portfolio`,
      url: siteConfig.url,
    },
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      headline: p.title,
      description: p.summary,
      url: `${siteConfig.url}/work/${p.slug}`,
      author: {
        "@type": "Person",
        name: siteConfig.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPortfolio) }}
      />
    </>
  );
}
