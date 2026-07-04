"use client";

import { useTina } from "tinacms/dist/react";
import Link from "next/link";
import { TrendingUp, Rocket, ShieldCheck, Target, Search, BarChart, Briefcase, Calculator, PieChart, ShieldAlert, MoreHorizontal, ArrowRight, Eye, Users, Award, ChevronRight, MessageCircle } from "lucide-react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const iconMap = {
  TrendingUp, Rocket, ShieldCheck, Target, Search, BarChart,
  Briefcase, Calculator, PieChart, ShieldAlert, MoreHorizontal,
  Eye, Users, Award,
};

const toolsPreview = [
  { id: "sip", title: "SIP Calculator", description: "Plan your SIP and see how your wealth grows over time.", linkText: "Calculate →", emoji: "📊" },
  { id: "lumpsum", title: "Lumpsum Calculator", description: "See the future value of your lumpsum investments.", linkText: "Calculate →", emoji: "💰" },
  { id: "goal", title: "Goal Planner", description: "Plan for your goals and stay on track with confidence.", linkText: "Plan Now →", emoji: "🎯" },
];

const cardGradients = [['#e8f0e8', '#d8e8d0'], ['#f0e8d8', '#f5e0c5'], ['#e0e8f0', '#d5dce8']];
const cardEmojis = ['📈', '🏦', '📊'];

export default function BlockPageClient(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;
  const blocks = page.blocks || [];
  const recentPosts = props.recentPosts || [];

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.__typename) {
          case "PageBlocksHero":
            return (
              <section key={i} className="hero" data-tina-field={tinaField(block)}>
                <div className="container">
                  <div className="hero-content">
                    <h1 data-tina-field={tinaField(block, "headline")}>
                      {block.headline?.split('.').map((part, idx, arr) => (
                        <span key={idx}>{idx === 1 ? <><br/><span style={{ color: 'var(--primary)' }}>{part.trim()}</span></> : part.trim()}{idx < arr.length - 2 ? '.' : ''}</span>
                      ))}
                    </h1>
                    <p className="subtitle" data-tina-field={tinaField(block, "subheadline")}>
                      {block.subheadline}
                    </p>
                    <div className="hero-buttons">
                      {block.primaryButtonText && (
                        <Link href={block.primaryButtonLink || "/"} className="btn btn-primary" data-tina-field={tinaField(block, "primaryButtonText")}>
                          {block.primaryButtonText} <ArrowRight size={18} />
                        </Link>
                      )}
                      {block.secondaryButtonText && (
                        <Link href={block.secondaryButtonLink || "/"} className="btn btn-outline" data-tina-field={tinaField(block, "secondaryButtonText")}>
                          {block.secondaryButtonText}
                        </Link>
                      )}
                    </div>
                    <div className="hero-trust">
                      <div className="hero-trust-item">
                        <Users size={16} />
                        <span>Trusted by<br/><strong>8,000+ Investors</strong></span>
                      </div>
                      <div className="hero-trust-item">
                        <Eye size={16} />
                        <span>Expert Insights<br/><strong>Backed by Data</strong></span>
                      </div>
                      <div className="hero-trust-item">
                        <Award size={16} />
                        <span>Secure &<br/><strong>Transparent</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-visual">
                    <div className="hero-visual-card">
                      <p className="portfolio-value">Portfolio Value</p>
                      <p className="portfolio-amount">₹12,75,000</p>
                      <p className="portfolio-change">▲ 18.5% (1Y)</p>
                      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                        {['1W', '1M', '3M', '6M', '1Y', 'All'].map(p => (
                          <span key={p} style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 500, background: p === '1Y' ? 'var(--primary)' : 'transparent', color: p === '1Y' ? 'white' : 'var(--text-light)', cursor: 'pointer' }}>{p}</span>
                        ))}
                      </div>
                      <div style={{ marginTop: '1rem', height: '100px', background: 'linear-gradient(135deg, rgba(20,51,37,0.05) 0%, rgba(20,51,37,0.02) 100%)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '0 0.5rem' }}>
                        <svg viewBox="0 0 200 60" style={{ width: '100%', height: '60px' }}>
                          <defs>
                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#143325" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#143325" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,55 Q20,50 40,45 T80,30 T120,25 T160,15 T200,5" fill="none" stroke="#143325" strokeWidth="2" />
                          <path d="M0,55 Q20,50 40,45 T80,30 T120,25 T160,15 T200,5 L200,60 L0,60 Z" fill="url(#chartGrad)" />
                        </svg>
                      </div>
                      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'var(--primary)', borderRadius: '8px', color: 'white', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>✨</span>
                        <span>Your wealth today, your freedom tomorrow</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          case "PageBlocksStats":
            return (
              <section key={i} className="stats-section" data-tina-field={tinaField(block)}>
                <div className="container">
                  <div className="stats-row">
                    {(block.statItems || []).map((stat, idx) => (
                      <div key={idx} className="stat-item" data-tina-field={tinaField(stat)}>
                        <h2 data-tina-field={tinaField(stat, "value")}>{stat.value}</h2>
                        <p data-tina-field={tinaField(stat, "label")}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksFeatures":
            return (
              <section key={i} className="features-section" data-tina-field={tinaField(block)}>
                <div className="container">
                  <div className="features-grid">
                    {(block.featureItems || []).map((feature, idx) => {
                      const Icon = iconMap[feature.iconName] || TrendingUp;
                      return (
                        <div key={idx} className="feature-card" data-tina-field={tinaField(feature)}>
                          <div className="feature-icon">
                            <Icon size={24} />
                          </div>
                          <h3 data-tina-field={tinaField(feature, "title")}>{feature.title}</h3>
                          <p data-tina-field={tinaField(feature, "description")}>{feature.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksCategories":
            return (
              <section key={i} className="section" data-tina-field={tinaField(block)}>
                <div className="container">
                  <div className="section-header-row">
                    <h2 data-tina-field={tinaField(block, "title")}>{block.title}</h2>
                    {block.linkText && (
                      <Link href={block.linkUrl || "#"}>
                        {block.linkText} <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                  <div className="categories-grid">
                    {(block.items || []).map((item, idx) => {
                      const Icon = iconMap[item.iconName] || TrendingUp;
                      return (
                        <div key={idx} className="category-card" data-tina-field={tinaField(item)}>
                          <div className="category-icon">
                            <Icon size={24} />
                          </div>
                          <h3 data-tina-field={tinaField(item, "title")}>{item.title}</h3>
                          <p data-tina-field={tinaField(item, "description")}>{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksCta":
            return (
              <>
                {/* Tools Preview Section */}
                <section key={`tools-${i}`} className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
                  <div className="container">
                    <div className="section-header-row">
                      <h2>Powerful Tools for Smarter Decisions</h2>
                      <Link href="/tools">Explore all tools <ArrowRight size={16} /></Link>
                    </div>
                    <div className="tools-preview-grid">
                      {toolsPreview.map((tool) => (
                        <Link key={tool.id} href="/tools" className="tool-preview-card">
                          <div className="tool-preview-thumb">
                            <span>{tool.emoji}</span>
                          </div>
                          <div className="tool-preview-body">
                            <h3>{tool.title}</h3>
                            <p>{tool.description}</p>
                            <span className="tool-preview-link">{tool.linkText}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Blog Preview Section — latest 3 posts from the blog */}
                {recentPosts.length > 0 && (
                <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
                  <div className="container">
                    <div className="section-header-row">
                      <h2>Latest Insights</h2>
                      <Link href="/blog">View all articles <ArrowRight size={16} /></Link>
                    </div>
                    <div className="blog-grid">
                      {recentPosts.map((post, idx) => (
                        <Link key={post.filename || idx} href={`/blog/${post.filename}`} className="blog-card">
                          <div className="blog-card-image">
                            {post.coverImage ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                              <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${cardGradients[idx % 3][0]} 0%, ${cardGradients[idx % 3][1]} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                                {cardEmojis[idx % 3]}
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
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
                )}

                {/* CTA Capsule */}
                <section key={i} className="section" data-tina-field={tinaField(block)}>
                  <div className="container">
                    <div className="cta-capsule">
                      <div>
                        <h2 data-tina-field={tinaField(block, "title")}>{block.title}</h2>
                        <p data-tina-field={tinaField(block, "description")}>{block.description}</p>
                      </div>
                      <div style={{ flexShrink: 0 }}>
                        <a 
                          href="https://wa.me/919889885105?text=Hi%20Paisova,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-whatsapp"
                          style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}
                        >
                          <MessageCircle size={20} /> Message on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            );
          case "PageBlocksRichText":
            return (
              <section key={i} className="section" data-tina-field={tinaField(block)}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  {block.heading && <h2 data-tina-field={tinaField(block, "heading")} style={{ marginBottom: '2rem' }}>{block.heading}</h2>}
                  <div className="prose" data-tina-field={tinaField(block, "body")}>
                    <TinaMarkdown content={block.body} />
                  </div>
                </div>
              </section>
            );
          case "PageBlocksFaq":
            return (
              <section key={i} className="section section-light" data-tina-field={tinaField(block)}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <h2 data-tina-field={tinaField(block, "title")} style={{ textAlign: 'center', marginBottom: '3rem' }}>{block.title}</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {(block.questions || []).map((q, idx) => (
                      <div key={idx} className="faq-item" data-tina-field={tinaField(q)}>
                        <h3 data-tina-field={tinaField(q, "question")} style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{q.question}</h3>
                        <p data-tina-field={tinaField(q, "answer")} style={{ color: 'var(--text-body)' }}>{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksProcess":
            return (
              <section key={i} className="section" data-tina-field={tinaField(block)}>
                <div className="container">
                  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 data-tina-field={tinaField(block, "title")}>{block.title}</h2>
                    {block.subtitle && <p data-tina-field={tinaField(block, "subtitle")} style={{ color: 'var(--text-light)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>{block.subtitle}</p>}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {(block.steps || []).map((step, idx) => (
                      <div key={idx} className="process-step" data-tina-field={tinaField(step)}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', opacity: 0.15, marginBottom: '0.75rem' }}>{idx + 1}</div>
                        <h3 data-tina-field={tinaField(step, "title")} style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                        <p data-tina-field={tinaField(step, "description")} style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksServicesGrid":
            return (
              <section key={i} className="section section-light" data-tina-field={tinaField(block)}>
                <div className="container">
                  <h2 data-tina-field={tinaField(block, "title")} style={{ textAlign: 'center', marginBottom: '3rem' }}>{block.title}</h2>
                  <div className="services-grid">
                    {(block.services || []).map((service, idx) => {
                      const Icon = iconMap[service.iconName] || TrendingUp;
                      return (
                        <div key={idx} className="service-card" data-tina-field={tinaField(service)}>
                          <div className="service-icon">
                            <Icon size={28} />
                          </div>
                          <h3 data-tina-field={tinaField(service, "title")} style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                          <p data-tina-field={tinaField(service, "description")} style={{ color: 'var(--text-body)', marginBottom: '1.25rem', lineHeight: 1.6, fontSize: '0.9rem' }}>{service.description}</p>
                          {(service.tags && service.tags.length > 0) && (
                            <div style={{ marginTop: 'auto' }}>
                              <strong style={{ fontSize: '0.8rem', color: 'var(--text-light)', display: 'block', marginBottom: '0.5rem' }}>Ideal For:</strong>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                {service.tags.map((tag, tIdx) => (
                                  <span key={tIdx} className="service-tag">{tag}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          case "PageBlocksResourcesList":
            return (
              <section key={i} className="section" data-tina-field={tinaField(block)}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 data-tina-field={tinaField(block, "title")}>{block.title}</h2>
                    {block.subtitle && <p data-tina-field={tinaField(block, "subtitle")} style={{ color: 'var(--text-light)', marginTop: '1rem' }}>{block.subtitle}</p>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {(block.resources || []).map((resource, idx) => (
                      <Link key={idx} href={resource.url || "#"} data-tina-field={tinaField(resource)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: 'white', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s' }}>
                        <span style={{ fontWeight: 500, fontSize: '1rem' }}>{resource.label}</span>
                        <ArrowRight size={18} style={{ color: 'var(--primary)' }} />
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
