import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "one-lakh-single-day",
    title: "₹1 Lakh in a Single Day vs. One Month",
    subtitle: "High-Velocity Checkout Optimization & Milestone Gamification",
    client: "Direct-to-Consumer Growth Experiment",
    tags: ["E-Commerce", "Checkout UX", "Milestone Gamification"],
    summary:
      "Engineered an ultra-lean, friction-free checkout flow coupled with dynamic milestone incentives and real-time urgency mechanics, propelling a standard monthly GMV run-rate into a single record-breaking 24-hour campaign.",
    impactMetrics: [
      {
        label: "Single-Day GMV",
        value: "₹1,00,000+",
        description: "Surpassed the typical 30-day revenue baseline within 24 hours.",
      },
      {
        label: "Checkout Drop-off Reduction",
        value: "-44%",
        description: "Streamlined 4 checkout steps into a contextual single-page flow.",
      },
      {
        label: "Average Order Value (AOV)",
        value: "+27%",
        description: "Dynamic threshold-based cart rewards boosted basket sizes.",
      },
      {
        label: "Mobile Conversion Rate",
        value: "4.6%",
        description: "Up from 1.8% baseline via one-tap mobile payment triggers.",
      },
    ],
    challenge:
      "The business was facing severe cart abandonment on mobile devices (over 72% drop-off at payment choice) and stagnant monthly sales cycles. The existing checkout required redundant multi-step form fills and failed to incentivize larger basket thresholds during high-traffic promotional bursts.",
    solution:
      "Redesigned the complete mobile transaction loop: introduced progressive disclosure for customer details, integrated dynamic progress bars showing unlocked tier perks (free express shipping, bonus gifts), and implemented instant biometric UPI/card checkout states.",
    keyDeliverables: [
      "Single-page contextual checkout architecture with zero layout shift",
      "Dynamic cart progression bar with real-time gamified tier unlocks",
      "One-click express mobile checkout integration with smart auto-fill",
      "Real-time countdown timer & inventory scarcity cues calibrated for ethical UX",
      "Post-purchase referral loop generating 18% viral loop re-engagement",
    ],
    technologies: [
      "Next.js App Router",
      "Framer Motion Micro-interactions",
      "Tailwind CSS",
      "Stripe / Razorpay API",
      "Mixpanel Funnel Analytics",
    ],
    accentColor: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "project-2",
    slug: "omron-accessibility-auth",
    title: "Optimizing E-Commerce Accessibility & Authentication for High-Conversion Checkouts (OMRON)",
    subtitle: "WCAG 2.1 AAA Healthcare Commerce & Multi-Channel Identity UX",
    client: "OMRON Healthcare Ecosystem",
    tags: ["Accessibility", "Multi-Channel Auth", "Onboarding UX"],
    summary:
      "Spearheaded the redesign of OMRON's medical device e-commerce experience, establishing WCAG 2.1 AAA accessible interaction patterns, passwordless multi-channel authentication (WhatsApp, SMS OTP, Passkeys), and seamless doctor-patient prescription checkout flows.",
    impactMetrics: [
      {
        label: "Authentication Success Rate",
        value: "96.8%",
        description: "Eliminated forgotten-password churn with smart multi-channel OTPs.",
      },
      {
        label: "Senior / Accessibility Score",
        value: "100 / 100",
        description: "Full compliance with WCAG 2.1 AAA contrast and keyboard navigation.",
      },
      {
        label: "Repeat Order Velocity",
        value: "+52%",
        description: "1-click re-ordering for chronic health monitoring accessories.",
      },
      {
        label: "Prescription Upload Time",
        value: "12s avg",
        description: "AI-assisted prescription verification slashed friction by 68%.",
      },
    ],
    challenge:
      "OMRON's customer demographic skews heavily towards senior citizens and caregivers who struggle with complex multi-factor authentication, small touch targets, and opaque prescription verification bottlenecks during critical medical device purchases.",
    solution:
      "Designed an empathy-first healthcare checkout suite: oversized touch targets with 60px minimums, high-contrast readable typography, seamless WhatsApp-triggered instant authentication logins, and accessible voice-assisted field guidance.",
    keyDeliverables: [
      "Inclusive Design System tokenized with high-contrast, scalable type ramps",
      "Passwordless multi-channel authentication modal with WhatsApp & biometric sync",
      "Prescription OCR previewer with real-time feedback and pharmacist validation queue",
      "Accessible assistive keyboard navigation & full screen-reader ARIA architecture",
      "Doctor-to-Patient shared cart link generators for verified clinical devices",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Radix UI Primitives",
      "Tailwind CSS Design System",
      "WebAuthn / OTP APIs",
      "Axe Core & Lighthouse CI",
    ],
    accentColor: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "project-3",
    slug: "gulf-ecommerce-logistics",
    title: "Bridging the Cultural & Logistics Gap in Gulf E-Commerce",
    subtitle: "Hyperlocal UAE Address Infrastructure & Omnichannel Delivery UX",
    client: "MENA Cross-Border Retailer",
    tags: ["Map Integration", "UAE Address Infrastructure", "Omnichannel Delivery"],
    summary:
      "Engineered an intuitive spatial address-capture system tailored to the GCC region's unique landmark-based navigation habits, integrating interactive map pin-dropping, Makani number support, and bilingual Arabic/English responsive layouts.",
    impactMetrics: [
      {
        label: "First-Attempt Delivery Success",
        value: "94.2%",
        description: "Up from 61% baseline due to exact geospatial pin-drop capture.",
      },
      {
        label: "Address Input Completion Time",
        value: "35 seconds",
        description: "Reduced form completion friction by 55% across mobile devices.",
      },
      {
        label: "Support Ticket Deflection",
        value: "-62%",
        description: "Drastic drop in 'Where is my order?' courier location calls.",
      },
      {
        label: "RTL UX Usability Score",
        value: "98.5%",
        description: "Seamless bi-directional typography and localized interaction paradigms.",
      },
    ],
    challenge:
      "In the UAE and Gulf region, traditional postal codes are non-standardized. Customers rely heavily on descriptive landmarks, villa numbers, and WhatsApp live locations. Standard Western e-commerce address fields caused 39% delivery failures and high courier call overhead.",
    solution:
      "Replaced rigid text inputs with an interactive hybrid address picker combining Google Maps / What3Words / Makani number geocoding, landmark auto-suggestions, and one-tap WhatsApp coordinate sharing with full Arabic (RTL) typography parity.",
    keyDeliverables: [
      "Interactive GCC spatial pin-drop picker with building shape recognition",
      "Makani number and UAE landmark auto-complete integration",
      "Bi-directional RTL/LTR design system with native Arabic font pairing",
      "Real-time courier GPS tracking interface with driver WhatsApp direct connect",
      "Flexible Click-and-Collect locker point selection map overlay",
    ],
    technologies: [
      "Next.js App Router",
      "Google Maps JavaScript API",
      "Framer Motion RTL Engine",
      "Tailwind RTL Plugins",
      "Zod Geolocation Validator",
    ],
    accentColor: "from-emerald-500/20 to-teal-500/20",
  },
];
