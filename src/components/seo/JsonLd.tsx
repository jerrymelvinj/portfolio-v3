import * as React from "react";
import { siteConfig } from "@/content/site-config";

export function JsonLd() {
  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: "https://jerrymelvinj.com",
    email: siteConfig.email,
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.github,
      siteConfig.socials.instagram,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "India",
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
    name: `${siteConfig.name} Portfolio`,
    url: "https://jerrymelvinj.com",
    description: siteConfig.subheadline,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
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
    </>
  );
}
