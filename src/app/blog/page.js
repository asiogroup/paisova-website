import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata = {
  title: "Insights & Blog | Paisova",
  description: "Read our latest market insights, investment strategies, and financial planning guides.",
};

const emojis = ['📈', '🏦', '📊', '💼', '🚀', '🛡️'];
const gradients = [
  ['#e8f0e8', '#d8e8d0'],
  ['#f0e8d8', '#f5e0c5'],
  ['#e0e8f0', '#d5dce8'],
  ['#f0f0e0', '#e8e8d0'],
  ['#e0f0e8', '#d0e8d8'],
  ['#f0e0e0', '#e8d0d0'],
];

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function getAllPosts() {
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
    .sort((a, b) => b.rawDate - a.rawDate);
}

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="tools-page-header">
        <h1>Insights & Blog</h1>
        <p>Stay informed with our latest articles and market analysis.</p>
      </div>

      <div className="container section">
        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <Link key={idx} href={`/blog/${post.filename}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="blog-card">
                <div className="blog-card-image">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${gradients[idx % 6][0]} 0%, ${gradients[idx % 6][1]} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                      {emojis[idx % 6]}
                    </div>
                  )}
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-tag">{post.tag}</span>
                    <span className="blog-card-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.snippet}</p>
                  <div className="blog-card-footer">
                    {post.date} · {post.author}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
