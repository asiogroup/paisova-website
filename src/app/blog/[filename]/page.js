import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from "../../../../tina/__generated__/client";

export default async function BlogPostPage({ params }) {
  const response = await client.queries.post({ relativePath: `${params.filename}.mdx` });
  const post = response.data.post;

  const formattedDate = post.date 
    ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : "";

  return (
    <div style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container section prose">
        <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', lineHeight: 1.2 }}>{post.title}</h1>
        
        <div style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.1rem' }}>
          {formattedDate} {post.author ? ` · ${post.author}` : " · By Paisova Team"}
          {post.tag && <span style={{ marginLeft: '1rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-light)', borderRadius: '4px', fontSize: '0.9rem' }}>{post.tag}</span>}
        </div>

        <div className="blog-content">
          <TinaMarkdown content={post.body} />
        </div>
      </div>
    </div>
  );
}
