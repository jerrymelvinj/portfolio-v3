/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // 0. Canonical Domain Enforcement: Redirect apex to www (https://www.jerrymelvinj.com)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "jerrymelvinj.com",
          },
        ],
        destination: "https://www.jerrymelvinj.com/:path*",
        statusCode: 301,
      },

      // 1. E-Commerce Checkout Architecture
      {
        source: "/work/omron",
        destination: "/work/ecommerce-checkout-architecture",
        statusCode: 301,
      },
      {
        source: "/work/omron-checkout",
        destination: "/work/ecommerce-checkout-architecture",
        statusCode: 301,
      },
      {
        source: "/work/omron-checkout-architecture",
        destination: "/work/ecommerce-checkout-architecture",
        statusCode: 301,
      },
      {
        source: "/case-study/omron",
        destination: "/work/ecommerce-checkout-architecture",
        statusCode: 301,
      },
      {
        source: "/case-study/omron-checkout",
        destination: "/work/ecommerce-checkout-architecture",
        statusCode: 301,
      },
      {
        source: "/case-study/omron-checkout-architecture",
        destination: "/work/ecommerce-checkout-architecture",
        statusCode: 301,
      },
      {
        source: "/case-study/ecommerce-checkout-architecture",
        destination: "/work/ecommerce-checkout-architecture",
        statusCode: 301,
      },

      // 2. Multichannel Identity Architecture
      {
        source: "/work/omron-v2",
        destination: "/work/multichannel-identity-architecture",
        statusCode: 301,
      },
      {
        source: "/work/omron-identity",
        destination: "/work/multichannel-identity-architecture",
        statusCode: 301,
      },
      {
        source: "/work/omron-identity-architecture",
        destination: "/work/multichannel-identity-architecture",
        statusCode: 301,
      },
      {
        source: "/case-study/omron-v2",
        destination: "/work/multichannel-identity-architecture",
        statusCode: 301,
      },
      {
        source: "/case-study/omron-identity",
        destination: "/work/multichannel-identity-architecture",
        statusCode: 301,
      },
      {
        source: "/case-study/omron-identity-architecture",
        destination: "/work/multichannel-identity-architecture",
        statusCode: 301,
      },
      {
        source: "/case-study/multichannel-identity-architecture",
        destination: "/work/multichannel-identity-architecture",
        statusCode: 301,
      },

      // 3. Gulf E-Commerce Logistics UX
      {
        source: "/work/ane",
        destination: "/work/gulf-ecommerce-logistics-ux",
        statusCode: 301,
      },
      {
        source: "/work/gulf-logistics",
        destination: "/work/gulf-ecommerce-logistics-ux",
        statusCode: 301,
      },
      {
        source: "/work/gulf-logistics-address-architecture",
        destination: "/work/gulf-ecommerce-logistics-ux",
        statusCode: 301,
      },
      {
        source: "/case-study/ane",
        destination: "/work/gulf-ecommerce-logistics-ux",
        statusCode: 301,
      },
      {
        source: "/case-study/gulf-logistics",
        destination: "/work/gulf-ecommerce-logistics-ux",
        statusCode: 301,
      },
      {
        source: "/case-study/gulf-logistics-address-architecture",
        destination: "/work/gulf-ecommerce-logistics-ux",
        statusCode: 301,
      },
      {
        source: "/case-study/gulf-ecommerce-logistics-ux",
        destination: "/work/gulf-ecommerce-logistics-ux",
        statusCode: 301,
      },

      // 4. Event Decor Studio Experience
      {
        source: "/work/eden",
        destination: "/work/event-decor-studio-experience",
        statusCode: 301,
      },
      {
        source: "/work/eden-blooms",
        destination: "/work/event-decor-studio-experience",
        statusCode: 301,
      },
      {
        source: "/work/eden-and-blooms-studio",
        destination: "/work/event-decor-studio-experience",
        statusCode: 301,
      },
      {
        source: "/case-study/eden",
        destination: "/work/event-decor-studio-experience",
        statusCode: 301,
      },
      {
        source: "/case-study/eden-blooms",
        destination: "/work/event-decor-studio-experience",
        statusCode: 301,
      },
      {
        source: "/case-study/eden-and-blooms-studio",
        destination: "/work/event-decor-studio-experience",
        statusCode: 301,
      },
      {
        source: "/case-study/event-decor-studio-experience",
        destination: "/work/event-decor-studio-experience",
        statusCode: 301,
      },

      // Generic wildcard fallback mapping any other /case-study/:path* to /work/:path*
      {
        source: "/case-study/:slug*",
        destination: "/work/:slug*",
        statusCode: 301,
      },

      // 5. Blog & Editorial Aliases & External Post Redirects
      {
        source: "/writing",
        destination: "/blog",
        statusCode: 301,
      },
      {
        source: "/articles",
        destination: "/blog",
        statusCode: 301,
      },
      {
        source: "/blog/the-ux-of-deception-unpacking",
        destination:
          "https://jerrymelvinj.blogspot.com/2026/10/the-ux-of-deception-unpacking.html",
        statusCode: 301,
      },
      {
        source: "/blog/the-ux-of-deception-unpacking-lenskart-bogo",
        destination:
          "https://jerrymelvinj.blogspot.com/2026/10/the-ux-of-deception-unpacking.html",
        statusCode: 301,
      },
      {
        source: "/blog/lenskart-bogo-illusion",
        destination:
          "https://jerrymelvinj.blogspot.com/2026/10/the-ux-of-deception-unpacking.html",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
