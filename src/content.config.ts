// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content"; // 2. Import loader(s)
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/blog/" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishDate: z.coerce.date(),
    relatedPosts: z.array(reference("blog")),
    listing: z.enum(["unlisted", "published", "draft"]),
  }),
});

const theme = defineCollection({
  loader: file("src/data/themes.json"),
  schema: z.object({
    id: z.string(),
    light: z.object({
      primary: z.string(),
      background: z.string(),
      secondary: z.string(),
      tertiary: z.string(),
    }),
    dark: z.object({
      primary: z.string(),
      background: z.string(),
      secondary: z.string(),
      tertiary: z.string(),
    }),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, theme };
