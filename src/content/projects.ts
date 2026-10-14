import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "omron-checkout",
    slug: "omron-checkout-architecture",
    aliases: ["omron", "omron-checkout"],
    title: "Overhauling E-Commerce Checkout Architecture to Drive 30x Daily Purchase Velocity",
    subtitle: "Milestone-Driven Quick-Commerce & Conversion Architecture",
    year: "2024",
    duration: "4 Months (Q1–Q2 2024)",
    team: "Lead Product Designer, 1 Frontend Lead, 1 Backend Architect, 1 Product Manager",
    role: "Lead Product Designer — Checkout Architecture & CRO",
    client: "OMRON Medical Devices",
    tags: ["E-Commerce UX", "Checkout Architecture", "CRO", "Fintech / Payments"],
    metricsBadges: ["30x Velocity Surge", "-44% Drop-Off", "+27% AOV", "0 Latency Jumps"],
    summary:
      "Redesigned OMRON's medical e-commerce checkout architecture by decoupling legacy multi-step profile loops into a streamlined milestone-driven quick-commerce flow, unlocking a 30x daily purchase velocity surge.",
    impactMetrics: [
      {
        label: "Daily Purchase Velocity",
        value: "30x",
        description: "Decoupled profile validation hurdles into asynchronous checkout states.",
      },
      {
        label: "Checkout Funnel Drop-off",
        value: "-44%",
        description: "Collapsing 4 disjointed screens into a single contextual progressive accordion.",
      },
      {
        label: "Average Order Value (AOV)",
        value: "+27%",
        description: "Dynamic threshold-based cart rewards and gamified shipping milestones.",
      },
      {
        label: "Mobile Payment Success",
        value: "98.4%",
        description: "Biometric UPI / Apple Pay triggers with automated error fallbacks.",
      },
    ],
    challenge:
      "OMRON's medical commerce portal suffered from an archaic 4-step linear checkout flow. Users were forced through mandatory profile verification, prescription blockers, and redundant address forms, driving a 72% mobile abandonment rate.",
    solution:
      "Engineered a milestone-driven express checkout architecture: decoupled authentication from the cart, introduced instant biometric UPI payment intents, and placed interactive tier-unlock gamification directly above the payment fold.",
    problemAnalysis: {
      overview:
        "Medical device shoppers are frequently urgent purchasers (caregivers, patients managing chronic hypertension). The baseline checkout had a 72% mobile abandonment rate due to 4 sequential full-page reloads, mandatory password creation before cart review, and ambiguous shipping delivery dates.",
      frictionPoints: [
        "Mandatory 6-field registration gate before cart review caused 41% immediate bounces.",
        "Prescription requirements halted 28% of non-prescription OTC medical purchases needlessly.",
        "Lack of real-time inventory and delivery date clarity created cognitive hesitation at the payment step.",
        "Mobile payment gateways were buried inside iframe popups with high failure rates.",
      ],
    },
    decisions: [
      {
        title: "Decoupling account creation from the transaction loop",
        rationale:
          "Forcing user registration during checkout treats a customer like a data record rather than a human making a critical medical purchase. We opted for transaction completion first, converting orders via phone OTP and offering passwordless magic-link profile creation post-payment.",
        outcome: "Slashing initial checkout barrier led to an immediate 44% reduction in checkout drop-off.",
        details: [
          "Introduced single-field phone/email identity resolution.",
          "Asynchronous profile generation: guest checkouts automatically link if past transaction history matches.",
          "Zero layout shifts or redirect round-trips to auth subdomains.",
        ],
      },
      {
        title: "Milestone-driven progressive disclosure over multi-page navigation",
        rationale:
          "Multi-page checkout steps trigger loss of cart context and page reload friction. We redesigned the funnel into a unified single-canvas progressive accordion that keeps shipping, delivery timeline, and order summary visible at all times.",
        outcome: "Decreased time-to-purchase from 4.8 minutes to under 55 seconds on mobile.",
        details: [
          "Smart address auto-complete using regional pincode database lookup.",
          "Contextual delivery guarantees displayed next to shipping choices (e.g. 'Delivered by Tomorrow, 11 AM').",
          "Dynamic tier-unlock progress bar that displays free express shipping and clinical probe accessories as basket value increases.",
        ],
      },
      {
        title: "Native biometric UPI intents with automated failover",
        rationale:
          "In India and regional markets, UPI and mobile wallets account for >80% of digital transactions. Traditional payment gateway redirects often fail due to banking session timeouts. We integrated direct UPI deep-linking with an instant fallback to saved cards.",
        outcome: "Mobile payment success rate leaped to 98.4%, supporting record peak surge volumes.",
        details: [
          "One-tap deep-links for Google Pay, PhonePe, and Paytm directly on checkout.",
          "Persistent polling state machine showing real-time authorization status with clear countdown timer.",
          "Zero-friction automated retry state preventing cart re-entry on intermittent bank gateway hiccups.",
        ],
      },
    ],
    beforeAfterComparison: {
      before: [
        "4 separate full-page reload steps (Cart → Login → Shipping → Gateway)",
        "Mandatory password creation before entering shipping address",
        "Static cart with zero order incentive or accessory recommendations",
        "Average checkout completion time: 4 minutes 50 seconds",
      ],
      after: [
        "Single-page responsive accordion with zero layout shift",
        "Passwordless guest checkout with automated post-purchase profile linking",
        "Gamified milestone bar boosting AOV by +27%",
        "Average checkout completion time: under 55 seconds",
      ],
    },
    keyDeliverables: [
      "Zero-layout-shift single page progressive checkout architecture",
      "Dynamic milestone rewards progress engine",
      "Instant biometric UPI/Card one-tap checkout flow",
      "Clinical device verification and prescription state machine",
      "Design tokens and production-ready React component specs",
    ],
    technologies: [
      "Figma Design System",
      "Next.js App Router",
      "Framer Motion",
      "Tailwind CSS",
      "Stripe / Razorpay UPI",
      "Mixpanel Funnel Telemetry",
    ],
    accentColor: "from-neutral-800 to-neutral-900",
  },
  {
    id: "omron-identity",
    slug: "omron-identity-architecture",
    aliases: ["omron-v2", "omron-identity"],
    title: "Eliminating Onboarding Friction via Multi-Channel Identity Architecture",
    subtitle: "WCAG 2.1 AAA Accessibility & Frictionless Auth Infrastructure",
    year: "2024",
    duration: "3 Months (Q2 2024)",
    team: "Lead UX Specialist, Accessibility Auditor, 1 Full-Stack Engineer",
    role: "Product Designer & Identity UX Specialist",
    client: "OMRON Healthcare",
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
    slug: "gulf-logistics-address-architecture",
    aliases: ["ane", "gulf-logistics"],
    title: "Bridging Regional Address Infrastructure & Fulfillment Transparency in Gulf E-Commerce",
    subtitle: "Localized Map-Integrated Fulfillment Architecture & Bilingual RTL UX",
    year: "2023 - 2024",
    duration: "5 Months (Q4 2023–Q1 2024)",
    team: "Lead UX Architect, 1 GIS Specialist, 2 Frontend Developers",
    role: "Lead UX Designer & Information Architect",
    client: "AnE E-Commerce Platform",
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
    slug: "eden-and-blooms-studio",
    aliases: ["eden", "eden-blooms"],
    title: "Eden & Blooms – Studio & Floral Experience",
    subtitle: "End-to-End Product Design, Frontend Engineering & Vercel Deployment",
    year: "2024",
    duration: "2 Months (Q3 2024)",
    team: "Solo Full-Cycle Designer & Frontend Engineer",
    role: "Full-Cycle Product Designer & Frontend Engineer",
    client: "Eden & Blooms Event Decor Studio",
    tags: ["0 → 1 Design", "Creative Engineering", "Next.js & Motion", "Live Production"],
    metricsBadges: ["0 → 1 Custom Build", "Sub-second Vercel TTFB", "Interactive Gallery", "100% In Production"],
    summary:
      "Full-cycle product design and frontend development for an event decor studio. Designed in Figma and built from scratch with Next.js, Tailwind CSS, and Framer Motion. Features interactive service showcases, organic balloon & floral gallery viewers, booking flows, and high-performance Vercel cloud deployment.",
    impactMetrics: [
      {
        label: "Delivery Architecture",
        value: "0 → 1",
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
        title: "Bespoke 0 → 1 engineering over bloated website builders",
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
