import Link from "next/link";

export const metadata = {
  title: "Insights & Blog | Paisova",
  description: "Read our latest market insights, investment strategies, and financial planning guides.",
};

const blogPosts = [
  { title: "SIP vs Lumpsum: Which Strategy is Better in 2026?", snippet: "A detailed comparison to help you choose the right investment approach for your goals.", tag: "Mutual Funds", readTime: "6 min read", date: "June 28, 2026", author: "By Paisova Team" },
  { title: "The Power of Compounding: Start Early, Grow Steadily", snippet: "Understand how compounding can turn small amounts into significant wealth.", tag: "Investing Basics", readTime: "4 min read", date: "June 18, 2026", author: "By Paisova Team" },
  { title: "Market Outlook July 2026: Key Trends to Watch", snippet: "Insights into market trends, sectors, and global events shaping the coming month.", tag: "Market Insights", readTime: "5 min read", date: "June 27, 2026", author: "By Paisova Desk" },
  { title: "Understanding Mutual Fund Categories in India", snippet: "A beginner-friendly guide to large cap, mid cap, small cap, and hybrid funds.", tag: "Mutual Funds", readTime: "7 min read", date: "June 15, 2026", author: "By Paisova Team" },
  { title: "Pre-IPO Investing: Opportunities and Risks", snippet: "Everything you need to know before investing in unlisted shares.", tag: "Pre IPO", readTime: "5 min read", date: "June 10, 2026", author: "By Paisova Desk" },
  { title: "How to Build a Recession-Proof Portfolio", snippet: "Strategies to protect your investments during economic downturns.", tag: "Strategy", readTime: "6 min read", date: "June 5, 2026", author: "By Paisova Team" },
];

const emojis = ['📈', '🏦', '📊', '💼', '🚀', '🛡️'];
const gradients = [
  ['#e8f0e8', '#d8e8d0'],
  ['#f0e8d8', '#f5e0c5'],
  ['#e0e8f0', '#d5dce8'],
  ['#f0f0e0', '#e8e8d0'],
  ['#e0f0e8', '#d0e8d8'],
  ['#f0e0e0', '#e8d0d0'],
];

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="tools-page-header">
        <h1>Insights & Blog</h1>
        <p>Stay informed with our latest articles and market analysis.</p>
      </div>

      <div className="container section">
        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="blog-card">
              <div className="blog-card-image">
                <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${gradients[idx % 6][0]} 0%, ${gradients[idx % 6][1]} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                  {emojis[idx % 6]}
                </div>
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
          ))}
        </div>
      </div>
    </div>
  );
}
