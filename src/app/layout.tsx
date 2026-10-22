import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jerrymelvinj.com"),
  title: {
    default: "Jerry Melvin J | Product Designer & UI/UX Specialist",
    template: "%s | Jerry Melvin J",
  },
  description:
    "Jerry Melvin J is a Product Designer & UI/UX Specialist based in Bengaluru, crafting human-centered digital experiences, e-commerce checkout architecture, and scalable design systems.",
  keywords: [
    "Jerry Melvin J",
    "Product Designer",
    "UI/UX Specialist",
    "Senior Product Designer Bengaluru",
    "E-Commerce Checkout Architecture",
    "Conversion Rate Optimization (CRO)",
    "Design Systems Architecture",
    "Multi-Channel Authentication UX",
    "WCAG 2.1 AAA Accessibility",
    "Frontend UI Engineering",
    "Next.js Portfolio",
    "xhulia.com inspired portfolio",
  ],
  authors: [{ name: "Jerry Melvin J", url: "https://www.jerrymelvinj.com" }],
  creator: "Jerry Melvin J",
  publisher: "Jerry Melvin J",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.jerrymelvinj.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jerrymelvinj.com",
    siteName: "Jerry Melvin J — Product Designer Portfolio",
    title: "Jerry Melvin J — Product Designer & UI/UX Specialist",
    description:
      "Crafting high-conversion e-commerce checkout architecture, scalable design systems, and human-centered digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jerry Melvin J — Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerry Melvin J — Product Designer & UI/UX Specialist",
    description:
      "Crafting high-conversion e-commerce checkout architecture, scalable design systems, and human-centered digital experiences.",
    creator: "@jerrymelvinjm",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark bg-black`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-93L47S5CX6"
        />
        <script
          id="google-tag-init"
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-93L47S5CX6');
`,
          }}
        />
        <link rel="icon" href="/Logo.svg" type="image/svg+xml" sizes="any" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-black text-white font-sans antialiased flex flex-col justify-between selection:bg-white selection:text-black">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <Toaster position="bottom-right" theme="dark" />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
