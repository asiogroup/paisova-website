import fs from "fs";
import path from "path";
import matter from "gray-matter";
import client from "../../tina/__generated__/client";
import BlockPageClient from "../components/pages/BlockPageClient";

export const revalidate = 60;

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function getRecentPosts(limit = 3) {
  let files = [];
  try {
    files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data } = matter(raw);
      const dateVal = data.date ? new Date(data.date) : null;
      return {
        title: data.title || file.replace(/\.mdx$/, ""),
        snippet: data.excerpt || "Read this article for more insights on the topic.",
        tag: data.category || "Blog",
        readTime: data.readTime ? `${data.readTime} min read` : "5 min read",
        date: dateVal
          ? dateVal.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
          : "Recent",
        rawDate: dateVal ? dateVal.getTime() : 0,
        author: data.author ? `By ${data.author}` : "By Paisova Team",
        coverImage: data.coverImage || null,
        filename: file.replace(/\.mdx$/, ""),
      };
    })
    .sort((a, b) => b.rawDate - a.rawDate)
    .slice(0, limit);
}

export default async function Home() {
  // Fetch the data from TinaCMS for the homepage
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  const recentPosts = getRecentPosts(3);

  return (
    <BlockPageClient data={data} query={query} variables={variables} recentPosts={recentPosts} />
  );
}
