import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jerrymelvinj.com"),
  title: {
    default: "Jerry Melvin J | Product Designer & UI/UX Specialist",
    template: "%s | Jerry Melvin J",
  },
  description:
    "Jerry Melvin J is a Product Designer & UI/UX Specialist based in Bengaluru, crafting human-centered digital experiences, e-commerce UX, and design systems.",
  keywords: [
    "Jerry Melvin J",
    "Product Designer",
    "UI UX Specialist",
    "Bengaluru Designer",
    "E-Commerce UX",
    "Design Systems",
    "Product Design Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jerry Melvin J | Product Designer & UI/UX Specialist",
    description:
      "Jerry Melvin J is a Product Designer & UI/UX Specialist based in Bengaluru, crafting human-centered digital experiences, e-commerce UX, and design systems.",
    url: "https://www.jerrymelvinj.com",
    siteName: "Jerry Melvin J Portfolio",
    images: [
      {
        url: "/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Jerry Melvin J - Product Designer & UI/UX Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerry Melvin J | Product Designer & UI/UX Specialist",
    description:
      "Jerry Melvin J is a Product Designer & UI/UX Specialist based in Bengaluru, crafting human-centered digital experiences, e-commerce UX, and design systems.",
    images: ["/Logo.svg"],
  },
  other: {
    "geo.position": "12.9716;77.5946",
    "geo.placename": "Bengaluru",
    "geo.region": "IN-KA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio_theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-foreground selection:bg-foreground selection:text-background`}>
        <ThemeProvider>
          <SmoothScroll>
            <JsonLd />
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
