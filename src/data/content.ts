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
        id: "omron-v2",
        title: "Optimizing E-Commerce Accessibility & Authentication for High-Conversion Checkouts",
        description: "Redesigned the OMRON authentication flow and checkout journey to eliminate onboarding friction and maximize conversions.",
        image: "https://placehold.co/1200x800/e2e8f0/64748b?text=OMRON+v2",
        caseStudy: {
          highlight: "OMRON Healthcare | Authentication Redesign",
          role: "Product Designer",
          timeline: "4 Weeks",
          platform: "Web & Mobile",
          overview: "Overhauled the platform's accessibility, made the primary purchase pathways completely transparent, and introduced instant multi-channel authentication (Google, Mobile OTP, and Email).",
          sections: [
            {
              id: "executive-summary",
              title: "1. Executive Summary",
              content: "The Product: OMRON Medical Devices E-Commerce Platform.\n\nThe Challenge: A highly complex user journey plagued by hidden navigation links and a rigid, high-friction user onboarding process that blocked users from completing purchases smoothly.\n\nThe Solution: Overhauled the platform's accessibility, made the primary purchase pathways completely transparent, and introduced instant multi-channel authentication (Google, Mobile OTP, and Email).\n\nThe Results: Eliminated the drop-offs caused by forced account creation, simplified the end-to-end user journey, and created a frictionless, \"sweet checkout\" experience that allowed users to buy with total ease.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=OMRON+v2+Summary"
            },
            {
              id: "the-problem",
              title: "2. The Problem & Context (The \"Before\")",
              content: "During a deep dive into the original interface, we uncovered significant usability blockers that heavily restricted the platform's performance:\n\n• Hidden Links & Information Architecture Flaws: Critical elements of the primary user journey—including essential navigation links—were visually obscured or buried. This forced users through a complex, frustrating maze just to find what they needed.\n• High-Friction Account Creation: Before a user could even reach the checkout screen, they were met with a mandatory, tedious profile registration loop, acting as a massive roadblock to immediate purchasing.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=The+Problem"
            },
            {
              id: "design-strategy",
              title: "3. The Design Strategy & Solution",
              content: "The goal of this redesign was simple: shed unnecessary steps, bring hidden pathways to the forefront, and ensure the entire process felt effortless.\n\nFrictionless Multi-Channel Identity Management\nTo solve the onboarding bottleneck, we introduced a flexible, one-click authentication system at the top of the funnel. Instead of filling out traditional, long forms, users could choose their preferred method:\n• Instant Google Login: For rapid desktop and mobile entry.\n• Mobile Phone Number (OTP) Login: Highly optimized for regional users who prefer phone-first authentication.\n• Traditional Email Login: Preserved for users who prefer standard credentials.\n\nUncovering the Journey (Accessibility Overhaul)\nWe redesigned the information architecture to ensure that the primary user journey was clean, highly visible, and required minimal cognitive load. Hidden links were brought directly into the main viewport, providing a predictable and straight path from product page to cart.\n\nThe \"Sweet Checkout\" Paradigm\nBy pairing accessible navigation with seamless social/mobile login options, we built what we termed a \"Sweet Checkout\" experience. The entire checkout funnel was streamlined into a clean, minimal UI that ensured users encountered zero distractions or layout confusion right as they were trying to finalize their purchase.",
              image: "https://placehold.co/1200x600/e2e8f0/64748b?text=UI+Flow:+Checkout+to+Google/OTP+Login"
            },
            {
              id: "impact",
              title: "4. The Impact (The \"After\")",
              content: "• Drastic Drop in Checkout Friction: Implementing quick-auth options significantly reduced the time-to-onboard and eliminated form-fatigue drop-offs.\n• Cleaner, More Intuitive Flow: Moving hidden links into standard, highly visible UI patterns created an entirely transparent purchase path where users could checkout with ease.\n• Elevated User Satisfaction: By focusing on accessibility, the interface felt modern, trustworthy, and incredibly respectful of the user's time."
            },
            {
              id: "key-takeaways",
              title: "5. Key Takeaways & Lessons Learned",
              content: "Identity Management IS User Experience: Forcing a manual, complex profile setup before a purchase is a conversion killer. Integrating instant authentication tools like Google and Mobile OTP is one of the highest-leverage UX improvements an e-commerce platform can make.\n\nNever Hide Core Utilities: If a link or navigation option is critical to the user journey, it must be highly visible. Clear visual hierarchy beats beautiful but hidden UI elements every single time.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=Takeaways"
            }
          ]
        }
      },
      {
        id: "ane",
        title: "Bridging the Cultural & Logistics Gap in Gulf E-Commerce",
        description: "Redesigned a localized map-integrated fulfillment system for the UAE market.",
        image: "https://placehold.co/1200x800/e2e8f0/64748b?text=AnE+Case+Study",
        caseStudy: {
          highlight: "AnE E-Commerce Platform | UAE",
          role: "Product Designer",
          timeline: "4 Weeks",
          platform: "Web & Mobile",
          overview: "Designed a transparent, map-integrated fulfillment system tailored to UAE address infrastructure, giving users complete visibility over rapid delivery and local pickup options.",
          sections: [
            {
              id: "executive-summary",
              title: "1. Executive Summary",
              content: "The Product: AnE E-Commerce Platform (targeting the UAE market: Abu Dhabi, Dubai, and Ras Al Khaimah).\n\nThe Challenge: A lack of clear delivery and fulfillment options—such as same-day delivery or in-store pickup—left users uncertain about when or how they would receive their products, hurting checkout conversions.\n\nThe Solution: Designed a transparent, map-integrated fulfillment system tailored to UAE address infrastructure, giving users complete visibility over rapid delivery and local pickup options.\n\nThe Results: Eliminated the fulfillment communication gap, optimized the shipping address flow, and drastically accelerated the user's path to purchase with clear delivery timelines.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=AnE+Summary"
            },
            {
              id: "the-problem",
              title: "2. The Problem & Context (The \"Before\")",
              content: "Operating across different regions requires a deep understanding of local infrastructure. For users in Abu Dhabi, Dubai, and Ras Al Khaimah (RAK), the standard checkout experience was causing drop-offs due to a major logistics blind spot:\n\n• Fulfillment Blind Spot: The platform lacked flexible delivery options. Users could not easily opt for hyper-local fulfillment methods like in-store pickup or same-day delivery.\n• Address Form Friction: Traditional, rigid address forms caused massive drop-offs because they didn't align well with how addresses are structured and navigated in the UAE.\n• The Cultural & Geographical Gap: Designing from India for a UAE audience meant the team had to look closely at local feedback to understand regional behavioral nuances and expectations around delivery speed.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=The+Problem"
            },
            {
              id: "design-strategy",
              title: "3. The Design Strategy & Solution",
              content: "To unlock revenue, the redesign focused heavily on transparency, localized mapping, and friction-free address forms.\n\nLocalized UX Insights\nThrough direct feedback loops with the local Dubai-based team, we uncovered the cultural gap: UAE consumers expect hyper-fast, highly communicative logistics.\n\nInteractive Fulfillment Mapping & In-Store Pickup\nWe introduced a brand-new fulfillment selection step early in the journey:\n• Better Mapping & Transparency: Instead of making users guess delivery windows, we integrated clean visual mapping that instantly showed the closest pickup location or verified same-day delivery eligibility based on their location.\n• Omnichannel Flexibility: Added clear toggles for In-Store Pickup alongside home delivery, turning a rigid online funnel into a flexible omnichannel experience.\n\nSmoothed Shipping Address Flow\nWe overhauled the address form fields to accommodate local nuances. By reducing fields and incorporating a visual map-pin selector, we eliminated the friction of typing out complex text-based addresses, directly boosting checkout completion rates.",
              image: "https://placehold.co/1200x600/e2e8f0/64748b?text=Comparison:+Old+vs+New+Address+UI"
            },
            {
              id: "business-impact",
              title: "4. The Business & User Impact (The \"After\")",
              content: "• Increased Conversion Potential: Smoothing out the shipping address form flow directly reduced checkout abandonment and drove up sales revenue.\n• Radical Logistics Transparency: Users moved from zero visibility to absolute clarity, allowing them to map out and choose the fastest way to get their products.\n• Bridged Team Alignment: Successfully translated cross-border team feedback into a functional interface that solved a specific regional infrastructure pain point."
            },
            {
              id: "key-takeaways",
              title: "5. Key Takeaways & Lessons Learned",
              content: "UX is Local, Not Universal: What works for address forms in India doesn't automatically translate to the UAE. You have to listen to regional teams to build empathy for the actual end-user's environment.\n\nFulfillment is Part of the Interface: A user's experience doesn't end when they hit \"buy.\" Integrating clear, visual logistics right into the interface is a massive driver for conversion and trust.",
              image: "https://placehold.co/1200x800/e2e8f0/64748b?text=Takeaways"
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
