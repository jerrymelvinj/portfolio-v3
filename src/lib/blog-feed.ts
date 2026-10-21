import { blogPosts as fallbackPosts, BlogPost } from "@/content/blog";

export interface FeedBlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  publishedAt: string;
  readTime: string;
  category: string;
  summary: string;
  tags: string[];
  externalUrl: string;
  bloggerUrl?: string;
  mediumUrl?: string;
  coverImage?: string;
  platform: "Blogger" | "Medium" | "Blogger & Medium" | "Substack";
  timestamp?: number;
}

function cleanHtml(raw: string): string {
  return raw
    .replace(/<[^>]*>?/gm, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function formatTag(tag: string): string {
  const trimmed = tag.trim();
  if (!trimmed) return "";
  if (trimmed.toLowerCase() === "ux-teardown" || trimmed.toLowerCase() === "ux teardown") return "UX Teardown";
  if (trimmed.toLowerCase() === "cro") return "CRO";
  if (trimmed.toLowerCase() === "cx") return "CX";
  return trimmed
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// 1. Fetch from Blogger JSON Feed
async function fetchBloggerPosts(): Promise<FeedBlogPost[]> {
  try {
    const res = await fetch(
      "https://jerrymelvinj.blogspot.com/feeds/posts/default?alt=json",
      {
        next: { revalidate: 3600 }, // Cache and revalidate once every hour (ISR)
      }
    );

    if (!res.ok) return [];
    const data = await res.json();
    const entries = data.feed?.entry || [];

    return entries.map((entry: any, idx: number) => {
      const title = cleanHtml(entry.title?.$t || "Untitled Article");
      const altLink =
        entry.link?.find((l: any) => l.rel === "alternate")?.href || "";
      const published = entry.published?.$t || "";
      const categories: string[] = (entry.category || []).map(
        (c: any) => formatTag(c.term)
      );

      let coverImage = entry.media$thumbnail?.url || "";
      if (coverImage) {
        coverImage = coverImage.replace(
          /\/s[0-9]+(-c)?\//,
          "/w1200-h630-p-k-no-nu/"
        );
      }

      const rawContent = entry.content?.$t || entry.summary?.$t || "";
      const cleanedText = cleanHtml(rawContent);
      const summary =
        cleanedText.length > 280
          ? cleanedText.slice(0, 277) + "..."
          : cleanedText;

      const dateObj = published ? new Date(published) : new Date();
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

      return {
        id: `blogger-${idx}-${slugify(title)}`,
        slug: slugify(title),
        title,
        subtitle: categories[0]
          ? `Analysis & Insights on ${categories[0]}`
          : undefined,
        publishedAt: formattedDate,
        readTime: estimateReadTime(cleanedText),
        category: categories[0] || "UX Teardown",
        summary,
        tags:
          categories.length > 0
            ? categories
            : ["UX Design", "Product Thinking"],
        externalUrl: altLink,
        bloggerUrl: altLink,
        coverImage: coverImage || undefined,
        platform: "Blogger",
        timestamp: dateObj.getTime(),
      };
    });
  } catch (err) {
    console.error("Error fetching Blogger feed:", err);
    return [];
  }
}

// 2. Fetch from Medium RSS Feed
async function fetchMediumPosts(): Promise<FeedBlogPost[]> {
  try {
    const res = await fetch("https://medium.com/feed/@jerrymelvinj", {
      next: { revalidate: 3600 }, // Cache and revalidate once every hour (ISR)
    });

    if (!res.ok) return [];
    const xml = await res.text();
    const items: FeedBlogPost[] = [];

    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    let idx = 0;

    while ((match = itemRegex.exec(xml)) !== null) {
      const block = match[1];
      const titleMatch =
        block.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
        block.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = block.match(/<link>([\s\S]*?)<\/link>/);
      const pubDateMatch = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const contentMatch = block.match(
        /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/
      );

      const title = cleanHtml(titleMatch ? titleMatch[1] : "Untitled Story");
      const cleanLink = linkMatch ? linkMatch[1].split("?")[0].trim() : "";
      const rawContent = contentMatch ? contentMatch[1] : "";
      const cleanedText = cleanHtml(rawContent);

      // Extract first image from Medium content
      let coverImage = "";
      if (contentMatch) {
        const imgMatch = contentMatch[1].match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) coverImage = imgMatch[1];
      }

      // Extract categories
      const categories: string[] = [];
      const catRegex = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g;
      let catMatch;
      while ((catMatch = catRegex.exec(block)) !== null) {
        const formatted = formatTag(cleanHtml(catMatch[1]));
        if (formatted) categories.push(formatted);
      }

      const dateObj = pubDateMatch ? new Date(pubDateMatch[1]) : new Date();
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

      const summary =
        cleanedText.length > 280
          ? cleanedText.slice(0, 277) + "..."
          : cleanedText;

      items.push({
        id: `medium-${idx++}-${slugify(title)}`,
        slug: slugify(title),
        title,
        subtitle: categories[0]
          ? `Analysis & Insights on ${categories[0]}`
          : undefined,
        publishedAt: formattedDate,
        readTime: estimateReadTime(cleanedText),
        category: categories[0] || "Product Thinking",
        summary,
        tags:
          categories.length > 0
            ? categories
            : ["UX Writing", "Product Design"],
        externalUrl: cleanLink,
        mediumUrl: cleanLink,
        coverImage: coverImage || undefined,
        platform: "Medium",
        timestamp: dateObj.getTime(),
      });
    }

    return items;
  } catch (err) {
    console.error("Error fetching Medium feed:", err);
    return [];
  }
}

// 3. Main unified getter: fetches, deduplicates, and sorts
export async function getLiveBlogPosts(): Promise<FeedBlogPost[]> {
  try {
    const [bloggerPosts, mediumPosts] = await Promise.all([
      fetchBloggerPosts(),
      fetchMediumPosts(),
    ]);

    if (bloggerPosts.length === 0 && mediumPosts.length === 0) {
      // Fallback to static content if network is completely unavailable
      return fallbackPosts.map((p) => ({
        ...p,
        bloggerUrl: p.platform === "Blogger" ? p.externalUrl : undefined,
        mediumUrl: p.platform === "Medium" ? p.externalUrl : undefined,
        timestamp: new Date(p.publishedAt).getTime(),
      }));
    }

    // Deduplicate posts that exist on both Blogger and Medium
    const mergedMap = new Map<string, FeedBlogPost>();

    // Add Blogger posts first (preferred canonical destination)
    for (const post of bloggerPosts) {
      const key = normalizeTitle(post.title);
      mergedMap.set(key, post);
    }

    // Merge or add Medium posts
    for (const post of mediumPosts) {
      const key = normalizeTitle(post.title);
      if (mergedMap.has(key)) {
        const existing = mergedMap.get(key)!;
        existing.mediumUrl = post.mediumUrl;
        existing.platform = "Blogger & Medium";
        // If existing had no cover image, use Medium's
        if (!existing.coverImage && post.coverImage) {
          existing.coverImage = post.coverImage;
        }
        // Merge tags
        const combinedTags = Array.from(
          new Set([...existing.tags, ...post.tags])
        );
        existing.tags = combinedTags;
      } else {
        mergedMap.set(key, post);
      }
    }

    const postsArray = Array.from(mergedMap.values());
    postsArray.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    return postsArray;
  } catch (err) {
    console.error("Error unifying blog posts:", err);
    return fallbackPosts.map((p) => ({
      ...p,
      bloggerUrl: p.platform === "Blogger" ? p.externalUrl : undefined,
      mediumUrl: p.platform === "Medium" ? p.externalUrl : undefined,
      timestamp: new Date(p.publishedAt).getTime(),
    }));
  }
}
