export const portfolioData = {
  nav: [
    { label: "WORK", path: "/" },
    { label: "PLAY", path: "/play" },
    { label: "ABOUT", path: "/about" },
    { label: "PHOTOS", path: "/photos" },
  ],
  home: {
    title: "Jerry Melvin J",
    subtitle: "Product Designer reimagining complex challenges into whimsical, impactful, human-centered experiences.",
    projects: [
      {
        id: "omron",
        title: "OMRON Add to Cart",
        description: "Suggestion for a side cart for easy access and inclusion of features like milestone for add more value to the cart.",
        image: "https://placehold.co/1200x800/e2e8f0/64748b?text=OMRON",
        caseStudy: {
          role: "Product Designer",
          timeline: "3 Weeks",
          platform: "Web & Mobile",
          overview: "Improving the add-to-cart experience for OMRON healthcare by introducing a sliding side cart to reduce friction and bounce rates.",
          sections: [
            {
              id: "the-problem",
              title: "The Problem",
              content: "Users were dropping off during the checkout phase. The existing flow redirected users to a completely new page every time they added an item, disrupting their browsing experience.",
            },
            {
              id: "research",
              title: "Research & Insights",
              content: "We conducted 15 user interviews and analyzed heatmaps. Key findings showed that users want to confirm their item was added without losing their place on the product page.",
              image: "https://placehold.co/1200x600/e2e8f0/64748b?text=Research+Affinity+Map"
            },
            {
              id: "ideation",
              title: "Ideation & Iteration",
              content: "Started with low-fidelity sketches exploring a modal approach vs a side cart approach. The side cart proved to be less intrusive.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=Low+Fidelity+Wireframes"
            },
            {
              id: "prototyping",
              title: "Prototyping & Testing",
              content: "We built a high-fidelity prototype in Figma. Users were able to interact with the side cart, adjust quantities, and see a milestone progress bar for free shipping.",
              video: "https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video
            },
            {
              id: "design-confirmation",
              title: "Design Confirmation & Handoff",
              content: "Final UI was polished using the existing OMRON design system. We included micro-interactions for adding items and a satisfying animation when the free shipping milestone is reached.",
              image: "https://placehold.co/1200x1600/e2e8f0/64748b?text=Final+High+Fidelity+Screens"
            }
          ]
        }
      },
      {
        id: "apple",
        title: "Apple Services Media Architecture",
        description: "Built scalable tools and specifications to streamline Apple's media ecosystem.",
        image: "https://placehold.co/1200x800/e2e8f0/64748b?text=Apple",
        caseStudy: {
          role: "UX Architect",
          timeline: "6 Months",
          platform: "Internal Tooling",
          overview: "Redesigning the internal architecture for how media assets are ingested, tagged, and distributed across Apple services.",
          sections: [
            {
              id: "the-problem",
              title: "The Problem",
              content: "The existing architecture was fragmented, leading to slow ingestion times and metadata inconsistencies.",
            },
            {
              id: "design-confirmation",
              title: "Final Output",
              content: "Delivered a unified schema and interface for asset managers.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=Final+Architecture"
            }
          ]
        }
      },
      {
        id: "ane",
        title: "AnE Design Guidelines",
        description: "Helped to make the design guidelines",
        image: "https://placehold.co/1200x800/e2e8f0/64748b?text=AnE+Design",
        caseStudy: {
          role: "UI Designer",
          timeline: "1 Month",
          platform: "Design System",
          overview: "Creating a comprehensive set of design guidelines to unify the product suite.",
          sections: [
            {
              id: "design-confirmation",
              title: "Design Confirmation",
              content: "Established robust typography scales, color tokens, and component states.",
              image: "https://placehold.co/1200x1200/e2e8f0/64748b?text=Design+System"
            }
          ]
        }
      }
    ]
  },
  play: {
    title: "My Playground",
    tags: ["All", "Poem", "Photography"],
    items: [
      { id: "1", type: "Photography", image: "https://placehold.co/800x1200/e2e8f0/64748b" },
      { id: "2", type: "Poem", image: "https://placehold.co/800x800/e2e8f0/64748b" },
      { id: "3", type: "Photography", image: "https://placehold.co/800x1000/e2e8f0/64748b" },
      { id: "4", type: "Poem", image: "https://placehold.co/800x600/e2e8f0/64748b" },
      { id: "5", type: "Photography", image: "https://placehold.co/800x800/e2e8f0/64748b" },
      { id: "6", type: "Photography", image: "https://placehold.co/800x1200/e2e8f0/64748b" },
      { id: "7", type: "Poem", image: "https://placehold.co/800x1000/e2e8f0/64748b" },
      { id: "8", type: "Photography", image: "https://placehold.co/800x800/e2e8f0/64748b" },
      { id: "9", type: "Photography", image: "https://placehold.co/800x1000/e2e8f0/64748b" },
    ]
  },
  about: {
    title: "Hi there, I'm Jerry.",
    tags: ["All", "Poem", "Photography"],
    bio1: "I'm Jerry Melvin. A product designer and frontend developer based in Bengaluru. I don't always know where a design is going when I start, but somewhere in the middle, it finds its shape. That's the part I live for.",
    bio2: "I got into UI/UX quietly, without a grand plan. Learned design systems first, the boring but necessary kind, then slowly started understanding when to break them. Over time, I found myself designing and building together, not separately. One fed the other.",
    education: "TN | IND  English with Communication Studies, Christ University",
    experiences: [
      {
        company: "AKOI",
        role: "UI/UX Designer",
        date: "June 2025 - Present"
      },
      {
        company: "AKOI",
        role: "Graphic Designer",
        date: "July 2024 - June 2025"
      },
      {
        company: "AMD",
        role: "Graphic Design Trainer",
        date: "May 2024 - July 2024"
      },
      {
        company: "RMC",
        role: "Motion Graphics Inter Jr.",
        date: "June 2023 - July 2023"
      }
    ],
    communities: [
      { id: "c1", image: "https://placehold.co/600x600/e2e8f0/64748b" },
      { id: "c2", image: "https://placehold.co/600x600/e2e8f0/64748b" },
      { id: "c3", image: "https://placehold.co/600x600/e2e8f0/64748b" },
      { id: "c4", image: "https://placehold.co/600x600/e2e8f0/64748b" },
      { id: "c5", image: "https://placehold.co/600x600/e2e8f0/64748b" },
      { id: "c6", image: "https://placehold.co/600x600/e2e8f0/64748b" },
      { id: "c7", image: "https://placehold.co/600x600/e2e8f0/64748b" },
      { id: "c8", image: "https://placehold.co/600x600/e2e8f0/64748b" },
      { id: "c9", image: "https://placehold.co/600x600/e2e8f0/64748b" }
    ]
  },
  photos: {
    items: [
      { id: "p1", image: "https://placehold.co/800x1200/e2e8f0/64748b" },
      { id: "p2", image: "https://placehold.co/800x800/e2e8f0/64748b" },
      { id: "p3", image: "https://placehold.co/800x1000/e2e8f0/64748b" },
      { id: "p4", image: "https://placehold.co/800x1200/e2e8f0/64748b" },
      { id: "p5", image: "https://placehold.co/800x800/e2e8f0/64748b" },
      { id: "p6", image: "https://placehold.co/800x1000/e2e8f0/64748b" },
      { id: "p7", image: "https://placehold.co/800x1000/e2e8f0/64748b" },
      { id: "p8", image: "https://placehold.co/800x1200/e2e8f0/64748b" },
      { id: "p9", image: "https://placehold.co/800x800/e2e8f0/64748b" },
      { id: "p10", image: "https://placehold.co/800x1000/e2e8f0/64748b" },
      { id: "p11", image: "https://placehold.co/800x1200/e2e8f0/64748b" },
      { id: "p12", image: "https://placehold.co/800x800/e2e8f0/64748b" },
    ]
  },
  footer: {
    title: "Thanks for visiting!",
    email: "jerrymelvinj@gmail.com",
    socials: [
      { name: "Instagram", url: "#" },
      { name: "Behance", url: "#" },
      { name: "LinkedIn", url: "#" }
    ]
  }
}
