# Publishing blog posts to paisova.com/blog

Blog posts are plain **MDX files** in `content/posts/`. The filename becomes the URL:
`content/posts/my-post.mdx` → `https://www.paisova.com/blog/my-post`

Publishing is fully git-based: **add a file → commit → push to `main` → Vercel auto-deploys** (live in ~1–2 minutes). There is no separate CMS step required.

> The public blog reads these `.mdx` files directly from the repo (via `gray-matter` + `react-markdown`). It does **not** depend on TinaCMS Cloud, so schema/field changes will never break the build again — this was the cause of the earlier "schema mismatch" deploy failures.

## Two ways to publish

**A. From this Cowork project (fastest).** Ask Claude to "write and publish a post about X." Claude drafts the MDX, commits, and pushes to `main`. It's live shortly after.

**B. By hand.** Create a new `.mdx` file in `content/posts/`, then commit and push to `main` (see git commands at the bottom). The TinaCMS visual editor at `/admin` also still works for editing if its Tina Cloud env vars are configured, but it is optional — it is not required for the public site to build or publish.

## Post file template

Copy this into a new `content/posts/<slug>.mdx` file. Use a short, lowercase, hyphenated slug — that's the URL.

```mdx
---
title: "Your Headline Here"
date: 2026-07-03T09:00:00.000Z
excerpt: "One or two sentences shown on the blog card and used as the SEO meta description."
category: "Mutual Funds"   # Pre IPO | Mutual Funds | Stocks | Derivatives | Startups | Market Insights | Investing Basics
author: "Paisova Team"
readTime: 6                 # minutes; optional
# coverImage: "/uploads/your-image.jpg"   # optional — upload the image to public/uploads first
---

Your post body in **Markdown**. Use `##` for section headings, `-` for bullets,
`**bold**`, and `[links](https://example.com)`.
```

### Field notes
- `title`, `date` — required. Everything else is optional but recommended.
- `excerpt` — if omitted, the card shows generic placeholder text. Always fill it.
- `category` — must be one of the options above (drives the card tag).
- `readTime` — a number of minutes; if omitted, cards default to "5 min read".
- `coverImage` — optional. Put the file in `public/uploads/` and reference it as `/uploads/filename.jpg`.

## Compliance reminder
Avoid promising specific returns ("earn 18%"), use risk/horizon framing instead, and keep an educational disclaimer on advice-adjacent posts. This protects the brand under SEBI marketing norms.

## Manual git commands (if publishing outside Cowork)
```bash
git add content/posts/<slug>.mdx
git commit -m "post: <slug>"
git push origin main
```
