import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Jerry Melvin J | Senior Product Designer & UI/UX Specialist",
  description:
    "Portfolio of Jerry Melvin J — Senior Product Designer specializing in e-commerce conversion optimization, design systems, and frontend UI engineering.",
  keywords: [
    "Jerry Melvin J",
    "Product Designer",
    "UI/UX Specialist",
    "Senior Product Designer Bengaluru",
    "E-Commerce UX Optimization",
    "Design Systems Architecture",
    "Authentication UX",
    "Frontend UI Engineering",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Jerry Melvin J", url: "https://jerrymelvin.dev" }],
  creator: "Jerry Melvin J",
  metadataBase: new URL("https://jerrymelvin.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jerrymelvin.dev",
    title: "Jerry Melvin J | Senior Product Designer & UI/UX Specialist",
    description:
      "Senior Product Designer specializing in e-commerce conversion optimization, design systems, and frontend UI engineering.",
    siteName: "Jerry Melvin J Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Jerry Melvin J — Senior Product Designer & UI/UX Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerry Melvin J | Senior Product Designer & UI/UX Specialist",
    description:
      "Senior Product Designer specializing in e-commerce conversion optimization, design systems, and frontend UI engineering.",
    creator: "@jerrymelvin",
    images: ["/og-preview.png"],
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
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased flex flex-col justify-between selection:bg-cyan-500/25 selection:text-cyan-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
