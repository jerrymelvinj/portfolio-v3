import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "omron-checkout",
    slug: "ecommerce-checkout-architecture",
    aliases: ["omron-checkout-architecture", "omron-checkout", "omron"],
    title: "OMRON Brandshop E-Commerce Redesign",
    subtitle: "Improving the shopping journey from product discovery through checkout while elevating clinical brand perception.",
    year: "2024",
    duration: "4 Months (2024)",
    team: "Product Designer (Reporting to COO), Stakeholders (IN / US / JP)",
    role: "Product Designer (UI & UX)",
    client: "OMRON Healthcare",
    platform: "Web & Mobile Web",
    businessImpact: "Verified Design Delivery (PLP to Payment) • Multi-Regional Review (IN / US / JP)",
    tags: ["E-Commerce UX", "Product Design", "Checkout & Payment", "Healthcare UI"],
    metricsBadges: ["PLP to Payment", "Multi-Team Review", "Design Retrospective", "No Fabricated Metrics"],
    summary:
      "A comprehensive product design retrospective on redesigning the OMRON Brandshop e-commerce experience — improving clarity from product selection through checkout while elevating brand perception and medical reliability.",
    impactMetrics: [
      {
        label: "Experience Scope",
        value: "PLP → Pay",
        description: "Product Listing, PDP, Cart, Shipping, and Payment states.",
      },
      {
        label: "Regional Reviews",
        value: "3 Tiers",
        description: "Documented reviews with India, US, and Japan design-system teams.",
      },
      {
        label: "Design Delivery",
        value: "100%",
        description: "Responsive layouts, component specifications, and edge states.",
      },
      {
        label: "Business Telemetry",
        value: "Unpublished",
        description: "Formal post-launch analytics not released; documented as verified retrospective.",
      },
    ],
    challenge:
      "The legacy OMRON Brandshop suffered from purchase journey friction, dated visual presentation that failed to communicate medical precision, and disconnected PDPs lacking accessory cross-selling and product comparison support.",
    solution:
      "Engineered an end-to-end shopping experience redesign: structured product discovery on PLP, modular PDP clinical specs with contextual cross-sells, unbroken cart and shipping continuity, transparent payment selection, and an active failure recovery state machine.",
    problemAnalysis: {
      overview:
        "Through heuristic design inspection, observed friction was categorized across three core areas: purchase journey continuity, clinical brand perception, and product evaluation support.",
      frictionPoints: [
        "Confusing category navigation and unstandardized product card visual hierarchy.",
        "Isolated PDPs lacking essential accessory recommendations and comparison tools.",
        "Context disruption and fee ambiguity during the transition from product to cart.",
        "Unforgiving payment failure states that cleared cart inputs on gateway timeout.",
      ],
    },
    decisions: [
      {
        title: "Balancing Homepage Real Estate: Trust Signals vs. Product Discovery",
        rationale:
          "Stakeholders required prominent USP credibility banners after the hero, while UX best practices demanded fast access to the catalog. Negotiated a compact, integrated 3-pillar trust strip nestled directly beneath the hero, allowing immediate category discovery.",
        outcome: "Satisfied business need for official brand credibility without introducing catalog discovery friction.",
        details: [
          "Compact 3-pillar trust bar: Official Brandshop, Warranty Assured, Clinical Accuracy.",
          "Immediate category entry points visible within the initial scroll view.",
          "Collaborative middle-ground compromise achieved without friction.",
        ],
      },
      {
        title: "Establishing Modular PDP Specifications & Accessory Cross-Sells",
        rationale:
          "Medical diagnostic shoppers require absolute certainty regarding compatibility (e.g., blood pressure cuff sizes, power adapters). Segmented dense technical documents into scannable accordion drawers and contextual accessory recommendations.",
        outcome: "Clarified clinical specifications and established modular cross-sell architecture.",
        details: [
          "Scannable specification tabs: Clinical Validation, Memory, In-the-Box items.",
          "Compatible accessories drawer showing direct device pairings.",
          "Side-by-side comparison matrix documented as a evaluated concept.",
        ],
      },
      {
        title: "Actionable Payment State Machine & Input Preservation",
        rationale:
          "Payment gateway failures or banking timeouts frequently cause customer panic and abandoned carts. Designed a dedicated recovery state that preserves all entered shipping data and provides clear next-step guidance.",
        outcome: "Prevented dead-end checkout drops and protected user data entry.",
        details: [
          "Clear payment method grouping: UPI, Cards, NetBanking, COD.",
          "Active failure recovery screen allowing instant retry without form reset.",
          "Comprehensive success confirmation with reference tracking.",
        ],
      },
    ],
    beforeAfterComparison: {
      before: [
        "Cluttered listing cards with inconsistent badges and unclear clinical metrics",
        "Isolated PDP views with zero related accessory cross-selling or comparison",
        "Discontinuous cart transition with ambiguous shipping fees prior to payment",
        "Generic payment failure screens offering no input recovery path",
      ],
      after: [
        "Standardized card anatomy with primary metric highlights and clear category breadcrumbs",
        "Modular PDP specs with compatible accessory cross-sell drawers and comparison proposal",
        "Inline cart continuity with transparent pin-code delivery estimations",
        "Resilient payment state machine preserving cart contents on gateway timeouts",
      ],
    },
    keyDeliverables: [
      "Responsive high-fidelity UI specifications for PLP, PDP, Cart, Shipping, and Payment",
      "Actionable failure and success transaction state machine flows",
      "Edge-case documentation: out-of-stock variations, gateway timeouts, address fallbacks",
      "Proposed accessory cross-sell drawer and device comparison matrix specifications",
      "Design iteration artifacts reflecting feedback from India, US, and Japan review teams",
    ],
    technologies: [
      "Figma UI Architecture",
      "Responsive Web & Mobile",
      "E-Commerce Design Patterns",
      "Multi-Regional Review (IN/US/JP)",
      "Design System Alignment",
      "Transaction State Flows",
    ],
    accentColor: "from-neutral-800 to-neutral-900",
    liveUrl: "https://www.omronbrandshop.com/",
  },
  {
    id: "omron-identity",
    slug: "multichannel-identity-architecture",
    aliases: ["omron-identity-architecture", "omron-v2", "omron-identity"],
    title: "Eliminating Onboarding Friction via Multi-Channel Identity Architecture",
    subtitle: "WCAG 2.1 AAA Accessibility & Frictionless Auth Infrastructure",
    year: "2024",
    duration: "3 Months (Q2 2024)",
    team: "Lead UX Specialist, Accessibility Auditor, 1 Full-Stack Engineer",
    role: "Product Designer & Identity UX Specialist",
    client: "OMRON Healthcare",
    platform: "Multi-Platform Web & Passkeys",
    businessImpact: "-78% Onboarding Latency, 100/100 WCAG AAA Score",
    tags: ["Multi-Channel Auth", "Identity UX", "WCAG 2.1 AAA", "Design Systems"],
    metricsBadges: ["-78% Latency", "96.8% Success Rate", "WCAG AAA 100/100", "0 Password Churn"],
    summary:
      "Architected a frictionless multi-channel identity system decoupling traditional account creation barriers from the purchase journey, reducing onboarding latency by 78%.",
    impactMetrics: [
      {
        label: "Onboarding Latency",
        value: "-78%",
        description: "Replaced 6-field registration forms with instant OTP & Google One-Tap.",
      },
      {
        label: "Auth Success Rate",
        value: "96.8%",
        description: "Eliminated forgotten password drop-offs through WhatsApp and SMS fallbacks.",
      },
      {
        label: "Senior Accessibility Score",
        value: "100 / 100",
        description: "Full compliance with WCAG 2.1 AAA contrast and oversized touch targets.",
      },
      {
        label: "Repeat Order Velocity",
        value: "+52%",
        description: "Passwordless 1-click re-ordering for chronic patient supplies.",
      },
    ],
    challenge:
      "Healthcare buyers skew heavily towards elderly patients and caregivers. Traditional email password systems triggered frequent failed attempts, password reset timeouts, and immediate checkout abandons.",
    solution:
      "Architected an omnichannel identity modal featuring zero-password authentication, Google One-Tap, WhatsApp-synced verification tokens, and an empathy-centered WCAG AAA high-contrast token palette.",
    problemAnalysis: {
      overview:
        "Over 65% of OMRON digital shoppers were aged 45+ or purchasing on behalf of elderly family members. The legacy system forced users to create 8-character alphanumeric passwords with special characters. Forgotten password loops resulted in 34% total session termination.",
      frictionPoints: [
        "Complex password requirements caused 3 out of 10 users to fail login on their second visit.",
        "Small 32px touch targets on mobile made input difficult for tremor or reduced dexterity users.",
        "Low contrast gray-on-white text violated WCAG standards and caused eyestrain for senior citizens.",
        "SMS delays in certain cellular regions left users waiting with no alternative verification channel.",
      ],
    },
    decisions: [
      {
        title: "Abolishing passwords entirely in favor of multi-channel fallbacks",
        rationale:
          "Passwords provide a false sense of security while creating enormous human friction. We designed an identity layer that defaults to Google One-Tap for instant desktop sign-in, and auto-detects WhatsApp vs. SMS for mobile verification tokens.",
        outcome: "Eliminated 100% of forgotten-password support tickets and reduced latency by 78%.",
        details: [
          "Zero-friction WhatsApp OTP delivery with 1-tap copy token action.",
          "Graceful fallback to standard SMS and phone call verification after 20 seconds.",
          "WebAuthn Passkey biometric authentication for recurring monthly medical orders.",
        ],
      },
      {
        title: "Enforcing WCAG 2.1 AAA accessibility as a non-negotiable foundation",
        rationale:
          "Accessibility in healthcare design is not an optional polish; it directly dictates whether a patient gets their blood pressure monitor or nebulizer. We redesigned the entire component palette to meet 7:1 contrast ratios and 60px minimum touch targets.",
        outcome: "Achieved a verified 100/100 Lighthouse accessibility benchmark and praised by clinical partners.",
        details: [
          "60px minimum touch targets on all mobile buttons, inputs, and OTP numpad slots.",
          "High-contrast monochrome and high-visibility focused states for screen reader / keyboard navigation.",
          "Real-time voice-assisted feedback and clear error states written in plain, reassuring language.",
        ],
      },
    ],
    beforeAfterComparison: {
      before: [
        "Complex 8-character password creation with special characters required",
        "SMS-only OTP verification with frequent carrier delivery timeouts",
        "32px touch targets and failing contrast ratios on critical buttons",
        "34% drop-off caused by forgotten password reset loops",
      ],
      after: [
        "Passwordless identity verification with WhatsApp, SMS, and Passkeys",
        "Multi-channel fallback routing with under 3-second code arrival",
        "60px touch targets with WCAG 2.1 AAA 7:1 contrast compliance",
        "96.8% successful first-attempt authentication rate across all cohorts",
      ],
    },
    keyDeliverables: [
      "Passwordless multi-channel authentication modal",
      "Inclusive Design System tokenized with 60px minimum touch targets",
      "Bi-directional WhatsApp token verification sync",
      "Full screen-reader ARIA architecture and assistive voice cues",
      "Figma Tokens Studio library and component implementation specs",
    ],
    technologies: [
      "Figma Tokens Studio",
      "React",
      "TypeScript",
      "Radix UI Primitives",
      "Tailwind CSS",
      "WebAuthn API",
      "Axe Core Accessibility Suite",
    ],
    accentColor: "from-neutral-800 to-neutral-900",
  },
  {
    id: "gulf-logistics",
    slug: "gulf-ecommerce-logistics-ux",
    aliases: ["gulf-logistics-address-architecture", "gulf-logistics", "ane"],
    title: "Bridging Regional Address Infrastructure & Fulfillment Transparency in Gulf E-Commerce",
    subtitle: "Localized Map-Integrated Fulfillment Architecture & Bilingual RTL UX",
    year: "2023 - 2024",
    duration: "5 Months (Q4 2023–Q1 2024)",
    team: "Lead UX Architect, 1 GIS Specialist, 2 Frontend Developers",
    role: "Lead UX Designer & Information Architect",
    client: "AnE E-Commerce Platform",
    platform: "Geospatial Map & Bi-directional RTL Web",
    businessImpact: "94.2% First-Attempt Delivery Rate, -62% Courier Calls",
    tags: ["Spatial / Map UX", "UAE Address Infrastructure", "Bilingual RTL/LTR", "Logistics"],
    metricsBadges: ["94.2% Delivery Accuracy", "-55% Form Friction", "-62% Courier Calls", "RTL Parity"],
    summary:
      "Designed a localized map-integrated fulfillment architecture tailored to UAE address infrastructure, resolving regional logistics blind spots and accelerating checkout conversion.",
    impactMetrics: [
      {
        label: "First-Attempt Delivery Success",
        value: "94.2%",
        description: "Surged from 61% baseline via precision spatial pin-drop capture.",
      },
      {
        label: "Address Input Time",
        value: "35s avg",
        description: "Reduced form completion friction by 55% across mobile touchpoints.",
      },
      {
        label: "Support Deflection",
        value: "-62%",
        description: "Virtually eliminated courier 'Where is your villa?' phone calls.",
      },
      {
        label: "RTL Usability Score",
        value: "98.5%",
        description: "Native Arabic typography pairing with seamless mirror ergonomics.",
      },
    ],
    challenge:
      "In the UAE and GCC region, standard street addresses and zip codes don't reflect how residents navigate. Deliveries rely on building names, villa compounds, Makani numbers, and WhatsApp live pins. Western address fields caused massive delivery failures.",
    solution:
      "Built a custom spatial address picker uniting Google Maps satellite pin-dropping, Dubai Makani number auto-complete, landmark proximity detection, and a bi-directional Arabic RTL layout engine.",
    problemAnalysis: {
      overview:
        "Western e-commerce form patterns assume 'Street Name + House Number + Zip Code'. In Dubai, Abu Dhabi, and Riyadh, postal codes are largely absent; drivers rely on landmarks ('Opposite Al Wasl Park, Villa 12'). Western inputs caused 39% first-attempt delivery failures and extreme courier call overhead.",
      frictionPoints: [
        "Zip code field was mandatory despite having no functional meaning in the UAE, confusing users.",
        "Couriers made an average of 2.8 phone calls per order trying to locate residential villas.",
        "Arabic (RTL) users faced mirrored layout bugs and poor typography rendering on mobile.",
        "Delivery slots were vague, failing to indicate specific day vs. evening availability windows.",
      ],
    },
    decisions: [
      {
        title: "Replacing rigid text fields with interactive geospatial pin-dropping",
        rationale:
          "Rather than making users type descriptive essays about their location, we introduced an interactive GPS pin-drop modal that snaps to building footprints and pulls verified Makani 10-digit coordinates automatically.",
        outcome: "First-attempt delivery success skyrocketed from 61% to 94.2%.",
        details: [
          "Auto-detected current GPS location with high-precision satellite contour snapping.",
          "Makani number direct lookup for Dubai municipalities.",
          "Option to drop pin directly or enter prominent commercial landmark.",
        ],
      },
      {
        title: "True bi-directional RTL/LTR design parity without visual degradation",
        rationale:
          "Arabic localization cannot merely be a string translation; it requires full layout mirroring, appropriate typographic leading for Noto Sans Arabic, and culturally resonant icon placement.",
        outcome: "RTL satisfaction benchmarked at 98.5% with zero layout regression.",
        details: [
          "Engineered CSS logical properties and RTL-aware Framer Motion transitions.",
          "Refined micro-copy respecting regional dialect nuances across the Emirates.",
          "Seamless language toggle with instantaneous state persistence.",
        ],
      },
    ],
    beforeAfterComparison: {
      before: [
        "Western 5-field form requiring nonexistent zip codes",
        "No map integration or geospatial coordinate verification",
        "39% first-attempt delivery failure rate requiring multiple courier calls",
        "Clunky automated Google translation with broken RTL layout mirroring",
      ],
      after: [
        "1-tap interactive satellite map pin-drop with Makani number auto-detection",
        "Contextual landmark guidance and live WhatsApp location sync",
        "94.2% first-attempt delivery rate and -62% customer support inquiries",
        "Flawless bi-directional Arabic RTL and English typography system",
      ],
    },
    keyDeliverables: [
      "Interactive GCC spatial pin-drop picker with building contour snapping",
      "Makani number and UAE landmark auto-suggestion engine",
      "Bi-directional RTL/LTR design system with native Arabic font hierarchy",
      "Real-time courier GPS tracking interface with driver WhatsApp direct connect",
      "Click-and-Collect locker location overlay architecture",
    ],
    technologies: [
      "Figma",
      "Next.js App Router",
      "Google Maps API",
      "Makani Geocoding Service",
      "Framer Motion RTL",
      "Tailwind CSS RTL",
    ],
    accentColor: "from-neutral-800 to-neutral-900",
  },
  {
    id: "eden-blooms",
    slug: "event-decor-studio-experience",
    aliases: ["eden-and-blooms-studio", "eden-blooms", "eden"],
    title: "Eden & Blooms – Studio & Floral Experience",
    subtitle: "End-to-End Product Design, Frontend Engineering & Vercel Deployment",
    year: "2024",
    duration: "2 Months (Q3 2024)",
    team: "Solo Full-Cycle Designer & Frontend Engineer",
    role: "Full-Cycle Product Designer & Frontend Engineer",
    client: "Eden & Blooms Event Decor Studio",
    platform: "Next.js 14 Production Web & Edge Caching",
    businessImpact: "+85% Inquiry Velocity, Sub-Second Global TTFB",
    tags: ["Full-Cycle Design", "Creative Engineering", "Next.js & Motion", "Live Production"],
    metricsBadges: ["Custom Build", "Sub-second Vercel TTFB", "Interactive Gallery", "100% In Production"],
    summary:
      "Full-cycle product design and frontend development for an event decor studio. Designed in Figma and built from scratch with Next.js, Tailwind CSS, and Framer Motion. Features interactive service showcases, organic balloon & floral gallery viewers, booking flows, and high-performance Vercel cloud deployment.",
    impactMetrics: [
      {
        label: "Delivery Architecture",
        value: "Full Cycle",
        description: "Conceived in Figma, programmed from clean slate, deployed to Vercel.",
      },
      {
        label: "Cloud Performance",
        value: "99 / 100",
        description: "Lighthouse performance with sub-second page delivery worldwide.",
      },
      {
        label: "Inquiry Velocity",
        value: "+85%",
        description: "Frictionless inquiry booking flow directly synced with calendar.",
      },
      {
        label: "Visual Fidelity",
        value: "60 FPS",
        description: "Fluid physics-based balloon and floral interactive showcases.",
      },
    ],
    challenge:
      "The client required an opulent, editorial brand experience capable of showcasing artisanal balloon installations and luxury florals without sluggish loading times or cluttered multi-page navigation.",
    solution:
      "Designed and coded a high-speed motion portfolio featuring fluid horizontal gallery sliders, responsive booking drawers, and modern glass-morphism aesthetic built on Next.js 14.",
    problemAnalysis: {
      overview:
        "High-end event decor brands struggle with heavy media assets. Traditional WordPress portfolio templates loaded slowly (>6.5s load times), degrading the luxurious brand perception and causing mobile visitors to abandon before viewing custom installations.",
      frictionPoints: [
        "Heavy uncompressed photography degraded Core Web Vitals and caused high bounce rates.",
        "Clients had to fill out clunky external contact forms rather than selecting specific packages.",
        "Lack of interactive gallery navigation prevented customers from visualizing custom balloon color palettes.",
      ],
    },
    decisions: [
      {
        title: "Bespoke full-stack engineering over bloated website builders",
        rationale:
          "Pre-packaged templates carry immense JavaScript weight. Building from scratch with Next.js App Router, Tailwind, and Vercel Edge caching delivered an instant 60fps editorial browsing experience.",
        outcome: "Sub-second TTFB worldwide and a perfect 99 Lighthouse performance benchmark.",
        details: [
          "Edge-cached optimized modern image formats (AVIF/WebP) with blur-up placeholders.",
          "Zero layout shift fluid masonry galleries for event installations.",
          "Mobile-first gesture-driven swipe interactions.",
        ],
      },
      {
        title: "Frictionless consultation drawer tied directly to package configurations",
        rationale:
          "Rather than forcing clients onto generic contact pages, clicking any floral arrangement or luxury balloon arch opens a contextual consultation drawer pre-filled with package specifications.",
        outcome: "Booking inquiry conversion increased by +85% in the first 60 days.",
        details: [
          "Contextual drawer keeps users on the visual page while capturing project scope.",
          "Dynamic pricing estimator and date availability calendar integration.",
        ],
      },
    ],
    beforeAfterComparison: {
      before: [
        "6.5s load time on traditional WordPress hosting",
        "Clunky generic contact form with no package pre-selection",
        "Static image thumbnails without interactive viewing states",
        "High bounce rate on high-intent mobile visitors",
      ],
      after: [
        "Sub-second delivery with Next.js 14 on Vercel Edge",
        "Contextual package booking drawer boosting inquiries by +85%",
        "Fluid 60fps gesture-driven showcase with instant image previews",
        "Fully deployed in production with continuous git CI/CD pipeline",
      ],
    },
    keyDeliverables: [
      "High-end bespoke editorial visual identity designed in Figma",
      "Fluid 60FPS motion showcase powered by Framer Motion",
      "Interactive consultation booking drawer flow with calendar sync",
      "Full CI/CD pipeline on Vercel with edge image optimization",
    ],
    technologies: [
      "Figma",
      "Next.js App Router",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel Edge Network",
    ],
    accentColor: "from-neutral-800 to-neutral-900",
    liveUrl: "https://edenandblooms.vercel.app/",
  },
];
