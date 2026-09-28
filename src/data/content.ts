export const portfolioData = {
  nav: [
    { label: "WORK", path: "/" },
    { label: "ABOUT", path: "/about" },
  ],
  home: {
    title: "Jerry Melvin J",
    subtitle: "Product Designer reimagining complex challenges into whimsical, impactful, human-centered experiences.",
    projects: [
      {
        id: "omron",
        title: "Overhauling E-Commerce Checkout Architecture to Drive 30x Daily Purchase Velocity",
        description: "Redesigned OMRON's medical e-commerce checkout architecture by decoupling legacy multi-step profile loops into a streamlined milestone-driven quick-commerce flow, unlocking a 30x daily purchase velocity surge.",
        image: "/images/case-studies/omron-cover.jpg",
        caseStudy: {
          highlight: "OMRON Medical Devices | Core Commerce & Checkout Systems",
          role: "Product Designer",
          team: "1 Senior PM, 1 Lead Frontend Engineer, 1 Payments Engineer, 1 Product Designer",
          timeline: "6 Weeks",
          platform: "Responsive Web (Desktop & Mobile)",
          overview: "Architected a high-velocity checkout experience for OMRON Medical Devices, eliminating mandatory account creation roadblocks and integrating transparent quick-commerce milestone indicators to resolve chronic cart abandonment.",
          sections: [
            {
              id: "executive-summary",
              title: "Executive Summary (30-Second Recruiter Skim)",
              content: "• The Challenge: A fragmented checkout funnel with buried navigation pathways and mandatory multi-step profile creation loops led to an alarming 68% cart abandonment rate, severely throttling platform purchase velocity.\n• The Solution: Engineered a high-transparency \"Sweet Checkout\" architecture featuring quick-commerce milestone indicators (Cart → Address → Payment), contextual slide-over cart drawers, and frictionless social/OTP identity verification.\n• Key Impact:\n  - 30x Surge in Daily Purchase Velocity (matching 30-day baseline sales volume in <24 hours).\n  - 100% Warehouse Inventory Clearance within 48 hours of launch.\n  - 42% Reduction in Checkout Drop-offs across mobile and desktop cohorts.",
              image: "/images/case-studies/omron-summary.jpg"
            },
            {
              id: "problem-space",
              title: "1. Problem Space & Baseline Metrics",
              content: "• Current State Breakdown: Despite strong global brand trust in medical hardware, digital conversion was severely suppressed. Funnel analytics revealed that 68% of users who initiated cart actions dropped off before reaching payment.\n• Root Cause Analysis:\n  - Architectural Latency: The legacy checkout path required 5 distinct page loads with 14 mandatory form inputs.\n  - Information Architecture Flaws: Critical navigation links and cart triggers were visually obscured below the fold on mobile viewports.\n  - Forcible Onboarding Gates: Forcing unauthenticated shoppers into a multi-step registration loop created catastrophic cognitive friction.\n• Target KPIs: Reduce cart-to-checkout drop-off below 35%, accelerate average time-to-purchase from 4.8 minutes to under 90 seconds, and eliminate onboarding bounce rates.",
              image: "/images/case-studies/omron-problem.jpg"
            },
            {
              id: "behavioral-insights",
              title: "2. Behavioral Insights & Discovery",
              content: "• Core Behavioral Friction Points:\n  - The \"Purchase Urgency\" Paradox: Medical device buyers often shop with high urgency (e.g., blood pressure monitors or nebulizers for immediate family health needs). High form friction directly degraded buyer confidence.\n  - Mental Model Mismatch: Users expected single-screen transparency common in modern quick-commerce platforms, but were met with a rigid legacy ERP-style form layout.\n  - Qualitative Session Replays: Heatmaps indicated that 41% of users repeatedly clicked the cart icon without realizing items were already added due to lack of immediate micro-feedback.",
              image: "/images/case-studies/omron-strategy.jpg"
            },
            {
              id: "product-decisions",
              title: "3. Key Product Decisions & Trade-offs",
              content: "### Decision 1: Quick-Commerce Linear Milestone Architecture\n• Hypothesis: Displaying an explicit, interactive milestone progress indicator (Cart → Address → Payment) will set clear user expectations and reduce checkout cognitive load.\n• Design Intervention: Replaced fragmented multi-page screens with an accessible, single-column milestone drawer that dynamically updates order subtotals, applied taxes, and delivery estimates in real time.\n• Constraint / Trade-off: Marketing requested promo-banner cross-sells in the checkout funnel. We rejected full-page promo modules in favor of subtle, 1-click peripheral add-ons (e.g., replacement cuffs) to safeguard the core transaction path.\n\n### Decision 2: Contextual Slide-Over Cart vs. Full-Page Redirect\n• Hypothesis: Retaining the user on their active product discovery page via an ambient slide-over cart drawer would reduce bounce rates and maintain continuous browsing momentum.\n• Design Intervention: Built an interactive slide-over cart featuring instant quantity steppers, estimated delivery countdowns, and quick-auth triggers.\n• Constraint / Trade-off: Handled engineering backend sync latency by optimistically updating UI state with local caching and non-blocking background API validations."
            },
            {
              id: "edge-cases-accessibility",
              title: "4. Edge Cases, System States & Accessibility",
              content: "• Real-Time Stock Depletion: If an item in the cart went out of stock during active checkout, the system instantly greyed out the line item, displayed an in-line substitute recommendation, and updated the subtotal without refreshing the page.\n• Network & Payment Timeout Fallbacks: Implemented idempotency keys and clear modal countdown states for payment processing, preventing duplicate transactions during network latency.\n• Form Validation & Autofill: Integrated browser autofill standards and real-time inline field validation with accessible ARIA live regions for screen readers, meeting full WCAG 2.1 AA compliance.",
              video: "https://www.w3schools.com/html/mov_bbb.mp4"
            },
            {
              id: "business-impact",
              title: "5. Measured Business & Product Impact",
              content: "• 30x Daily Purchase Velocity Lift: Generated the equivalent of a full month's baseline sales volume in a single 24-hour launch window.\n• 100% Warehouse Stock Clearance: Cleared all active SKU inventory by Day 2 post-launch due to the streamlined conversion funnel.\n• 42% Drop in Cart Abandonment: Accelerated checkout completion rate from 32% to 74%.\n• 68% Reduction in Time-to-Purchase: Average transaction completion time fell from 288 seconds to 88 seconds."
            },
            {
              id: "retrospective",
              title: "6. Retrospective & V2 Opportunities",
              content: "• Key Learnings: Proven quick-commerce UX paradigms translate extraordinarily well to specialized e-commerce verticals (like healthcare) because consumer mental models are already trained on high-speed purchasing.\n• V2 Roadmap Opportunities:\n  - 1-Click Subscription Reorders: Implementing automated recurring replenishment for diabetic test strips and device sanitization accessories.\n  - Postal Code Geolocation Auto-Lookup: Automatically resolving City/State from a 6-digit postal code to eliminate 3 manual form fields.",
              image: "/images/case-studies/omron-takeaways.jpg"
            }
          ]
        }
      },
      {
        id: "omron-v2",
        title: "Eliminating Onboarding Friction via Multi-Channel Identity Architecture",
        description: "Architected a frictionless multi-channel identity system decoupling traditional account creation barriers from the purchase journey, reducing onboarding latency by 78%.",
        image: "/images/case-studies/omron-v2-cover.jpg",
        caseStudy: {
          highlight: "OMRON Healthcare | Authentication & Conversion Systems",
          role: "Product Designer",
          team: "1 Product Manager, 1 Auth/Security Engineer, 1 Frontend Engineer, 1 Product Designer",
          timeline: "4 Weeks",
          platform: "Web & Mobile Web",
          overview: "Redesigned OMRON's authentication ecosystem to eliminate checkout drop-offs caused by forced account creation, enabling instant 1-tap Google login, Mobile Phone OTP verification, and passwordless authentication.",
          sections: [
            {
              id: "executive-summary",
              title: "Executive Summary (30-Second Recruiter Skim)",
              content: "• The Challenge: Mandatory, multi-field profile registration before checkout created a severe onboarding roadblock, causing 58% of first-time shoppers to abandon their carts at the sign-in gate.\n• The Solution: Engineered a progressive, multi-channel authentication system enabling 1-click Google sign-in, regional Mobile Phone OTP verification, and passwordless email magic links directly within the purchase viewport.\n• Key Impact:\n  - +64% Increase in Authentication Completion Rate across new visitors.\n  - 78% Reduction in Time-to-Onboard (from 140s to 30s).\n  - 0% Cart Abandonment Caused by Login Failures or Forgotten Password Loops.",
              image: "/images/case-studies/omron-v2-summary.jpg"
            },
            {
              id: "problem-space",
              title: "1. Problem Space & Baseline Metrics",
              content: "• Current State Breakdown: Prior to the redesign, 58% of new shoppers abandoned their journey when prompted to create an account. The legacy auth modal demanded 8 mandatory inputs including password confirmation and security questions.\n• Root Cause Analysis:\n  - High Password Fatigue: Over 34% of checkout session drops were triggered by failed password entries or abandoned password recovery flows.\n  - Visual Obstruction: Critical navigation pathways and cart summary context were completely hidden behind heavy opaque login modals.\n• Target KPIs: Increase onboarding pass-through to >85%, reduce auth duration to <30 seconds, and ensure zero loss of active cart state during authentication.",
              image: "/images/case-studies/omron-v2-problem.jpg"
            },
            {
              id: "behavioral-insights",
              title: "2. Behavioral Insights & Discovery",
              content: "• Core Behavioral Friction Points:\n  - Mobile Device Preference: Over 72% of regional traffic browsed on mobile devices where typing complex passwords with special characters caused high input error rates.\n  - Trust & Speed Divergence: While users trusted the OMRON medical brand, they had zero tolerance for forced account creation when purchasing emergency medical monitors.\n  - Mental Model Gap: Users expected their shopping cart to persist seamlessly regardless of whether they logged in before or after adding products.",
              image: "/images/case-studies/omron-v2-strategy.jpg"
            },
            {
              id: "product-decisions",
              title: "3. Key Product Decisions & Trade-offs",
              content: "### Decision 1: Progressive Authentication at the Checkout Gate\n• Hypothesis: Allowing users to progress all the way to the final review screen before requiring lightweight identity verification will maximize purchase commitment.\n• Design Intervention: Removed forced sign-up gates from the initial product and cart views. Introduced an inline, 1-tap authentication card at checkout.\n• Constraint / Trade-off: Security compliance required verified user records for medical warranty tracking. We satisfied this by automatically provisioning an account in the background once mobile OTP or Google identity was verified.\n\n### Decision 2: Multi-Channel Auth Hierarchy (Google & Phone OTP)\n• Hypothesis: Prioritizing 1-tap Google Login on desktop and auto-read Mobile OTP on mobile will eliminate form fatigue for 90%+ of visitors.\n• Design Intervention: Designed a contextual auth modal displaying Google One-Tap at the top, Mobile Phone Number with 4-digit OTP in the center, and traditional Email as a secondary fallback.\n• Constraint / Trade-off: Mobile network SMS deliverability varied by carrier. We implemented a 30-second resend countdown with an instant fallback to WhatsApp OTP and email verification."
            },
            {
              id: "edge-cases-accessibility",
              title: "4. Edge Cases, System States & Accessibility",
              content: "• SMS OTP Delivery Latency: If an SMS OTP was delayed past 20 seconds, the UI automatically offered a 1-tap WhatsApp verification option or voice call alternative.\n• Graceful Cart Preservation: If a user began as a guest and authenticated midway with an existing account holding previous items, our cart reconciliation logic merged both carts seamlessly without overriding newly added items.\n• Accessible Input Controls: High-contrast focus rings, numeric keypad triggers on mobile (inputMode=\"numeric\"), and screen-reader announcements for countdown timers."
            },
            {
              id: "business-impact",
              title: "5. Measured Business & Product Impact",
              content: "• +64% Authentication Completion Lift: Sign-in success rate surged from 42% to 69% within 3 weeks of release.\n• 78% Drop in Onboarding Time: Average time spent verifying identity fell from 140 seconds to 30 seconds.\n• +31% Overall Purchase Conversion: Removing the registration roadblock directly elevated total platform transaction throughput.\n• 89% Mobile User Adoption: Over 89% of mobile shoppers chose Phone OTP or Google over standard email/password."
            },
            {
              id: "retrospective",
              title: "6. Retrospective & V2 Opportunities",
              content: "• Key Learnings: Identity management is not just a security layer—it is the front door of checkout conversion. Forcing manual profile setups before purchase is the fastest way to bleed revenue.\n• V2 Roadmap Opportunities:\n  - Passkey / WebAuthn Biometrics: Integrating FaceID / TouchID for returning mobile shoppers for instant 1-second repeat purchasing.\n  - Unified Corporate & B2B Auth: Extending single sign-on (SSO) for clinic and hospital bulk procurement portals.",
              image: "/images/case-studies/omron-v2-takeaways.jpg"
            }
          ]
        }
      },
      {
        id: "ane",
        title: "Bridging Regional Address Infrastructure & Fulfillment Transparency in Gulf E-Commerce",
        description: "Designed a localized map-integrated fulfillment architecture tailored to UAE address infrastructure, resolving regional logistics blind spots and accelerating checkout conversion.",
        image: "/images/case-studies/ane-cover.jpg",
        caseStudy: {
          highlight: "AnE E-Commerce Platform | UAE & GCC Regional Logistics",
          role: "Product Designer",
          team: "1 Senior PM, 1 Regional Operations Lead (Dubai), 1 Full-Stack Engineer, 1 Product Designer",
          timeline: "4 Weeks",
          platform: "Responsive Web & Mobile Web",
          overview: "Engineered a localized map-integrated address and fulfillment selector for the UAE market (Abu Dhabi, Dubai, Ras Al Khaimah), bridging regional physical navigation nuances with real-time omnichannel delivery options.",
          sections: [
            {
              id: "executive-summary",
              title: "Executive Summary (30-Second Recruiter Skim)",
              content: "• The Challenge: Traditional Western text-based address forms caused a 46% checkout abandonment rate in the UAE due to the absence of standard postal codes and lack of transparency around same-day delivery and local store pickup.\n• The Solution: Architected an interactive map-pin address selector paired with an omnichannel fulfillment matrix, granting customers real-time delivery countdowns, same-day delivery eligibility checks, and 1-click store pickup options.\n• Key Impact:\n  - +38% Increase in Checkout Completion across UAE regional markets.\n  - 62% Reduction in Failed Deliveries and address clarification customer support tickets.\n  - 4.8 / 5 Customer Fulfillment Satisfaction Score post-launch.",
              image: "/images/case-studies/ane-summary.jpg"
            },
            {
              id: "problem-space",
              title: "1. Problem Space & Baseline Metrics",
              content: "• Current State Breakdown: Standard e-commerce templates rely on postal/ZIP code fields that do not exist in the UAE, forcing users into ambiguous free-text fields. This resulted in a 46% checkout abandonment rate and frequent delivery delays.\n• Root Cause Analysis:\n  - Address Infrastructure Mismatch: UAE addresses rely on landmarks, villa/apartment numbers, and street names rather than postal codes.\n  - Logistics Blind Spot: Shoppers had zero visibility into whether items were available for rapid same-day dispatch or instant retail store pickup in Dubai or Abu Dhabi.\n• Target KPIs: Elevate checkout completion by >30%, decrease delivery return-to-origin (RTO) rate below 5%, and achieve sub-60-second address submission.",
              image: "/images/case-studies/ane-problem.jpg"
            },
            {
              id: "behavioral-insights",
              title: "2. Behavioral Insights & Discovery",
              content: "• Core Behavioral Friction Points:\n  - Hyper-Local Expectations: UAE consumers are accustomed to high-velocity delivery apps (e.g., Deliveroo, Talabat) and expect pinpoint map accuracy for home and office deliveries.\n  - Omnichannel Flexibility Demand: Over 35% of surveyed shoppers preferred picking up orders on their evening commute if store inventory was guaranteed.\n  - Cultural Navigation Nuances: Designing from India for a UAE consumer base required direct feedback loops with Dubai logistics teams to understand free-zone access rules and landmark conventions.",
              image: "/images/case-studies/ane-cover.jpg"
            },
            {
              id: "product-decisions",
              title: "3. Key Product Decisions & Trade-offs",
              content: "### Decision 1: Visual Map-Pin Geolocation vs. Free-Text Address Form\n• Hypothesis: Providing an interactive satellite map picker with automatic building detection will eliminate address ambiguities and speed up form completion.\n• Design Intervention: Built a lightweight map-pin selector that auto-fills Emirate, Area, and Street details upon pin drop, leaving users with only villa/apartment numbers to confirm.\n• Constraint / Trade-off: Map APIs introduce page weight and permission friction. We implemented browser GPS auto-detection with an instant manual landmark fallback search for users with location services disabled.\n\n### Decision 2: Omnichannel Fulfillment Switcher (Delivery vs. Store Pickup)\n• Hypothesis: Surfacing store pickup options early in the journey will convert high-intent local shoppers who cannot wait for standard courier windows.\n• Design Intervention: Integrated a high-visibility fulfillment toggle at checkout displaying real-time store inventory in Dubai and Abu Dhabi alongside same-day delivery cut-off timers.\n• Constraint / Trade-off: Required real-time POS retail inventory sync. Designed a graceful fallback state reserving store items for 2 hours while confirming stock with local branch staff."
            },
            {
              id: "edge-cases-accessibility",
              title: "4. Edge Cases, System States & Accessibility",
              content: "• Geolocation Permission Denied: If a user denied browser location permissions, the interface seamlessly transitioned to a landmark autocomplete dropdown (e.g., \"Near Mall of the Emirates\").\n• Cross-Emirate Delivery Cut-Offs: If a customer placed an order past 4 PM for Ras Al Khaimah, the UI dynamically updated the delivery badge from \"Same-Day Delivery\" to \"Next-Day Morning Delivery\" with exact hour countdowns.\n• Bilingual Accessibility: Full support for English and Arabic typography with high-contrast UI states, right-to-left layout symmetry, and WCAG 2.1 AA compliant tap targets (min 48px)."
            },
            {
              id: "business-impact",
              title: "5. Measured Business & Product Impact",
              content: "• +38% Checkout Completion Lift: Eliminating address form friction significantly elevated checkout conversions across Abu Dhabi and Dubai.\n• 62% Drop in Delivery Failure Rate: Courier return-to-origin incidents dropped dramatically due to exact GPS pin coordinates.\n• 28% In-Store Pickup Adoption: Nearly a third of urban Dubai orders selected store pickup, reducing last-mile shipping expenses.\n• Cross-Border Alignment: Established a repeatable framework for expanding e-commerce operations into Saudi Arabia and wider GCC markets."
            },
            {
              id: "retrospective",
              title: "6. Retrospective & V2 Opportunities",
              content: "• Key Learnings: UX is deeply local. Standard Western e-commerce form patterns fail when applied directly to markets with distinct physical addressing systems like the UAE.\n• V2 Roadmap Opportunities:\n  - WhatsApp Live Location Integration: Allowing shoppers to share live location pins via WhatsApp Web for instant 1-tap address verification.\n  - Multi-Address Work & Home Profiles: Adding quick-switch delivery presets for frequent corporate and residential orders.",
              image: "/images/case-studies/omron-takeaways.jpg"
            }
          ]
        }
      }
    ],
    otherWorks: [
      {
        id: "eden-and-blooms",
        title: "Eden & Blooms — Event Decor Studio",
        category: "Code to Deployment",
        tagline: "End-to-End Design, Frontend Engineering & Vercel Deployment",
        description:
          "Full-cycle product design and frontend development for an event decor studio. Designed in Figma and built from scratch with Next.js, Tailwind CSS, and Framer Motion. Features interactive service showcases, organic balloon & floral gallery viewers, booking flows, and high-performance Vercel cloud deployment.",
        image: "/images/case-studies/eden-cover.jpg",
        link: "https://edenandblooms.vercel.app/",
        techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel", "Figma"],
        role: "Lead Product Designer & Frontend Developer",
        year: "2026"
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
      {
        id: "c1",
        title: "Design Community Meetup",
        category: "Meetup & Talks",
        image: "/images/community/meetup.svg",
        span: "col-span-1 md:col-span-2 row-span-2",
      },
      {
        id: "c2",
        title: "Design Systems Workshop",
        category: "Workshop",
        image: "/images/community/workshop.svg",
        span: "col-span-1 md:col-span-2 row-span-1",
      },
      {
        id: "c3",
        title: "UX Journey Mapping Sprint",
        category: "UX Research",
        image: "/images/community/whiteboard.svg",
        span: "col-span-1 md:col-span-1 row-span-1",
      },
      {
        id: "c4",
        title: "Product Hackathon & Sprints",
        category: "Hackathon",
        image: "/images/community/hackathon.svg",
        span: "col-span-1 md:col-span-1 row-span-1",
      },
      {
        id: "c5",
        title: "Design Mentorship & Critiques",
        category: "Mentorship",
        image: "/images/community/mentorship.svg",
        span: "col-span-1 md:col-span-2 row-span-1",
      },
      {
        id: "c6",
        title: "Creative Studio & Tech Tinkering",
        category: "Creative Lab",
        image: "/images/community/studio.svg",
        span: "col-span-1 md:col-span-2 row-span-1",
      },
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
