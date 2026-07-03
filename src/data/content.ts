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
        title: "₹1 Lakh in a Single Day vs. One Month",
        description: "Suggestion for a side cart for easy access and inclusion of features like milestone for add more value to the cart.",
        image: "https://placehold.co/1200x800/e2e8f0/64748b?text=OMRON",
        caseStudy: {
          highlight: "OMRON Healthcare | India",
          role: "Product Designer",
          timeline: "6 Weeks",
          platform: "Web & Mobile",
          overview: "Overhauled the end-to-end checkout experience, introduced quick-commerce checkout milestones, and streamlined user onboarding with simplified authentication.",
          sections: [
            {
              id: "executive-summary",
              title: "1. Executive Summary",
              content: "The Product: OMRON Medical Devices E-Commerce Platform.\n\nThe Challenge: A complex, fragmented user journey with hidden navigation links made online purchasing frustrating, capping monthly revenue at roughly ₹1 Lakh.\n\nThe Solution: Overhauled the end-to-end checkout experience, introduced quick-commerce checkout milestones, and streamlined user onboarding with simplified authentication.\n\nThe Results: Generated ₹1 Lakh in sales in a single day (matching a previous month's worth of revenue) and entirely cleared out product stock by day two of launch.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=OMRON+Summary"
            },
            {
              id: "the-problem",
              title: "2. The Problem & Context (The \"Before\")",
              content: "OMRON is a household name in medical devices, yet the digital shopping experience didn't reflect the brand's reliability. The baseline metrics highlighted serious conversion friction:\n\nComplex Navigation & Hidden Links: Critical paths to find and purchase products were buried under an unintuitive information architecture, leaving users confused during the discovery phase.\n\nHigh Checkout Friction: Forcing users into long, multi-step profile creation loops caused high cart abandonment rates.\n\nRevenue Ceiling: Due to these user experience gaps, online sales were sluggish, averaging just ₹1 Lakh per month.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=The+Problem"
            },
            {
              id: "design-strategy",
              title: "3. The Design Strategy & Solution",
              content: "To fix the leaky conversion funnel, the redesign focused on accessibility, speed, and modern checkout UX paradigms.\n\nStreamlined Social & Mobile Onboarding\nWe completely bypassed long registration forms. By introducing quick-auth options via Google Login, Email, and Mobile OTP, users could create an account and authenticate instantly, smoothing the very top of the purchasing funnel.\n\nThe \"Sweet Checkout\" Experience\nWe transformed the checkout phase into a highly transparent, clear, and efficient flow:\n\nQuick-Commerce Milestones: Borrowing successful UX patterns from the quick-commerce space, we introduced a clear milestone indicator (e.g., Cart -> Address -> Payment). This managed user expectations and created a psychological sense of forward momentum.\n\nForm Optimization: Stripped away unnecessary input fields, replacing them with a highly accessible, single-column address and checkout layout to reduce cognitive load.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=Design+Strategy"
            },
            {
              id: "business-impact",
              title: "4. The Business Impact (The \"After\")",
              content: "The redesign was launched to immediate, unprecedented commercial success:\n\n• Sales Velocity: ₹1,00,000 / single day (Up from ₹1,00,000 / month)\n• Inventory Status: 100% Out of Stock by Day 2 (Up from Slow-moving stock)\n• Onboarding Friction: Low (Instant Google/Mobile Login)\n• Checkout Usability: Clean, accessible \"Sweet Checkout\"",
              video: "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              id: "key-takeaways",
              title: "5. Key Takeaways & Lessons Learned",
              content: "Borrow Proven Paradigms: Integrating quick-commerce milestones into traditional e-commerce works because users are already trained on those patterns. It reduces the learning curve instantly.\n\nAccessibility directly impacts ROI: When you fix hidden links and clarify the user journey, you don't just improve usability scores—you unlock massive, immediate business revenue.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=Takeaways"
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
