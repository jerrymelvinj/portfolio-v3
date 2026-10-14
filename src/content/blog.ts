export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  publishedAt: string;
  readTime: string;
  category: string;
  summary: string;
  tags: string[];
  externalUrl: string;
  coverImage?: string;
  platform: "Blogger" | "Medium" | "Substack";
}

export const blogPosts: BlogPost[] = [
  {
    id: "ux-of-deception-lenskart-bogo",
    slug: "the-ux-of-deception-unpacking",
    title: "The UX of Deception: Unpacking the Psychology Behind Lenskart’s BOGO Illusion",
    subtitle: "Cognitive Biases, Price Anchoring, and the Mechanics of Manufactured Urgency",
    publishedAt: "October 2026",
    readTime: "6 min read",
    category: "UX Teardown & CRO Psychology",
    summary:
      "When a deal looks too good to resist, is it genuinely saving you money, or is the interface influencing how you perceive value? An analytical breakdown of cognitive bias, dark UX patterns, price anchoring, and the psychology behind Lenskart's Buy-One-Get-One illusion.",
    tags: [
      "UX Teardown",
      "E-Commerce Psychology",
      "Dark Patterns",
      "Conversion Optimization",
      "Behavioral Economics",
    ],
    externalUrl:
      "https://jerrymelvinj.blogspot.com/2026/10/the-ux-of-deception-unpacking.html",
    coverImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuNsL_XvvOyyThdv8hkn4ffXZUJi14KyGJc6puKluirgLqaJDeiMitGR1y1fali4Cx2ByifwmRZaQ8xWM-Lh-3BDxgMdhrYecZyFLCeQvhWVKTr1h5-WkTNjGhQk7xjpZy23oaMJWkKoOwNgKMZN0FFRkzY73lKr_n1Xc9g-nemVYaZAQoED2LMMndFaw/w1200-h630-p-k-no-nu/image.png",
    platform: "Blogger",
  },
];
