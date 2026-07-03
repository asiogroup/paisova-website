import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from "../../../../tina/__generated__/client";

// Allow on-demand generation of new posts + periodic revalidation.
export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  const edges = postsResponse.data?.postConnection?.edges || [];
  return edges.map((edge) => ({
    filename: edge.node._sys.filename,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  try {
    const response = await client.queries.post({ relativePath: `${resolvedParams.filename}.mdx` });
    const post = response.data.post;
    return {
      title: `${post.title} | Paisova`,
      description: post.excerpt || "Market insights and investment strategies from Paisova.",
      openGraph: {
        title: post.title,
        description: post.excerpt || "Market insights and investment strategies from Paisova.",
        images: post.coverImage ? [post.coverImage] : [],
      },
    };
  } catch {
    return { title: "Blog | Paisova" };
  }
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const response = await client.queries.post({ relativePath: `${resolvedParams.filename}.mdx` });
  const post = response.data.post;

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : "";
  const author = post.author ? `By ${post.author}` : "By Paisova Team";
  const readTime = post.readTime ? ` · ${post.readTime} min read` : "";

  return (
    <div style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container section prose">
        {post.category && (
          <span className="blog-card-tag" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            {post.category}
          </span>
        )}

        <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', lineHeight: 1.2 }}>{post.title}</h1>

        <div style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          {formattedDate} {" · "} {author}{readTime}
        </div>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            style={{ width: '100%', borderRadius: '12px', marginBottom: '3rem', objectFit: 'cover' }}
          />
        )}

        {post.excerpt && (
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
        )}

        <div className="blog-content">
          <TinaMarkdown content={post.body} />
        </div>
      </div>
    </div>
  );
}
