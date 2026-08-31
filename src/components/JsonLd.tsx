export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    "@id": "https://www.jerrymelvinj.com/#person",
    "name": "Jerry Melvin J",
    "alternateName": "Jerry Melvin",
    "jobTitle": "Product Designer & UI/UX Specialist",
    "description": "Product Designer reimagining complex challenges into whimsical, impactful, human-centered digital experiences.",
    "url": "https://www.jerrymelvinj.com",
    "email": "jerrymelvinj@gmail.com",
    "image": "https://www.jerrymelvinj.com/Logo.svg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "sameAs": [
      "https://www.linkedin.com/in/jerrymelvinjm/",
      "https://github.com/jerrymelvinj",
      "https://www.instagram.com/jerrymelvinjm/"
    ],
    "knowsAbout": [
      "Product Design",
      "UI/UX Design",
      "E-Commerce Checkout Optimization",
      "Design Systems",
      "Frontend Development",
      "User Research"
    ],
    "priceRange": "$$"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.jerrymelvinj.com/#website",
    "url": "https://www.jerrymelvinj.com",
    "name": "Jerry Melvin J Portfolio",
    "description": "Portfolio of Jerry Melvin J, Product Designer & UI/UX Specialist based in Bengaluru, India.",
    "publisher": {
      "@id": "https://www.jerrymelvinj.com/#person"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
