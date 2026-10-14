import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jerry Melvin J — Product Designer & UI/UX Specialist",
    short_name: "Jerry Melvin J",
    description:
      "Product Designer based in Bengaluru specializing in high-conversion e-commerce checkout architecture, scalable design systems, and human-centered digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
