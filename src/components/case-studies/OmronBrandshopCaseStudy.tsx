"use client";

import * as React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { siteConfig } from "@/content/site-config";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
  ShoppingBag,
  CreditCard,
  Truck,
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight,
  Sliders,
  Scale,
  RefreshCw,
  Eye,
  FileText,
  Workflow,
  Sparkles,
} from "lucide-react";

interface Props {
  project: Project;
  nextProject: Project;
  projectNumber: string;
  totalProjects: string;
}

export function OmronBrandshopCaseStudy({
  project,
  nextProject,
  projectNumber,
  totalProjects,
}: Props) {
  const [activeJourneyTab, setActiveJourneyTab] = React.useState<number>(0);

  const journeySteps = [
    {
      id: "plp",
      stepNumber: "01",
      title: "Product Discovery",
      subtitle: "Listing & Navigation Architecture",
      observedProblem:
        "Dense, inconsistent product cards and fragmented category hierarchies. Shoppers struggled to identify key device differences (e.g. standard vs. connected bluetooth monitors) at a glance.",
      consideration:
        "Medical device shoppers are often buying under stress or urgency (caregivers, patients managing hypertension). Visual scannability of key clinical specs is paramount.",
      proposedChange:
        "Standardized card anatomy with clear typographic hierarchy, prominent display of primary clinical metric, uncluttered category filtering, and immediate stock visibility.",
      rationale:
        "Reduces cognitive load upfront, allowing users to quickly filter and evaluate options before diving into detailed specs.",
      knownConstraints:
        "Catalog depth variations between diagnostic categories and regional product availability restrictions.",
      componentHighlights: [
        "Consistent badge anatomy: Bluetooth, Clinically Validated, Cuff Size",
        "Clear primary CTA with transparent price and shipping cue",
        "Direct category breadcrumb trail preserving browsing context",
      ],
      wireframeTag: "discovery-plp.fig",
    },
    {
      id: "pdp",
      stepNumber: "02",
      title: "Product Evaluation",
      subtitle: "PDP, Cross-Selling & Comparison",
      observedProblem:
        "Product detail pages operated in isolation. They lacked complementary accessory cross-selling (e.g., extra cuffs, power adapters) and provided no side-by-side alternative comparison.",
      consideration:
        "Medical diagnostics require high purchasing confidence. A patient cannot easily determine if a cuff size or accessory is compatible without contextual guidance.",
      proposedChange:
        "Engineered modular PDP sections: clear clinical specifications, dedicated compatible accessories cross-sell tray, and a proposed comparison matrix (evaluated concept).",
      rationale:
        "Helps users confirm technical compatibility, boosts basket completeness without aggressive upselling, and reinforces medical confidence.",
      knownConstraints:
        "Comparison data matrix was designed and proposed; implementation was held pending backend catalog schema standardization.",
      componentHighlights: [
        "Interactive accessory drawer showing direct device compatibility",
        "Clinical spec matrix: memory capacity, irregular heartbeat alert",
        "Proposed side-by-side comparison drawer (Concept Stage)",
      ],
      wireframeTag: "evaluation-pdp.fig",
    },
    {
      id: "cart",
      stepNumber: "03",
      title: "Purchase Preparation",
      subtitle: "Cart & Shipping Continuity",
      observedProblem:
        "Abrupt transition from product page into an opaque cart. Delivery timelines, accessory additions, and shipping costs were disconnected and unclear.",
      consideration:
        "Customers must feel in complete control of their order. Gaps in cost clarity or delivery expectations introduce hesitation immediately before checkout.",
      proposedChange:
        "Streamlined slide-over and inline cart layout maintaining clear itemized pricing, transparent delivery estimation, and frictionless transition into address entry.",
      rationale:
        "Ensures complete continuity between selection and purchasing, eliminating unexpected fee surprises and maintaining momentum.",
      knownConstraints:
        "Regional carrier API latency for real-time pin-code delivery date estimates.",
      componentHighlights: [
        "Persistent order summary with zero ambiguous line items",
        "Instant delivery estimation by entering regional pin code",
        "Accessory addition prompt directly within cart tray",
      ],
      wireframeTag: "preparation-cart.fig",
    },
    {
      id: "payment",
      stepNumber: "04",
      title: "Transaction Completion",
      subtitle: "Payment, Success & Failure States",
      observedProblem:
        "Generic payment step with ambiguous gateway handoffs. Payment failure screens offered zero recovery path, causing dropped carts and duplicate payment attempts.",
      consideration:
        "Payment is the highest-anxiety step in e-commerce, especially for higher-ticket health appliances. Failure states must reassure and guide, not abandon the user.",
      proposedChange:
        "Clean, structured payment selection (UPI, Cards, NetBanking, COD). Designed dedicated failure state that preserves user input, explains the failure reason, and allows one-click retry.",
      rationale:
        "Turns a dead-end failure into an actionable recovery path, preventing customer panic and safeguarding cart integrity.",
      knownConstraints:
        "Third-party payment aggregator redirect parameters and banking iframe timeout limitations.",
      componentHighlights: [
        "Unambiguous payment method selector with instant validation",
        "Actionable Failure State: Retry without losing form inputs",
        "Comprehensive Success State with order reference and tracking timeline",
      ],
      wireframeTag: "transaction-checkout.fig",
    },
    {
      id: "edge-cases",
      stepNumber: "05",
      title: "Edge Cases & Exceptions",
      subtitle: "Handling Non-Ideal Scenarios",
      observedProblem:
        "Legacy UI had no graceful handling for out-of-stock variations, network drops during payment, or ambiguous address entries.",
      consideration:
        "Real-world e-commerce involves errors, stock fluctuations, and network instability. Designing the happy path is only half the job.",
      proposedChange:
        "Defined explicit UI states for: out-of-stock variations with comparable in-stock recommendations, session timeout recovery, and multi-tier address validation warnings.",
      rationale:
        "Ensures the interface remains resilient and helpful even when external systems or inventory fail.",
      knownConstraints:
        "Automated comparable product recommendation algorithm was dependent on client inventory management APIs.",
      componentHighlights: [
        "Out-of-stock state with 'Notify Me' and comparable in-stock alternative cards",
        "Address lookup fallback allowing manual street entry on unmapped pins",
        "Session recovery banner if user returns after payment gateway drop",
      ],
      wireframeTag: "edge-cases.fig",
    },
  ];

  return (
    <article className="min-h-screen bg-black text-white pt-24 sm:pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Top Sticky Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 text-xs font-mono">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
          <div className="flex items-center gap-3 text-neutral-500">
            <span>FLAGSHIP CASE STUDY [{projectNumber} / {totalProjects}]</span>
            <span className="text-neutral-700">•</span>
            <span className="text-white font-bold">{project.year}</span>
          </div>
        </div>

        {/* TL;DR Executive Metric Header */}
        <section
          aria-label="TL;DR Executive Summary"
          className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6"
        >
          <div className="flex items-center justify-between pb-4 border-b border-neutral-900 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white font-bold uppercase tracking-widest">
                TL;DR Project Retrospective
              </span>
            </div>
            <span className="text-neutral-500 uppercase tracking-wider">
              Verified Deliverables &amp; Decisions
            </span>
          </div>

          {/* 4-Item Scannable Grid: Role, Assignment, Scope, Evidence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                01 / Role
              </span>
              <span className="text-white font-bold block text-sm leading-snug">
                Product Designer (UI &amp; UX)
              </span>
              <span className="text-neutral-500 block text-[10px] pt-1">
                Visual Execution &amp; UX Solutions
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                02 / Assignment
              </span>
              <span className="text-white font-bold block text-sm leading-snug">
                Reporting Manager (COO)
              </span>
              <span className="text-neutral-500 block text-[10px] pt-1">
                Direct Executive Mandate
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                03 / Journey Scope
              </span>
              <span className="text-white font-bold block text-sm leading-snug">
                PLP to Payment Completion
              </span>
              <span className="text-neutral-500 block text-[10px] pt-1">
                PLP, PDP, Cart, Shipping, States
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                04 / Multi-Team Review
              </span>
              <span className="text-white font-bold block text-sm leading-snug">
                IN • US • JP Teams
              </span>
              <span className="text-neutral-500 block text-[10px] pt-1">
                Documented 3-Level Review
              </span>
            </div>
          </div>

          {/* Key Executive Takeaway Box */}
          <div className="p-4 rounded-xl bg-black border border-neutral-900 text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
            <strong className="text-white uppercase tracking-wider block mb-1">
              Executive Retrospective Notice:
            </strong>
            This case study is a transparent, fact-based design retrospective. It prioritizes UX problem-solving, interaction design decisions, stakeholder negotiation, and verified design delivery. In accordance with strict portfolio integrity, all quantitative business telemetry is reported strictly as unreleased/unverified rather than using fabricated percentages.
          </div>
        </section>

        {/* 1. Hero Section */}
        <header className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-xs font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Client: OMRON Healthcare</span>
              </span>
              <a
                href="https://www.omronbrandshop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950 hover:bg-white hover:text-black hover:border-white transition-colors text-xs font-mono text-neutral-300"
              >
                <span>omronbrandshop.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.04]">
              OMRON Brandshop E-Commerce Experience Redesign
            </h1>

            <p className="text-base sm:text-xl text-neutral-400 font-normal max-w-3xl leading-relaxed">
              Improving the end-to-end shopping journey from product discovery through checkout and payment, while elevating brand perception to reflect clinical medical precision.
            </p>
          </div>

          {/* Scope & Verified Deliverables Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 bg-neutral-950 border border-neutral-800 rounded-2xl">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Project Scope
              </div>
              <div className="text-sm font-bold text-white font-mono">
                Full Funnel (PLP → Pay)
              </div>
              <p className="text-[11px] font-mono text-neutral-400 leading-snug">
                PLP, PDP, Cart, Shipping, Payment
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Stakeholder Review
              </div>
              <div className="text-sm font-bold text-white font-mono">
                3 Review Tiers
              </div>
              <p className="text-[11px] font-mono text-neutral-400 leading-snug">
                India, US &amp; Japan Design-System
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Design Delivery
              </div>
              <div className="text-sm font-bold text-white font-mono">
                Responsive UI Specs
              </div>
              <p className="text-[11px] font-mono text-neutral-400 leading-snug">
                Desktop, Mobile &amp; Edge States
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Business Telemetry
              </div>
              <div className="text-sm font-bold text-neutral-300 font-mono">
                Unpublished
              </div>
              <p className="text-[11px] font-mono text-neutral-500 leading-snug">
                Transparently reported without fabrication
              </p>
            </div>
          </div>
        </header>

        {/* 2. Project Overview and Context */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              01 / Project Overview &amp; Context
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              The Assignment &amp; Personal Ownership.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              <p>
                The project was assigned directly by my reporting manager, the Chief Operating Officer (COO). The core mandate was straightforward yet challenging: <strong className="text-white">improve the customer shopping journey from initial product selection through final checkout and payment</strong>, while overhauling the visual interface to represent OMRON’s brand stature.
              </p>
              <p>
                OMRON is a recognized global pioneer in healthcare technology and clinically validated diagnostics. However, the existing digital brandshop interface lagged behind the physical product line: it lacked visual polish, suffered from fragmented layout cues, and failed to communicate the premium quality and clinical reliability expected of the brand.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4 font-mono text-xs">
              <span className="text-white font-bold uppercase tracking-wider block pb-2 border-b border-neutral-900">
                My Role &amp; Contribution Boundary
              </span>
              <ul className="space-y-2.5 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span>
                  <span><strong>Visual Design:</strong> Created responsive high-fidelity UI screens and component specifications across all key touchpoints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span>
                  <span><strong>UX Proposals:</strong> Analyzed journey gaps and proposed structural improvements across listing, PDP, cart, shipping, and payment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span>
                  <span><strong>Edge Case Definition:</strong> Specified non-ideal states (payment timeouts, stockouts, address errors).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span>
                  <span><strong>Client &amp; Stakeholder Refinement:</strong> Iterated designs through multi-level reviews with India, US, and Japan teams.</span>
                </li>
                <li className="flex items-start gap-2 pt-2 border-t border-neutral-900 text-neutral-500">
                  <span>ℹ</span>
                  <span><em>Role Boundaries:</em> I did not claim product ownership, formal user research leadership, or global design-system architecture ownership.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Problems Identified */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              02 / Design Observations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Identified UX Friction &amp; Problem Categories.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl">
              These issues represent observations grounded in design experience and heuristic inspection, rather than proven statistical causes of abandonment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category A */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-900 text-xs font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span className="font-bold text-white uppercase tracking-wider">
                  A. Purchase Friction
                </span>
              </div>
              <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Confusing Navigation:</strong> Cluttered category menus that obscured diagnostic device types.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Unclear CTAs:</strong> Inconsistent button styling and competing secondary action links.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Lengthy Checkout:</strong> Redundant form fields and lack of inline validation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Continuity Gaps:</strong> Disconnect between selecting a product and transitioning to payment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Customer Uncertainty:</strong> Ambiguous shipping costs and delivery expectations prior to payment.</span>
                </li>
              </ul>
            </div>

            {/* Category B */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-900 text-xs font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span className="font-bold text-white uppercase tracking-wider">
                  B. Brand Perception
                </span>
              </div>
              <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Lack of Medical Polish:</strong> Interface felt like an outdated generic storefront rather than a premier healthcare brand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Uncalibrated Hierarchy:</strong> Poor typographical scale, low contrast on specs, and unorganized feature lists.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Trust Communication:</strong> Warranties, clinical certifications, and authenticity seals were buried or inconsistently applied.</span>
                </li>
              </ul>
            </div>

            {/* Category C */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-900 text-xs font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span className="font-bold text-white uppercase tracking-wider">
                  C. Discovery &amp; Evaluation
                </span>
              </div>
              <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>Missing Cross-Sells:</strong> PDPs did not suggest essential accessories (replacement cuffs, extra probes, adapters).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>No Comparison Support:</strong> Shoppers had no way to compare similar monitors side-by-side to evaluate technical differences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span><strong>High Hesitation:</strong> Inability to verify compatibility led to decision paralysis and stalled journeys.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Core Insight & Working Hypothesis */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              03 / Working Design Hypothesis
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              The Guiding Principle for the Redesign.
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
            <blockquote className="text-lg sm:text-2xl text-white font-medium italic leading-relaxed border-l-2 border-white pl-6">
              &ldquo;An effective e-commerce experience must do more than present products attractively. It should help customers evaluate their options, feel confident in their decisions, and progress through checkout with clarity.&rdquo;
            </blockquote>

            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Working Hypothesis — Not an empirical research finding
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 border-t border-neutral-900 text-xs font-mono">
              <div className="p-3 bg-black border border-neutral-900 rounded-lg space-y-1">
                <span className="text-white font-bold block">1. Discovery</span>
                <span className="text-neutral-400 text-[11px] block">Structured filters &amp; side-by-side comparison cues</span>
              </div>
              <div className="p-3 bg-black border border-neutral-900 rounded-lg space-y-1">
                <span className="text-white font-bold block">2. Related Items</span>
                <span className="text-neutral-400 text-[11px] block">Clear cross-sell accessory compatibility on PDP</span>
              </div>
              <div className="p-3 bg-black border border-neutral-900 rounded-lg space-y-1">
                <span className="text-white font-bold block">3. Continuity</span>
                <span className="text-neutral-400 text-[11px] block">Seamless visual context between selection and cart</span>
              </div>
              <div className="p-3 bg-black border border-neutral-900 rounded-lg space-y-1">
                <span className="text-white font-bold block">4. Checkout</span>
                <span className="text-neutral-400 text-[11px] block">Transparent pricing, shipping, and payment states</span>
              </div>
              <div className="p-3 bg-black border border-neutral-900 rounded-lg space-y-1">
                <span className="text-white font-bold block">5. Brand Trust</span>
                <span className="text-neutral-400 text-[11px] block">Medical precision aesthetic and consistent typography</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Design Strategy */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              04 / Design Strategy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Strategic Pillars of the Solution.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl">
              Grounded design directions formulated to guide UI execution, without representing them as formal workshop frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Pillar 01
              </span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                Improve Shopping Clarity
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-mono">
                Make product discovery, specification evaluation, and purchasing options easy to parse quickly. Focus on readability of clinical specs so users feel certain about their choice.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Pillar 02
              </span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                Strengthen Purchase Journey
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-mono">
                Build unbroken visual and informational continuity across Product Listing, PDP, Cart, Shipping, and Payment. Ensure order summary and costs remain clear at every transition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Pillar 03
              </span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                Elevate Brand Presentation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-mono">
                Instill medical precision through restrained color palettes, high-contrast typography, generous whitespace, and structured layouts that convey clinical authenticity.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-black border border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span><strong>Pragmatic Constraint:</strong> Balancing user experience principles with business goals, client feedback, and stakeholder preferences.</span>
          </div>
        </section>

        {/* 6. Exploration Across the Shopping Journey */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              05 / Journey Exploration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Deconstructing the Shopping Experience.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl">
              Examining the redesign through the customer’s actual decision-making steps, from initial discovery to post-transaction states.
            </p>
          </div>

          {/* Interactive Step Navigator */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-900 pb-4">
            {journeySteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveJourneyTab(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeJourneyTab === idx
                    ? "bg-white text-black font-bold shadow-md"
                    : "bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700"
                }`}
              >
                <span>{step.stepNumber}. {step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Exploration Card */}
          {(() => {
            const current = journeySteps[activeJourneyTab];
            return (
              <div className="p-6 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-900">
                  <div>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
                      Stage {current.stepNumber} of 05
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {current.title}: {current.subtitle}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded bg-black border border-neutral-800 text-xs font-mono text-neutral-400 shrink-0">
                    {current.wireframeTag}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Problem, Consideration, Change, Rationale */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-red-400 flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Observed Problem / Legacy State</span>
                      </span>
                      <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed bg-black/50 p-3.5 rounded-lg border border-neutral-900">
                        {current.observedProblem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-blue-400 flex items-center gap-2">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Design Consideration</span>
                      </span>
                      <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed bg-black/50 p-3.5 rounded-lg border border-neutral-900">
                        {current.consideration}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-green-400 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Proposed Design Change</span>
                      </span>
                      <p className="text-xs sm:text-sm font-mono text-neutral-200 leading-relaxed bg-black/50 p-3.5 rounded-lg border border-neutral-900">
                        {current.proposedChange}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Design Rationale</span>
                      </span>
                      <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                        {current.rationale}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Architectural UI Artifact & Wireframe Preview */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="p-5 rounded-xl bg-black border border-neutral-800 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-900 font-mono text-xs">
                        <span className="text-neutral-400 uppercase tracking-wider">
                          Key Component Anatomy
                        </span>
                        <span className="text-[10px] text-neutral-600">UI Specification</span>
                      </div>

                      <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
                        {current.componentHighlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-white mt-0.5">▪</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
                        <strong>Known Constraints:</strong> {current.knownConstraints}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* 7. Key Design Decision and Trade-offs: Balancing UX and Business Goals */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              06 / Trade-Off Analysis
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Balancing User Experience and Business Goals.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl">
              An inside look into negotiating UI decisions, client expectations, and commercial objectives to reach a grounded compromise.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-8">
            <div className="space-y-3 pb-6 border-b border-neutral-900">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
                Decision Case Study
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Homepage Information Architecture: Prominent USP Section vs. Immediate Product Discovery
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stakeholder View */}
              <div className="p-5 rounded-xl bg-black border border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider pb-2 border-b border-neutral-900">
                  <span className="w-2 h-2 rounded-full bg-neutral-500" />
                  <span>Stakeholder / Business Preference</span>
                </div>
                <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                  Stakeholders strongly preferred allocating prominent above-the-fold screen space immediately after the hero banner to a comprehensive <strong>USP &amp; Brand Trust section</strong> (highlighting official brandshop authenticity, warranty backing, and medical certification).
                </p>
                <div className="text-[11px] font-mono text-neutral-500">
                  <strong>Business Goal:</strong> Reassure first-time shoppers who might be skeptical of third-party sellers by immediately emphasizing that this is OMRON’s official direct store.
                </div>
              </div>

              {/* Designer View */}
              <div className="p-5 rounded-xl bg-black border border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider pb-2 border-b border-neutral-900">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>Designer’s Concern &amp; UX Analysis</span>
                </div>
                <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                  Pushing product categories and the product catalog deep down the page adds unnecessary scroll friction for intent-driven buyers who already trust the brand and came to purchase specific diagnostic devices (e.g. blood pressure monitors or nebulizers).
                </p>
                <div className="text-[11px] font-mono text-neutral-500">
                  <strong>UX Goal:</strong> Minimize time-to-product discovery while preserving trust signals without overwhelming the viewport.
                </div>
              </div>
            </div>

            {/* The Discussion & Compromise */}
            <div className="p-6 rounded-xl bg-black border border-neutral-800 space-y-4">
              <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">
                The Discussion, Reasoning &amp; Final Compromise
              </span>

              <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                Rather than treating this as a binary conflict between marketing and usability, I proposed an integrated information hierarchy:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-neutral-950 border border-neutral-800 rounded space-y-1">
                  <span className="text-white font-bold block">1. Compact Trust Strip</span>
                  <span className="text-neutral-400 text-[11px]">Condensed the large USP block into a high-impact, single-line trust bar below the hero fold.</span>
                </div>
                <div className="p-3 bg-neutral-950 border border-neutral-800 rounded space-y-1">
                  <span className="text-white font-bold block">2. Immediate Categories</span>
                  <span className="text-neutral-400 text-[11px]">Brought primary product categories into view without requiring extensive scrolling.</span>
                </div>
                <div className="p-3 bg-neutral-950 border border-neutral-800 rounded space-y-1">
                  <span className="text-white font-bold block">3. Mutual Success</span>
                  <span className="text-neutral-400 text-[11px]">Satisfied the business need for official brand credibility while keeping the shopping journey swift.</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-neutral-400">
                <strong>Key Takeaway:</strong> Professional product design requires understanding commercial drivers and finding structural compromises that uphold usability without ignoring stakeholder imperatives.
              </div>
            </div>
          </div>
        </section>

        {/* 8. Solution with Annotated Architecture */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              07 / The Solution
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Connected Shopping Architecture.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl">
              A cohesive, end-to-end design system connecting product discovery, technical evaluation, and transaction clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PLP & Navigation Solution Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-900 text-xs font-mono">
                <span className="text-white font-bold">01. Product Listing (PLP)</span>
                <span className="text-green-400 bg-green-950/60 border border-green-900/60 px-2 py-0.5 rounded text-[10px]">
                  Delivered Design
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                Structured product cards into a unified 4-point visual hierarchy: Clinical Model Title, Primary Health Metric Indicator, Clear Pricing with Warranty Badge, and One-Tap &ldquo;View Details&rdquo; action.
              </p>
              <div className="p-3 bg-black border border-neutral-900 rounded font-mono text-xs text-neutral-400">
                <strong>Why it mattered:</strong> Removed visual noise and let patients immediately locate the right monitor type without deciphering confusing technical jargon.
              </div>
            </div>

            {/* PDP & Cross-Selling Solution Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-900 text-xs font-mono">
                <span className="text-white font-bold">02. Product Detail Page (PDP)</span>
                <span className="text-green-400 bg-green-950/60 border border-green-900/60 px-2 py-0.5 rounded text-[10px]">
                  Delivered Design
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                Reorganized dense medical documentation into scannable accordion drawers (Specifications, Clinical Validation, In-the-Box Accessories) alongside a contextual cross-selling component for compatible cuffs and adapters.
              </p>
              <div className="p-3 bg-black border border-neutral-900 rounded font-mono text-xs text-neutral-400">
                <strong>Why it mattered:</strong> High-ticket medical buyers need instant clarity on compatibility; modular specifications reduced cognitive fatigue while driving basket completeness.
              </div>
            </div>

            {/* Cart & Shipping Solution Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-900 text-xs font-mono">
                <span className="text-white font-bold">03. Cart &amp; Shipping Continuity</span>
                <span className="text-green-400 bg-green-950/60 border border-green-900/60 px-2 py-0.5 rounded text-[10px]">
                  Delivered Design
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                Integrated an inline cart slide-over with persistent order totals, itemized tax breakdowns, and immediate pin-code delivery estimations before entering full checkout.
              </p>
              <div className="p-3 bg-black border border-neutral-900 rounded font-mono text-xs text-neutral-400">
                <strong>Why it mattered:</strong> Eliminates unexpected fee surprises at the final payment step, preserving trust and purchasing momentum.
              </div>
            </div>

            {/* Payment & Failure Recovery Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-900 text-xs font-mono">
                <span className="text-white font-bold">04. Payment &amp; Failure Recovery</span>
                <span className="text-green-400 bg-green-950/60 border border-green-900/60 px-2 py-0.5 rounded text-[10px]">
                  Delivered Design
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                Designed a simplified payment selection interface coupled with an active error recovery state machine that preserves cart contents and provides one-click retry instructions on gateway drops.
              </p>
              <div className="p-3 bg-black border border-neutral-900 rounded font-mono text-xs text-neutral-400">
                <strong>Why it mattered:</strong> A failed transaction shouldn’t punish the user by clearing their cart; actionable failure states prevent customer abandonment.
              </div>
            </div>
          </div>

          {/* Proposal Callout */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-400 flex items-center justify-between">
            <span><strong>Design Disclosure:</strong> The interactive side-by-side comparison drawer and dynamic cross-sell recommendation engine were formally delivered as design proposals and held for future engineering cycles.</span>
          </div>
        </section>

        {/* 9. Stakeholder Reviews & Iteration */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              08 / Stakeholder Reviews &amp; Iteration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              The 3-Level Review Workflow.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl">
              Documenting the collaborative review sequence that shaped and refined the design across regional teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">Review Tier 01</span>
              <h3 className="text-base font-bold text-white uppercase">Indian Team Review</h3>
              <p className="text-neutral-400 leading-relaxed">
                Focused on local e-commerce nuances: prominent regional payment methods (UPI, NetBanking, COD), pin-code based delivery time clarity, and local commercial offer visibility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">Review Tier 02</span>
              <h3 className="text-base font-bold text-white uppercase">US Team Review</h3>
              <p className="text-neutral-400 leading-relaxed">
                Reviewed broader digital e-commerce standards, cross-platform responsiveness, accessibility considerations, and visual hierarchy alignment across international brand touchpoints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">Review Tier 03</span>
              <h3 className="text-base font-bold text-white uppercase">Japan Design-System Team</h3>
              <p className="text-neutral-400 leading-relaxed">
                Audited global brand consistency: strict logo clearance, typography weight standards, color discipline, and ensuring the interface reflected OMRON’s clinical precision heritage.
              </p>
            </div>
          </div>

          {/* Feedback Influence Example */}
          <div className="p-6 rounded-2xl bg-black border border-neutral-800 space-y-3 font-mono text-xs">
            <span className="text-white font-bold uppercase tracking-wider block">
              How Review Feedback Influenced the Final Design:
            </span>
            <p className="text-neutral-300 leading-relaxed">
              Early iterations featured bolder decorative borders and heavier saturated accent buttons. Feedback from the Japan design-system team emphasized restraint: they guided me to strip away extraneous ornamentation, calibrate whitespace, and utilize refined monochrome contrast with purposeful blue accents. This feedback directly elevated the final interface into a polished, medical-grade experience.
            </p>
            <div className="text-[10px] text-neutral-500 pt-2 border-t border-neutral-900">
              <em>Note:</em> The review process is documented as the verified evaluation path; I do not claim global design-system adoption or ownership of OMRON’s central design system.
            </div>
          </div>
        </section>

        {/* 10. Outcome and Evidence (Transparent Retrospective) */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              09 / Outcome &amp; Evidence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Transparent Project Outcomes.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl">
              Distinguishing verified design deliveries and stakeholder reviews from unreleased business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {/* Category 1 */}
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                A. Design Delivery
              </span>
              <div className="text-white font-bold text-sm">Completed &amp; Handed Off</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Delivered full component specifications and responsive layouts across PLP, PDP, Cart, Shipping, Payment, and Edge States.
              </p>
            </div>

            {/* Category 2 */}
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                B. Stakeholder Outcome
              </span>
              <div className="text-white font-bold text-sm">Multi-Team Alignment</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Iterated across India, US, and Japan review tiers, achieving alignment between local commercial priorities and global brand governance.
              </p>
            </div>

            {/* Category 3 */}
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                C. Implementation Status
              </span>
              <div className="text-white font-bold text-sm">Live Storefront</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                The OMRON Brandshop operates at omronbrandshop.com. Specific production rollout nuances remain under client engineering discretion.
              </p>
            </div>

            {/* Category 4 */}
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                D. Business Telemetry
              </span>
              <div className="text-neutral-300 font-bold text-sm">Not Publicly Established</div>
              <p className="text-neutral-500 text-[11px] leading-relaxed">
                Formal post-launch conversion and abandonment telemetry was not released for this retrospective. No fabricated percentages are reported.
              </p>
            </div>
          </div>
        </section>

        {/* 11. Learnings, Limitations & Reflection */}
        <section className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              10 / Learnings &amp; Retrospective
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              What This Project Taught Me.
            </h2>
          </div>

          <div className="p-6 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-2">
                <span className="text-white font-bold block uppercase tracking-wider">
                  1. Clinical Trust Requires Restraint
                </span>
                <p className="text-neutral-400 leading-relaxed">
                  In healthcare commerce, visual flashiness detracts from credibility. Patients and caregivers need clarity, readability, and confidence above all else. Restrained minimalism communicates competence.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-white font-bold block uppercase tracking-wider">
                  2. Stakeholder Collaboration is Core UX
                </span>
                <p className="text-neutral-400 leading-relaxed">
                  Navigating multiple regional reviews (India, US, Japan) reinforced that design does not happen in isolation. Finding common ground between marketing desires and usability principles is the hallmark of real product design.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-white font-bold block uppercase tracking-wider">
                  3. Edge Cases Define the Experience
                </span>
                <p className="text-neutral-400 leading-relaxed">
                  Anyone can design a happy path. But designing for gateway dropouts, address ambiguities, and out-of-stock variations is what actually prevents customer panic and protects brand integrity.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-900 text-xs font-mono text-neutral-500 leading-relaxed">
              <strong>Retrospective Summary:</strong> This project shaped how I think as a Product Designer: balancing commercial drivers with empathetic user clarity, communicating transparently with stakeholders, and taking pride in rigorous execution rather than inflated claims.
            </div>
          </div>
        </section>

        {/* Up Next Project Navigation */}
        <nav className="pt-16 border-t border-neutral-800">
          <div className="p-8 sm:p-12 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-white transition-all group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Up Next — Case Study [{String(Number(projectNumber) % Number(totalProjects) + 1).padStart(2, "0")} / {totalProjects}]
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  {nextProject.client} • {nextProject.year}
                </p>
              </div>

              <Link
                href={`/work/${nextProject.slug}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-mono font-bold text-xs uppercase hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
}
