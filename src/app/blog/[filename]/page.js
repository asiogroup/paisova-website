import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readPost(filename) {
  const filePath = path.join(POSTS_DIR, `${filename}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
}

export function generateStaticParams() {
  let files = [];
  try {
    files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }
  return files.map((f) => ({ filename: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }) {
  const { filename } = await params;
  const post = readPost(filename);
  if (!post) return { title: "Blog | Paisova" };
  const desc = post.data.excerpt || "Market insights and investment strategies from Paisova.";
  return {
    title: `${post.data.title} | Paisova`,
    description: desc,
    openGraph: {
      title: post.data.title,
      description: desc,
      images: post.data.coverImage ? [post.data.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { filename } = await params;
  const post = readPost(filename);
  if (!post) notFound();

  const { data, content } = post;
  const dateVal = data.date ? new Date(data.date) : null;
  const formattedDate = dateVal
    ? dateVal.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "";
  const author = data.author ? `By ${data.author}` : "By Paisova Team";
  const readTime = data.readTime ? ` · ${data.readTime} min read` : "";

  return (
    <div style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container section prose" style={{ maxWidth: '1000px' }}>
        {data.category && (
          <span className="blog-card-tag" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            {data.category}
          </span>
        )}

        <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', lineHeight: 1.2 }}>{data.title}</h1>

        <div style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          {formattedDate} {" · "} {author}{readTime}
        </div>

        {data.coverImage && (
          <img
            src={data.coverImage}
            alt={data.title}
            style={{ width: '100%', borderRadius: '12px', marginBottom: '3rem', objectFit: 'cover' }}
          />
        )}

        {data.excerpt && (
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            {data.excerpt}
          </p>
        )}

        <div className="blog-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
